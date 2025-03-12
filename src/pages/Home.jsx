
import { Outlet } from "react-router-dom"

import BottomSection from "../components/bottomsection"
import SearchBar from "../components/searchbar"
import CourseBar from "../components/courseview"
import MidSection from "../components/midbar"


const Dashboard=()=>{

    return(
        <div className="flex w-full">
            <div className="flex flex-col w-full">
             <SearchBar/>
               <CourseBar/>
              <MidSection/>
               <BottomSection/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard