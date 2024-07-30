"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../FormHelpers/Input";
import TextArea from "../FormHelpers/TextArea";
import Button from "../FormHelpers/Button";
import ContactInfo from "./ContactInfo";
import { useTranslations } from "next-intl";
import axios from "axios";

const ContactForm: React.FC = () => {
  const t = useTranslations("home");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.phone = data.phone
      .replace(/١/g, '1')
      .replace(/٢/g, '2')
      .replace(/٣/g, '3')
      .replace(/٤/g, '4')
      .replace(/٥/g, '5')
      .replace(/٦/g, '6')
      .replace(/٧/g, '7')
      .replace(/٨/g, '8')
      .replace(/٩/g, '9')
      .replace(/٠/g, '0');
    await axios
      .post("https://server.be-fresh.app/contacts", data)
      .then(() => {
        toast.success(t("submittedSuccessfully"));
        reset();
      })
      .catch(() => {
        toast.error(t("submitError"));
      });
  };

  return (
    <>
      <div
        id="contact"
        className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]"
      >
        <div className="container mx-auto">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h6 className="text-[16px] md:text-[18px] font-medium mb-[5px]">
              {t("joinBefresh")}
            </h6>
            <h2 className="text-[28px] md:text-[34px] leading-[36px] md:leading-[45px]">
              {t("joinBefreshText")}
            </h2>
          </div>

          <div className="bg-[#F8F6F5] rounded-[20px]">
            <div className="grid gap-[25px] items-center lg:gap-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {/* ContactInfo */}
              <ContactInfo />

              <div className="xl:col-span-2 px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] py-[30px] md:py-[50px]">
                <form
                  className="space-y-[25px]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <Input
                      id="name"
                      placeholder={t("yourName")}
                      register={register}
                      errors={errors}
                      validate={(value) => (value?.length > 3 ) || t("nameError")}
                      required
                    />

                    <Input
                      id="phone"
                      placeholder={t("yourNumber")}
                      register={register}
                      errors={errors}
                      required
                      validate={(value) => (value?.length === 10 && /^(05|٠٥)/.test(value)) || t("phoneNumberError")}
                    />
                  </div>

                  <TextArea
                    id="message"
                    placeholder={t("enterMessage")}
                    register={register}
                    errors={errors}
                    required
                  />

                  <div className="text-center">
                    <Button
                      label={t("sendYourMessage")}
                      classAtts="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
