import { BrowserRouter, Route } from "react-router-dom"
import Registr from "../../Registration/Registr"
import { Routes, Navigate } from "react-router"
import Auth from "../../Authorization/Auth"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Registr />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router