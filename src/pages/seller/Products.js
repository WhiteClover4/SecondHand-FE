import { Navbar2 } from '../../components/navbar';
import { Card, ProfileCard2 } from '../../components/card';
import { SellerLayout } from '../../components/layout';
import { FileInput } from '../../components/input';

export default function ProductsSeller() {
  return (
    <>
      <Navbar2 />
      <div className="space-y-6 px-[236px] mb-[26px]">
        <p className="text-heading-20 font-bold text-black">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <FileInput />
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
