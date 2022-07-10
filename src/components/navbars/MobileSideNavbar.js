import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/dependent/useAuth';
import { CLOSE_NAVBAR } from '../../redux/slice/sideNavbar';
import { PrimaryButton } from '../buttons';
import { LogInIcon, XIcon } from '../icons';

export default function MobileSideNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showNavbar } = useSelector((state) => state.sideNavbar);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { logout } = useAuth();
  return (
    <>
      <div
        className={`${
          !showNavbar && 'hidden'
        } fixed top-0 left-0 z-20 h-screen w-screen bg-[#000]/60 lg:hidden`}
        onClick={() => dispatch(CLOSE_NAVBAR())}
      ></div>
      <aside
        className={`${
          !showNavbar && 'translate-x-[-100vw]'
        } fixed top-0 left-0 z-30 h-screen w-1/2 bg-neutral-01 px-4 py-8 duration-300 lg:hidden`}
      >
        <nav className="h-full w-full space-y-4">
          <li className="flex items-center justify-between">
            <Link className="inline-block text-body-14 font-bold" to="/">
              Second Hand
            </Link>
            <button onClick={() => dispatch(CLOSE_NAVBAR())} type="button">
              <XIcon className="h-6 w-6 text-neutral-05" />
            </button>
          </li>
          {!isAuthenticated ? (
            <li>
              <PrimaryButton
                className="flex items-center space-x-2"
                onClick={() => {
                  dispatch(CLOSE_NAVBAR());
                  navigate('/login');
                }}
                type="button"
              >
                <LogInIcon className="h-5 w-5 text-neutral-01" />
                <span className="text-body-14 text-neutral-01">Masuk</span>
              </PrimaryButton>
            </li>
          ) : (
            <>
              <li className="text-body-14">Notifikasi</li>
              <li className="text-body-14">
                <Link to="/seller/products">Daftar Jual</Link>
              </li>
              <li className="text-body-14">
                <Link to="/profile">Akun Saya</Link>
              </li>
              <li className="text-body-14">
                <button onClick={logout} type="button">
                  Keluar
                </button>
              </li>
            </>
          )}
        </nav>
      </aside>
    </>
  );
}
