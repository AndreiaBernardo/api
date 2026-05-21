import { Routes,Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";  
import { FilmDetail } from "../pages/FilmDetail";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="films" element={<Home />} />
                <Route path="film/:id" element={<FilmDetail />} />
            </Route>
        </Routes>
    );
};

export default Router;