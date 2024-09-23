import { Link } from "react-router-dom";

const Ordercard = ({ img, name, description }) => {
  return (
    <div className="">
      <div className="card bg-base-100 w-auto shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link>
              <button className="btn btn-primary">Add to Card</button>
            </Link>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Ordercard;
