import { MainNavbar } from '../../components/navbars';
import { ProductCard } from '../../components/cards';
import { SellerLayout } from '../../components/layouts';
import { FileInput } from '../../components/inputs';

export default function Products() {
  return (
    <>
      <MainNavbar />
      <SellerLayout active={1}>
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
    </>
  );
}
