import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimpleNavbar } from '../../components/navbars';
import { SellerLayout } from '../../components/layouts';
import { FileInput } from '../../components/inputs';
import { ProductCard } from '../../components/cards';
import useSellerProduct from '../../hooks/dependent/useSellerProduct';
import { initialProduct } from '../../utils/initial';
import ProductCardSkeleton from '../../components/skeletons/ProductCardSkeleton';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

export default function Products() {
  const navigate = useNavigate();
  const { getSellerProducts, sellerProducts, loading } = useSellerProduct();

  function navigateToPreview(name, id) {
    const encodedName = encodeURIComponent(name);
    navigate(`/seller/product/${encodedName}/preview?product_id=${id}`);
  }

  useEffect(() => {
    getSellerProducts();
  }, [getSellerProducts]);

  return (
    <AuthenticatedRoute>
      <SimpleNavbar />
      <SellerLayout active={1}>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {!loading.getSellerProducts ? (
            <>
              <FileInput />
              {sellerProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  data={product}
                  navigate={() => navigateToPreview(product.name, product.id)}
                />
              ))}
            </>
          ) : (
            dummiesProducts.map((el, i) => <ProductCardSkeleton key={i} />)
          )}
        </div>
      </SellerLayout>
    </AuthenticatedRoute>
  );
}

const dummiesProducts = [];

for (let i = 1; i <= 6; i++) dummiesProducts.push(initialProduct);
