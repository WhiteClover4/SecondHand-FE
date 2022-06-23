import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../icon';

export default function LabelPasswordInput({ id, label, ...rest }) {
  const [isPasswordShown, setPasswordShown] = useState(true);
  return (
    <div className="flex w-full flex-col space-y-1">
      <label htmlFor={id} className="text-body-12">
        {label}
      </label>
      <div className="relative">
        <input
          {...rest}
          id={id}
          type={isPasswordShown ? 'text' : 'password'}
          className="w-full rounded-2xl border border-neutral-02 bg-neutral-01 px-4 py-[16px] pr-16 text-body-14 placeholder:text-neutral-03"
        />
        <button
          type="button"
          onClick={() => setPasswordShown(!isPasswordShown)}
          className="absolute top-0 right-6 h-full"
        >
          {isPasswordShown ? (
            <EyeOffIcon className="h-6 w-6 text-neutral-03" />
          ) : (
            <EyeIcon className="h-6 w-6 text-neutral-03" />
          )}
        </button>
      </div>
    </div>
  );
}
