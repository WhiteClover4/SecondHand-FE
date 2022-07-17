/* eslint-disable indent */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainNavbar } from '../../components/navbars';
import { ProductCard } from '../../components/cards';
import { SellerLayout } from '../../components/layouts';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import useTransaction from '../../hooks/dependent/useTransaction';
import { ProductCardSkeleton } from '../../components/skeletons';
import { initialProduct } from '../../utils/initial';

export default function Sold() {
  const navigate = useNavigate();
  const { getAllHistory, loading, history } = useTransaction();

  function navigateToPreview(name, transaction_id) {
    const encodedName = encodeURIComponent(name);
    navigate(`/seller/transaction/${encodedName}?transaction_id=${transaction_id}`);
  }

  useEffect(() => {
    getAllHistory();
  }, [getAllHistory]);
  return (
    <AuthenticatedRoute>
      <MainNavbar />
      <SellerLayout active={3}>
        <div className="grid grid-cols-3 gap-6">
          {!loading.getAllHistory
            ? history.map((product) => (
                <ProductCard
                  key={product.id}
                  data={product}
                  navigate={() => navigateToPreview(product.name, product.transaction_id)}
                />
              ))
            : dummiesProducts.map((el, i) => <ProductCardSkeleton key={i} />)}
        </div>
      </SellerLayout>
    </AuthenticatedRoute>
  );
}

const dummiesProducts = [];

for (let i = 1; i <= 6; i++) dummiesProducts.push(initialProduct);
