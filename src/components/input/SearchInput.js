import React from "react";
import { SearchIcon } from "../icon";

export default function SearchInput({ ...rest }) {
  return (
    <div className="relative w-[444px]">
      <input
        {...rest}
        className="w-full py-[14px] px-6 pr-16 rounded-2xl bg-[#EEEEEE] text-body-14 placeholder:text-neutral-03"
      />
      <span className="absolute top-0 right-6 h-full flex items-center">
        <SearchIcon className="w-6 h-6 text-neutral-03" />
      </span>
    </div>
  );
}
