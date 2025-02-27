
import { Task } from '@/types/Task';

// Local storage key
const TASKS_STORAGE_KEY = 'taskmate_tasks';

// Get tasks from local storage
export const getTasks = (): Task[] => {
  const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
  if (tasksJson) {
    try {
      return JSON.parse(tasksJson);
    } catch (e) {
      console.error('Error parsing tasks from localStorage', e);
      return [];
    }
  }
  return [];
};

// Save tasks to local storage
export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

// Add a new task
export const addTask = (text: string): Task => {
  const tasks = getTasks();
  const newTask: Task = {
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now()
  };
  
  saveTasks([newTask, ...tasks]);
  return newTask;
};

// Toggle task completion
export const toggleTaskCompletion = (id: string): Task[] => {
  const tasks = getTasks();
  const updatedTasks = tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  
  saveTasks(updatedTasks);
  return updatedTasks;
};

// Delete a task
export const deleteTask = (id: string): Task[] => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);
  
  saveTasks(updatedTasks);
  return updatedTasks;
};

// Edit a task
export const editTask = (id: string, newText: string): Task[] => {
  const tasks = getTasks();
  const updatedTasks = tasks.map(task => 
    task.id === id ? { ...task, text: newText } : task
  );
  
  saveTasks(updatedTasks);
  return updatedTasks;
};

// Clear completed tasks
export const clearCompletedTasks = (): Task[] => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => !task.completed);
  
  saveTasks(updatedTasks);
  return updatedTasks;
};
