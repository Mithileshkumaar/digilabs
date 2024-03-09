import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataUpload from "./pages/data_upload";
import EventManagement from "./pages/event_management";
import Login from "./pages/login_page";
import College from "./pages/colleges";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>




        <Route path="/" element={<Login />} />
        <Route path="/dataupload" element={<DataUpload />} />
        <Route path="/eventmanagement" element={<EventManagement />} />
        <Route path="/college" element={<College />} />



      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);