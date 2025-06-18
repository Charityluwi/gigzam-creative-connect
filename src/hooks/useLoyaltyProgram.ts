
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

export type LoyaltyTier = 'rising_light' | 'shining_talent' | 'creative_royalty' | 'galaxy_elite';

export interface LoyaltyTierInfo {
  name: string;
  minBookings: number;
  maxBookings: number | null;
  benefits: string[];
  color: string;
  bgColor: string;
}

export const loyaltyTiers: Record<LoyaltyTier, LoyaltyTierInfo> = {
  rising_light: {
    name: 'Rising Light',
    minBookings: 20,
    maxBookings: 30,
    benefits: [
      '5% discount on all bookings',
      'Priority customer support',
      'Monthly newsletter with exclusive tips'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  shining_talent: {
    name: 'Shining Talent',
    minBookings: 40,
    maxBookings: 50,
    benefits: [
      '10% discount on all bookings',
      'Early access to new creatives',
      'Free booking modifications',
      'Dedicated support line'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  creative_royalty: {
    name: 'Creative Royalty',
    minBookings: 70,
    maxBookings: 80,
    benefits: [
      '15% discount on all bookings',
      'VIP event invitations',
      'Free cancellation within 24 hours',
      'Monthly talent showcase access',
      'Yearly loyalty box'
    ],
    color: 'text-gold-600',
    bgColor: 'bg-yellow-50'
  },
  galaxy_elite: {
    name: 'Galaxy Elite',
    minBookings: 90,
    maxBookings: 100,
    benefits: [
      '20% discount on all bookings',
      'Exclusive access to premium creatives',
      'Chief Operating Officer direct line',
      'Yearly loyalty box',
      'Custom event planning assistance',
      'Lifetime membership benefits'
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
};

export const useLoyaltyProgram = (userId: string) => {
  // For now, we'll simulate booking count since the bookings table types aren't available yet
  // In production, this would query the actual bookings table
  const { data: bookingsCount, isLoading } = useQuery({
    queryKey: ['user-bookings-count', userId],
    queryFn: async () => {
      // Temporary simulation - in production this would be:
      // const { data, error } = await supabase
      //   .from('bookings')
      //   .select('id')
      //   .eq('user_id', userId)
      //   .eq('status', 'completed');
      
      // For demo purposes, return a simulated count based on user data
      // This should be replaced with actual booking data once types are updated
      const { data: profileData } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .single();
      
      if (!profileData) return 0;
      
      // Simulate different booking counts for demo
      const hash = userId.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0);
      
      return Math.abs(hash) % 100; // Return a number between 0-99 for demo
    },
    enabled: !!userId
  });

  const getCurrentTier = (bookings: number): LoyaltyTier => {
    if (bookings >= loyaltyTiers.galaxy_elite.minBookings) return 'galaxy_elite';
    if (bookings >= loyaltyTiers.creative_royalty.minBookings) return 'creative_royalty';
    if (bookings >= loyaltyTiers.shining_talent.minBookings) return 'shining_talent';
    if (bookings >= loyaltyTiers.rising_light.minBookings) return 'rising_light';
    return 'rising_light'; // Default to first tier
  };

  const getNextTier = (currentTier: LoyaltyTier): LoyaltyTier | null => {
    const tiers: LoyaltyTier[] = ['rising_light', 'shining_talent', 'creative_royalty', 'galaxy_elite'];
    const currentIndex = tiers.indexOf(currentTier);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  };

  const currentTier = getCurrentTier(bookingsCount || 0);
  const nextTier = getNextTier(currentTier);
  const currentTierInfo = loyaltyTiers[currentTier];
  const nextTierInfo = nextTier ? loyaltyTiers[nextTier] : null;

  const progressToNextTier = nextTierInfo 
    ? Math.min(((bookingsCount || 0) / nextTierInfo.minBookings) * 100, 100)
    : 100;

  return {
    bookingsCount: bookingsCount || 0,
    currentTier,
    currentTierInfo,
    nextTier,
    nextTierInfo,
    progressToNextTier,
    isLoading
  };
};
