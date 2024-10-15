import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(useLoaderData);
  console.log(item);
  return (
    <div className="">
      <SectionTitle
        header="Update Item"
        headerTitle="refresh info"
      ></SectionTitle>
    </div>
  );
};

export default UpdateItem;
