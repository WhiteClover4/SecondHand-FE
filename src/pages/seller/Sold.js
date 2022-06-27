import { MainNavbar } from '../../components/navbars';
import { ProductCard, ProfileCard2 } from '../../components/cards';
import { SellerLayout } from '../../components/layouts';

export default function Sold() {
  return (
    <>
      <MainNavbar />
      <div className="space-y-6 px-[236px]">
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <div className="grid grid-cols-3 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </SellerLayout>
      </div>
    </>
  );
}
