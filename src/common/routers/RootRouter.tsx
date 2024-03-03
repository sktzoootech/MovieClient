import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound404 from "../pages/NotFound404";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/moviedetails/:ids" element={<MovieDetails />}/>
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;