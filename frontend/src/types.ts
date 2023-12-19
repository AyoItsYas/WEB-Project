interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  created_at: string;
  category_id: number;
  visits: number;
  total_purchases: number;
}

interface ProductReview {
  id: number;
  userId: number;
  productId: number;
  rating: number;
  description: string;
}

export type { Product, ProductReview };
