import React from "react";
import { SearchIcon } from "../icon";

export default function SearchInput({ ...rest }) {
  return (
    <div className="relative w-[444px]">
      <input
        {...rest}
        className="w-full rounded-2xl bg-[#EEEEEE] py-[14px] px-6 pr-16 text-body-14 placeholder:text-neutral-03"
      />
      <span className="absolute top-0 right-6 flex h-full items-center">
        <SearchIcon className="h-6 w-6 text-neutral-03" />
      </span>
    </div>
  );
}
