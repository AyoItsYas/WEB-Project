interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface APIResponse {
  status: number;
  data?: Array<any> | any;
  error?: string;
  message?: string;
}

export type { Product, APIResponse };
