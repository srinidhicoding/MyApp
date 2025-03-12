import { useEffect, useState } from "react";
import files from "../data.json";


const LeftBar=()=>{

    const [data, SetData] = useState([]); // Initialize as an empty array

    useEffect(() => {
      SetData(files.categories);
    }, []);
  console.log(data);


    return(
        <div class="w-[23.6%] h-[430px] pl-6 pr-6 bg-[#effcef] rounded-2xl mt-6">
        <p class="text-xl opacity-85 font-segeo font-bold mt-7">Popular Categories</p>
        <div className="flex gap-4 flex-col mt-6">
    { data.map((each)=>(
    
      <div class="flex justify-between items-center bg-white ml-1 h-[68px] pl-6 pr-4 w-[101%] rounded-3xl shadow-md">
          <div class="flex flex-col gap-3">
            <p class="text-md font-semibold opacity-95 font-seoga">{each.name}</p>
            <p class="text-[12px] font-segeo -mt-2 font-medium opacity-60">{each.courses} Course</p>
          </div>
          <div class=" w-[53px] h-[53px] rounded-full  flex justify-center items-center" style={{backgroundColor: each.bgcolor}}>
             <i class={`${each.icons} text-[#b0a2ef] text-4xl`} style={{color:each.iconcolor}}></i>
          </div>
      </div>
  
  
        ))}
      </div>
      </div>
    )
   
    
}

export default LeftBar