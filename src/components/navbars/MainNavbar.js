import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BellIcon, ListIcon, SignInIcon, UserIcon, MenuIcon } from '../icons';
import { PrimaryButton } from '../buttons';
import { SearchInput } from '../inputs';
import useAuth from '../../hooks/dependent/useAuth';
import useQuery from '../../hooks/independent/useQuery';
import { NotifCard } from '../cards';
import useNotification from '../../hooks/dependent/useNotification';
import { OPEN_NAVBAR } from '../../redux/slice/sideNavbar';

export default function MainNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const query = useQuery();
  const category = query.get('category');
  const search = query.get('search');

  function navigateQuerySearch(e) {
    const value = encodeURIComponent(e.target.value);
    navigate(`/?category=${category || ''}&search=${value}`);
  }

  return (
    <header
      className={`${
        isHome ? 'absolute inset-x-0 top-[38px]' : 'hidden lg:flex'
      } z-10 mb-8 flex items-center justify-between bg-transparent px-4 lg:sticky lg:top-0 lg:h-[84px] lg:bg-neutral-01 lg:px-[136px] lg:shadow-high`}
    >
      <div className="flex w-full flex-row items-center space-x-4 lg:space-x-6">
        <button
          className="rounded-2xl bg-neutral-01 p-3 lg:hidden"
          onClick={() => dispatch(OPEN_NAVBAR())}
          type="button"
        >
          <MenuIcon className="w-6" />
        </button>
        <Link className="hidden h-[34px] w-[100px] bg-primary-05 lg:inline-block" to="/" />
        {isHome ? (
          <SearchInput
            onChange={navigateQuerySearch}
            placeholder="Cari di sini ..."
            value={search || ''}
          />
        ) : null}
      </div>
      {isAuthenticated ? (
        <AuthenticatedNav />
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

const AuthenticatedNav = () => {
  const { pathname } = useLocation();
  const [isProfileDropdownShown, setProfileDropdownShown] = useState(false);
  const [isNotificationShown, setNotificationShown] = useState(false);

  const { getNotification, notification, readNotification } = useNotification();

  useEffect(() => {
    getNotification();
  }, [getNotification]);

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-row gap-6">
        <li>
          <Link to="/seller/products">
            <ListIcon
              className={`${
                pathname.includes('seller/products') ? 'text-primary-04' : 'text-neutral-05'
              } mr-2 w-6`}
            />
          </Link>
        </li>
        <li className="relative">
          {notification.some((notif) => !notif.is_read) && (
            <div className="absolute top-0 right-3 h-2 w-2 rounded-full border border-neutral-01 bg-alert-danger p-px"></div>
          )}
          <button onClick={() => setNotificationShown(!isNotificationShown)} type="button">
            <BellIcon
              className={`${isNotificationShown ? 'text-primary-04' : 'text-neutral-05'} mr-2 w-6`}
            />
          </button>
          {isNotificationShown && (
            <Notification notification={notification} readNotification={readNotification} />
          )}
        </li>
        <li className="relative">
          <button onClick={() => setProfileDropdownShown(!isProfileDropdownShown)} type="button">
            <UserIcon
              className={`${
                isProfileDropdownShown ? 'text-primary-04' : 'text-neutral-05'
              } mr-2 w-6`}
            />
          </button>
          {isProfileDropdownShown && <ProfileDropdown />}
        </li>
      </ul>
    </nav>
  );
};

const ProfileDropdown = () => {
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

const Notification = ({ notification, readNotification }) => {
  return (
    <div className="absolute top-10 left-1/2 flex w-[376px] -translate-x-1/2 flex-col space-y-4 overflow-hidden rounded-2xl bg-neutral-01 shadow-high">
      <div className="h-[500px] w-full overflow-auto px-6">
        {notification.map((notif) => (
          <NotifCard
            key={notif.id}
            data={notif}
            readNotification={() => readNotification(notif.id)}
          />
        ))}
      </div>
    </div>
  );
};

const isHome = window.location.pathname === '/';
