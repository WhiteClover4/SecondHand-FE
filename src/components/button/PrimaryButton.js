export default function PrimaryButton({ className, isSmall, isDisable, children, ...rest }) {
  return (
    <button
      {...rest}
      disabled={isDisable}
      className={`${isSmall ? "py-2" : "py-[14px]"} ${
        isDisable ? "cursor-not-allowed bg-neutral-02" : "bg-primary-04"
      }  rounded-2xl border border-transparent px-6 text-body-14 font-medium text-neutral-01 ${className}`}
    >
      {children}
    </button>
  );
}
