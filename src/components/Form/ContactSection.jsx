import React from "react";
import { useTranslation } from "react-i18next";

const ContactSection = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t("sections.contact.title")}</h3>
      <div className="input-container">
        <div className="box">
          <label htmlFor="studentAddress">
            {t("sections.contact.labels.studentAddress")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder={t("sections.contact.placeholders.studentAddress")}
            name="studentAddress"
            // {...register("studentAddress", { required: true })}
            {...register("Adresse de l étudiant", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.studentAddress && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Adresse de l étudiant"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
        <div className="box">
          <label htmlFor="contactNumber">
            {t("sections.contact.labels.contactNumber")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder={t("sections.contact.placeholders.contactNumber")}
            name="contactNumber"
            // {...register("contactNumber", { required: true })}
            {...register("Numéro de contact", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.contactNumber && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Numéro de contact"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
        <div className="box">
          <label htmlFor="email">
            {t("sections.contact.labels.email")} <span className="star">*</span>
          </label>
          <input
            type="email"
            placeholder={t("sections.contact.placeholders.email")}
            name="email"
            // {...register("email", { required: true })}
            {...register("Courriel", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.email && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Courriel"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
      </div>

      <br />

      <h3>{t("sections.contact.labels.hearAboutUs")}</h3>
      <div className="input-container">
        <div className="box">
          <input
            type="text"
            placeholder={t("sections.contact.placeholders.hearAboutUs")}
            name="heardAboutUs"
            // {...register("heardAboutUs", { required: true })}
            {...register("Comment avez-vous entendu parler de nous ?", {
              required: true,
            })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.heardAboutUs && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Comment avez-vous entendu parler de nous ?"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
