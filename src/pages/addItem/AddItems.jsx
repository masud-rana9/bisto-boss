import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import AppFormInput from "../shared/formInput/AppFormInput";
import AppSelectorInput from "../shared/formInput/AppSelectorInput";
//import AppTextAreaInput from "../shared/formInput/AppTextAreaInput ";
import AppImageUpload from "../shared/formInput/AppImageUpload ";
import AppTextAreaInput from "../shared/formInput/AppImageUpload";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log("Form Submitted Data:", data);

    //image up;oad to img bb te and then get a url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.itemName,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipeDetails,
        image: res.data.data.display_url,
      };
      const menuRes = axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if ((await menuRes).data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  const itemCategoryOptions = [
    { value: "salad", label: "Salad" },
    { value: "pizza", label: "Pizza" },
    { value: "soup", label: "Soup" },
    { value: "dessert", label: "Dessert" },
    { value: "drinks", label: "Drinks" },
  ];

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

        <div className="grid lg:grid-cols-2 grid-cols-1">
          <AppSelectorInput
            name="category"
            label="Category"
            options={itemCategoryOptions} // Pass the options array
            validation={{ required: true }}
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
        </div>
        <AppTextAreaInput
          name="recipeDetails"
          label="Recipe Details"
          placeholder="Enter the recipe details here"
          validation={{ required: true }}
          register={register}
          errors={errors}
        />
        <AppImageUpload
          name="image"
          label="Upload Image"
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
