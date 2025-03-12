import React from "react";
import SearchBar from "../components/searchbar";

const Completed = () => {
  return (
    <>
      <SearchBar />
      <div className="flex items-center justify-center h-[80vh] w-full">
        <h1 className="flex justify-center items-center font-bold text-4xl">
        Courses completed page
        </h1>
      </div>
    </>
  );
};

export default Completed;