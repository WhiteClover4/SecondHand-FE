import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../icons';

export default function LabelPasswordInput({ margin, id, label, ...rest }) {
  const [isPasswordShown, setPasswordShown] = useState(false);
  return (
    <div className={`flex w-full flex-col space-y-1 ${margin}`}>
      <label className="text-body-12" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          {...rest}
          className="w-full rounded-2xl border border-neutral-02 bg-neutral-01 px-4 py-[14px] pr-16 text-body-14 placeholder:text-neutral-03"
          id={id}
          type={isPasswordShown ? 'text' : 'password'}
        />
        <button
          className="absolute top-0 right-6 h-full"
          onClick={() => setPasswordShown(!isPasswordShown)}
          type="button"
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

LabelPasswordInput.defaultProps = {
  margin: 'm-0',
};
