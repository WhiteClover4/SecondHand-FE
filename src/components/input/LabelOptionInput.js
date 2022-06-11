export default function LabelOptionInput({
  id,
  label,
  value = "default",
  ...rest
}) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label htmlFor={id} className="text-body-12">
        {label}
      </label>
      <div className="w-full px-4 py-[16px] bg-neutral-01 border border-neutral-02 rounded-2xl text-body-14 placeholder:text-neutral-03">
        <select
          {...rest}
          id="id"
          value={value}
          className={`${
            value === "default" && "text-neutral-03"
          } w-full focus:outline-none`}
        >
          <option disabled value="default" className="text-neutral-100 ">
            Pilih Kota
          </option>
          <option value="aceh">aceh</option>
        </select>
      </div>
    </div>
  );
}
