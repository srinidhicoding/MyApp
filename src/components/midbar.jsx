import { useEffect, useState } from "react";
import files from "../data.json";

const MidSection = () => {
  const [data, SetData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    SetData(files.courses);
  }, []);
console.log(data);

  return (
    <section className="flex gap-6">
      {data.map((each) => (
        <div key={each.id} className= "w-[23.6%] h-[298px] pl-6 pr-6  rounded-2xl mt-5" style={{backgroundColor:each.backgroundcolor}} >
        <div className="  flex justify-between items-center pt-4 ">
         <p className="text-xs font-poppins font-medium opacity-90"><span className="text-xs font-Gill" style={{color: each.startcolor}}>Start: </span> Dec,15,2020</p>
         <div className={`w-14 h-14 rounded-full flex items-center  justify-center`}  style={{ backgroundColor: each.picback }}>
           <i className={`${each.icon} text-4xl`} style={{color: each.piccolor}}></i>
         </div>
        </div>
        <div className="mt-3"> 
         <p className="font-medium from-neutral-950 text-[16.5px] opacity-80" style={{ color: each.namecolor }} ><strong>{each.title}</strong></p>
        </div>
        <div className="w-[230px] mt-5 ">
         <p className="text-md font-bold opacity-70 font-seoga leading-7 ">{each.description}</p>
        </div>

        <div className="w-[258px] text-[12px] font-seoga leading-6 font-medium opacity-60 mt-1" style={{wordSpacing:0.8}}>
         <p>Finally a comprehensive guide to using sketch for designing...</p>
      </div>
      
      <div className="mt-5 w-70 h-[5px] rounded-md"  style={{backgroundColor:each.barback}}>
     </div>
     <div className= " h-[8px] rounded-lg border-2 -mt-[6.5px]" style={{backgroundColor:each.barcolor, width:each.barwidth}}>
     </div>
     <div className="w-3 h-3 rounded-full border-[3px] bg-white -mt-[9.5px] opacity-70" style={{backgroundColor:each.nobback, borderColor:each.nobborder, marginLeft:each.nobmargin}}>
     </div>

     <div className="flex justify-between">
       <p className="text-[13px] font-bold opacity-70">Progress</p>
       <p className="text-[13.8px] font-medium opacity-70">{each.progress}%</p>
     </div>
   </div>
      ))}

<div class="w-[23.6%] h-[298px] bg-[#feefd0] rounded-2xl mt-5 flex flex-col justify-center items-center">
  <div class="flex items-center justify-center -mt-[30px]">
    <i class="fa-solid fa-piggy-bank text-[120px]"></i>
  </div>
  <div class="w-[230px] mt-7 flex flex-col justify-center items-center text-xl">
    <p class="font-seoga text-[#37243a] spacing2 opacity-90">You have 5 days left on</p>
    <p class="font-seoga text-[#37243a] spacing2 opacity-90">your subscription</p>
  </div>
<div class="flex justify-center items-center mt-7">
  <button class="h-12 bg-[#f9b410] w-48 rounded-lg text-md font-medium opacity-70 leading-7">
    Upgrade to Pro
  </button>
</div>

</div>


    </section>
  );
};

export default MidSection
