
import { useState } from 'react';
import { Check, Pencil, Trash, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Task } from '@/types/Task';

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TaskItem = ({ task, onToggleCompletion, onDelete, onEdit }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditSubmit = () => {
    if (editedText.trim() && editedText !== task.text) {
      onEdit(task.id, editedText);
    } else {
      setEditedText(task.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEditSubmit();
    } else if (e.key === 'Escape') {
      setEditedText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'task-completed' : ''} scale-in-motion`}>
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full border h-5 w-5 min-w-5 p-0 ${
          task.completed ? 'bg-primary border-primary' : 'border-input'
        }`}
        onClick={() => onToggleCompletion(task.id)}
        aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {task.completed && <Check size={12} className="text-primary-foreground" />}
      </Button>

      {isEditing ? (
        <Input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyDown={handleKeyDown}
          className="flex-1"
          autoFocus
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}

      <div className="task-actions">
        {isEditing ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setEditedText(task.text);
              setIsEditing(false);
            }}
            className="h-8 w-8"
            aria-label="Cancel editing"
          >
            <X size={16} />
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(true)}
              className="h-8 w-8"
              aria-label="Edit task"
            >
              <Pencil size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(task.id)}
              className="h-8 w-8 text-destructive"
              aria-label="Delete task"
            >
              <Trash size={16} />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
