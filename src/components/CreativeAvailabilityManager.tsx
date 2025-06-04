
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';
import { CalendarDays } from 'lucide-react';

interface CreativeAvailabilityManagerProps {
  userId: string;
  className?: string;
}

const CreativeAvailabilityManager: React.FC<CreativeAvailabilityManagerProps> = ({
  userId,
  className
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CalendarDays className="h-5 w-5 text-gigzam-purple" />
          <CardTitle>Availability Management</CardTitle>
        </div>
        <CardDescription>
          Manage your availability calendar to let clients know when you're free for bookings.
          Set your status as Available, Partially Booked, or Fully Booked for each day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AvailabilityCalendar userId={userId} isOwner={true} />
      </CardContent>
    </Card>
  );
};

export default CreativeAvailabilityManager;
