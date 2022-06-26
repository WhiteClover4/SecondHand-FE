import { CategorySection } from '../section';

export default function SellerLayout({ children }) {
  return (
    <div className="flex flex-row gap-8">
      <CategorySection />
      <div className="grid w-full grid-cols-3 gap-6">{children}</div>
    </div>
  );
}
