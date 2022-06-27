import { MainNavbar } from '../../components/navbars';
import { ProductCard, ProfileCard2 } from '../../components/cards';
import { SellerLayout } from '../../components/layouts';
import { FileInput } from '../../components/inputs';

export default function Products() {
  return (
    <>
      <MainNavbar />
      <div className="mb-[26px] space-y-6 px-[236px]">
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <div className="grid grid-cols-3 gap-6">
            <FileInput />
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
