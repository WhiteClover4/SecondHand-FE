import React from "react";
import { XIcon } from "../icon";

export default function PrimaryAlert({
  bgColor = "bg-alert-success",
  children,
}) {
  return (
    <div
      className={`${bgColor} w-[500px] px-6 py-4 flex items-center justify-between space-x-4 shadow-high rounded-xl`}
    >
      <span className="text-body-14 font-medium text-neutral-01">
        {children}
      </span>
      <button type="button">
        <XIcon className="w-5 h-5 text-neutral-01" />
      </button>
    </div>
  );
}
