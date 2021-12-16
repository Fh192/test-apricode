export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export type ITasksFilter = 'All' | 'Active' | 'Completed';

export interface IStatistics {
  created: 0;
  completed: 0;
  deleted: 0;
}
