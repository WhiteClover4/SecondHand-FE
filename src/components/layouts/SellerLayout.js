import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useProfile from '../../hooks/dependent/useProfile';
import { ProfileCard2 } from '../cards';
import { BoxIcon, ChevronRightIcon, DollarSignIcon, HeartIcon, MenuIcon } from '../icons';
import { ProfileCardSkeleton } from '../skeletons';
import { OPEN_NAVBAR } from '../../redux/slice/sideNavbar';

export default function SellerLayout({ active, children }) {
  const dispatch = useDispatch();
  const { getProfile, userData, loading } = useProfile();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div className="px-4 lg:space-y-6 lg:px-[236px]">
      <div className="mb-2 flex items-center gap-4">
        <button
          className="rounded-2xl bg-neutral-01 p-3 lg:hidden"
          onClick={() => dispatch(OPEN_NAVBAR())}
          type="button"
        >
          <MenuIcon className="w-6" />
        </button>
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
      </div>
      {!loading.getProfile ? <ProfileCard2 data={userData} /> : <ProfileCardSkeleton />}
      <div className="mt-6 flex flex-col lg:flex-row lg:gap-8">
        <div className="mb-6 flex h-fit w-fit flex-col gap-4 lg:mb-0 lg:gap-6 lg:rounded-2xl lg:bg-[#FFFFFF] lg:p-6 lg:shadow-high">
          <p className="hidden text-title-16 font-medium lg:block">Kategori</p>
          <div className="flex gap-4 lg:flex-col">
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
      className={`${
        active === category.no
          ? 'bg-primary-04 lg:border-primary-04 lg:bg-neutral-01'
          : 'bg-primary-01 lg:border-neutral-02 lg:bg-neutral-01'
      } flex gap-2 rounded-xl py-3 px-4 lg:rounded-none lg:border-b-[1px] lg:py-0 lg:px-0 lg:pb-4`}
      onClick={() => navigate(category.link)}
      type="button"
    >
      <category.icon
        className={`${
          active === category.no
            ? 'text-neutral-01 lg:text-primary-04'
            : 'text-neutral-04 lg:text-neutral-03'
        } h-5 w-5 lg:h-6 lg:w-6 `}
      />
      <p
        className={`${
          active === category.no
            ? 'text-neutral-01 lg:font-medium lg:text-primary-04'
            : 'text-neutral-04 lg:text-neutral-05'
        } text-body-14 lg:w-[156px] lg:text-start lg:text-title-16 `}
      >
        {category.name}
      </p>
      <ChevronRightIcon
        className={`${
          active === category.no ? 'text-primary-04' : 'text-neutral-02'
        } hidden h-6 w-6 lg:block`}
      />
    </button>
  );
};

const categories = [
  { no: 1, link: '/seller/products', name: 'Produk', icon: BoxIcon },
  { no: 2, link: '/seller/interested', name: 'Diminati', icon: HeartIcon },
  { no: 3, link: '/seller/sold', name: 'Terjual', icon: DollarSignIcon },
];
