/* eslint-disable indent */
import { MainNavbar } from '../../components/navbars';
import { SellerLayout } from '../../components/layouts';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import { useEffect } from 'react';
import useSellerProduct from '../../hooks/dependent/useSellerProduct';
import { ProductCard } from '../../components/cards';
import { ProductCardSkeleton } from '../../components/skeletons';
import { useNavigate } from 'react-router-dom';

export default function Interested() {
  const navigate = useNavigate();
  const { getWishlistProduct, wishlistProduct, loading } = useSellerProduct();

  function navigateToPreview(name, id) {
    const encodedName = encodeURIComponent(name);
    navigate(`/seller/product/${encodedName}/preview?product_id=${id}`);
  }

  useEffect(() => {
    getWishlistProduct();
  }, [getWishlistProduct]);

  return (
    <AuthenticatedRoute>
      <MainNavbar />
      <SellerLayout active={2}>
        {wishlistProduct.length ? (
          <div className="grid grid-cols-3 gap-6">
            {!loading.getWishlistProduct
              ? wishlistProduct.map((product) => (
                  <ProductCard
                    key={product.id}
                    data={product}
                    navigate={() => navigateToPreview(product.name, product.id)}
                  />
                ))
              : dummiesProducts.map((el, i) => <ProductCardSkeleton key={i} />)}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img className="mb-6" src="/img/img-not-interested.png" />
            <p className="w-[296px] text-center text-body-14 text-neutral-05">
              Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
            </p>
          </div>
        )}
      </SellerLayout>
    </AuthenticatedRoute>
  );
}
