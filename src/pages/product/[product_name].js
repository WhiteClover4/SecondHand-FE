import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainNavbar } from '../../components/navbars';
import { PrimaryButton } from '../../components/buttons';
import { ProfileCard } from '../../components/cards';
import { ProductDetailSkeleton } from '../../components/skeletons';
import useProduct from '../../hooks/dependent/useProduct';
import useQuery from '../../hooks/independent/useQuery';
import BidModal from '../../components/modals/BidModal';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { getProduct, product, bidProduct, loading } = useProduct();
  const [iShowBidModal, setShowBidModal] = useState(false);

  const query = useQuery();
  const productId = query.get('product_id');

  function checkout() {
    if (!isAuthenticated) navigate('/login');
    setShowBidModal(true);
  }

  useEffect(() => {
    getProduct(productId);
  }, [getProduct, productId]);

  return (
    <>
      {iShowBidModal && (
        <BidModal
          bidProduct={(bidPrice) => bidProduct(productId, bidPrice, () => setShowBidModal(false))}
          data={product}
          loading={loading.bidProduct}
          setShow={setShowBidModal}
        />
      )}
      <MainNavbar />
      {!loading.getProduct ? (
        <div className="flex flex-row justify-center gap-8 px-[236px] ">
          <div className="w-2/3 space-y-6 ">
            <div className="relative h-[436px] overflow-hidden rounded-2xl">
              <img
                alt="product-image"
                className="h-full w-full object-contain"
                src={
                  !product.product_images.length
                    ? '/img/no-product-image.png'
                    : product.product_images[0].product_pictures
                }
              />
            </div>
            <div className="space-y-4 rounded-2xl px-4 pb-[27px] pt-4 shadow-low">
              <p className="text-black text-body-14 font-medium">Deskripsi</p>
              <p className="text-body-14 text-neutral-03">{product.description}</p>
            </div>
          </div>
          <div className="w-1/3 space-y-6">
            <div className="flex flex-col rounded-2xl px-4 pb-6 pt-4 shadow-high">
              <p className="text-black mb-2 text-title-16 font-medium">{product.name}</p>
              <p className="mb-4 text-body-14 text-neutral-03">{product.category}</p>
              <div className="text-black mb-6 text-title-16">
                Rp {product.price.toLocaleString('id-ID')}
              </div>
              <PrimaryButton onClick={checkout} type="button">
                Saya tertarik dan ingin nego
              </PrimaryButton>
            </div>
            <ProfileCard data={product.seller} />
          </div>
        </div>
      ) : (
        <ProductDetailSkeleton />
      )}
    </>
  );
}
