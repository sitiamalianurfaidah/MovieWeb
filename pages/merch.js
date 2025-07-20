import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Merch() {
    return (
        <>
        <Head>
            <title>Merch Page</title>
        </Head>

        {/* Desktop Background */}
        <div
            className="hidden md:block min-h-screen mt-16 bg-cover bg-center"
            style={{
            backgroundImage: "url('/hmns.webp')",
            }}
        />

        {/* Mobile Background */}
        <div
            className="block md:hidden min-h-screen mt-16 bg-cover bg-center"
            style={{
            backgroundImage: "url('/hmns2.webp')",
            }}
        />

        {/* E-commerce Links Section */}
        <section className="bg-[#f3edf7] py-12 text-center px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold mt-20 mb-10 text-[#3b1e47] text-shadow" style={{ fontFamily: "'Playfair Display', serif" }}>
            Buy Our Merch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
            {/* Shopee Eterna */}
            <a
                href="https://shopee.co.id/product/190339326/40008530502"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
            >
                <Image src="/shopee.svg" alt="Shopee Eterna" width={50} height={50} />
                <span className={`${poppins.className} text-lg md:text-xl mt-3 mb-8 text-[#3b1e47] max-w-2xl font-extrabold mx-auto animate-fade-in`}>Eterna</span>
            </a>

            {/* Shopee Zena */}
            <a
                href="https://shopee.co.id/hmnsperfume?uls_trackid=538cuksr006s&utm_campaign=-&utm_content=product&utm_medium=affiliates&utm_source=an_11322941096&utm_term=dd12538ktzgo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
            >
                <Image src="/shopee.svg" alt="Shopee Zena" width={50} height={50} />
                <span className={`${poppins.className} text-lg md:text-xl mt-3 mb-8 text-[#3b1e47] max-w-2xl font-extrabold mx-auto animate-fade-in`}>Zena</span>
            </a>

            {/* Tokopedia Eterna */}
            <a
                href="https://www.tokopedia.com/hmnsperfume/hmns-perfume-sore-eterna-1731942143733761096?aff_unique_id=VjgHBLiyb3_I8eFx1KG9K95kR2eFGXWHLkhL5cQ2R12EfJkbdXCr8fyB5kWzCfHmUpAlFi6GAg%3D%3D&channel=salinlink&utm_source=salinlink&utm_medium=affiliate-share&utm_campaign=affiliateshare-pdp-VjgHBLiyb3_I8eFx1KG9K95kR2eFGXWHLkhL5cQ2R12EfJkbdXCr8fyB5kWzCfHmUpAlFi6GAg%3D%3D-100770469892-0-170725&scene=pdp&chain_key=%7B%22t%22%3A1%2C%22k%22%3A%22000000000000000007528024691434751752%22%2C%22sc%22%3A%22salinlink%22%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center mt-10"
            >
                <Image src="/tokopedia.svg" alt="Tokopedia Eterna" width={50} height={50} />
                <span className={`${poppins.className} text-lg md:text-xl mt-3 mb-8 text-[#3b1e47] max-w-2xl font-extrabold mx-auto animate-fade-in`}>Eterna</span>
            </a>

            {/* Tokopedia Zena */}
            <a
                href="https://www.tokopedia.com/hmnsperfume/hmns-x-sore-fragrance-mist-ena-1731942123782243400?aff_unique_id=VjgHBLiyb3DK9-Fx1KG9K95kR2eFGXWHLkhL5c46RliEbs45bHiGmN_1qkCmAdzDWMAxHkOEMQ%3D%3D&channel=salinlink&utm_source=salinlink&utm_medium=affiliate-share&utm_campaign=affiliateshare-pdp-VjgHBLiyb3DK9-Fx1KG9K95kR2eFGXWHLkhL5c46RliEbs45bHiGmN_1qkCmAdzDWMAxHkOEMQ%3D%3D-100770463487-0-170725&scene=pdp&chain_key=%7B%22t%22%3A1%2C%22k%22%3A%22000000000000000007528024367152187144%22%2C%22sc%22%3A%22salinlink%22%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center mt-10"
            >
                <Image src="/tokopedia.svg" alt="Tokopedia Zena" width={50} height={50} />
                <span className={`${poppins.className} text-lg md:text-xl mt-3 mb-8 text-[#3b1e47] max-w-2xl font-extrabold mx-auto animate-fade-in`}>Zena</span>
            </a>

            {/* TikTok Shop Eterna */}
            <a
                href="https://shop-id.tokopedia.com/view/product/1731942143733761096?region=ID&locale=id-ID&source=seller_center&no-cache=1&e=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center mt-15"
            >
                <Image src="/tiktokshop.svg" alt="TikTok Shop Eterna" width={50} height={50} />
                <span className={`${poppins.className} text-lg md:text-xl mt-3 mb-8 text-[#3b1e47] max-w-2xl font-extrabold mx-auto animate-fade-in`}>Eterna</span>
            </a>

            {/* TikTok Shop Zena */}
            <a
                href="https://shop-id.tokopedia.com/view/product/1731942123782243400?region=ID&locale=id-ID&source=seller_center&no-cache=1&e=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center mt-15"
            >
                <Image src="/tiktokshop.svg" alt="TikTok Shop Zena" width={50} height={50} />
                <span className={`${poppins.className} text-lg md:text-xl mt-3 mb-8 text-[#3b1e47] max-w-2xl font-extrabold mx-auto animate-fade-in`}>Zena</span>
            </a>
            </div>
        </section>
        </>
    );
}
