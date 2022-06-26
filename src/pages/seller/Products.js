import { Navbar2 } from '../../components/navbar';
import { Card, ProfileCard2 } from '../../components/card';
import { SellerLayout } from '../../components/layout';
import { FileInput } from '../../components/input';

export default function ProductsSeller() {
  return (
    <>
      <Navbar2 />
      <div className="mb-[26px] space-y-6 px-[236px]">
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <div className="grid grid-cols-3 gap-6">
            <FileInput />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </SellerLayout>
      </div>
    </>
  );
}
