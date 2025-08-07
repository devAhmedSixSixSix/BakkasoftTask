import FooterCol from "@/SharedComponents/FooterCol";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container rounded-[20px] my-[16px] bg-[#faf8f7] py-[70px] px-[64px]">
      <section className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:w-[25%]">
          <div className="flex-shrink-0 mb-3">
            <Image
              src="/Bakkasoft Logo.jpeg"
              alt="Bakkasoft Logo"
              width={60}
              height={60}
              className="object-contain"
              // loading="lazy"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Bakkasoft</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptate dignissimos dolor perferendis nam! Ullam quos sit fugit
            quisquam magnam.
          </p>

          <nav aria-label="Social Media" className="mt-[16px]">
            <ul className="flex justify-start items-center gap-[24px]">
              <li>
                <a href="#" aria-label="Facebook">
                  <Image src="/fb_icon (2).svg" alt="Facebook" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <Image src="/integram_icon (3).svg" alt="Instagram" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <Image src="/twitter_icon (1).svg" alt="Twitter" width={24} height={24} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <FooterCol title="help & support" links={["Help", "Track order", "Delivery & returns"]} />
        <FooterCol title="about" links={["About us", "Careers", "Corporate responsibility"]} />
        <FooterCol
          title="More from shopi"
          links={["Mobile & SHOPI apps", "SHOPI Marketplace", "Gift vouchers", "Investor’s site"]}
        />
      </section>
    </footer>
  );
}
