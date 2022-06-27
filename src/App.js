import { useDispatch, useSelector } from 'react-redux';
import { PrimaryAlert } from './components/alert';
import { REMOVE_ALERT } from './redux/slice/alert';
import RoutesApp from './routes';

function App() {
  const dispatch = useDispatch();
  const { alerts } = useSelector((state) => state.alert);

  return (
    <>
      {alerts.length ? (
        <div className="fixed top-[100px] left-0 z-[999] flex w-full justify-center">
          <div className="flex w-max min-w-[500px] flex-col space-y-5">
            {alerts.map((alert, i) => (
              <PrimaryAlert key={i} remove={() => dispatch(REMOVE_ALERT(i))} status={alert.status}>
                {alert.message}
              </PrimaryAlert>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <RoutesApp />;
    </>
  );
}

export default App;
