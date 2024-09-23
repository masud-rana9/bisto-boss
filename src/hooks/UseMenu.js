import { useEffect } from "react";
import { useState } from "react";

const UseMenu = () => {
  const [menu, SetMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetMenu(data);
        setLoading(false);
      });
  }, []);
  return [menu, loading];
};
export default UseMenu;
