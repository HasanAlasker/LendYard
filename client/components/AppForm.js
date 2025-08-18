import React from "react";
import { View, StyleSheet } from "react-native";

import { Formik } from "formik";

function AppForm({ children, initialValues, validationSchema, handleSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
        { () => (
            <>
              {children}
            </>
        )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppForm;
