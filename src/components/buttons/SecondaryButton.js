export default function SecondaryButton({ className, isSmall, isDisable, children, ...rest }) {
  return (
    <button
      {...rest}
      className={`${isSmall ? 'py-2' : 'py-3 lg:py-[14px]'} ${
        isDisable
          ? 'cursor-not-allowed border-neutral-02 text-neutral-02'
          : 'border-primary-04 text-neutral-05'
      }  rounded-2xl border bg-neutral-01 px-6 text-body-14 font-medium ${className}`}
      disabled={isDisable}
    >
      {children}
    </button>
  );
}
