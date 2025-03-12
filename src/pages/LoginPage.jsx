import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const googleAuth = (e) => {
    e.preventDefault();
    account.createOAuth2Session(
      "google",
      `http://localhost:5174/`, 
      `http://localhost:5174/login`
    );
    setTimeout(() => navigate("/"), 2000); 
  };
  

  const facebookAuth = (e) => {
    e.preventDefault();
    account.createOAuth2Session(
      "facebook",
      `${window.location.origin}/`, 
      `${window.location.origin}/login`
    );
    setTimeout(() => navigate("/"), 2000); 
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        
        <form className="flex flex-col space-y-3">
          <label className="font-medium" htmlFor="email">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <label className="font-medium" htmlFor="password">Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Login</button>
        </form>
        
        <div className="text-center my-4 text-gray-500">OR</div>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={googleAuth} 
            className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Google
          </button>
          <button 
            onClick={facebookAuth} 
            className="flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;