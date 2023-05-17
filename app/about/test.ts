export const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

export const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

export const makeFullName = <
  T extends {
    firstName: string;
    lastName: string;
  }
>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

export interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

export type NumberTab = Tab<number>;
export type StringTab = Tab<string>;
