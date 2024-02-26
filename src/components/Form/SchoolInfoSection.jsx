import React from "react";
import { useTranslation } from "react-i18next";

const SchoolInfoSection = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t("sections.school_info.title")}</h3>
      <div className="input-container">
        <div className="box">
          <label htmlFor="currentSchool">
            {t("sections.school_info.labels.currentSchool")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder={t("sections.school_info.placeholders.currentSchool")}
            name="currentSchool"
            // {...register("currentSchool", { required: true })}
            {...register("École actuelle", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.establishmentNameAddress && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["École actuelle"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
        <div className="box">
          <label htmlFor="levelOfStudies">
            {t("sections.school_info.labels.levelOfStudies")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder={t("sections.school_info.placeholders.levelOfStudies")}
            name="levelOfStudies"
            // {...register("levelOfStudies", { required: true })}
            {...register(`Niveau d études`, { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.levelOfStudies && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Niveau d études"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
      </div>

      <br />

      <div className="input-container">
        <div className="box">
          <label htmlFor="typeOfInstitution">
            {t("sections.school_info.labels.typeOfEducation")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder={t("sections.school_info.placeholders.typeOfEducation")}
            name="typeOfInstitution"
            // {...register("typeOfInstitution", { required: true })}
            {...register("Type d établissement", { required: true })}
          />

          {/* Display error message if there's an error */}
          {/* {errors.typeOfInstitution && (
            <span className="error-message">{t("form.error")}</span>
          )} */}
          {errors["Type d établissement"] && (
            <span className="error-message">{t("form.error")}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default SchoolInfoSection;
