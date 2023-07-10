import React,{useState,useEffect} from "react";
import NavBar from "@/components/navBar";
import BigHeadingWithImage from "@/components/startup";
import UploadPage from "@/components/UploadPage";
import Home from "@/components/example-uploader";
// import Features from "@/components/features";
// import HowItWorks from "@/components/howItWorks";
// import Testimonials from "@/components/testimonials";
// import Pricing from "@/components/pricing";
// import FAQ from "@/components/faq";
// import FAQContact from "@/components/faqncontact";
// import Team from "@/components/team";
// import Footer from "@/components/footer";
import Login from "@/components/login";
import SignUp from "@/components/signup";
import ForgotPassword from "@/components/forgotPassword";
// import { emailProcessor } from "@/scripts/emailProcessor";
export default function IndexPage() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isForgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  // useEffect(() => {
  //   // Run the script when the Next.js server starts
  //   emailProcessor()

  //   // Schedule the script to run every 5 minutes using setInterval
    
  // }, []);
  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsSignUpVisible(false);
    setForgotPasswordClicked(false);
  };

  const handleSignUpClick=()=>{
    setIsSignUpVisible(true);
    setIsLoginVisible(false);
    setForgotPasswordClicked(false);
  }
  const handleForgotPasswordClick=()=>{
    setForgotPasswordClicked(true);
    setIsSignUpVisible(false);
    setIsLoginVisible(false);
  }
  const handleCloseModel=()=>{
    setForgotPasswordClicked(false);
    setIsSignUpVisible(false);
    setIsLoginVisible(false);
  }
  return (
    <div>
     <NavBar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick}/>
     <BigHeadingWithImage/>
     <Home/>
     {/* <UploadPage/> */}
     {/* <Features/>
     <HowItWorks/>
     <Testimonials/>
     <Team/>
    <Pricing/> */}
    {/* <FAQ/> */}
    {/* <FAQContact/>
    <Footer/> */}
    {isLoginVisible && <Login onForgotPasswordClick={handleForgotPasswordClick} onBackgroundClick={handleCloseModel}/>}
    {isSignUpVisible && <SignUp onForgotPasswordClick={handleForgotPasswordClick} onBackgroundClick={handleCloseModel}/>}
    {isForgotPasswordClicked && <ForgotPassword onBackgroundClick={handleCloseModel}/>}
    </div>

  );
}

