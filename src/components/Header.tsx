
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onOpenSettings: () => void;
}

const Header = ({ onOpenSettings }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
          T
        </div>
        <h1 className="text-xl font-semibold">TaskMate</h1>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onOpenSettings}
        className="transition-transform duration-200 hover:scale-105"
        aria-label="Open settings"
      >
        <Menu size={20} />
      </Button>
    </header>
  );
};

export default Header;
