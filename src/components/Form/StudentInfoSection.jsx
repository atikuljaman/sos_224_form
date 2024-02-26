import React from "react";

import { useTranslation } from "react-i18next";

const StudentInfoSection = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t("sections.student_info.title")}</h3>
      <div className="input-container">
        <div className="box">
          <label htmlFor="name">
            {t("sections.student_info.labels.firstName")}{" "}
            <span className="star">*</span>{" "}
          </label>
          <input
            type="text"
            placeholder={t("sections.student_info.placeholders.firstName")}
            name="firstName"
            // {...register("firstName", { required: true })}
            {...register("Prénom", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.firstName && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors.Prénom && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
        <div className="box">
          <label htmlFor="firstName">
            {t("sections.student_info.labels.lastName")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder={t("sections.student_info.placeholders.lastName")}
            // {...register("lastName", { required: true })}
            {...register("Nom de famille", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.lastName && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Nom de famille"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
        <div className="box">
          <label htmlFor="dob">
            {t("sections.student_info.labels.dateOfBirth")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            name="dob"
            placeholder={t("sections.student_info.placeholders.dateOfBirth")}
            // {...register("dateOfBirth", { required: true })}
            {...register("Date de naissance", { required: true })}
          />

          {/* Display error message if there's an error */}
          {errors["Date de naissance"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
      </div>

      <br />

      <div className="input-container">
        <div className="box">
          <label htmlFor="placeOfBirth">
            {t("sections.student_info.labels.placeOfBirth")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder={t("sections.student_info.placeholders.placeOfBirth")}
            name="placeOfBirth"
            // {...register("placeOfBirth", { required: true })}
            {...register("Lieu de naissance", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.placeOfBirth && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Lieu de naissance"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
        <div className="box">
          <label htmlFor="guardiansName">
            {t("sections.student_info.labels.legalGuardianName")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder={t(
              "sections.student_info.placeholders.legalGuardianName"
            )}
            name="guardiansName"
            // {...register("guardiansName", { required: true })}
            {...register("Nom du tuteur", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.guardiansName && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Nom du tuteur"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentInfoSection;
