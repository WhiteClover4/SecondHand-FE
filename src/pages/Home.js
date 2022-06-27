import { useState } from 'react';
import { PrimaryButton } from '../components/buttons';
import { MainNavbar } from '../components/navbars';
import { SearchIcon, PlusIcon } from '../components/icons';
import { ProductCard } from '../components/cards';
import { HomeCarousel } from '../components/carousels';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Semua');

  return (
    <>
      <MainNavbar />
      <main>
        <HomeCarousel />
        <section className="px-[136px]">
          <p className="mb-4 text-title-16 font-bold">Telusuri Kategori</p>
          <div className="flex flex-row gap-4">
            {tabs.map((tab, i) => (
              <Tab key={i} activeTab={activeTab} setActiveTab={setActiveTab} tab={tab} />
            ))}
          </div>
        </section>
        <section className="my-10 grid grid-cols-6 gap-4 px-[136px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, i) => (
            <ProductCard key={i} navigate={() => navigate('/product/product_name?id=123')} />
          ))}
        </section>
      </main>
      <SellButton />
    </>
  );
}

const Tab = ({ activeTab, tab }) => {
  const navigate = useNavigate();
  return (
    <PrimaryButton
      bgColor={activeTab === tab ? 'bg-primary-04' : 'bg-primary-01'}
      color={activeTab === tab ? 'text-neutral-01' : 'text-neutral-04'}
      onClick={() => navigate(`/?category=${tab}`)}
      type="button"
    >
      <div className="flex flex-row">
        <SearchIcon className="mr-2 w-5" />
        <p className="font-normal">{tab}</p>
      </div>
    </PrimaryButton>
  );
};

const SellButton = () => {
  return (
    <PrimaryButton className="fixed inset-x-0 bottom-7 mx-auto w-fit">
      <Link to="/seller/product/add">
        <div className="flex flex-row">
          <PlusIcon className="mr-2 w-5" />
          <p className="text-body-14 font-medium">Jual</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-[6px]">
          <div
            className="z-10 h-[22px] w-full bg-primary-03 ring"
            style={{ filter: 'blur(30px)' }}
          ></div>
        </div>
      </Link>
    </PrimaryButton>
  );
};

const tabs = ['Semua', 'Hobi', 'Kendaraan', 'Elektronik', 'Kesehatan'];
