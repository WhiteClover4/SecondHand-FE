export default function PrimaryButton({
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
        isDisable ? "bg-neutral-02 cursor-not-allowed" : "bg-primary-04"
      }  px-6 text-neutral-01 text-body-14 font-medium rounded-2xl border border-transparent ${className}`}
    >
      {children}
    </button>
  );
}
