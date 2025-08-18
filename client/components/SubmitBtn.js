import { StyleSheet } from "react-native";
import FormBtn from "./FormBtn";
import { useFormikContext } from "formik";

function SubmitBtn({ submittingText='Submitting...', defaultText='Submit', setHasBeenSubmitted, ...otherProps }) {

  const { handleSubmit, isSubmitting, isValid } = useFormikContext();

  return (
    <FormBtn
      title={isSubmitting ? submittingText : defaultText}
      onPress={() => {
        if(setHasBeenSubmitted){
           setHasBeenSubmitted(true); 
        }
        handleSubmit();
      }}
      disabled={!isValid || isSubmitting}
      loading={isSubmitting}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubmitBtn;
