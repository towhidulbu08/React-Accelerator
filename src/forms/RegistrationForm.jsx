import React from "react";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import NumberInput from "../components/NumberInput";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  console.log(fields);

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Basic Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-200"
              } `}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 15,
                  message: "Username cannot exceed 15 characters",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-200"
              } `}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </Field>
          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", {
                required: "Full Name  is required",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fname ? "border-red-500" : "border-gray-200"
              } `}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter Full Name"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <Controller
              defaultValue={0}
              name="age"
              control={control}
              render={({ field: { ref, ...field } }) => {
                return (
                  <NumberInput
                    id="age"
                    className={`p-2 border box-border w-[300px] rounded-md ${
                      errors.age ? "border-red-500" : "border-gray-200"
                    } `}
                    {...field}
                  />
                );
              }}
              rules={{
                max: {
                  value: 100,
                  message: "Age Must be Between 0 and 100",
                },
              }}
            ></Controller>
          </Field>
        </FieldSet>

        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex justify-between items-center w-max"
              >
                <Field
                  label="Social Name"
                  error={errors[`socials[${index}].name`]}
                >
                  <input
                    {...register(`socials[${index}].name`)}
                    className={`p-2 border box-border w-[300px] rounded-md ${
                      errors[`socials[${index}].name`]
                        ? "border-red-500"
                        : "border-gray-200"
                    } `}
                    type="text"
                    name={`socials[${index}].name`}
                    id={`socials[${index}].name`}
                    placeholder=" Your Social Id Name"
                  />
                </Field>
                <Field label="URL" error={errors[`socials[${index}].name`]}>
                  <input
                    {...register(`socials[${index}].url`)}
                    className={`p-2 border box-border w-[300px] rounded-md ${
                      errors[`socials[${index}].name`]
                        ? "border-red-500"
                        : "border-gray-200"
                    } `}
                    type="text"
                    name={`socials[${index}].url`}
                    id={`socials[${index}].url`}
                    placeholder="Your Social Id Url"
                  />
                </Field>
                <button onClick={() => remove(index)}>&#8722;</button>
              </div>
            );
          })}
          <button
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A Social Handle
          </button>
        </FieldSet>

        <div>{errors?.root?.random?.message}</div>

        <Field>
          <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 m-auto">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
