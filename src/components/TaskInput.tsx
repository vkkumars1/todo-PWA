
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [taskText, setTaskText] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText('');
      
      toast({
        title: "Task added",
        description: "Your task was successfully added",
      });
    }
  };

  return (
    <div className="py-8 px-4 md:px-0">
      <div className="max-w-md mx-auto">
        <h2 className="text-sm font-medium text-blue-200/70 mb-3 font-display tracking-wide">ADD A NEW TASK</h2>
        <form onSubmit={handleSubmit} className="relative group">
          <Input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full bg-white/5 backdrop-blur-xl border-2 border-white/20 transition-all duration-300 focus:border-white/30 h-12 px-4 rounded-xl font-sans text-white placeholder:text-white/50"
            autoComplete="off"
          />
          <Button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg transition-all duration-300 opacity-0 scale-95 group-focus-within:opacity-100 group-focus-within:scale-100 group-hover:opacity-100 group-hover:scale-100 bg-blue-500 hover:bg-blue-600"
            disabled={!taskText.trim()}
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TaskInput;
