import { Link, NavLink, useNavigate } from "react-router-dom"


const SideBar=()=>{

const navigate=useNavigate();

    return(
        <div className="bg-[#fbf8f2] h-[105vh] rounded-l-xl pl-8 w-[260px] fixed">
           <p className="mt-8 text-4xl font-bold opacity-100 font-segeo" >Eduhouse</p>
           <p className="font-segeo text-[12.8px] font-medium mt-11 opacity-35 ">MAIN MENU</p>
           <div className="w-40 h-12 bg-white -ml-5 rounded-lg flex justify-center items-center gap-3 mt-3">
         <i className="fa-solid fa-house text-[#f3ba08]"></i>
         <p  onClick={()=>{navigate('/')}}className="text-[15px] text-[#f3ba08] font-bold opacity-85 cursor-pointer">Overview</p>
      </div>

      <div className="flex gap-3 mt-3 ml-4">
        <div className="flex flex-col gap-8 mt-1" >
          <span className="opacity-70 text-[18px]"><i className="fa-regular fa-bookmark"></i></span>
          <span className="opacity-70 text-[18px]"><i className="fa-regular fa-heart"></i></span>
          <span className="opacity-70 text-[18px]"><i className="fa-regular fa-credit-card"></i> </span>
          <span className="opacity-70 text-[18px]"><i className="fa-regular fa-file"></i></span>
          <span className="opacity-70 text-[18px]"><i className="fa-regular fa-comment"></i></span>
      </div>
      <div className="flex flex-col gap-9  pt-[7px]">
        <NavLink to='/bookdetails' className="font-medium text-[15px] opacity-75 font-segeo">E-Book</NavLink>
        <NavLink to='/courses' className="font-medium text-[15px] opacity-75 font-segeo">My Courses</NavLink>
        <NavLink to='/products' className="font-medium text-[15px] opacity-75 font-segeo">Purchase Course</NavLink>
        <NavLink to='/finished' className="font-medium text-[15px] opacity-75 font-segeo">Completed Courses</NavLink>
        <NavLink to='/community' className="font-medium text-[15px] opacity-75 font-segeo">Community</NavLink>
    </div>
      </div>


      <p className="font-segeo text-[12.8px] font-medium mt-14 opacity-40">SETTING</p>
        <div className="flex gap-2 mt-7 ml-4">
            <div className="flex flex-col gap-10">
                <span className="opacity-75 text-[18px] pt-1"><i className="fa-regular fa-user pl-1" ></i></span>
                <span className="opacity-75 text-[18px] pt-1"><i className="ri-settings-2-line"></i></span>
                <span className="opacity-75 text-[18px]"><i className="fa-solid fa-arrow-right-from-bracket pl-1"></i> </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-11 mt-[3px]">
                <Link to={'/profile'} className="font-medium text-[15px] opacity-75 font-segeo " >Profile</Link>
                <Link to={'/settings'} className=" font-medium text-[15px] opacity-75 font-segeo">Setting</Link>
                <Link  className="font-medium text-[15px] opacity-75 font-segeo">logout</Link>
            </div>
        </div>


        </div>
    )
      
}

export default SideBar