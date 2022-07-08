import { SimpleNavbar } from '../../components/navbars';
import { ProductCard } from '../../components/cards';
import { SellerLayout } from '../../components/layouts';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

export default function Sold() {
  return (
    <AuthenticatedRoute>
      <SimpleNavbar />
      <SellerLayout active={3}>
        <div className="grid grid-cols-3 gap-6">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </SellerLayout>
    </AuthenticatedRoute>
  );
}
