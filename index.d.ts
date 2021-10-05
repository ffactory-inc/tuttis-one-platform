/* eslint-disable no-unused-vars */
type ValueOf<T> = T[keyof T];

type Constructor<T> = {
  prototype: T;
  new (...params: unknown[]): T;
};
