
import { useState } from 'react';
import { Plus } from 'lucide-react';
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
    <div className="py-6 px-4 md:px-0">
      <div className="max-w-md mx-auto">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">ADD A NEW TASK</h2>
        <form onSubmit={handleSubmit} className="task-input-container">
          <Plus className="input-icon" size={16} />
          <Input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="What needs to be done?"
            className="task-input"
            autoComplete="off"
          />
          <Button 
            type="submit" 
            className="ml-2 transition-all duration-200 hover:scale-105"
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
