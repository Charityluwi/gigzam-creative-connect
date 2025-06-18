
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Star, Trophy, Sparkles } from 'lucide-react';
import { useLoyaltyProgram } from '@/hooks/useLoyaltyProgram';
import LoadingWrapper from '@/components/LoadingWrapper';

interface LoyaltyStatusProps {
  userId: string;
  className?: string;
}

const LoyaltyStatus: React.FC<LoyaltyStatusProps> = ({ userId, className }) => {
  const { 
    bookingsCount, 
    currentTier, 
    currentTierInfo, 
    nextTier, 
    nextTierInfo, 
    progressToNextTier, 
    isLoading 
  } = useLoyaltyProgram(userId);

  const getTierIcon = () => {
    switch (currentTier) {
      case 'rising_light':
        return <Star className="h-5 w-5" />;
      case 'shining_talent':
        return <Sparkles className="h-5 w-5" />;
      case 'creative_royalty':
        return <Trophy className="h-5 w-5" />;
      case 'galaxy_elite':
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      default:
        return <Star className="h-5 w-5" />;
    }
  };

  return (
    <LoadingWrapper isLoading={isLoading} loadingText="Loading loyalty status...">
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getTierIcon()}
            Loyalty Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`p-4 rounded-lg ${currentTierInfo.bgColor}`}>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className={currentTierInfo.color}>
                {currentTierInfo.name}
              </Badge>
              <span className="text-sm font-medium">
                {bookingsCount} booking{bookingsCount !== 1 ? 's' : ''}
              </span>
            </div>
            
            {nextTierInfo && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to {nextTierInfo.name}</span>
                  <span>{nextTierInfo.minBookings - bookingsCount} more bookings needed</span>
                </div>
                <Progress value={progressToNextTier} className="h-2" />
              </div>
            )}
          </div>

          <div>
            <h4 className="font-medium mb-2">Your Benefits:</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {currentTierInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gigzam-purple mt-1">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </LoadingWrapper>
  );
};

export default LoyaltyStatus;
