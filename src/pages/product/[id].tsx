import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>

        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit
          consequuntur, velit quis facilis iure voluptatibus voluptatem, ratione
          molestias odio ut beatae laborum quod. Sequi modi nostrum quibusdam
          ratione quod.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
