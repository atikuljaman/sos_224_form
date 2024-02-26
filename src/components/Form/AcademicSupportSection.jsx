import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AcademicSupportSection = ({ register, errors, watch }) => {
  const academicSupportMode = watch("Mode de soutien académique");
  const demo = watch("proctoredStudiesGroup");
  const { t, i18n } = useTranslation();

  const [transLatedAcademicSupportMode, setTransLatedAcademicSupportMode] =
    useState();

  useEffect(() => {
    // Function to update translated academic support mode
    const updateTranslatedMode = () => {
      let translatedMode;
      if (
        academicSupportMode === "Individual in-home lessons" ||
        academicSupportMode === "Cours individuel à domicile"
      ) {
        setTransLatedAcademicSupportMode("IndividualLessonsAtHome");
      } else if (
        academicSupportMode === "Individual lessons at our center" ||
        academicSupportMode === "Cours individuel au centre"
      ) {
        setTransLatedAcademicSupportMode("IndividualLessonsInOurCenter");
      } else if (
        academicSupportMode === "Individual online course" ||
        academicSupportMode === "Cours individuel en ligne"
      ) {
        setTransLatedAcademicSupportMode("IndividualOnlineCourse");
      } else if (
        academicSupportMode === "Supervised studies" ||
        academicSupportMode === "Études surveillées"
      ) {
        setTransLatedAcademicSupportMode("supervisedStudies");
      } else {
        translatedMode = academicSupportMode;
        setTransLatedAcademicSupportMode(translatedMode);
      }
    };

    // Update translated academic support mode initially and on language change
    updateTranslatedMode();
    const unsubscribe = () => i18n.on("languageChanged", updateTranslatedMode);
    return () => {
      unsubscribe();
    };
  }, [academicSupportMode, i18n, t]);

  console.log(demo);

  return (
    <>
      <h3>{t("sections.academic_support.title")}</h3>
      <div className="input-container">
        <div className="box">
          <label>
            {t("sections.academic_support.labels.checkOptions")}{" "}
            <span className="star">*</span>
          </label>

          <br />
          <div className="radio-btn-box">
            <div>
              <div>
                <input
                  type="radio"
                  // name="academicSupportMode"

                  name="Mode de soutien académique"
                  id="home-lessons"
                  value={t(
                    "sections.academic_support.placeholders.IndividualLessonsAtHome"
                  )}
                  // {...register("academicSupportMode", { required: true })}
                  {...register("Mode de soutien académique", {
                    required: true,
                  })}
                />
              </div>
              <label htmlFor="home-lessons">
                {t(
                  "sections.academic_support.placeholders.IndividualLessonsAtHome"
                )}
              </label>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  // name="academicSupportMode"

                  name="Mode de soutien académique"
                  id="center-lessons"
                  value={t(
                    "sections.academic_support.placeholders.IndividualLessonsInOurCenter"
                  )}
                  // {...register("academicSupportMode", { required: true })}
                  {...register("Mode de soutien académique", {
                    required: true,
                  })}
                />
              </div>
              <label htmlFor="center-lessons">
                {t(
                  "sections.academic_support.placeholders.IndividualLessonsInOurCenter"
                )}
              </label>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  // name="academicSupportMode"
                  name="Mode de soutien académique"
                  value={t(
                    "sections.academic_support.placeholders.IndividualOnlineCourse"
                  )}
                  id="online-course"
                  // {...register("academicSupportMode", { required: true })}
                  {...register("Mode de soutien académique", {
                    required: true,
                  })}
                />
              </div>
              <label htmlFor="online-course">
                {t(
                  "sections.academic_support.placeholders.IndividualOnlineCourse"
                )}
              </label>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  name="Mode de soutien académique"
                  // name="academicSupportMode"
                  id="supervised-studies"
                  value={t(
                    "sections.academic_support.placeholders.supervisedStudies"
                  )}
                  // {...register("academicSupportMode", { required: true })}
                  {...register("Mode de soutien académique", {
                    required: true,
                  })}
                />
              </div>
              <label htmlFor="supervised-studies">
                {t("sections.academic_support.placeholders.supervisedStudies")}
              </label>
            </div>
          </div>
        </div>

        {/* Display error message if there's an error */}
        {/* {errors.academicSupportMode && (
          <span className="error-message">{t("form.error")}</span>
        )} */}
        {errors["Mode de soutien académique"] && (
          <span className="error-message">{t("form.error")}</span>
        )}
      </div>

      <br />

      {academicSupportMode && (
        <>
          <div className="input-container">
            <div className="box">
              <label htmlFor="subjectsForSupport">
                {/* {t("sections.academic_support.labels.IfYouChecked", {
                  academicSupportMode,
                })}{" "} */}
                {t("sections.academic_support.labels.IfYouChecked", {
                  academicSupportMode: t(
                    `sections.academic_support.placeholders.${transLatedAcademicSupportMode}`
                  ),
                })}{" "}
                <span className="star">*</span>
              </label>
              <input
                type="text"
                name="subjectsForSupport"
                placeholder={t(
                  "sections.academic_support.placeholders.ifYouChecked"
                )}
                // {...register("subjectsForSupport", { required: true })}
                {...register(
                  "Matières pour lesquelles un soutien est demandé",
                  { required: true }
                )}
              />
            </div>

            {/* Display error message if there's an error */}
            {/* {errors.subjectsForSupport && (
              <span className="error-message">{t("form.error")}</span>
            )} */}
            {errors["Matières pour lesquelles un soutien est demandé"] && (
              <span className="error-message">{t("form.error")}</span>
            )}
          </div>
        </>
      )}

      <br />

      <div className="input-container">
        <div className="box">
          <label htmlFor="proctoredStudiesGroup">
            {t("sections.academic_support.labels.protectedStudies")}{" "}
            {/* <span className="star">*</span> */}
          </label>

          <br />
          <div className="radio-btn-box radio-btn-box-1">
            <div>
              <div>
                <input
                  type="radio"
                  // name="proctoredStudiesGroup"
                  name="Groupe d études surveillées"
                  id="group-A"
                  // value="Group A: Wednesday 3:45 p.m. - 5:45 p.m. + Sunday 1:30 p.m. -
                  // 3:30 p.m."
                  value="Group A: Wednesday 3:45 p.m. - 5:45 p.m. + Sunday 1:30 p.m. -
                  3:30 p.m."
                  // {...register("proctoredStudiesGroup", { required: false })}
                  {...register("Groupe d études surveillées", {
                    required: false,
                  })}
                  // {...register("Groupe d études surveillées", {
                  //   required: false,
                  // })}
                />
              </div>
              <label htmlFor="group-A">
                {t(
                  "sections.academic_support.placeholders.proctoredStudiesGroupA"
                )}
              </label>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  // name="proctoredStudiesGroup"
                  name="Groupe d études surveillées"
                  id="group-b"
                  value="Group B: Monday 5:00 p.m. - 7:00 p.m. + Wednesday 3:45 p.m. -
                  5:45 p.m."
                  // {...register("proctoredStudiesGroup", { required: false })}
                  {...register("Groupe d études surveillées", {
                    required: false,
                  })}
                  // {...register("Groupe d études surveillées", {
                  //   required: false,
                  // })}
                />
              </div>
              <label htmlFor="group-b">
                {t(
                  "sections.academic_support.placeholders.proctoredStudiesGroupB"
                )}
              </label>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  // name="proctoredStudiesGroup"
                  name="Groupe d études surveillées"
                  id="group-c"
                  value="Group C: Monday 5:00 p.m. - 7:00 p.m. + Sunday 11:00 a.m. -
                  1:00 p.m."
                  // {...register("proctoredStudiesGroup", { required: false })}
                  {...register("Groupe d études surveillées", {
                    required: false,
                  })}

                  // {...register("Groupe d études surveillées", {
                  //   required: false,
                  // })}
                />
              </div>
              <label htmlFor="group-c">
                {t(
                  "sections.academic_support.placeholders.proctoredStudiesGroupC"
                )}
              </label>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  // name="proctoredStudiesGroup"
                  name="Groupe d études surveillées"
                  id="other"
                  value="Other"
                  // {...register("proctoredStudiesGroup", { required: false })}
                  {...register("Groupe d études surveillées", {
                    required: false,
                  })}

                  // {...register("Groupe d études surveillées", {
                  //   required: false,
                  // })}
                />
              </div>
              <label htmlFor="other" className="other-label">
                {t(
                  "sections.academic_support.placeholders.proctoredStudiesOther"
                )}
                <input
                  type="text"
                  className="other-input"
                  // {...register("otherProctoredStudiesGroup")}
                  {...register("otherProctoredStudiesGroup", {
                    required: false,
                  })}
                  // {...register("Groupe d études surveillées", {
                  //   required: false,
                  // })}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Display error message if proctoredStudiesGroup is not selected */}
        {/* {errors.proctoredStudiesGroup && (
          <span className="error-message">{t("form.error")}</span>
        )} */}
      </div>

      <br />

      <div className="input-container">
        <div className="box">
          <label htmlFor="name">
            <strong>
              {t("sections.academic_support.labels.entranceExam")}{" "}
              {/* <span className="star">*</span> */}
            </strong>
          </label>

          <br />
          <div className="radio-btn-box">
            <div>
              <div>
                <input
                  type="radio"
                  name="gymnasiumEntranceExam"
                  id="maturity"
                  value="Maturity"
                  // {...register("gymnasiumEntranceExam", { required: true })}
                  {...register("Examen d entrée au gymnase", {
                    required: false,
                  })}
                />
              </div>
              <label htmlFor="maturity">
                {t(
                  "sections.academic_support.placeholders.entranceExamMaturity"
                )}
              </label>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  name="gymnasiumEntranceExam"
                  id="general-culture"
                  value="General culture"
                  // {...register("gymnasiumEntranceExam", { required: false })}
                  {...register("Examen d entrée au gymnase", {
                    required: false,
                  })}
                />
              </div>
              <label htmlFor="general-culture">
                {t(
                  "sections.academic_support.placeholders.entranceExamGeneralCulture"
                )}
              </label>
            </div>
          </div>
        </div>

        {/* {errors.gymnasiumEntranceExam && (
          <span className="error-message">{t("form.error")}</span>
        )} */}
      </div>

      <br />

      <div className="input-container">
        <div className="box">
          <label htmlFor="additionalInformation">
            {t("sections.academic_support.labels.additionalInformation")}{" "}
            <span className="star">*</span>
          </label>
          <input
            type="text"
            name="additionalInformation"
            placeholder={t(
              "sections.academic_support.placeholders.additionalInformation"
            )}
            // {...register("additionalInformation", { required: true })}
            {...register("Informations supplémentaires", { required: true })}
          />
        </div>

        {/* {errors.additionalInformation && (
          <span className="error-message">{t("form.error")}</span>
        )} */}
        {errors["Informations supplémentaires"] && (
          <span className="error-message">{t("form.error")}</span>
        )}
      </div>
    </>
  );
};

export default AcademicSupportSection;
