export default function CardGempa({gempa}) {
    return (
        <div className="p-6 shadow rounded bg-white cursor-pointer hover:bg-slate-100">
            <div className="flex flex-wrap items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-initial mt-1 fill-orange-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="flex-1 overflow-hidden">
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis max-w-full w-full font-medium">
                        {gempa.Dirasakan}
                    </div>
                </div>
            </div>
            <div className="text-sm mt-2">{gempa.Tanggal} | {gempa.Jam}</div>
            <div className="text-sm mt-1"><i>Magnitude</i>: {gempa.Magnitude}</div>
        </div>
    )
}