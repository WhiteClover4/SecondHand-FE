import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainNavbar } from '../../components/navbars';
import { SellerLayout } from '../../components/layouts';
import { FileInput } from '../../components/inputs';
import { ProductCard } from '../../components/cards';
import useSellerProduct from '../../hooks/dependent/useSellerProduct';

export default function Products() {
  const navigate = useNavigate();
  const { getSellerProducts, sellerProducts } = useSellerProduct();

  function navigateToPreview(name, id) {
    const encodedName = encodeURIComponent(name);
    navigate(`/seller/product/${encodedName}/preview?product_id=${id}`);
  }

  useEffect(() => {
    getSellerProducts();
  }, [getSellerProducts]);

  return (
    <>
      <MainNavbar />
      <SellerLayout active={1}>
        <div className="grid grid-cols-3 gap-6">
          <FileInput />
          {sellerProducts.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              navigate={() => navigateToPreview(product.name, product.id)}
            />
          ))}
        </div>
      </SellerLayout>
    </>
  );
}
