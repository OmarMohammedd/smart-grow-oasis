
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  data?: Record<string, string>;
}

const FeatureCard = ({ title, description, icon: Icon, className, data }: FeatureCardProps) => {
  return (
    <div className={cn("feature-card animate-fade-in-up", className)}>
      <div className="inline-flex items-center justify-center p-2 bg-garden-100 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-garden-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      
      {data && (
        <div className="mt-3 p-3 bg-garden-50 rounded-md">
          <h4 className="text-sm font-medium text-garden-700 mb-2">Live Data:</h4>
          <ul className="space-y-1">
            {Object.entries(data).map(([key, value]) => (
              <li key={key} className="text-sm flex justify-between">
                <span className="text-gray-600 capitalize">{key}:</span>
                <span className="font-medium text-garden-800">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
