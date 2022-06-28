import { XIcon } from '../icons';
import { PrimaryButton } from '../buttons';

export default function StatusModal() {
  const [transaksi, setTransaksi] = useState('');

  const onOptionChange = (e) => {
    setTransaksi(e.target.value);
  };

  return (
    <div className="relative flex  w-[360px] flex-col rounded-2xl bg-neutral-01 px-8 pt-4 pb-6 shadow-high">
      <button className="place-self-star mb-4 place-self-end " type="button">
        <XIcon className="h-6 w-6 text-neutral-05 " />
      </button>
      <p className="mb-6 text-body-14 font-medium">Perbarui status penjualan produkmu</p>
      <div className="mb-2 flex flex-row items-center">
        <input
          checked={transaksi === 'berhasil'}
          className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-full border-[3px] border-[#C4C4C4] bg-[#C4C4C4] checked:bg-primary-04 hover:bg-primary-03"
          id="berhasil"
          onChange={onOptionChange}
          type="radio"
          value="berhasil"
        />
        <label className="ml-4  text-body-14" htmlFor="berhasil">
          Berhasil terjual
        </label>
      </div>
      <p className="ml-8 mb-6 text-body-14 text-neutral-03">
        Kamu telah sepakat menjual produk ini kepada pembeli
      </p>
      <div className="mb-2 flex flex-row items-center">
        <input
          checked={transaksi === 'batal'}
          className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-full border-[3px] border-[#C4C4C4] bg-[#C4C4C4] checked:bg-primary-04 hover:bg-primary-03"
          id="batal"
          onChange={onOptionChange}
          type="radio"
          value="batal"
        />
        <label className="ml-4 text-body-14" htmlFor="batal">
          Batalkan transaksi
        </label>
      </div>
      <p className="ml-8 mb-8 text-body-14 text-neutral-03">
        Kamu membatalkan transaksi produk ini dengan pembeli
      </p>
      {transaksi !== '' ? (
        <PrimaryButton className="text-center">Kirim</PrimaryButton>
      ) : (
        <PrimaryButton className="text-center" isDisable>
          Kirim
        </PrimaryButton>
      )}
    </div>
  );
}
