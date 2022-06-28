import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/buttons';
import { MainNavbar } from '../components/navbars';
import { SearchIcon, PlusIcon } from '../components/icons';
import { ProductCard } from '../components/cards';
import { SimpleCarousel } from '../components/carousels';
import useQuery from '../hooks/independent/useQuery';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <MainNavbar />
      <main>
        <SimpleCarousel />
        <section className="px-[136px]">
          <p className="mb-4 text-title-16 font-bold">Telusuri Kategori</p>
          <div className="flex flex-row gap-4">
            {tabs.map((tab, i) => (
              <Tab key={i} tab={tab} />
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

const Tab = ({ tab }) => {
  const navigate = useNavigate();
  const query = useQuery();
  const category = query.get('category') || 'Semua';

  return (
    <PrimaryButton
      bgColor={category === tab ? 'bg-primary-04' : 'bg-primary-01'}
      color={category === tab ? 'text-neutral-01' : 'text-neutral-04'}
      onClick={() => navigate(`${tab !== 'Semua' ? `?category=${tab}` : '/'}`)}
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
  const navigate = useNavigate();

  return (
    <PrimaryButton
      className="fixed inset-x-0 bottom-7 mx-auto w-fit"
      onClick={() => navigate('/seller/product/add')}
      type="button"
    >
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
