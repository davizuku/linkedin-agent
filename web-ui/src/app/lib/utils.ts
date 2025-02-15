import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// @ref https://github.com/jherr/deepseek-start
export function streamAsyncIterator(reader: ReadableStreamDefaultReader<Uint8Array>) {
  const decoder = new TextDecoder("utf-8");
  return {
    async *[Symbol.asyncIterator]() {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) return;
          yield decoder.decode(value);
        }
      } finally {
        reader.releaseLock();
      }
    },
  };
}
