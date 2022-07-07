import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BellIcon, ListIcon, SignInIcon, UserIcon, MenuIcon } from '../icons';
import { PrimaryButton } from '../buttons';
import { SearchInput } from '../inputs';
import useOutsideClick from '../../hooks/independent/useOutsideClick';
import useAuth from '../../hooks/dependent/useAuth';
import useQuery from '../../hooks/independent/useQuery';

export default function MainNavbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isDropdownShown, setDropdownShown] = useState(false);

  const query = useQuery();
  const category = query.get('category');
  const search = query.get('search');

  const dropdownRef = useRef();
  useOutsideClick(dropdownRef, () => {
    if (isDropdownShown) setDropdownShown(false);
  });

  function navigateQuerySearch(e) {
    const value = encodeURIComponent(e.target.value);
    navigate(`/?category=${category || ''}&search=${value}`);
  }

  return (
    <header className="absolute inset-x-0 top-[38px] z-10 mb-8 flex items-center justify-between bg-transparent px-4 lg:sticky lg:top-0 lg:h-[84px] lg:bg-neutral-01 lg:px-[136px] lg:shadow-high">
      <div className="flex w-full flex-row items-center space-x-4 lg:space-x-6">
        <button className="rounded-2xl bg-neutral-01 p-3 lg:hidden">
          <MenuIcon className="w-6" />
        </button>
        <Link className="hidden h-[34px] w-[100px] bg-primary-05 lg:inline-block" to="/" />
        <SearchInput
          onChange={navigateQuerySearch}
          placeholder="Cari di sini ..."
          value={search || ''}
        />
      </div>
      {isAuthenticated ? (
        <nav>
          <ul className="flex flex-row gap-6">
            <li>
              <Link to="/seller/products">
                <ListIcon className="mr-2 w-6" />
              </Link>
            </li>
            <li>
              <button>
                <BellIcon className="mr-2 w-6" />
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => setDropdownShown(!isDropdownShown)}
                ref={dropdownRef}
                type="button"
              >
                <UserIcon className="mr-2 w-6" />
              </button>
              {isDropdownShown && <Dropdown />}
            </li>
          </ul>
        </nav>
      ) : (
        <PrimaryButton
          className="hidden lg:inline-block"
          onClick={() => navigate('/login')}
          type="button"
        >
          <div className="flex flex-row">
            <SignInIcon className="mr-2 w-5" />
            <p>Masuk</p>
          </div>
        </PrimaryButton>
      )}
    </header>
  );
}

const Dropdown = () => {
  const { logout } = useAuth();

  return (
    <div className="absolute top-10 left-1/2 flex w-40 -translate-x-1/2 flex-col rounded-md bg-neutral-01 shadow-low">
      <Link
        className="inline-block px-4 py-2 text-left text-body-14 text-neutral-03 hover:text-neutral-04"
        to="/profile"
      >
        Update profile
      </Link>
      <button
        className="px-4 py-2 text-left text-body-14 text-neutral-03 hover:text-neutral-04"
        onClick={logout}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};
