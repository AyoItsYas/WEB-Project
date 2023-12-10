"use client";

import Config from "./config";
import { APIResponse } from "./types";
import { useState, useEffect } from "react";

function useFetch<X>(url: string, params: Object = {}): X | null {
  let first = true;
  for (const [key, value] of Object.entries(params)) {
    if (typeof value !== "string") {
      throw new Error(`Invalid parameter type for ${key}`);
    }

    const connector = first ? "?" : "&";

    if (first) {
      first = false;
    }

    url += `${connector}${key}=${value}`;
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    fetchData();
  }, [url]);

  return data;
}

function useAPI<X>(url: string, params?: object): X | null | string {
  const data = useFetch<APIResponse>(`${Config.API_HOST}/${url}`, params);

  if (!data) {
    return null;
  }

  if (data?.error) {
    return data.error;
  }

  if (data?.message) {
    console.log(data.message);
  }

  return data.data;
}

export { useFetch, useAPI };
