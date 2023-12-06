import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductCarousel.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import type { Product } from "@/types";

export default function ProductCarousel({
  id,
  heading,
  products,
}: {
  id?: string;
  heading: string;
  products: Product[];
}) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div id={id} className={styles.ProductCarousel}>
      <div className={styles.Railing}>
        <h2>{heading}</h2>
        <label>See More</label>
      </div>

      <div className={styles.ProductCarouselInner}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className={`embla__slide`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export const EmblaCarousel = () => {
//   return (
//         Slide 1</div>
//         <div className="embla__slide">Slide 2</div>
//         <div className="embla__slide">Slide 3</div>
//       </div>
//     </div>

// };);
