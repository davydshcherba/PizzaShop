import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./Pages/Home/App.tsx";
import "./index.css"
import NotFound from "./Pages/NotFound/NotFound..tsx";
import Profile from "./Pages/Profile/Profile.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
