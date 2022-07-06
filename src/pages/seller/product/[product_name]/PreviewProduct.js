import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainNavbar } from '../../../../components/navbars';
import { PrimaryButton, SecondaryButton } from '../../../../components/buttons';
import { ProfileCard2 } from '../../../../components/cards';
import useQuery from '../../../../hooks/independent/useQuery';
import useSellerProduct from '../../../../hooks/dependent/useSellerProduct';
import { ProductDetailSkeleton } from '../../../../components/skeletons';

export default function PreviewProduct() {
  const navigate = useNavigate();
  const { getSellerProduct, sellerProduct, loading } = useSellerProduct();
  const query = useQuery();
  const productId = query.get('product_id');

  function navigateToProductInput() {
    navigate(`/seller/product/${sellerProduct.name}?product_id=${sellerProduct.id}`);
  }

  useEffect(() => {
    getSellerProduct(productId);
  }, [getSellerProduct, productId]);

  return (
    <div>
      <MainNavbar />
      {loading.getSellerProduct ? (
        <ProductDetailSkeleton />
      ) : (
        <div className="flex flex-row justify-center gap-8 px-[236px] ">
          <div className="w-2/3 space-y-6 ">
            <div className="relative overflow-hidden">
              <img className="w-full" src="/img/img.png" />
            </div>
            <div className="space-y-4 rounded-2xl px-4 pb-[27px] pt-4 shadow-low">
              <p className="text-black text-body-14 font-medium">{sellerProduct.category}</p>
              <p className="text-body-14 text-neutral-03 ">{sellerProduct.description}</p>
            </div>
          </div>
          <div className="w-1/3 space-y-6">
            <div className="flex flex-col rounded-2xl px-4 pb-6 pt-4 shadow-high">
              <p className="text-black mb-2 text-title-16 font-medium">{sellerProduct.name}</p>
              <p className="mb-4 text-body-14 text-neutral-03">{sellerProduct.category}</p>
              <div className="text-black mb-6 text-title-16">
                Rp {sellerProduct.price.toLocaleString('id-ID')}
              </div>
              <PrimaryButton className="mb-[14px]">Terbitkan</PrimaryButton>
              <SecondaryButton onClick={navigateToProductInput} type="button">
                Edit
              </SecondaryButton>
            </div>
            <ProfileCard2 />
          </div>
        </div>
      )}
    </div>
  );
}
