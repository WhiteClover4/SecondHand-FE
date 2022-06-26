import { CategorySection } from '../section';

export default function SellerLayout({ children }) {
  return (
    <div className="flex flex-row gap-8">
      <CategorySection />
      <main className="w-full">{children}</main>
    </div>
  );
}
