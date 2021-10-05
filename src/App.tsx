import React from 'react';
import TaskList from './views/Tasks/TaskList';
import { useSelector } from 'react-redux';
import { selectTaskList } from './application/store/modules/task/selectors';
import useActionDispatcher from './hooks/useActionDipatcher';
import { fetchTaskList } from './application/store/modules/task/actions';

function App() {
  const { loading, data } = useSelector(selectTaskList);
  const getTaskList = useActionDispatcher(fetchTaskList);
  return (
    <div>
      <TaskList fetch={getTaskList} loading={loading} data={data} />
    </div>
  );
}

export default App;
