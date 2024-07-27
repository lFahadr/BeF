"use client";

const PrivacyPolicyContent = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container space-y-[10px]">

          <h3 className="font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3]">
            Information We Collect:
          </h3>
          <p>
           We may collect personal information such as names, contact details, and booking history to provide efficient grooming services.
            <br />
            </p>
            <p>
            This information is securely stored and used solely for the purpose of enhancing your grooming experience.
          </p>

          <br />
          
          <h3 className="font-bold  text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3]">
            How We Use Your Information:
          </h3>
          <p>
            Your data is utilized for appointment scheduling, personalized service delivery, and communication
          </p>
          <p>
            We prioritize the confidentiality and security of your information, and we do not share it with third parties without your explicit consent.
          </p>

          <br />

          <h3 className="font-bold  text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3]">
            Data Security:
          </h3>
          <p>
           We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. Your privacy is of utmost importance to us.
          </p>

          <br />

          <h3 className="font-bold  text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3]">
            Cookie Policy:
          </h3>
          <p>
            Our website uses cookies to enhance your browsing experience. By continuing to use our site, you consent to the use of cookies in accordance with our privacy policy.
          </p>

          <br />

          <h3 className="font-bold  text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3]">
            How you can contact us
          </h3>
          <p>
            If you have any questions about our privacy practices or how we have
            been managing your personal information, please get in touch with
            our support at{" "}
            <a
              href="mailto:support@be-fresh.app"
              className="text-[#0a64bc] transition-all hover:underline"
            >
              support@be-fresh.app
            </a>
            .
          </p>
          <p>
            Both personal information and personal data have the same meaning in
            the context of this Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
