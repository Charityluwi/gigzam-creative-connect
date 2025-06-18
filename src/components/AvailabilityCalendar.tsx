
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { format, parseISO } from 'date-fns';
import { cn } from '@/lib/utils';
import { useAvailability, AvailabilityStatus } from '@/hooks/useAvailability';
import { CalendarCheck, CalendarX } from 'lucide-react';
import LoadingWrapper from '@/components/LoadingWrapper';

interface AvailabilityCalendarProps {
  userId: string;
  isOwner?: boolean;
  className?: string;
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  userId,
  isOwner = false,
  className
}) => {
  const { availability, isLoading, updateAvailability, deleteAvailability, isUpdating } = useAvailability(userId);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<AvailabilityStatus>('available');
  const [notes, setNotes] = useState('');

  const getAvailabilityForDate = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    return availability.find(item => item.date === dateString);
  };

  const getStatusColor = (status: AvailabilityStatus) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'fully_booked':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: AvailabilityStatus) => {
    switch (status) {
      case 'available':
        return <CalendarCheck className="h-3 w-3" />;
      case 'fully_booked':
        return <CalendarX className="h-3 w-3" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: AvailabilityStatus) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'fully_booked':
        return 'Fully Booked';
      default:
        return '';
    }
  };

  const handleDateClick = (date: Date) => {
    if (!isOwner) return;
    setSelectedDate(date);
    const existingAvailability = getAvailabilityForDate(date);
    if (existingAvailability) {
      setSelectedStatus(existingAvailability.status);
      setNotes(existingAvailability.notes || '');
    } else {
      setSelectedStatus('available');
      setNotes('');
    }
    setDialogOpen(true);
  };

  const handleSaveAvailability = () => {
    if (!selectedDate) return;

    const dateString = format(selectedDate, 'yyyy-MM-dd');
    updateAvailability({
      date: dateString,
      status: selectedStatus,
      notes: notes.trim() || undefined,
    });
    setDialogOpen(false);
  };

  const handleRemoveAvailability = () => {
    if (!selectedDate) return;
    const dateString = format(selectedDate, 'yyyy-MM-dd');
    deleteAvailability(dateString);
    setDialogOpen(false);
  };

  const modifiers = {
    available: availability
      .filter(item => item.status === 'available')
      .map(item => parseISO(item.date)),
    fully_booked: availability
      .filter(item => item.status === 'fully_booked')
      .map(item => parseISO(item.date)),
  };

  const modifiersClassNames = {
    available: 'bg-green-100 text-green-900 hover:bg-green-200',
    fully_booked: 'bg-red-100 text-red-900 hover:bg-red-200',
  };

  return (
    <LoadingWrapper isLoading={isLoading} loadingText="Loading calendar...">
      <div className={cn("space-y-4", className)}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {isOwner ? 'Manage Availability' : 'Availability Calendar'}
          </h3>
          {isOwner && (
            <div className="text-sm text-gray-600">
              Click on dates to set availability
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
            <CalendarCheck className="h-3 w-3 mr-1" />
            Available
          </Badge>
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
            <CalendarX className="h-3 w-3 mr-1" />
            Fully Booked
          </Badge>
        </div>

        <div className="border rounded-lg p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={isOwner ? handleDateClick : setSelectedDate}
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
            className={cn("pointer-events-auto", !isOwner && "cursor-default")}
            disabled={!isOwner ? undefined : { before: new Date() }}
          />
        </div>

        {/* Status Dialog for Owners */}
        {isOwner && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Set Availability for {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={selectedStatus} onValueChange={(value: AvailabilityStatus) => setSelectedStatus(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">
                        <div className="flex items-center">
                          <CalendarCheck className="h-4 w-4 mr-2 text-green-600" />
                          Available
                        </div>
                      </SelectItem>
                      <SelectItem value="fully_booked">
                        <div className="flex items-center">
                          <CalendarX className="h-4 w-4 mr-2 text-red-600" />
                          Fully Booked
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="notes">Notes (optional)</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add any additional notes about your availability..."
                    rows={3}
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  {getAvailabilityForDate(selectedDate!) && (
                    <Button 
                      variant="outline" 
                      onClick={handleRemoveAvailability}
                      disabled={isUpdating}
                    >
                      Remove
                    </Button>
                  )}
                  <Button onClick={handleSaveAvailability} disabled={isUpdating}>
                    {isUpdating ? 'Saving...' : 'Save'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Selected Date Info for Clients */}
        {!isOwner && selectedDate && (
          <div className="border rounded-lg p-4 bg-gray-50">
            <h4 className="font-medium mb-2">
              {format(selectedDate, 'MMMM d, yyyy')}
            </h4>
            {(() => {
              const dateAvailability = getAvailabilityForDate(selectedDate);
              if (!dateAvailability) {
                return <p className="text-gray-600">No availability information set</p>;
              }
              return (
                <div className="space-y-2">
                  <Badge 
                    variant="outline" 
                    className={getStatusColor(dateAvailability.status)}
                  >
                    {getStatusIcon(dateAvailability.status)}
                    <span className="ml-1">{getStatusLabel(dateAvailability.status)}</span>
                  </Badge>
                  {dateAvailability.notes && (
                    <p className="text-sm text-gray-600">{dateAvailability.notes}</p>
                  )}
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </LoadingWrapper>
  );
};

export default AvailabilityCalendar;
