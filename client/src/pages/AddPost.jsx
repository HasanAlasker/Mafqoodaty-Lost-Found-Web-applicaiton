import React from "react";
import Nav from "../components/Nav";
import Screen from "../components/Screen";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createPost } from "../api/posts"; // Import your API function

const validationSchema = Yup.object({
  userName: Yup.string()
    .min(2, "اسم المستخدم يجب أن يكون حرفين على الأقل")
    .max(25, "اسم المستخدم يجب ألا يزيد عن 25 حرف")
    .required("اسم المستخدم مطلوب")
    .trim(),

  userPhone: Yup.string()
    .required("رقم الهاتف مطلوب")
    .matches(/^[0-9+\-\s()]+$/, "صيغة رقم الهاتف غير صحيحة")
    .trim(),

  name: Yup.string()
    .max(100, "اسم الشيء يجب ألا يزيد عن 100 حرف")
    .required("اسم الشيء مطلوب")
    .trim(),

  type: Yup.string()
    .oneOf(["found", "lost"], "النوع يجب أن يكون إما مفقود أو موجود")
    .required("النوع مطلوب"),

  category: Yup.string()
    .oneOf(
      [
        "phone",
        "keys",
        "wallet",
        "bag",
        "pet",
        "documents",
        "jewelry",
        "other",
      ],
      "الفئة غير صحيحة"
    )
    .required("الفئة مطلوبة"),

  color: Yup.string().trim().notRequired(),

  password: Yup.string()
    .min(4, "كلمة المرور يجب أن تكون 4 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),

  image: Yup.mixed().notRequired(),

  description: Yup.string()
    .max(500, "الوصف يجب ألا يزيد عن 500 حرف")
    .required("الوصف مطلوب")
    .trim(),

  city: Yup.string().required("المدينة مطلوبة").trim(),

  area: Yup.string().required("المنطقة مطلوبة").trim(),
});

const initialValues = {
  userName: "",
  userPhone: "",
  name: "",
  type: "",
  category: "",
  color: "",
  password: "",
  // image: null,
  description: "",
  city: "",
  area: "",
};

const handleSubmit = async (
  values,
  { setSubmitting, resetForm, setErrors }
) => {
  try {
    const result = await createPost(values);

    if (result.ok) {
      console.log("Post created successfully:", result.data);
      resetForm();
      // Navigate to success page or show success message
    } else {
      setErrors({ submit: result.error });
    }
  } catch (error) {
    setErrors({ submit: "An unexpected error occurred" });
  } finally {
    setSubmitting(false);
  }
};

export default function AddPost() {
  return (
    <Screen>
      <Nav />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            {/* Add your form fields here */}
            <div>
              <label htmlFor="userName">اسم المستخدم</label>
              <Field type="text" name="userName" id="userName" />
              <ErrorMessage name="userName" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="userPhone">رقم الهاتف</label>
              <Field type="tel" name="userPhone" id="userPhone" />
              <ErrorMessage
                name="userPhone"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="type">النوع</label>
              <Field as="select" name="type" id="type">
                <option value="">اختر النوع</option>
                <option value="found">موجود</option>
                <option value="lost">مفقود</option>
              </Field>
              <ErrorMessage name="type" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="category">الفئة</label>
              <Field as="select" name="category" id="category">
                <option value="">اختر الفئة</option>
                <option value="phone">هاتف</option>
                <option value="keys">مفاتيح</option>
                <option value="wallet">محفظة</option>
                <option value="bag">حقيبة</option>
                <option value="pet">حيوان أليف</option>
                <option value="documents">وثائق</option>
                <option value="jewelry">مجوهرات</option>
                <option value="other">أخرى</option>
              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="name">اسم الشيء</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="color">اللون</label>
              <Field type="text" name="color" id="color" />
              <ErrorMessage name="color" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="description">الوصف</label>
              <Field as="textarea" name="description" id="description" />
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="city">المدينة</label>
              <Field type="text" name="city" id="city" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="area">المنطقة</label>
              <Field type="text" name="area" id="area" />
              <ErrorMessage name="area" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">
                كلمة المرور (للتعديل/الحذف لاحقاً)
              </label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {errors.submit && <div className="error">{errors.submit}</div>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Post"}
            </button>
          </Form>
        )}
      </Formik>
    </Screen>
  );
}
