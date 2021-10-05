import React, { useEffect } from 'react';
import { ItemList, ListParams, Task } from '../../application/types';

type TaskListProps = {
  data: ItemList<Task> | null;
  fetch: (listParams: ListParams) => void;
  loading: boolean;
};

export default function TaskList({ data, fetch, loading }: TaskListProps) {
  useEffect(() => {
    fetch({});
  }, [fetch]);
  return <div>{data}</div>;
}
