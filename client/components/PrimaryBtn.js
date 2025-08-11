import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../config/AppText";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";

function PrimaryBtn({
  title,
  onPress,
  isDisabled,
  isMine,
  iBorrowed,
  iRequested,
  status,
}) {
  const { theme } = useTheme();
  const styles = useThemedStyles(getStyles);

  const shouldBeDisabled = () => {
    if (isDisabled) return true;
    if (!isMine && status === "disabled") return true;
    if (isMine && status === "requested") return true; // Can't act while someone requested
    return false;
  };

  const disableButton = () => {
    return shouldBeDisabled() ? theme.ghost : theme.purple;
  };

  const renderBtnText = () => {
    if (isMine) {
      switch(status) {
        case 'available': return "Disable";
        case 'taken': return "Got it back";
        case 'disabled': return "Enable";
        case 'requested': return "Pending...";
        default: return "Manage";
      }
    }
    if (!isMine) {
      if (status === 'disabled') return 'Disabled';
      if (iRequested) return "Cancel Request";
      if (iBorrowed) return "Mark Returned";
      return "Request";
    }

    return title || "Action";
  };

  return (
    <TouchableOpacity
      disabled={shouldBeDisabled()}
      style={[styles.container, { backgroundColor: disableButton() }]}
    >
      <AppText style={styles.text}>{renderBtnText()}</AppText>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: theme.purple,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      paddingTop: 4,
      paddingBottom: 7,
      alignItems: "center",
      marginTop: 20,
    },
    text: {
      color: theme.always_white,
      fontSize: 18,
      textAlign: "center",
      fontWeight: "bold",
      alignSelf: "center",
    },
  });

export default PrimaryBtn;
