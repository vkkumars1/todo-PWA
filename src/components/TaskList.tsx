
import { useState } from 'react';
import { Task } from '@/types/Task';
import TaskItem from './TaskItem';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TaskList = ({ tasks, onToggleCompletion, onDelete, onEdit }: TaskListProps) => {
  const [showCompleted, setShowCompleted] = useState(true);
  
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="max-w-md mx-auto">
      {pendingTasks.length === 0 && completedTasks.length === 0 ? (
        <div className="py-8 text-center text-muted-foreground fade-in-motion">
          <p>Your task list is empty</p>
          <p className="text-sm">Add a new task to get started</p>
        </div>
      ) : (
        <>
          {pendingTasks.length > 0 && (
            <div className="mb-6 fade-in-motion">
              <h2 className="text-sm font-medium text-muted-foreground mb-2 px-4">
                PENDING ({pendingTasks.length})
              </h2>
              <div className="space-y-1">
                {pendingTasks.map(task => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleCompletion={onToggleCompletion}
                    onDelete={onDelete}
                    onEdit={onEdit}
                  />
                ))}
              </div>
            </div>
          )}

          {completedTasks.length > 0 && (
            <div className="fade-in-motion">
              <div 
                className="flex items-center justify-between px-4 mb-2 cursor-pointer"
                onClick={() => setShowCompleted(!showCompleted)}
              >
                <h2 className="text-sm font-medium text-muted-foreground">
                  COMPLETED ({completedTasks.length})
                </h2>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  {showCompleted ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Button>
              </div>
              
              {showCompleted && (
                <div className="space-y-1">
                  {completedTasks.map(task => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggleCompletion={onToggleCompletion}
                      onDelete={onDelete}
                      onEdit={onEdit}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TaskList;
