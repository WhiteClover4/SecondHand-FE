import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotifCard } from '../components/cards';
import useNotification from '../hooks/dependent/useNotification';
import AuthenticatedRoute from '../routes/AuthenticatedRoute';

export default function Notification() {
  const navigate = useNavigate();
  const { getNotification, notification, readNotification } = useNotification();

  const handleClick = (data) => {
    if (!data.is_read) readNotification(data.id);
    if (data.role === 'buyer') return;
    data.product_offer_price
      ? navigate(`/seller/transaction/${data.product_name}?transaction_id=${data.transaction_id}`)
      : navigate(`/seller/product/${data.product_name}/preview?product_id=${data.product_id}`);
  };

  useEffect(() => {
    getNotification();
  }, [getNotification]);

  return (
    <AuthenticatedRoute>
      <header>notifikasi</header>
      <div className="px-4">
        {notification.map((notif) => (
          <NotifCard key={notif.id} data={notif} handleClick={() => handleClick(notif)} />
        ))}
      </div>
    </AuthenticatedRoute>
  );
}
