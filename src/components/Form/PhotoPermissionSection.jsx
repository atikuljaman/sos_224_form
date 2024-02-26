import React from "react";
import { useTranslation } from "react-i18next";

const PhotoPermissionSection = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="photo-permission-container"
        style={{ position: "relative" }}
      >
        <h3>
          {t("sections.photo_permission.title")} <span className="star">*</span>
        </h3>
        <br />
        <label htmlFor="">
          {t("sections.photo_permission.labels.subTitle")}
        </label>
        <br />
        <br />
        <label htmlFor="">
          {t("sections.photo_permission.labels.choiceBelow")}
        </label>

        <br />
        <br />

        <ul className="photo-permission-radio">
          <li className="radio-btn-box">
            <input
              type="radio"
              name="photoPermission"
              id="photoPermissionYes"
              value="yes"
              // {...register("photoPermission", { required: true })}
              {...register("Permission pour les photos", { required: true })}
            />
            <label htmlFor="photoPermissionYes">
              {t("sections.photo_permission.labels.iAuthorize")}
            </label>
          </li>
          <br />
          <li className="radio-btn-box">
            <input
              type="radio"
              name="photoPermission"
              id="photoPermissionNo"
              value="no"
              // {...register("photoPermission", { required: true })}
              {...register("Permission pour les photos", { required: true })}
            />
            <label htmlFor="photoPermissionNo">
              {t("sections.photo_permission.labels.iDoNotAuthorize")}
            </label>
          </li>
        </ul>

        {/* Display error message if there's an error */}
        {/* {errors.photoPermission && (
          <span className="error-message">{t("form.error")}</span>
        )} */}
        {errors["Permission pour les photos"] && (
          <span className="error-message">{t("form.error")}</span>
        )}

        <br />
        <label>
          {t("sections.photo_permission.labels.thankYouForChoosing")}
        </label>
      </div>
    </>
  );
};

export default PhotoPermissionSection;
