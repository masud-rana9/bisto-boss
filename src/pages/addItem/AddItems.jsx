import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import AppFormInput from "../shared/formInput/AppFormInput";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted Data:", data);
  };

  return (
    <div className="">
      <SectionTitle header="Add an Item" headerTitle="What's New" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AppFormInput
          name="itemName"
          label="Item Name"
          placeholder="Enter item name"
          validation={{ required: true }}
          register={register}
          errors={errors}
        />

        <AppFormInput
          name="itemDescription"
          label="Item Description"
          placeholder="Enter item description"
          validation={{ required: false }}
          register={register}
          errors={errors}
        />

        <AppFormInput
          name="price"
          label="Price"
          type="number"
          placeholder="Enter item price"
          validation={{ required: true }}
          register={register}
          errors={errors}
        />

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItems;
