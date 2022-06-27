export default function LabelOptionInputProduct({ id, label, value = 'default', ...rest }) {
  return (
    <div className="flex w-full flex-col space-y-1">
      <label className="text-body-12" htmlFor={id}>
        {label}
      </label>
      <div className="w-full rounded-2xl border border-neutral-02 bg-neutral-01 px-4 py-[16px] text-body-14 placeholder:text-neutral-03">
        <select
          {...rest}
          className={`${value === 'default' && 'text-neutral-03'} w-full focus:outline-none`}
          id="id"
          value={value}
        >
          <option className="text-neutral-100" disabled value="default">
            Pilih Kategori
          </option>
          <option value="Hobi"></option>
          <option value="Kendaraan"></option>
          <option value="Baju"></option>
          <option value="Elektronik"></option>
          <option value="Kesehatan"></option>
        </select>
      </div>
    </div>
  );
}
