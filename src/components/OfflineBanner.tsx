
import { WifiOff } from 'lucide-react';

interface OfflineBannerProps {
  isOffline: boolean;
}

const OfflineBanner = ({ isOffline }: OfflineBannerProps) => {
  if (!isOffline) return null;

  return (
    <div className={`offline-banner ${isOffline ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex items-center justify-center space-x-2">
        <WifiOff size={16} />
        <span>You're offline. Changes will be saved locally and synced when you're back online.</span>
      </div>
    </div>
  );
};

export default OfflineBanner;
