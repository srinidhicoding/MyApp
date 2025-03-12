import { useEffect, useState } from "react";
import files from "../data.json";

const RightBar = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    SetData(files.users);
  }, []);

  return (
    <div class="w-[76%] h-[430px] pl-6 pr-6 bg-[#e6f5f9] rounded-2xl mt-6">
      <div class="flex justify-between items-center">
        <p class="text-xl opacity-85 font-segeo font-bold mt-7">Top Mentors</p>
        <p class="text-sm opacity-95 mt-7 font-medium font-poppins">View All</p>
      </div>
      <div class="mt-6 flex flex-col gap-4">
        {data.map((each) => (
          <div class="flex justify-between items-center bg-white  h-[68px] pl-4 pr-3 w-[100%] rounded-3xl shadow-md">
            <div class="w-[165px] h-14 flex gap-1 ml-1 ">
              <div class="h-14 w-14  flex justify-center items-center rounded-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9TP3NL93Ul57vk0Cob7fD7eYO1eaSYmcKQ&s"
                  alt="profile"
                  class="w-10 h-10 rounded-full object-cover   object-top"
                />
              </div>
              <p class="text-md font-semibold opacity-90 font-segeo flex justify-center items-center">
                {each.name}
              </p>
            </div>
            <div className="flex gap-10 justify-between items-center w-[460px] ">
              <div className=" w-[150px]">
                <p class="font-segeo opacity-55 text-md font-medium">
                  {each.role}
                </p>
              </div>
              <div className="flex items-start w-[100px] pl-1  ">
                <p class="font-segeo opacity-55 text-md font-medium">
                  {each.courses} Course
                </p>
              </div>
              <div className=" ml-2">
                <p class="font-segeo opacity-55 text-md font-medium">
                  {each.followers} Follower
                </p>
              </div>
            </div>
            <div class="w-42 flex justify-center items-center gap-2 pl-8 ">
              <button class="h-10 w-[90px] bg-[#f9b410] rounded-lg font-segeo font-medium opacity-75 ml-3 ">
                Follow
              </button>
              <div class="w-10 h-10  flex justify-center items-center rounded-lg bg-[#fff4dc] ml-4 ">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/8212/8212730.png"
                alt="colon"
                class="w-8 h-9"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
