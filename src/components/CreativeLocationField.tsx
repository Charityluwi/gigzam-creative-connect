
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

interface CreativeLocationFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const CreativeLocationField: React.FC<CreativeLocationFieldProps> = ({
  value,
  onChange,
  error,
  placeholder = "e.g., Lusaka Central, Kitwe City Center, Livingstone Tourist Area"
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="specific-location" className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        Specific Location
      </Label>
      <Input
        id="specific-location"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={error ? 'border-red-500' : ''}
      />
      <p className="text-sm text-gray-600">
        Be specific about your location to help clients find you when searching by area
      </p>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default CreativeLocationField;
