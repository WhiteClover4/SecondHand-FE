import { useEffect } from 'react';
import { SimpleNavbar } from '../../components/navbars';
import { SellerLayout } from '../../components/layouts';
import { FileInput } from '../../components/inputs';
import { ProductCard } from '../../components/cards';
import useProduct from '../../hooks/dependent/useProduct';

export default function Products() {
  const { getSellerProducts, sellerProducts } = useProduct();

  useEffect(() => {
    getSellerProducts();
  }, [getSellerProducts]);

  return (
    <>
      <SimpleNavbar />
      <SellerLayout active={1}>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          <FileInput />
          {sellerProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </SellerLayout>
    </>
  );
}
