/* eslint-disable indent */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainNavbar } from '../../components/navbars';
import { SellerLayout } from '../../components/layouts';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import useSellerProduct from '../../hooks/dependent/useSellerProduct';
import { ProductCard } from '../../components/cards';
import { ProductCardSkeleton } from '../../components/skeletons';
import { initialProduct } from '../../utils/initial';

export default function Interested() {
  const navigate = useNavigate();
  const { getWishlistProduct, wishlistProduct, loading } = useSellerProduct();

  function navigateToPreview(name, transaction_id) {
    const encodedName = encodeURIComponent(name);
    navigate(`/seller/transaction/${encodedName}?transaction_id=${transaction_id}`);
  }

  useEffect(() => {
    getWishlistProduct();
  }, [getWishlistProduct]);

  return (
    <AuthenticatedRoute>
      <MainNavbar />
      <SellerLayout active={2}>
        {!loading.getWishlistProduct && !wishlistProduct.length ? (
          <div className="flex flex-col items-center">
            <img className="mb-6" src="/img/img-not-interested.png" />
            <p className="w-[296px] text-center text-body-14 text-neutral-05">
              Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {!loading.getWishlistProduct
              ? wishlistProduct.map((product) => (
                  <ProductCard
                    key={product.id}
                    data={product}
                    navigate={() => navigateToPreview(product.name, product.transaction_id)}
                  />
                ))
              : dummiesProducts.map((el, i) => <ProductCardSkeleton key={i} />)}
          </div>
        )}
      </SellerLayout>
    </AuthenticatedRoute>
  );
}

const dummiesProducts = [];

for (let i = 1; i <= 6; i++) dummiesProducts.push(initialProduct);
