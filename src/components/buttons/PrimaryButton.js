import SpinnerIcon from '../icons/SpinnerIcon';

export default function PrimaryButton({
  className,
  bgColor,
  color,
  isSmall,
  isDisable,
  disableText,
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
      {!isDisable ? (
        children
      ) : !disableText ? (
        <div className="flex items-center justify-center">
          <SpinnerIcon className="text-white mr-3 h-4 w-4" />
          Loading...
        </div>
      ) : (
        disableText
      )}
    </button>
  );
}

PrimaryButton.defaultProps = {
  bgColor: 'bg-primary-04',
  color: 'text-neutral-01',
};
