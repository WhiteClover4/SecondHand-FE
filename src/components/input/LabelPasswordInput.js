import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../icon";

export default function LabelPasswordInput({ id, label, ...rest }) {
  const [isPasswordShown, setPasswordShown] = useState(true);
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label htmlFor={id} className="text-body-12">
        {label}
      </label>
      <div className="relative">
        <input
          {...rest}
          id={id}
          type={isPasswordShown ? "text" : "password"}
          className="w-full px-4 pr-16 py-[16px] bg-neutral-01 border border-neutral-02 rounded-2xl text-body-14 placeholder:text-neutral-03"
        />
        <button
          type="button"
          onClick={() => setPasswordShown(!isPasswordShown)}
          className="absolute top-0 right-6 h-full"
        >
          {isPasswordShown ? (
            <EyeOffIcon className="w-6 h-6 text-neutral-03" />
          ) : (
            <EyeIcon className="w-6 h-6 text-neutral-03" />
          )}
        </button>
      </div>
    </div>
  );
}
