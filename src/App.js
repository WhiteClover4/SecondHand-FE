import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainAlert } from './components/alerts';
import { REMOVE_ALERT, REMOVE_ALL_ALERTS } from './redux/slice/alert';
import useAuth from './hooks/dependent/useAuth';
import RoutesApp from './routes';
import MobileSideNavbar from './components/navbars/MobileSideNavbar';

function App() {
  const { checkToken } = useAuth();

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <>
      <MobileSideNavbar />
      <ShowALert />
      <RoutesApp />
    </>
  );
}

export default App;

export const ShowALert = () => {
  const dispatch = useDispatch();
  const { alerts } = useSelector((state) => state.alert);
  return (
    <div
      className={`${
        !alerts.length && 'hidden'
      } fixed top-[54px] left-0 z-[999] flex w-full justify-center lg:top-[100px]`}
    >
      <div className="flex w-full flex-col space-y-5 px-4 lg:w-max lg:min-w-[500px] lg:p-0">
        {alerts.map((alert, i) => (
          <MainAlert
            key={i}
            remove={() => dispatch(REMOVE_ALERT(i))}
            removeAll={() => dispatch(REMOVE_ALL_ALERTS())}
            status={alert.status}
          >
            {alert.message}
          </MainAlert>
        ))}
      </div>
    </div>
  );
};
