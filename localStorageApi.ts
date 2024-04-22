import { StorageSerializableValue } from "./index.ts";

export class LocalStorage extends Storage {
  static set<V extends StorageSerializableValue = StorageSerializableValue>(
    key: string,
    value: V,
  ): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      return;
    }
  }

  static get<R>(key: string): R | null {
    try {
      const data = localStorage.getItem(key);
      return data && JSON.parse(data);
    } catch {
      return null;
    }
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
