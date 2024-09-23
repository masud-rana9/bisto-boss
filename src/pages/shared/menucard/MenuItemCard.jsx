const MenuItemCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(image);
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px " }}
        src={image}
        alt=""
        className="w-[100px]"
      />
      <div>
        <h3 className="uppercase">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItemCard;
