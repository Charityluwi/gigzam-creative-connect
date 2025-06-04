
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  isLoading,
  children,
  loadingText = "Loading...",
  className
}) => {
  if (isLoading) {
    return (
      <div className={cn("flex items-center justify-center py-12", className)}>
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-gigzam-purple" />
          <p className="text-gray-600">{loadingText}</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
