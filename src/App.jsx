
import React from "react";
import Dashboard from "./components/dashborad";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import CourseDetails from "./pages/CourseDetails";
import ProfileDetails from "./pages/ProfileDetails";
import Settings from "./pages/Settings";
import Completed from "./pages/Completed";
import Community from "./pages/Community";
import Home from "./pages/Home";  // Import Home
import ProductDetais from "./pages/ProductDetais";



// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Home from "./pages/Home";  // Import Home
// import BookDetails from "./pages/BookDetails";
// import CourseDetails from "./pages/CourseDetails";
// import ProductDetails from "./pages/ProductDetails";
// import ProfileDetails from "./pages/ProfileDetails";
// import Settings from "./pages/Settings";
// import Completed from "./pages/Completed";
// import Community from "./pages/Community";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} /> {/* This makes Home load by default */}
        <Route path="bookdetails" element={<BookDetails />} />
        <Route path="courses" element={<CourseDetails />} />
        <Route path="products" element={<ProductDetais />} />
        <Route path="profile" element={<ProfileDetails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="finished" element={<Completed />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  );
};

export default App;

















// const App = () => {
//   return (
//     <Routes>
//       {/* Parent Route (Dashboard Layout) */}
//       <Route path="/" element={<Dashboard />}>
//       <Route index element={<Home />} />
//         {/* Nested Routes (Displayed inside Outlet) */}
//         <Route path="bookdetails" element={<BookDetails />} />
//         <Route path="courses" element={<CourseDetails />} />
//         <Route path="products" element={<ProductDetais/>} />
//         <Route path="profile" element={<ProfileDetails />} />
//         <Route path="settings" element={<Settings />} />
//         <Route path="finished" element={<Completed />} />
//         <Route path="community" element={<Community />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

















// import React from "react";
// import Dashboard from "./components/dashborad";
// import { Route, Routes } from "react-router-dom";
// import BookDetails from "./pages/BookDetails";
// import CourseDetails from "./pages/CourseDetails";
// import ProductDetais from "./pages/ProductDetais";
// import ProfileDetails from "./pages/ProfileDetails";
// import Settings from "./pages/Settings";
// import Completed from "./pages/Completed";
// import Community from "./pages/Community";



// const App = () => {
//   return (
//         <Routes>
//           <Route path="/" element={<Dashboard/>}/>
//           <Route path="/bookdetails" element={<BookDetails/>}/>
//           <Route path="/courses" element={<CourseDetails/>}/>
//           <Route path="/products" element={<ProductDetais/>}/>
//           <Route path="/profile" element={<ProfileDetails/>}/>
//           <Route path="/settings" element={<Settings/>}/>
//           <Route path="/finished" element={<Completed/>}/>
//           <Route path="/community" element={<Community/>}/>
//         </Routes>
//   );
// };

// export default App;
