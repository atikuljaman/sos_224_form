import React from "react";
import { useTranslation } from "react-i18next";

const ConfirmationSection = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <h3>
        {t("sections.confirmation.title")} <span className="star">*</span>
      </h3>
      <div className="input-container">
        <label htmlFor="">{t("sections.confirmation.labels.subTitle")}</label>
      </div>

      <br />
      <label htmlFor="">
        <strong>{t("sections.confirmation.labels.generalConditions")} </strong>
      </label>

      <br />
      <br />

      <ul style={{ position: "relative" }}>
        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.registration"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.payments"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.cancellations"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.latenessAndAbsences"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.behavior"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.confidentiality"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.serviceModifications"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.copyright"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.termination"),
          }}
        ></li>

        <br />

        <li
          dangerouslySetInnerHTML={{
            __html: t("sections.confirmation.labels.additionalInformation"),
          }}
        ></li>

        <br />

        <li className="checkbox-container">
          <input
            type="checkbox"
            name="confirmation"
            id="confirmation"
            {...register("confirmation", { required: true })}
          />
          <label htmlFor="confirmation">
            {t("sections.confirmation.labels.asTheParentGuardian")}
          </label>
        </li>

        {/* Display error message if there's an error */}
        {errors.confirmation && (
          <span className="error-message">{t("form.error")}</span>
        )}
      </ul>
    </>
  );
};

export default ConfirmationSection;
