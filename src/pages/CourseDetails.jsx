import React from "react";
import SearchBar from "../components/searchbar";

const CourseDetails = () => {
  return (
    <>
      <SearchBar />
      <div className="flex items-center justify-center h-[80vh] w-full">
        <h1 className="flex justify-center items-center font-bold text-4xl">
          Course Details
        </h1>
      </div>
    </>
  );
};

export default CourseDetails;
