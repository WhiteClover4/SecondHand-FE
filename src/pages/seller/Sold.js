import { Navbar2 } from '../../components/navbar';
import { Card, ProfileCard2 } from '../../components/card';
import { SellerLayout } from '../../components/layout';

export default function SoldSeller() {
  return (
    <>
      <Navbar2 />
      <div className="space-y-6 px-[236px]">
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </SellerLayout>
      </div>
    </>
  );
}
