import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BOOKINGHISTORY from "./pages/BOOKINGHISTORY";
import { useEffect } from "react";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<BOOKINGHISTORY />} />
    </Routes>
  );
}
export default App;
