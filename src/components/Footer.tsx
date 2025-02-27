
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Footer = () => {
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Update UI to show the install button
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    // Show the install prompt
    if (deferredPrompt) {
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Clear the saved prompt since it can't be used again
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    }
  };

  return (
    <footer className="px-6 py-4 border-t mt-auto">
      <div className="max-w-md mx-auto flex flex-col items-center justify-center space-y-3">
        {isInstallable && (
          <Button 
            onClick={handleInstallClick}
            className="w-full flex items-center justify-center space-x-2"
          >
            <Download size={16} />
            <span>Add to Home Screen</span>
          </Button>
        )}
        <div className="text-xs text-muted-foreground">
          <span>© 2023 TaskMate. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
