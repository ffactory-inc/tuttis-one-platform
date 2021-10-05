import { DataSource } from './types';

export class MemoryService implements DataSource {
  private todos: any[] = [
    {
      title: 'Task 1',
      done: false,
    },
    {
      title: 'Task 2',
      done: false,
    },
  ];

  get(uri: string, params: Record<string, string | number> = {}): Promise<any> {
    return Promise.resolve({
      total_pages: 1,
      current_page: 1,
      data: this.todos,
    });
  }

  create(uri: string, dto: any, params?: Record<string, string | number>): Promise<any> {
    this.todos.push(dto);
    return Promise.resolve(dto);
  }

  delete(uri: string, params?: Record<string, string | number>): Promise<any> {
    return Promise.resolve('not implemented');
  }

  update(uri: string, dto: unknown, params?: Record<string, string | number>): Promise<any> {
    return Promise.resolve('not implemented');
  }
}
