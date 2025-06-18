import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';

export type AvailabilityStatus = 'available' | 'fully_booked';

export interface AvailabilityData {
  id: string;
  user_id: string;
  date: string;
  status: AvailabilityStatus;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export const useAvailability = (userId: string) => {
  const queryClient = useQueryClient();

  const { data: availability, isLoading, error } = useQuery({
    queryKey: ['availability', userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('availability')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: true });

      if (error) throw error;
      return data as AvailabilityData[];
    },
  });

  const updateAvailabilityMutation = useMutation({
    mutationFn: async ({ date, status, notes }: { date: string; status: AvailabilityStatus; notes?: string }) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('availability')
        .upsert({
          user_id: user.id,
          date,
          status,
          notes: notes || null,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['availability', userId] });
      toast({
        title: "Availability updated",
        description: "Your availability has been successfully updated.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating availability",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteAvailabilityMutation = useMutation({
    mutationFn: async (date: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('availability')
        .delete()
        .eq('user_id', user.id)
        .eq('date', date);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['availability', userId] });
      toast({
        title: "Availability removed",
        description: "Availability status has been removed for the selected date.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error removing availability",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return {
    availability: availability || [],
    isLoading,
    error,
    updateAvailability: updateAvailabilityMutation.mutate,
    deleteAvailability: deleteAvailabilityMutation.mutate,
    isUpdating: updateAvailabilityMutation.isPending || deleteAvailabilityMutation.isPending,
  };
};
