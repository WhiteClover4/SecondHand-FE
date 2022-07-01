export default function LabelNumberInput({ margin, id, label, ...rest }) {
  return (
    <div className={`flex w-full flex-col space-y-1 ${margin}`}>
      <label className="text-body-12" htmlFor={id}>
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-2xl border border-neutral-02 bg-neutral-01 px-4 py-[16px] text-body-14 placeholder:text-neutral-03"
        id={id}
        type="number"
      />
    </div>
  );
}

LabelNumberInput.defaultProps = {
  margin: 'm-0',
};
