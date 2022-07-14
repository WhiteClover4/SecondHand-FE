import { useEffect, useState } from 'react';
import { BackButton } from '../../../components/buttons';
import { BidCard, ProfileCard } from '../../../components/cards';
import { StatusModal, SuccessCheckoutModal } from '../../../components/modals';
import { SimpleNavbar } from '../../../components/navbars';
import useTransaction from '../../../hooks/dependent/useTransaction';
import useQuery from '../../../hooks/independent/useQuery';
import AuthenticatedRoute from '../../../routes/AuthenticatedRoute';

export default function Transaction() {
  const [modal, setModal] = useState('');
  const {
    getTransaction,
    transaction,
    loading,
    acceptTransaction,
    rejectTransaction,
    updateTransactionStatus,
    getTransactionStatus,
    transactionStatus,
  } = useTransaction();

  const query = useQuery();
  const transactionId = query.get('transaction_id');

  const buyerProfile = {
    name: transaction.buyer_name,
    city: transaction.buyer_city,
    profile_picture: transaction.buyer_profile_picture,
  };

  useEffect(() => {
    getTransaction(transactionId);
    getTransactionStatus(transactionId);
  }, [getTransaction, getTransactionStatus, transactionId]);

  return (
    <AuthenticatedRoute>
      {modal === 'success' && <SuccessCheckoutModal data={transaction} setModal={setModal} />}
      {modal === 'status' && (
        <StatusModal
          loading={loading.updateTransactionStatus}
          setModal={setModal}
          transactionStatus={transactionStatus}
          updateTransactionStatus={(status) => updateTransactionStatus(transactionId, status)}
        />
      )}
      <div className="absolute top-0 h-screen w-full overflow-auto">
        <SimpleNavbar title="Info Penawar" />
        <div className="relative mx-auto w-[568px]">
          <BackButton className="absolute -left-[76px] top-0" />
          <div className="mt-10">
            <ProfileCard data={buyerProfile} />
            <p className="my-6 text-body-14 font-medium"> Daftar Produkmu yang Ditawar </p>
            <div className="flex flex-col space-y-6">
              <BidCard
                accept={() => acceptTransaction(transactionId, () => setModal('success'))}
                data={transaction}
                loading={loading.acceptTransaction || loading.rejectTransaction}
                openStatusModal={() => setModal('status')}
                reject={() => rejectTransaction(transactionId)}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedRoute>
  );
}
