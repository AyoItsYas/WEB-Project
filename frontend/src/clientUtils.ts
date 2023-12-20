"use client";

interface APIData {
  status: number;
  data: object | object[];
  message: string;
}

async function fetchAPI<X>(
  path: string,
  urlParams: object = {},
  options: object = {},
): Promise<X> {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  path += path.endsWith(".php") ? "" : ".php";

  let first = true;
  for (const [key, value] of Object.entries(urlParams)) {
    if (typeof value !== "string") {
      throw new Error(`Invalid parameter type for ${key}`);
    }

    const connector = first ? "?" : "&";

    if (first) {
      first = false;
    }

    path += `${connector}${key}=${value}`;
  }

  const isServer = typeof window === "undefined";

  let API_URL = window.location.origin + "/api";
  if (isServer) {
    API_URL = process.env.API_URL || API_URL;
  }

  const response = await fetch(`${API_URL}${path}`, {
    headers,
    ...options,
    cache: "no-store",
  });

  const data: APIData = await response.json();

  if (response.status >= 400) {
    throw new Error(data.message);
  }

  if (typeof data.data !== "object") {
    throw new Error("Invalid response data");
  }

  return data.data as X;
}

export { fetchAPI };
