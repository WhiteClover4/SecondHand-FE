export default function ProfilCard() {
    return (
        <div className="w-[336px] h-20 flex flex-row  p-4 rounded-xl shadow-low bg-neutral-01">
            <img src="/img/profilcard.png" alt="profilcard" className="h-12 w-12 rounded object-cover" />
            <div className=" ml-4 mt=[21px] text-body-14"> Nama Penjual
                <p className=" mt-1 mb-[21px] space-y-1 text-body-10 text-neutral-03 ">Kota</p>
            </div>
        </div >
    );
}
