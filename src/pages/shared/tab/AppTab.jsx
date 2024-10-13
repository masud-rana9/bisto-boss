import { useState } from "react";
import UseMenu from "../../../hooks/UseMenu";
import Ordercard from "../card/Ordercard";
import { useParams } from "react-router-dom";

const AppTab = () => {
  const categories = ["salad", "soup", "dessert", "drinks", "pizza"];
  const [menu] = UseMenu();

  // Filter the categories once
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  console.log(salad);
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [activeTab, setActiveTab] = useState(initialIndex);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Function to switch tabs
  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentPage(1); // Reset to first page when switching tabs
  };

  // Calculate the number of pages
  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  // Function to handle pagination
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Map the appropriate content for each tab
  const renderTabContent = () => {
    let items = [];

    switch (activeTab) {
      case 0:
        items = salad;
        break;
      case 1:
        items = soup;
        break;
      case 2:
        items = dessert;
        break;
      case 3:
        items = drinks;
        break;
      case 4:
        items = pizza;
        break;
      default:
        return null;
    }

    // Get the current items for the page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    return paginatedItems.map((item) => (
      <Ordercard key={item._id} item={item} />
    ));
  };

  return (
    <div className="my-10 text-2xl">
      {/* Tab Buttons */}
      <div className="tab-buttons text-center">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-10 text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {renderTabContent()}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination text-center my-5">
        {[...Array(totalPages(categories[activeTab]))].map((_, index) => (
          <button
            key={index}
            className={`mx-2 ${currentPage === index + 1 ? "font-bold" : ""}`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
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

        .pagination button {
          padding: 5px 10px;
          margin: 0 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default AppTab;
