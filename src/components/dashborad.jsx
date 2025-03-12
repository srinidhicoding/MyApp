
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />

    <p>welcome to dashboard</p>
      <div className="flex flex-col w-[100%] pr-5 ml-[284px]">
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




















// const Dashboard=()=>{

//     return(
//         <div className="flex">
        
//             <SideBar />
//             <div className="flex flex-col w-[100%] pr-5 ml-[284px]">
//                 <SearchBar/>
//                 <CourseBar/>
//                 <MidSection/>
//                 <BottomSection/>
//                 <Outlet/>
//             </div>
//         </div>
//     )
// }

// export default Dashboard