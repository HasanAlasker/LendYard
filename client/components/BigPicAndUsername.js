import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import AppText from "../config/AppText";
import useThemedStyles from "../hooks/useThemedStyles";
import EditBtn from "./EditBtn";
import {
  selectImageFromLibrary,
  selectImageFromCamera,
} from "../functions/addImage";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../config/ThemeContext";

function BigPicAndUsername({
  userName,
  initialImage = null, // Optional initial image from parent
  isEdit,
  isPicDisabled = true,
  onImageChange, // Optional callback to inform parent of changes
  allowCamera = true
}) {
  const styles = useThemedStyles(getStyles);
  const {theme} = useTheme()
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(initialImage);

  const handleImageSelection = () => {
    if (allowCamera) {
      Alert.alert("Select Image", "Choose an option", [
        {
          text: "Camera",
          onPress: handleCameraPress,
        },
        {
          text: "Photo Library",
          onPress: handleLibraryPress,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } else {
      handleLibraryPress();
    }
  };

  const handleLibraryPress = async () => {
    setIsLoading(true);
    try {
      const imageUri = await selectImageFromLibrary({
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1],
      });

      console.log("Selected image URI:", imageUri);
      if (imageUri) {
        setSelectedImage(imageUri); // Set local state
        if (onImageChange) {
          onImageChange(imageUri); // Notify parent if callback exists
        }
      }
    } catch (error) {
      console.error("Error selecting image from library:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCameraPress = async () => {
    setIsLoading(true);
    try {
      const imageUri = await selectImageFromCamera({
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1],
      });

      console.log("Camera image URI:", imageUri);
      if (imageUri) {
        setSelectedImage(imageUri); // Set local state
        if (onImageChange) {
          onImageChange(imageUri); // Notify parent if callback exists
        }
      }
    } catch (error) {
      console.error("Error taking photo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImagePress = () => {
    if (selectedImage) {
      Alert.alert("Image Options", "What would you like to do?", [
        {
          text: "Change Image",
          onPress: handleImageSelection,
        },
        {
          text: "Remove Image",
          onPress: () => {
            setSelectedImage(null); // Clear local state
            if (onImageChange) {
              onImageChange(null); // Notify parent
            }
          },
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } else {
      handleImageSelection();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={isPicDisabled || isLoading}
        onPress={handleImagePress}
        activeOpacity={0.7}
        style={styles.imagePlaceholder}
      >
        <Image 
          style={styles.image} 
          source={selectedImage ? {uri: selectedImage} : require('../assets/Pics/defaultAvatar.png')}
        />
        {isEdit && <EditBtn />}
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <MaterialCommunityIcons name="loading" color={theme.purple} size={80}></MaterialCommunityIcons>
          </View>
        )}
      </TouchableOpacity>
      <AppText style={styles.text}>{userName}</AppText>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      marginTop: 40,
    },
    imagePlaceholder: {
      width: 150,
      height: 150,
      backgroundColor: theme.sec_text,
      borderRadius: 75,
      position: 'relative', // For loading overlay
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
      resizeMode: "cover",
    },
    text: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.main_text,
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      color: 'white',
      fontSize: 12,
    },
  });

export default BigPicAndUsername;