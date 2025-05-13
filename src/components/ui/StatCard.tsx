import React from 'react';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  info?: string;
  link?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendDirection = 'neutral',
  info,
  link,
}) => {
  const getTrendColor = () => {
    switch (trendDirection) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getTrendIcon = () => {
    switch (trendDirection) {
      case 'up':
        return <TrendingUp size={16} className="mr-1" />;
      case 'down':
        return <TrendingDown size={16} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
          
          {trend && (
            <div className={`flex items-center mt-2 text-sm ${getTrendColor()}`}>
              {getTrendIcon()}
              <span>{trend}</span>
            </div>
          )}
          
          {info && (
            <p className="text-xs text-gray-500 mt-1">{info}</p>
          )}
        </div>
        
        <div className="p-3 bg-gray-100 rounded-full">
          {icon}
        </div>
      </div>
      
      {link && (
        <div className="mt-4 pt-4 border-t">
          <a href={link} className="text-primary text-sm flex items-center hover:underline">
            View Details
            <ArrowRight size={14} className="ml-1" />
          </a>
        </div>
      )}
    </div>
  );
};

export default StatCard;