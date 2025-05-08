import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
// App.tsx or index.tsx
import 'swiper/css';



function App() {
  return (
    <Router>
      <Navbar/>
    
      <AppRoutes />
    </Router>
  );
}

export default App;
