import Swal from "sweetalert2";
import UseMenu from "../../hooks/UseMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = UseMenu();
  const axiosSecure = useAxiosSecure();
  //   const handleUpdateItem = (item) => {
  //    console.log(item);
  //   };

  const handleDeleteItem = (item) => {
    console.log(item._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
    //console.log(item);
  };
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td className="flex gap-2">
                  <Link to={`/dashboard/updateitem/${item._id}`}>
                    <button className="btn btn-ghost btn-xs bg-green-700 text-white">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
