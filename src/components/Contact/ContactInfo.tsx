"use client";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-black-color rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-[0] space-y-[30px] py-[30px] md:py-[60px] lg:py-[90px] px-[20px] md:px-[50px]">
        <div className="border border-[#585858] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-[20px] leading-none">
            Office Address
          </h3>
          <div className="flex items-center text-white space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0 bg-white text-primary-color w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="ri-map-pin-line"></i>
            </div>
            <p>Nasser Al Din Al Tai Street, Alfalah District Riyadh 13314 SA</p>
          </div>
        </div>

        <div className="border border-[#585858] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-[20px] leading-none">
            Phone Number
          </h3>
          <div className="flex items-center text-white space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0 bg-white text-primary-color w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="ri-phone-line"></i>
            </div>
            <div>
              <a href="tel:1234567898" className="block hover:text-primary-color">
                (+966) 502649885
              </a>
              <a href="tel:1234567899" className="block hover:text-primary-color">
                (+966) 530929534
              </a>
            </div>
          </div>
        </div>

        <div className="border border-[#585858] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-[20px] leading-none">
            Email Us
          </h3>
          <div className="flex items-center text-white space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0 bg-white text-primary-color w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="ri-mail-send-line"></i>
            </div>
            <div>
              <a
                href="mailto:support@be-fresh.app"
                className="block hover:text-primary-color"
              >
                support@be-fresh.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
