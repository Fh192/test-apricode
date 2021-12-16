import { autorun, makeAutoObservable, toJS } from 'mobx';
import { IStatistics, ITask } from '../types';

class TodoList {
  statistics: IStatistics = JSON.parse(
    localStorage.getItem('statistics') ||
      JSON.stringify({ created: 0, completed: 0, deleted: 0 })
  );
  tasks: ITask[] = JSON.parse(localStorage.getItem('tasks') || '[]');

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    autorun(() => {
      localStorage.setItem('tasks', JSON.stringify(toJS(this.tasks)));
      localStorage.setItem('statistics', JSON.stringify(toJS(this.statistics)));
    });
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  get activeTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  addTask(title: string) {
    const task: ITask = { title, completed: false, id: String(Date.now()) };

    this.tasks.unshift(task);
    this.statistics.created += 1;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.statistics.deleted += 1;
  }

  toggleTask(id: string) {
    this.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;

        if (task.completed) {
          this.statistics.completed += 1;
        } else {
          if (this.statistics.completed > 0) {
            this.statistics.completed -= 1;
          }
        }
      }

      return task;
    });
  }

  resetStatistics() {
    this.statistics = { created: 0, completed: 0, deleted: 0 };
  }
}

export const todoList = new TodoList();
