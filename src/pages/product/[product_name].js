import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainNavbar } from '../../components/navbars';
import { PrimaryButton } from '../../components/buttons';
import { ProfileCard } from '../../components/cards';
import { ProductDetailSkeleton } from '../../components/skeletons';
import useProduct from '../../hooks/dependent/useProduct';
import useQuery from '../../hooks/independent/useQuery';
import BidModal from '../../components/modals/BidModal';
import { ArrowLeftIcon } from '../../components/icons';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { getProduct, product, bidProduct, loading } = useProduct();
  const [iShowBidModal, setShowBidModal] = useState(false);

  const query = useQuery();
  const productId = query.get('product_id');

  function checkout() {
    if (!isAuthenticated) return navigate('/login');
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
        <div className="mb-20 flex-row justify-center gap-8 lg:mb-0 lg:flex lg:px-[236px]">
          <div className="lg:w-2/3 lg:space-y-6">
            <Swiper
              className="relative h-[300px] overflow-hidden lg:h-[436px] lg:rounded-2xl"
              modules={[Navigation]}
              navigation={true}
              spaceBetween={30}
            >
              <Link
                className="absolute top-[44px] left-4 z-10 overflow-hidden rounded-full lg:hidden"
                to={-1}
              >
                <ArrowLeftIcon className="h-6 w-6 bg-neutral-01 text-neutral-05" />
              </Link>
              {product.product_images.length ? (
                product.product_images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      alt="product-image"
                      className="h-full w-full object-cover lg:object-contain"
                      src={image.product_pictures}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img
                    alt="product-image"
                    className="h-full w-full object-cover lg:object-contain"
                    src="/img/no-product-image.png"
                  />
                </SwiperSlide>
              )}
            </Swiper>
            <div className="hidden space-y-4 rounded-2xl px-4 pb-[27px] pt-4 shadow-low lg:block">
              <p className="text-black text-body-14 font-medium">Deskripsi</p>
              <p className="text-body-14 text-neutral-03">{product.description}</p>
            </div>
          </div>
          <div className="relative -top-8 z-10 mx-4 space-y-4 lg:static lg:mx-0 lg:w-1/3 lg:space-y-6">
            <div className="flex flex-col rounded-2xl bg-neutral-01 px-4 pt-4 shadow-low lg:pb-6 lg:shadow-high">
              <p className="text-black mb-1 text-body-14 font-medium lg:mb-2 lg:text-title-16">
                {product.name}
              </p>
              <p className="mb-2 text-body-10 text-neutral-03 lg:mb-4 lg:text-body-14">
                {product.category}
              </p>
              <p className="text-black mb-6 text-body-14 lg:text-title-16">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
              <PrimaryButton className="hidden lg:inline-block" onClick={checkout} type="button">
                Saya tertarik dan ingin nego
              </PrimaryButton>
            </div>
            <ProfileCard data={product.seller} />
            <div className="space-y-4 rounded-2xl bg-neutral-01 px-4 pb-[27px] pt-4 shadow-low lg:hidden">
              <p className="text-black text-body-14 font-medium">Deskripsi</p>
              <p className="text-body-14 text-neutral-03">{product.description}</p>
            </div>
          </div>

          <PrimaryButton
            className="fixed inset-x-0 bottom-6 z-20 mx-4 lg:hidden"
            onClick={checkout}
            type="button"
          >
            Saya tertarik dan ingin nego
          </PrimaryButton>
        </div>
      ) : (
        <ProductDetailSkeleton />
      )}
    </>
  );
}
