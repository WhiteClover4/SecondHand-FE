import { CameraIcon } from "../icon";

export default function CameraButton() {
    return (
        <button className=" w-24 h-24 border bg-primary-01 rounded-[12px] ">
            <CameraIcon className=" w-6 h-6 text-primary-04 m-auto " />
        </button>
    );
}