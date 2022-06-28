import { useNavigate } from 'react-router-dom';
import { ProfileCard2 } from '../cards';
import { BoxIcon, ChevronRightIcon, DollarSignIcon, HeartIcon } from '../icons';

export default function SellerLayout({ active, children }) {
  return (
    <div className="space-y-6 px-[236px]">
      <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
      <ProfileCard2 />
      <div className="flex flex-row gap-8">
        <div className="flex h-fit w-fit flex-col gap-6 rounded-2xl bg-[#FFFFFF] p-6 shadow-high">
          <p className="text-title-16 font-medium">Kategori</p>
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <Category key={category.no} active={active} category={category} />
            ))}
          </div>
        </div>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

const Category = ({ active, category }) => {
  const navigate = useNavigate();
  return (
    <button
      className="flex gap-2 border-b-[1px] border-neutral-02 pb-4"
      onClick={() => navigate(category.link)}
      type="button"
    >
      <category.icon
        className={`${active === category.no ? 'text-primary-04' : 'text-neutral-03'} h-6 w-6 `}
      />
      <p
        className={`${
          active === category.no ? 'font-medium text-primary-04' : 'text-neutral-05'
        } w-[156px] text-start text-title-16 `}
      >
        {category.name}
      </p>
      <ChevronRightIcon
        className={`${active === category.no ? 'text-primary-04' : 'text-neutral-02'}h-6 w-6`}
      />
    </button>
  );
};

const categories = [
  { no: 1, link: '/seller/products', name: 'Semua Produk', icon: BoxIcon },
  { no: 2, link: '/seller/interested', name: 'Diminati', icon: HeartIcon },
  { no: 3, link: '/seller/sold', name: 'Terjual', icon: DollarSignIcon },
];
