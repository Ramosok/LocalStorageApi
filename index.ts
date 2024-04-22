export type StorageSerializablePrimitiveValue =
  | string
  | number
  | boolean
  | null;

export type StorageSerializableValue =
  | StorageSerializablePrimitiveValue
  | StorageSerializablePrimitiveValue[]
  | Record<string, StorageSerializablePrimitiveValue>
  | { [key: string]: unknown; toJSON(): StorageSerializablePrimitiveValue };

export interface StorageSerializableObject {
  [key: string]: StorageSerializablePrimitiveValue;
}

export abstract class Storage {
  static getKey(namespace: string, key: string): string {
    if (namespace) {
      return `[[${namespace}]]-${key}`;
    }

    return key;
  }

  abstract get<R>(key: string): R | null;

  abstract set(key: string, value: StorageSerializableValue): void;

  abstract remove(key: string): void;

  abstract clear(): void;
}
