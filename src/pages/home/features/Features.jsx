import SectionTitle from "../../../components/SectionTitle";
import moment from "moment";
import "./Features.css";
const Features = () => {
  return (
    <section className="my-10 p-10 featuresimg bg-fixed bg-cover ">
      <SectionTitle
        header={"FROM OUR MENU"}
        headerTitle={"---Check it out---"}
      />
      <div className="flex gap-10 px-20 py-10 text-white">
        <img
          className="w-[600px] h-[400px]"
          src="/assets/featured.jpg"
          alt="Featured item"
        />
        <div>
          {/* Displaying formatted date */}
          <h2 className="text-2xl">{moment().format("MMMM D, YYYY")}</h2>
          <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
          <p className="text-xl  mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit
            deleniti dolorem cumque atque id rem, numquam ullam eum? Quibusdam.
          </p>
          <button className="mt-10 btn btn-outline border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
