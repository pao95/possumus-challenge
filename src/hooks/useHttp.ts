import { useState, useCallback } from 'react';
import { apiClient } from '../config/apiClient';

export interface HttpClient {
  request<T>(url: string, options?: RequestInit): Promise<T>;
}

export interface apiRequest {
  url: string; // URL de la solicitud
  options: RequestInit; // Opciones para RequestInit, como método y cuerpo
}

export function useHttp(client: HttpClient = apiClient) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = useCallback(
    async <T>(request: apiRequest): Promise<T | null> => {
      setLoading(true);
      setError(null);
      try {
        const data = await client.request<T>(request.url, request.options);
        return data;
      } catch (err) {
        setError(err as Error);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [client],
  );

  return { sendRequest, loading, error };
}
