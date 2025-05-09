import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ViewProfile from "../components/ViewProfile";
import View_Acution from "../pages/View_Acution";
import Budget_Auction from "../pages/Budget_Auction";
import Area_Auction from "../pages/Area_Auction";
import Expert_Advice from "../pages/Expert_Advice";
import Features from "../pages/Features";


export default function AppRoutes() {
  return (
    <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ViewProfile />} />
      <Route path="/view_auction" element={<View_Acution />} />
      <Route path="/budget_auction" element={<Budget_Auction />} />
      <Route path="/area_auction" element={<Area_Auction/>} />
      <Route path="/expert_advice" element={<Expert_Advice/>} />
      <Route path="/features" element={<Features/>} />
    </Routes>
  );
}
