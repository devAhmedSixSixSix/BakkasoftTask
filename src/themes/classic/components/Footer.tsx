import FooterCol from "@/SharedComponents/FooterCol";

export default function Footer() {
  return (
    <footer className="bg-[#faf8f7] px-[40px] py-[70px] mt-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <FooterCol
          title="Help & Support"
          links={["Help", "Track order", "Delivery & returns"]}
        />
        <FooterCol
          title="About"
          links={["About us", "Careers", "Corporate responsibility"]}
        />
        <FooterCol
          title="More from Shopi"
          links={[
            "Mobile & SHOPI apps",
            "SHOPI Marketplace",
            "Gift vouchers",
            "Investor’s site",
          ]}
        />
        <FooterCol title="Shopping from:" links={["Germany - CHANGE"]} />
      </div>
    </footer>
  );
}
