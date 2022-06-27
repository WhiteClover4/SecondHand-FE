import { XIcon } from '../icons';

export default function PrimaryAlert({ status, children, remove }) {
  function bgColor(status) {
    if (status === 'success') return 'bg-alert-success';
    if (status === 'warning') return 'bg-alert-warning';
    if (status === 'error') return 'bg-alert-danger';
    return 'bg-alert-danger';
  }

  return (
    <div
      className={`${bgColor(
        status,
      )} flex w-full items-center justify-between space-x-4 rounded-xl px-6 py-4 shadow-high`}
    >
      <span className="text-body-14 font-medium text-neutral-01">{children}</span>
      <button onClick={remove} type="button">
        <XIcon className="h-5 w-5 text-neutral-01" />
      </button>
    </div>
  );
}
