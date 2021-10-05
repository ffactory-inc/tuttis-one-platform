import React, { useEffect } from 'react';
import { ItemList, ListParams, Task } from '../../application/types';
import logo from '../../application/assets/images/logo.svg';
import './TaskList.scss';

type TaskListProps = {
  data: ItemList<Task> | null;
  fetch: (listParams: ListParams) => void;
  loading: boolean;
};

export default function TaskList({ data, fetch, loading }: TaskListProps) {
  useEffect(() => {
    fetch({});
  }, [fetch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
