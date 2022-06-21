export default function ProfileCard() {
    return (
        <div className="w-[336px] h-20 flex flex-row items-center p-4 rounded-xl shadow-low bg-neutral-01">
            <img src="/img/profilcard.png" alt="profilcard" className="h-12 w-12 rounded object-cover" />
            <div className="ml-4 space-y-1">
                <p className="text-body-14 font-medium"> Nama Penjual </p>
                <p className="text-body-10 text-neutral-03"> Kota </p>
            </div>
        </div >
    );
}
