import Image from "next/image"

export default function Footer() {
    return (
        <div className="mt-10 text-center">
            <Image src="/logo-bmkg-sm.png" width={97} height={120} alt="BMKG Indonesia" />
        </div>
    )
}