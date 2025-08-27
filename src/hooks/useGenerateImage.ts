import { useState, useRef } from 'react';
import { generateImageMock } from '../utils/api';
import type { Generation } from '../utils/api';

export const useGenerateImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const generate = async (data: { imageDataUrl: string; prompt: string; style: string }) => {
    setLoading(true);
    setError(null);
    abortControllerRef.current = new AbortController();
    let attempts = 0;

    const attemptGenerate = async (): Promise<Generation | null> => {
      attempts++;
      try {
        const result = await generateImageMock(data);
        setLoading(false);
        return result;
      } catch (err: unknown) {
        if (attempts < 3) {
          await new Promise(res => setTimeout(res, 500 * 2 ** attempts));
          return attemptGenerate();
        } else {
          if (err instanceof Error) setError(err.message);
          else setError('Unknown error occurred');
          setLoading(false);
          return null;
        }
      }
    };

    return attemptGenerate();
  };

  const abort = () => {
    abortControllerRef.current?.abort();
    setLoading(false);
    setError('Request aborted');
  };

  return { generate, abort, loading, error };
};
