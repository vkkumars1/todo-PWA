
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
  onClearCompleted: () => void;
}

const SettingsPanel = ({
  isOpen,
  onClose,
  notificationsEnabled,
  onToggleNotifications,
  onClearCompleted
}: SettingsPanelProps) => {
  return (
    <div className={`settings-panel ${isOpen ? 'settings-open' : 'settings-closed'}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Settings</h2>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close settings">
          <X size={20} />
        </Button>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">NOTIFICATIONS</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Get reminders for pending tasks</p>
            </div>
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              onCheckedChange={onToggleNotifications}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">DATA MANAGEMENT</h3>
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={onClearCompleted}
          >
            Clear Completed Tasks
          </Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">ABOUT</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>TaskMate v1.0</p>
            <p>A simple to-do list app that works offline</p>
            <div className="pt-2">
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              {' · '}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
