import React from "react";
import { XIcon } from "../icon";

export default function PrimaryAlert({ bgColor = "bg-alert-success", children }) {
  return (
    <div
      className={`${bgColor} flex w-[500px] items-center justify-between space-x-4 rounded-xl px-6 py-4 shadow-high`}
    >
      <span className="text-body-14 font-medium text-neutral-01">{children}</span>
      <button type="button">
        <XIcon className="h-5 w-5 text-neutral-01" />
      </button>
    </div>
  );
}
