import React from "react";
import Nav from "../components/Nav";
import Screen from "../components/Screen";
import { Formik } from 'formik'
import * as Yup from 'yup'

// const validitionSchema = Yup.object({
//   userName,
//   userPhone,
//   name,
//   type,
//   category,
//   color,
//   password,
//   image,
//   description,
//   city,
//   area,
// })

// const initialValues = {

// }

const handleSubmit = async (values, {setSubmitting}) => {

}

export default function AddPost() {
  return (
    <Screen>
      <Nav />
      <Formik>

      </Formik>
    </Screen>
  );
}