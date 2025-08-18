import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import ScrollScreen from "../../components/ScrollScreen";
import Navbar from "../../components/Navbar";
import DropBox from "../../components/DropBox";
import AddImageBtn from "../../components/AddImageBtn";
import FormBtn from "../../components/FormBtn";
import ErrorMessage from "../../components/ErrorMessage";
import FormikDropBox from "../../components/FormikDropBox";

import { Formik } from "formik";
import * as Yup from "yup";

import {
  areas,
  categories,
  items,
  cities,
  condition,
  getAreasByCity,
  getItemsByCategory,
} from "../../constants/DropOptions";

const schema = Yup.object().shape({
  category: Yup.string()
    .required("Please select a category")
    .oneOf(
      categories.map((cat) => cat.value),
      "Please select a valid category"
    ),

  item: Yup.string()
    .required("Please select an item")
    .test(
      "item-matches-category",
      "Please select a valid item for this category",
      function (value) {
        const { category } = this.parent;
        if (!category || !value) return true;

        const categoryItems = getItemsByCategory(category);
        return categoryItems.some((item) => item.value === value);
      }
    ),

  city: Yup.string()
    .required("Please select a city")
    .oneOf(
      cities.map((city) => city.value),
      "Please select a valid city"
    ),

  area: Yup.string()
    .required("Please select an area")
    .test(
      "area-matches-city",
      "Please select a valid area for this city",
      function (value) {
        const { city } = this.parent;
        if (!city || !value) return true;

        const cityAreas = getAreasByCity(city);
        return cityAreas.some((area) => area.value === value);
      }
    ),

  condition: Yup.string()
    .required("Please select item condition")
    .oneOf(
      condition.map((cond) => cond.value),
      "Please select a valid condition"
    ),

  image: Yup.mixed()
    .required("Please add an image")
    .test("file-type", "Please select a valid image file", (value) => {
      if (!value) return false;
      return value.uri || typeof value === "string";
    }),
});


function Post(props) {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const initialValues = {
    category: "",
    item: "",
    city: "",
    area: "",
    condition: "",
    image: null,
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, setStatus, resetForm }) => {
    console.log("Post form values:", values);
    setHasBeenSubmitted(true); // Mark form as submitted

    // Simulate API call
    setTimeout(() => {
      try {
        // Your API call here
        setStatus({ type: "success", message: "Item posted successfully!" });
        resetForm();
        setHasBeenSubmitted(false); // Reset submission state
      } catch (error) {
        setStatus({
          type: "error",
          message: "Failed to post item. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    }, 2000);
  };

  return (
    <SafeScreen>
      <ScrollScreen>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            setFieldValue,
            handleSubmit,
            isSubmitting,
            isValid,
            setStatus,
          }) => {
            // Dynamic items and areas state
            const [availableItems, setAvailableItems] = useState([]);
            const [availableAreas, setAvailableAreas] = useState([]);

            // Update available items when category changes
            useEffect(() => {
              if (values.category) {
                const categoryItems = getItemsByCategory(values.category);
                setAvailableItems(categoryItems);

                const currentItemValid = categoryItems.some(
                  (item) => item.value === values.item
                );
                if (values.item && !currentItemValid) {
                  setFieldValue("item", "");
                }
              } else {
                setAvailableItems([]);
                if (values.item) {
                  setFieldValue("item", "");
                }
              }
            }, [values.category]);

            // Update available areas when city changes
            useEffect(() => {
              if (values.city) {
                const cityAreas = getAreasByCity(values.city);
                setAvailableAreas(cityAreas);

                const currentAreaValid = cityAreas.some(
                  (area) => area.value === values.area
                );
                if (values.area && !currentAreaValid) {
                  setFieldValue("area", "");
                }
              } else {
                setAvailableAreas([]);
                if (values.area) {
                  setFieldValue("area", "");
                }
              }
            }, [values.city]);

            return (
              <>
                {/* Image Upload */}
                <AddImageBtn
                  image={values.image}
                  onImageChange={(image) => {
                    setFieldValue("image", image);
                    setStatus(null);
                  }}
                  error={hasBeenSubmitted && errors.image}
                  errorMessage={errors.image}
                />

                {/* Category Dropdown */}
                <FormikDropBox
                  name="category"
                  placeholder="Select Category"
                  items={categories}
                  hasBeenSubmitted={hasBeenSubmitted}
                />

                {/* Item Dropdown */}
                <FormikDropBox
                  name="item"
                  placeholder="Select Item"
                  items={availableItems}
                  disabled={!values.category || availableItems.length === 0}
                  hasBeenSubmitted={hasBeenSubmitted}
                />

                {/* City Dropdown */}
                <FormikDropBox
                  name="city"
                  placeholder="Select City"
                  items={cities}
                  hasBeenSubmitted={hasBeenSubmitted}
                />

                {/* Area Dropdown */}
                <FormikDropBox
                  name="area"
                  placeholder="Select Area"
                  items={availableAreas}
                  disabled={!values.city || availableAreas.length === 0}
                  hasBeenSubmitted={hasBeenSubmitted}
                />

                {/* Condition Dropdown */}
                <FormikDropBox
                  name="condition"
                  placeholder="Select Condition"
                  items={condition}
                  hasBeenSubmitted={hasBeenSubmitted}
                />

                {/* Submit Button */}
                <FormBtn
                  title={isSubmitting ? "Posting..." : "Post"}
                  onPress={() => {
                    setHasBeenSubmitted(true);
                    handleSubmit();
                  }}
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </>
            );
          }}
        </Formik>
      </ScrollScreen>
      <Navbar />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Post;
