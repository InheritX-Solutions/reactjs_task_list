class StorageService {
  private storage: Storage

  constructor(storage: Storage = localStorage) {
    this.storage = storage
  }

  get<T>(key: string): T | null {
    try {
      const item = this.storage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error(`Error reading from storage (${key}):`, error)
      return null
    }
  }

  set<T>(key: string, value: T): void {
    try {
      this.storage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error writing to storage (${key}):`, error)
    }
  }

  remove(key: string): void {
    try {
      this.storage.removeItem(key)
    } catch (error) {
      console.error(`Error removing from storage (${key}):`, error)
    }
  }

  clear(): void {
    try {
      this.storage.clear()
    } catch (error) {
      console.error('Error clearing storage:', error)
    }
  }
}

export const storageService = new StorageService()
