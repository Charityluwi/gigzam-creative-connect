
-- Drop the existing constraint if it exists and recreate it with the correct values
ALTER TABLE public.availability DROP CONSTRAINT IF EXISTS availability_status_check;

-- Add the updated check constraint to limit status values to only 'available' and 'fully_booked'
ALTER TABLE public.availability ADD CONSTRAINT availability_status_check 
  CHECK (status IN ('available', 'fully_booked'));
