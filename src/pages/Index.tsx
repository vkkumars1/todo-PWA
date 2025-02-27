
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import OfflineBanner from '@/components/OfflineBanner';
import SettingsPanel from '@/components/SettingsPanel';
import Footer from '@/components/Footer';
import { Task } from '@/types/Task';
import {
  getTasks,
  addTask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
  clearCompletedTasks
} from '@/utils/taskStorage';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const { toast } = useToast();

  // Initialize tasks from local storage
  useEffect(() => {
    setTasks(getTasks());
  }, []);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      toast({
        title: "You're back online",
        description: "Your tasks are now synced",
      });
    };

    const handleOffline = () => {
      setIsOffline(true);
      toast({
        title: "You're offline",
        description: "Tasks will be saved locally",
        variant: "destructive",
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [toast]);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  // Handle task actions
  const handleAddTask = (text: string) => {
    const newTask = addTask(text);
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleToggleCompletion = (id: string) => {
    const updatedTasks = toggleTaskCompletion(id);
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = deleteTask(id);
    setTasks(updatedTasks);
    
    toast({
      title: "Task deleted",
      description: "Your task was successfully deleted",
    });
  };

  const handleEditTask = (id: string, newText: string) => {
    const updatedTasks = editTask(id, newText);
    setTasks(updatedTasks);
    
    toast({
      title: "Task updated",
      description: "Your task was successfully updated",
    });
  };

  const handleClearCompleted = () => {
    const updatedTasks = clearCompletedTasks();
    setTasks(updatedTasks);
    setIsSettingsOpen(false);
    
    toast({
      title: "Completed tasks cleared",
      description: "All completed tasks have been removed",
    });
  };

  const handleToggleNotifications = () => {
    if (Notification.permission !== 'granted' && !notificationsEnabled) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setNotificationsEnabled(true);
          toast({
            title: "Notifications enabled",
            description: "You will now receive reminders for pending tasks",
          });
        } else {
          toast({
            title: "Notifications denied",
            description: "Please allow notifications in your browser settings",
            variant: "destructive",
          });
        }
      });
    } else {
      setNotificationsEnabled(!notificationsEnabled);
      toast({
        title: notificationsEnabled ? "Notifications disabled" : "Notifications enabled",
        description: notificationsEnabled 
          ? "You will no longer receive reminders" 
          : "You will now receive reminders for pending tasks",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />
      
      <main className="flex-1 px-4">
        <TaskInput onAddTask={handleAddTask} />
        
        <TaskList
          tasks={tasks}
          onToggleCompletion={handleToggleCompletion}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />
      </main>
      
      <Footer />
      
      <OfflineBanner isOffline={isOffline} />
      
      {/* Overlay for when settings are open */}
      {isSettingsOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsSettingsOpen(false)}
        />
      )}
      
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        notificationsEnabled={notificationsEnabled}
        onToggleNotifications={handleToggleNotifications}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default Index;
