import { Item } from './main';

export interface Task extends Item {
  title: string;
  done: boolean;
}
