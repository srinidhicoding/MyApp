
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/dashborad";
import BookDetails from "./pages/BookDetails";
import CourseDetails from "./pages/CourseDetails";
import ProfileDetails from "./pages/ProfileDetails";
import Settings from "./pages/Settings";
import Completed from "./pages/Completed";
import Community from "./pages/Community";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetais";
import Login from "./pages/LoginPage";
import { account } from "./appwriteConfig";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (loading) return <div>Loading...</div>; 

  return (
    <Routes>
      <Route path="/login" element={<Login refreshUser={checkUser} />} />
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" replace/>}>
        <Route index element={<Home />} />
        <Route path="bookdetails" element={<BookDetails />} />
        <Route path="courses" element={<CourseDetails />} />
        <Route path="products" element={<ProductDetails />} />
        <Route path="profile" element={<ProfileDetails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="finished" element={<Completed />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  );
};

export default App;
































// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Dashboard from "./components/dashborad";
// import BookDetails from "./pages/BookDetails";
// import CourseDetails from "./pages/CourseDetails";
// import ProfileDetails from "./pages/ProfileDetails";
// import Settings from "./pages/Settings";
// import Completed from "./pages/Completed";
// import Community from "./pages/Community";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetais";
// import Login from "./pages/LoginPage";
// import { account } from "./appwriteConfig";
// import { useState, useEffect } from "react";

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const currentUser = await account.get();
//         setUser(currentUser);
//       } catch (error) {
//         setUser(null);
//       }
//     };
//     checkUser();
//   }, []);

//   return (
//     <Routes>
//       {/* Public Route */}
//       <Route path="/login" element={<Login />} />

//       {/* Protected Routes */}
//       <Route
//         path="/"
//         element={user ? <Dashboard /> : <Navigate to="/login"/>}
//       >
//         <Route index element={<Home />} />
//         <Route path="bookdetails" element={<BookDetails />} />
//         <Route path="courses" element={<CourseDetails />} />
//         <Route path="products" element={<ProductDetails />} />
//         <Route path="profile" element={<ProfileDetails />} />
//         <Route path="settings" element={<Settings />} />
//         <Route path="finished" element={<Completed />} />
//         <Route path="community" element={<Community />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;
