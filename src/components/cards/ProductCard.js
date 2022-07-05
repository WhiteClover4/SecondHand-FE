import { useNavigate } from 'react-router-dom';

export default function ProductCard({ data }) {
  const navigate = useNavigate();

  function navigateToDetail() {
    navigate(`/product/${encodeURIComponent(data.name)}?product_id=${data.id}`);
  }

  return (
    <div className="w-full rounded bg-neutral-01 p-2 pb-4 shadow-low" onClick={navigateToDetail}>
      <img
        alt="CardImage"
        className="h-[100px] w-full rounded object-cover"
        src={data.image || '/img/no-product-image.png'}
      />
      <p className="mt-2 text-body-14">{data.name}</p>
      <p className="mt-1 text-body-10 text-neutral-03">{data.Category?.name}</p>
      <p className="mt-2 text-body-14">{data.price?.toLocaleString('id-ID')}</p>
    </div>
  );
}
