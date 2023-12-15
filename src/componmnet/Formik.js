import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Formik() {
  const initialValues = {
    name: "",
    Phone: "",
    Address: "",
  };

  const validationSchema = Yup.object({ 
    name: Yup.string()
      .required("Enter your name")
      .min(2, "Name must be at least 2 characters")
      .max(25, "Name can't exceed 25 characters"),
    Phone: Yup.number()
      .typeError("Phone must be a number")
      .required("Enter your phone number")
      .test(
        "len",
        "Phone number must be exactly 10 digits",
        (val) => val.toString().length === 10
      ),
    Address: Yup.string()
      .min(4, "Address must be at least 4 characters")
      .required("Enter your Address"),
  });

  const onSubmit = (values) => {
    console.log("Form values:", values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="pl-10">
        <div className="flex-col">
          <label htmlFor="name" className="pl-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="border-2 border-black mls-2"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <p className="text-red-500">{formik.errors.name}</p>
          )}
          <br />
          <label htmlFor="Phone" className="pl-2">
            Phone:
          </label>
          <input
            type="text"
            name="Phone"
            placeholder="Enter your Phone"
            className="border-2 border-black mls-2"
            value={formik.values.Phone}
            onChange={formik.handleChange}
          />
          {formik.errors.Phone && (
            <p className="text-red-500">{formik.errors.Phone}</p>
          )}
          <br />
          <label htmlFor="Address" className="pl-2">
            Address:
          </label>
          <input
            type="text"
            name="Address"
            placeholder="Enter your Address"
            className="border-2 border-black mls-2"
            value={formik.values.Address}
            onChange={formik.handleChange}
          />
          {formik.errors.Address && (
            <p className="text-red-500">{formik.errors.Address}</p>
          )}
          <button type="submit" className="bg-green-700 rounded-md ml-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default Formik;
