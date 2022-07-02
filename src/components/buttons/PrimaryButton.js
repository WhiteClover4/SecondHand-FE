export default function PrimaryButton({
  className,
  bgColor,
  color,
  isSmall,
  isDisable,
  children,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={`${isSmall ? 'py-2' : 'py-3 lg:py-[14px]'} ${
        isDisable ? 'cursor-not-allowed bg-neutral-02' : bgColor
      }  rounded-2xl border border-transparent px-4 text-body-14 font-medium lg:px-6 ${color} ${className}`}
      disabled={isDisable}
    >
      {!isDisable ? children : 'Loading ...'}
    </button>
  );
}

PrimaryButton.defaultProps = {
  bgColor: 'bg-primary-04',
  color: 'text-neutral-01',
};
