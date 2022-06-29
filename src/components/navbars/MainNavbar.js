import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BellIcon, ListIcon, SignInIcon, UserIcon } from '../icons';
import { PrimaryButton } from '../buttons';
import { SearchInput } from '../inputs';

export default function MainNavbar({ search, setSearch }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-10 mb-8 flex h-[84px] items-center justify-between bg-neutral-01 px-[136px] shadow-high">
      <div className="flex flex-row items-center space-x-6">
        <Link className="inline-block h-[34px] w-[100px] bg-primary-05" to="/" />
        <SearchInput onChange={(e) => setSearch(e.target.value)} value={search} />
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
        <PrimaryButton onClick={() => navigate('/login')} type="button">
          <div className="flex flex-row">
            <SignInIcon className="mr-2 w-5" />
            <p>Masuk</p>
          </div>
        </PrimaryButton>
      )}
    </header>
  );
}
