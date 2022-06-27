import { CategorySection } from '../sections';

export default function SellerLayout({ children }) {
  return (
    <div className="flex flex-row gap-8">
      <CategorySection />
      <main className="w-full">{children}</main>
    </div>
  );
}
