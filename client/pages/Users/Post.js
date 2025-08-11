import React from 'react';
import { StyleSheet } from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import ScrollScreen from '../../components/ScrollScreen';
import Navbar from '../../components/Navbar';
import DropBox from '../../components/DropBox';
import AddImageBtn from '../../components/AddImageBtn';
import FormBtn from '../../components/FormBtn';

import {Formik} from 'formik'
import * as Yup from 'yup'

import {areas, categories, items, cities, condition, getAreasByCity, getItemsByCategory } from '../../constants/DropOptions'

const schema = Yup.object().shape({
  category: Yup.string()
    .required('Please select a category')
    .oneOf(
      categories.map(cat => cat.value),
      'Please select a valid category'
    ),

    item: Yup.string()
      .required('Please select an item')
      .test('item-matches-category', 'Please select a valid item for this category', function(value) {
      const { category } = this.parent;
      if (!category || !value) return true; // Let required handle empty values
      
      const categoryItems = getItemsByCategory(category);
      return categoryItems.some(item => item.value === value);
    }),

    city: Yup.string()
    .required('Please select a city')
    .oneOf(
      cities.map(city => city.value),
      'Please select a valid city'
    ),

    area: Yup.string()
    .required('Please select an area')
    .test('area-matches-city', 'Please select a valid area for this city', function(value) {
      const { city } = this.parent;
      if (!city || !value) return true;
      
      const cityAreas = getAreasByCity(city);
      return cityAreas.some(area => area.value === value);
    }),

    condition: Yup.string()
    .required('Please select item condition')
    .oneOf(
      condition.map(cond => cond.value),
      'Please select a valid condition'
    ),

    image: Yup.mixed()
    .required('Please add an image')
    .test('file-type', 'Please select a valid image file', (value) => {
      if (!value) return false;
      
      return value.uri || typeof value === 'string';
    }),
})

function Post(props) {
  return (
    <SafeScreen>
      <ScrollScreen>
        {/* <BackContainer><BackBtn></BackBtn></BackContainer> */}
        <AddImageBtn></AddImageBtn>
        <DropBox placeholder={"Category"} items={categories} ></DropBox>
        <DropBox placeholder={"Item"} items={items} ></DropBox>
        <DropBox placeholder={"City"} items={cities} ></DropBox>
        <DropBox placeholder={"Area"} items={areas} ></DropBox>
        <DropBox placeholder={"Condition"} items={condition} ></DropBox>
        <FormBtn title={"Post"}></FormBtn>
      </ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container:{},
})

export default Post;