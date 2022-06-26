import { Navbar2 } from '../../components/navbar';
import { PrimaryAlert } from '../../components/alert';
import { Card, ProfileCard2 } from '../../components/card';
import { SellerLayout } from '../../components/layout';
import { FileInput } from '../../components/input';

export default function ProductsSeller(){
  return (
    <>
      <Navbar2/>
      <div className="fixed top-[100px] left-1/2 transform -translate-x-1/2">
        <PrimaryAlert>Produk berhasil diterbitkan.</PrimaryAlert>
      </div>
      <div className="px-[236px] space-y-6">
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <FileInput />
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </SellerLayout>
      </div>
    </>
  );
}
