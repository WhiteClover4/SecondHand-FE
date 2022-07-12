/* eslint-disable indent */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/buttons';
import { MainNavbar } from '../components/navbars';
import { SearchIcon, PlusIcon } from '../components/icons';
import { ProductCard } from '../components/cards';
import { SimpleCarousel } from '../components/carousels';
import { ProductCardSkeleton } from '../components/skeletons';
import useQuery from '../hooks/independent/useQuery';
import useProduct from '../hooks/dependent/useProduct';
import categories from '../_content/categories.json';
import { initialProduct } from '../utils/initial';

export default function Home() {
  const navigate = useNavigate();
  const { getProducts, products, loading } = useProduct();

  const query = useQuery();
  const category = query.get('category');
  const search = query.get('search');

  function navigateToDetail(name, id) {
    const encodedName = encodeURIComponent(name);
    navigate(`/product/${encodedName}?product_id=${id}`);
  }

  useEffect(() => {
    getProducts(search, category);
  }, [getProducts, category, search]);

  return (
    <>
      <MainNavbar />
      <div>
        <SimpleCarousel />
        <main className="relative bottom-[114px] z-10 lg:static">
          <section className="overflow-hidden pl-4 lg:px-[136px]">
            <p className="mb-4 text-body-14 font-medium lg:text-title-16 lg:font-bold">
              Telusuri Kategori
            </p>
            <div className="hide-scrollbar flex flex-row gap-4 overflow-x-auto">
              <Tab tab="Semua" />
              {categories.map((category, i) => (
                <Tab key={i} tab={category.name} />
              ))}
            </div>
          </section>
          <section className="my-8 grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:my-10 lg:grid-cols-6 lg:px-[136px]">
            {!loading.getProducts
              ? products.map((product) => (
                  <ProductCard
                    key={product.id}
                    data={product}
                    navigate={() => navigateToDetail(product.name, product.id)}
                  />
                ))
              : dummiesProducts.map((el, i) => <ProductCardSkeleton key={i} />)}
          </section>
        </main>
      </div>
      <SellButton />
    </>
  );
}

const Tab = ({ tab }) => {
  const navigate = useNavigate();
  const query = useQuery();
  const category = query.get('category') || 'Semua';
  const search = query.get('search');

  function navigateQuerySearch(tab) {
    if (tab === 'Semua') return navigate('/');
    navigate(`/?category=${tab}&search=${search || ''}`);
  }

  return (
    <PrimaryButton
      bgColor={category === tab ? 'bg-primary-04' : 'bg-primary-01'}
      color={category === tab ? 'text-neutral-01' : 'text-neutral-04'}
      data-testid={'tab-' + tab}
      onClick={() => navigateQuerySearch(tab)}
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
      className="fixed inset-x-0 bottom-7 z-10 mx-auto w-fit"
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

const dummiesProducts = [];

for (let i = 1; i <= 12; i++) dummiesProducts.push(initialProduct);
