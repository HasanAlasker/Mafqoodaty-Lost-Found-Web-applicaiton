import React from "react";
import PostCard from "./PostCard";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(4, "كلمة السر غير صحيحة")
    .required("كلمة المرور مطلوبة"),
});

export default function PasswordCard() {

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      const result = await addPost(values);

      if (result) {
        resetForm();
        alert("تم النشر بنجاح!");
      } else {
        setErrors({ submit: errMsg });
      }
    } catch (error) {
      setErrors({ submit: "An unexpected error occurred" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PostCard style={{padding:"1rem"}}>
      <Formik validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, errors }) => (
          <Form>
            <div className="formInput">
              <label htmlFor="password">ادخل كلمة السر</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="كلمة السر"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {errors.submit && <div className="error">{errors.submit}</div>}

            <button
              className="formBtn small"
              type="submit"
              disabled={isSubmitting}
              style={{marginBottom: "1rem"}}
            >
              {isSubmitting ? "تحقق..." : "تحقق"}
            </button>
          </Form>
        )}
      </Formik>
    </PostCard>
  );
}
