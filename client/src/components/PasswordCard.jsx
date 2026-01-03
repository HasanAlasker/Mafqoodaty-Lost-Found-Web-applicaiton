import React from "react";
import PostCard from "./PostCard";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { verifyPassword } from "../api/posts";
import { usePost } from "../context/postContext";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(4, "كلمة السر غير صحيحة")
    .required("كلمة المرور مطلوبة"),
});

export default function PasswordCard({
  id,
  setPassword,
  setChecking,
  setEditing,
  isDelete,
  onChecked,
  type,
}) {
  const { removePost } = usePost();

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      const result = await verifyPassword(id, values);

      if (result?.ok && isDelete) {
        let text = "تريد الحذف؟";
        if (confirm(text) === true) {
          try {
            // Fix: pass values.password, not values
            const deleteResult = await removePost(id, values.password, type);
            if (deleteResult?.ok) {
              alert("تم الحذف بنجاح");
              setChecking(false);
            } else {
              alert("حصل خطأ, جرب مرة أخرى");
            }
          } catch (err) {
            alert("حصل خطأ, جرب مرة أخرى");
          }
        }
        resetForm();
      } else if (result?.ok && !isDelete) {
        // Fix: combine the if-else logic
        setPassword(values.password);
        setChecking(false);
        setEditing(true);
        resetForm();
      } else {
        setErrors({
          submit: "كلمة السر غير صحيحة",
        });
      }
    } catch (error) {
      setErrors({
        submit: error.message || "حدث خطأ غير متوقع",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PostCard style={{ padding: "1rem" }}>
      <Formik
        initialValues={{ password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className="bigFormCont">
            <div className="topPassCard">
              <div className="formInput">
                <label htmlFor="password">ادخل كلمة السر</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="كلمة السر"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              {errors.submit && <div className="error">{errors.submit}</div>}
            </div>

            <div className="bottomPassCard">
              <button
                className="formBtn"
                type="submit"
                disabled={isSubmitting}
                style={{ margin: "0rem" }}
              >
                {isSubmitting ? "جاري التحقق..." : "تحقق"}
              </button>

              <button
                className="formBtn"
                type="cancel"
                disabled={isSubmitting}
                style={{ margin: "0rem", background: "red" }}
                onClick={() => setChecking(false)}
              >
                {isSubmitting ? "جاري ..." : "رجوع"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </PostCard>
  );
}
