import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SplashScreen from "./Pages/SplashScreen";
import Onboarding1 from "./Pages/Onboarding1";
import Onboarding2 from "./Pages/Onboarding2";
import Onboarding3 from "./Pages/Onboarding3";
import Onboarding4 from "./Pages/Onboarding4";
import Login from "./Pages/LoginScreen";
import SignUp from "./Pages/SignupScreen";
import Forgotpassword from "./Pages/Forgotpassword";
import OTPVerification from "./Pages/OTPVerification";
import ResetPassword from "./Pages/ResetPassword";
import Sucess from "./Pages/verificationSucess";
import SelectCountryScreen from "./Pages/SelectCountryScreen";
import SelectTopicsScreen from "./Pages/SelectTopicScreen";
import NewsSource from "./Pages/NewsSource";
import UpdateProfile from "./Pages/UpdateProfile";
import Home from "./Pages/Homepage";
import Profile from "./Pages/ProfilePage";
import Explore from "./Pages/ExplorePage";
import Bookmark from "./Pages/Bookmarkpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding1" element={<Onboarding1 />} />
        <Route path="/Onboarding2" element={<Onboarding2 />} />
        <Route path="/Onboarding3" element={<Onboarding3 />} />
        <Route path="/Onboarding4" element={<Onboarding4 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/OTPVerification" element={<OTPVerification />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/verificationSucess" element={<Sucess />} />
        <Route path="/SelectCountryScreen" element={<SelectCountryScreen />} />
        <Route path="/SelectTopicsScreen" element={<SelectTopicsScreen />} />
        <Route path="/NewsSource" element={<NewsSource />} />
        <Route path="/UpdateProfile" element={<UpdateProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </Router>
  );
}

export default App;
