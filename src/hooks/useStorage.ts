import { useCallback, useState } from "react";

interface IUseStorageProps<T> {
  defaultValue: T;
  key: string;
}

export function useStorage<T>(props: IUseStorageProps<T>): [T, (state: T) => void] {
  const { defaultValue, key } = props;
  const [state, setState] = useState<T>(() => {
    try {
      const storage = localStorage.getItem(key);
      return storage ? JSON.parse(storage) as T : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const update = useCallback((state: T) => {
    setState(state);
    localStorage.setItem(key, JSON.stringify(state));
  }, [key]);

  return [state, update];
}
