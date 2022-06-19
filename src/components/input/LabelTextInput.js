export default function LabelTextInput({ id, label, ...rest }) {
  return (
    <div className="flex w-full flex-col space-y-1">
      <label htmlFor={id} className="text-body-12">
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type="text"
        className="w-full rounded-2xl border border-neutral-02 bg-neutral-01 px-4 py-[16px] text-body-14 placeholder:text-neutral-03"
      />
    </div>
  );
}
