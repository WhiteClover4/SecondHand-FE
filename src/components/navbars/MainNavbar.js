import { PrimaryButton } from '../buttons';
import { SearchInput } from '../inputs';
import { BellIcon, HomeLogoIcon, ListIcon, SignInIcon, UserIcon } from '../icons';
import { useSelector } from 'react-redux';

export default function MainNavbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-10 mb-8 flex h-[84px] items-center justify-between bg-neutral-01 px-[136px] shadow-high">
      <div className="flex flex-row items-center">
        <HomeLogoIcon className="mr-6 h-[34px] w-[100px] text-primary-05" />
        <SearchInput />
      </div>
      {isAuthenticated ? (
        <div className="flex flex-row gap-6">
          <button>
            <ListIcon className="mr-2 w-6" />
          </button>
          <button>
            <BellIcon className="mr-2 w-6" />
          </button>
          <button>
            <UserIcon className="mr-2 w-6" />
          </button>
        </div>
      ) : (
        <PrimaryButton>
          <div className="flex flex-row">
            <SignInIcon className="mr-2 w-5" />
            <p>Masuk</p>
          </div>
        </PrimaryButton>
      )}
    </header>
  );
}
