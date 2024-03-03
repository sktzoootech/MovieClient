import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound404 from "../pages/NotFound404";

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<p>Hello Worldsssdfs</p>} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;