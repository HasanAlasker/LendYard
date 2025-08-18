import { useState } from "react";
import { StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import TopChunkProfile from "../../components/TopChunkProfile";
import InputBox from "../../components/InputBox";
import FormBtn from "../../components/FormBtn";
import ErrorMessage from "../../components/ErrorMessage";
import FormikInput from "../../components/FormikInput";

import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(25, "Name must not exceed 25 characters")
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .trim()
    .required("Name is required"),

  phone: Yup.string().test(
    "phone-validation",
    "Please enter a valid phone number",
    function (value) {
      if (!value || value.trim() === "") return true;
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      const isValidFormat = phoneRegex.test(value);
      const isValidLength = value.length >= 10 && value.length <= 15;
      return isValidFormat && isValidLength;
    }
  ),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required")
    .trim(),
});

function EditProfile({ userName, image, number, email, rating, sep }) {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const initialValues = {
    name: userName || "",
    phone: number || "",
    email: email || "",
  };

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    console.log("Profile form values:", values);
    setHasBeenSubmitted(true);

    setTimeout(() => {
      try {
        setStatus({ type: "success", message: "Profile updated successfully!" });
      } catch (error) {
        setStatus({ type: "error", message: "Failed to update profile." });
      } finally {
        setSubmitting(false);
      }
    }, 1500);
  };

  return (
    <SafeScreen>
      <TopChunkProfile
        userName={userName || "Hasan Alasker"}
        userPic={image || require("../../assets/Pics/hasan.png")}
        userRate={rating || 5}
        isPicDisabled={false}
        onPressPic={() => console.log("Profile pic pressed")}
        sep={sep || "Edit Info"}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <>
            <FormikInput
              name="name"
              placeholder="Name"
              hasBeenSubmitted={hasBeenSubmitted}
              penOn={true}
            />

            <FormikInput
              name="phone"
              placeholder="Phone"
              hasBeenSubmitted={hasBeenSubmitted}
              penOn={true}
              keyboardType="phone-pad"
            />

            <FormikInput
              name="email"
              placeholder="Email"
              hasBeenSubmitted={hasBeenSubmitted}
              penOn={true}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <FormBtn
              title={isSubmitting ? "Saving..." : "Save"}
              onPress={() => {
                setHasBeenSubmitted(true);
                handleSubmit();
              }}
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
            />
          </>
        )}
      </Formik>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default EditProfile;
