import { Navbar } from "../../ui/components/NavBar"
import { Route, Routes, Navigate } from 'react-router-dom'
import MarvelPage from '../pages/MarvelPage'
import DCPage from '../pages/DCPage'
import SearchPage from '../pages/SearchPage'
import Hero from '../pages/Hero'


const HerosRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<Hero />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}

export default HerosRoutes