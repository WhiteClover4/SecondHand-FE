import { PrimaryButton } from '../buttons';
import { SearchInput } from '../inputs';
import { BellIcon, ListIcon, SignInIcon, UserIcon } from '../icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MainNavbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-10 mb-8 flex h-[84px] items-center justify-between bg-neutral-01 px-[136px] shadow-high">
      <div className="flex flex-row items-center space-x-6">
        <Link className="inline-block h-[34px] w-[100px] bg-primary-05" to="/" />
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
          <Link className="flex flex-row" to="/login">
            <SignInIcon className="mr-2 w-5" />
            <p>Masuk</p>
          </Link>
        </PrimaryButton>
      )}
    </header>
  );
}
