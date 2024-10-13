import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email], // Ensures that queryKey updates based on user.email
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Only fetch data if user email exists
  });

  return [cart, refetch];
};

export default useCart;
