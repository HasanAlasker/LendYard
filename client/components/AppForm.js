import { StyleSheet } from "react-native";
import { Formik } from "formik";

function AppForm({ children, initialValues, validationSchema, onSubmit, }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
