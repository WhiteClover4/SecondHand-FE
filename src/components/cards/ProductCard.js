import { useNavigate } from 'react-router-dom';

export default function ProductCard({ data, isSekeleton }) {
  const navigate = useNavigate();

  const navigateToDetail = () =>
    !isSekeleton && navigate(`/product/${encodeURIComponent(data.name)}?product_id=${data.id}`);

  return (
    <div className="w-full rounded bg-neutral-01 p-2 pb-4 shadow-low" onClick={navigateToDetail}>
      {!isSekeleton ? (
        <img
          alt="CardImage"
          className="h-[100px] w-full rounded object-cover"
          src={data.image || '/img/no-product-image.png'}
        />
      ) : (
        <div className="h-[100px] w-full animate-pulse rounded bg-neutral-02/30 object-cover" />
      )}
      <p
        className={`${
          isSekeleton && 'h-5 w-5/6 animate-pulse rounded bg-neutral-02/30'
        } mt-2 text-body-14`}
      >
        {!isSekeleton ? data.name : ''}
      </p>
      <p
        className={`${
          isSekeleton && 'h-[14px] w-1/3 animate-pulse rounded bg-neutral-02/30'
        } mt-1 text-body-10 text-neutral-03`}
      >
        {!isSekeleton ? data.Category.name : ''}
      </p>
      <p
        className={`${
          isSekeleton && 'h-5 w-1/2 animate-pulse rounded bg-neutral-02/30'
        } mt-2 text-body-14`}
      >
        {!isSekeleton ? 'RP ' + data.price.toLocaleString('id-ID') : ''}
      </p>
    </div>
  );
}
