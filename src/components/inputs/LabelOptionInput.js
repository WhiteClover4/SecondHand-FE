export default function LabelOptionInput({ id, label, defaultValue, value, values = [], ...rest }) {
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
          value={value || 'default'}
        >
          <option className="text-neutral-100 " disabled value="default">
            {defaultValue}
          </option>
          {values.map((value, i) => (
            <option key={i} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

LabelOptionInput.defaultProps = {
  defaultValue: 'Pilih Kota',
};
