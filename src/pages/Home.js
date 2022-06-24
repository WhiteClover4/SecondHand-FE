import { useState } from 'react';
import { PrimaryButton } from '../components/button';
import { Navbar } from '../components/navbar';
import { SearchIcon, PlusIcon } from '../components/icon';
import { Card } from '../components/card';
import { Carousel } from '../components/carousel';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Semua');

  return (
    <>
      <Navbar />
      <SellButton />
      <main>
        <Carousel />
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
            <Card key={i} />
          ))}
        </section>
      </main>
    </>
  );
}

const Tab = ({ activeTab, setActiveTab, tab }) => {
  return (
    <PrimaryButton
      bgColor={activeTab === tab ? 'bg-primary-04' : 'bg-primary-01'}
      color={activeTab === tab ? 'text-neutral-01' : 'text-neutral-04'}
      onClick={() => setActiveTab(tab)}
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
    <PrimaryButton className="fixed inset-x-0 bottom-5 mx-auto w-fit">
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
    </PrimaryButton>
  );
};

const tabs = ['Semua', 'Hobi', 'Kendaraan', 'Elektronik', 'Kesehatan'];
