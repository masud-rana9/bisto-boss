import { useState } from "react";
import UseMenu from "../../../hooks/UseMenu";
import Ordercard from "../card/Ordercard";
import { useParams } from "react-router-dom";
// Assuming Ordercard is in the same folder or adjust the path

const AppTab = () => {
  const categories = ["salad", "soup", "dessert", "drinks", "pizza"];
  // Always call hooks unconditionally at the top level
  const [menu] = UseMenu(); // This should always be called in the same way, regardless of render cycles
  console.log(menu);
  // Filter the categories once
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  const { category } = useParams();
  console.log(category);
  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);
  // Define the current active tab
  const [activeTab, setActiveTab] = useState(initialIndex);

  // Function to switch tabs
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Map the appropriate content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return salad.map((item) => (
          <Ordercard
            key={item._id}
            img={item.image}
            name={item.name}
            description={item.description}
          />
        ));
      case 1:
        return soup.map((item) => (
          <Ordercard
            key={item._id}
            img={item.image}
            name={item.name}
            description={item.description}
          />
        ));
      case 2:
        return dessert.map((item) => (
          <Ordercard
            key={item._id}
            img={item.image}
            name={item.name}
            description={item.description}
          />
        ));
      case 3:
        return drinks.map((item) => (
          <Ordercard
            key={item._id}
            img={item.image}
            name={item.name}
            description={item.description}
          />
        ));
      case 4:
        return pizza.map((item) => (
          <Ordercard
            key={item._id}
            img={item.image}
            name={item.name}
            description={item.description}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <div className="my-10 text-2xl">
      {/* Tab Buttons */}
      <div className="tab-buttons text-center">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          Salad
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Soup
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Desserts
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          Drinks
        </button>
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          Pizza
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-10 text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {renderTabContent()}
      </div>

      {/* Styling */}
      <style jsx>{`
        .tab-buttons button {
          padding: 10px;
          margin: 0 5px;
          cursor: pointer;
        }

        .active {
          border-bottom: 2px solid black; /* Custom underline */
          padding-bottom: 2px;
        }

        .tab-content {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default AppTab;
