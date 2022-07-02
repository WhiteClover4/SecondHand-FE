import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainAlert } from './components/alerts';
import { REMOVE_ALERT } from './redux/slice/alert';
import useAuth from './hooks/dependent/useAuth';
import RoutesApp from './routes';

function App() {
  const dispatch = useDispatch();
  const { alerts } = useSelector((state) => state.alert);
  const { checkToken } = useAuth();

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <>
      {alerts.length ? (
        <div className="fixed top-[100px] left-0 z-[999] flex w-full justify-center">
          <div className="flex w-max min-w-[500px] flex-col space-y-5">
            {alerts.map((alert, i) => (
              <MainAlert key={i} remove={() => dispatch(REMOVE_ALERT(i))} status={alert.status}>
                {alert.message}
              </MainAlert>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <RoutesApp />
    </>
  );
}

export default App;
