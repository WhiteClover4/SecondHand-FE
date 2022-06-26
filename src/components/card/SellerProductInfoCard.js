import PrimaryButton from '../button/PrimaryButton';
import SecondaryButton from '../button/SecondaryButton';

export default function SellerProductInfoCard() {
  return (
    <div className="flex flex-col rounded-2xl px-4 pb-6 pt-4 shadow-high">
      <p className="mb-2 text-title-16 font-medium text-black">Jam Tangan Casio</p>
      <p className="mb-4 text-body-14 text-neutral-03">Aksesoris</p>
      <div className="mb-6 text-title-16 text-black">Rp 250.000</div>
      <PrimaryButton className="mb-[14px]">Terbitkan</PrimaryButton>
      <SecondaryButton>Edit</SecondaryButton>
    </div>
  );
}
