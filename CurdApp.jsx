import React from "react";
import CurdHome from "./CurdHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../Curd app/Create";
import data from "../Curd app/data";

const CurdApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CurdHome />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </BrowserRouter>
    );
    
}

export default CurdApp;
