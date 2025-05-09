import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ViewProfile from "../components/ViewProfile";


export default function AppRoutes() {
  return (
    <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ViewProfile />} />
    </Routes>
  );
}
