"use client";

import Config from './config';
import { APIResponse } from './types';
import { useState, useEffect } from 'react';

function processResponse(response: Response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

function useFetch<X>(url: string): X | null {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return data;
}

function useAPI<X>(url: string): X | null {
  const data = useFetch<APIResponse>(`${Config.API_HOST}/${url}`);

  if (!data) {
    return null;
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  if (!data?.message) {
    console.log(data.message);
  }

  return data.data;
}

export { useFetch, useAPI };