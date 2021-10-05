import { useCallback } from 'react';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';

const useActionDispatcher = <AC extends (...params: never[]) => AnyAction>(actionCreator: AC) => {
  const dispatch = useDispatch();

  return useCallback(
    (...args: Parameters<AC>) => {
      dispatch(actionCreator(...args));
    },
    [actionCreator, dispatch],
  );
};

export default useActionDispatcher;
