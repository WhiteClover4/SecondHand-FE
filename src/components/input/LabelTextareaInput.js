export default function LabelTextareaInput({ id, label, ...rest }) {
  return (
    <div className="flex w-full flex-col space-y-1">
      <label className="text-body-12" htmlFor={id}>
        {label}
      </label>
      <textarea
        {...rest}
        className="h-[80px] w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 px-4 py-3 text-body-14 placeholder:text-neutral-03"
        id={id}
      ></textarea>
    </div>
  );
}
