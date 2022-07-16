import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NotifCard } from '../components/cards';
import { MenuIcon } from '../components/icons';
import useNotification from '../hooks/dependent/useNotification';
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import { OPEN_NAVBAR } from '../redux/slice/sideNavbar';

export default function Notification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getNotification, notification, readNotification } = useNotification();

  const handleClick = (data) => {
    if (!data.is_read) readNotification(data.id);

    const encodedProductName = encodeURIComponent(data.product_name);

    if (data.role === 'buyer')
      return navigate(`/product/${encodedProductName}?product_id=${data.product_id}`);

    data.product_offer_price
      ? navigate(`/seller/transaction/${encodedProductName}?transaction_id=${data.transaction_id}`)
      : navigate(`/seller/product/${encodedProductName}/preview?product_id=${data.product_id}`);
  };

  useEffect(() => {
    getNotification();
  }, [getNotification]);

  return (
    <AuthenticatedRoute>
      <div className="mt-[6px] px-4">
        <header className="flex items-center space-x-4">
          <button className="p-3" onClick={() => dispatch(OPEN_NAVBAR())} type="button">
            <MenuIcon className="h-6 w-6 text-neutral-05" />
          </button>
          <h5 className="text-[20px] font-bold">Notifikasi</h5>
        </header>
        {notification.map((notif) => (
          <NotifCard key={notif.id} data={notif} handleClick={() => handleClick(notif)} />
        ))}
      </div>
    </AuthenticatedRoute>
  );
}
