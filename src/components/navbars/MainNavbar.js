import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BellIcon, ListIcon, SignInIcon, UserIcon } from '../icons';
import { PrimaryButton } from '../buttons';
import { SearchInput } from '../inputs';
import useOutsideClick from '../../hooks/independent/useOutsideClick';
import useAuth from '../../hooks/dependent/useAuth';

export default function MainNavbar({ search, setSearch }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isDropdownShown, setDropdownShown] = useState(false);

  const dropdownRef = useRef();
  useOutsideClick(dropdownRef, () => {
    if (isDropdownShown) setDropdownShown(false);
  });

  return (
    <header className="sticky top-0 z-10 mb-8 flex h-[84px] items-center justify-between bg-neutral-01 px-[136px] shadow-high">
      <div className="flex flex-row items-center space-x-6">
        <Link className="inline-block h-[34px] w-[100px] bg-primary-05" to="/" />
        <SearchInput onChange={(e) => setSearch(e.target.value)} value={search} />
      </div>
      {isAuthenticated ? (
        <nav>
          <ul className="flex flex-row gap-6">
            <li>
              <button>
                <ListIcon className="mr-2 w-6" />
              </button>
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
