import { Layout } from "lucide-react"

const Footer =() =>{
    return (
        <footer className="w-full bg-primary text-primary-foreground mt-20 ">
            <div className="mx-auto container w-full px-4 py-4 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center sm:font-semibold">
                <p className="text-xs leading-relexed opacity-90 max-w-xl">
                    <span className="font-semibold">
                        Uji Kompetisi Keahlian (KEAHLIAN) RPL
                    </span>
                    <br/>
                    Aplikasi Kalkulator ini dikembangkan sebagai bukti Kompetisi
                    dalam penerapan logika perhitungan dan pemprograman dasar.
                </p>
                <p className="text-xs sm:text-right opacity-90">
                    <span className="font-medium">
                        Daffa Al Musyaffa
                    </span>
                    <br/>
                    Kelas XI RPL = IP 2025/2026
                </p>

            </div>
        </footer>
    )


}
export default Footer