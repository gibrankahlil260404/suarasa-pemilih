import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import KandidatPage from "./pages/KandidatPage";
import IsuPage from "./pages/IsuPage";
import PartaiPage from "./pages/PartaiPage";
import FaqPage from "./pages/FaqPage";
import TimPage from "./pages/TimPage";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (
        <div>
            <NavbarComponent />

            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/kandidat" Component={KandidatPage} />
                <Route path="/isu" Component={IsuPage} />
                <Route path="/partai" Component={PartaiPage} />
                <Route path="/faq" Component={FaqPage} />
                <Route path="/tim" Component={TimPage} />
            </Routes>

            <FooterComponent />
        </div>
    );
}

export default App;
