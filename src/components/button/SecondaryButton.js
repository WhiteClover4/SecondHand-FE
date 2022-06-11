export default function SecondaryButton({
  className,
  isSmall,
  isDisable,
  children,
  ...rest
}) {
  return (
    <button
      {...rest}
      disabled={isDisable}
      className={`${isSmall ? "py-2" : "py-[14px]"} ${
        isDisable
          ? "border-neutral-02 text-neutral-02 cursor-not-allowed"
          : "text-neutral-05 border-primary-04"
      }  px-6 bg-neutral-01 text-body-14 font-medium rounded-2xl border ${className}`}
    >
      {children}
    </button>
  );
}
