export default function LabelTextInput({ id, label, ...rest }) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label htmlFor={id} className="text-body-12">
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type="text"
        className="w-full px-4 py-[16px] bg-neutral-01 border border-neutral-02 rounded-2xl text-body-14 placeholder:text-neutral-03"
      />
    </div>
  );
}
