import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import firestore from Firebase
import { app } from "../../firebase";
import { useTranslation } from "react-i18next";
import { GoogleSpreadsheet } from "google-spreadsheet";

import axios from "axios";

import StudentInfoSection from "./StudentInfoSection";
import SchoolInfoSection from "./SchoolInfoSection";
import ContactSection from "./ContactSection";
import AcademicSupportSection from "./AcademicSupportSection";
import ConfirmationSection from "./ConfirmationSection";
import PhotoPermissionSection from "./PhotoPermissionSection";

import "./Form.css";
import Loading from "../Loading/Loading";

import credentials from "../../sos-224-form-data-5fac1af363b5.json";

const fireStore = getFirestore(app);

const SHEET_ID = "1kC4x6FljAjD7l-FnV0DIWpOhyW6CYS7Jm11vpl8Pv0E"; // Replace with your actual Sheet ID
const API_KEY = "AIzaSyAqG33xSQ6qscELEPPhiOp76AvKdTslzNk"; // Replace with the path to your credentials JSON file

const FormTwo = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const submitFormDataToFirestore = async (formData) => {
    try {
      // Call addDoc asynchronously using await
      setLoading(true);
      const docRef = await addDoc(collection(fireStore, "form-data"), formData);
      setLoading(false);

      // Show success alert
      Swal.fire({
        icon: "success",
        title: t("form.submitted"),
        text: t("form.success_message"),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: t("form.failed"),
        text: t("form.failed_message"),
      });
    }
  };

  // const onSubmit = async (data) => {
  //   await submitFormDataToFirestore(data); // Store form data in Firestore
  // };

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post(
        // "https://sheet.best/api/sheets/4949c1d1-d36c-48c2-916b-dad5ba50c2bb",
        // "https://sheet.best/api/sheets/45611840-4127-450b-b6c9-d91bf83b7bb1",

        "https://sheet.best/api/sheets/f0355efe-d987-4581-8ebd-668c757c7c51",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response);

      if (response.status === 200) {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: t("form.submitted"),
          text: t("form.success_message"),
        });
      } else {
        throw new Error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: t("form.failed"),
        text: t("form.failed_message"),
      });
    }
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <StudentInfoSection register={register} errors={errors} />
        <br />
        <SchoolInfoSection register={register} errors={errors} />
        <br />
        <ContactSection register={register} errors={errors} />
        <br />
        <AcademicSupportSection
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
        <br />
        <ConfirmationSection register={register} errors={errors} />
        <br />
        <PhotoPermissionSection register={register} errors={errors} />
        <br />
        <div className="submit-btn-box">
          <button type="submit">{t("buttons.submit")}</button>
        </div>
      </form>

      {loading && <Loading />}
    </div>
  );
};

export default FormTwo;
