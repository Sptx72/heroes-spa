
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage'
import HerosRoutes from '../heroes/routes/HerosRoutes'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'


const AppRouter = () => {
    return (
        <>
            <Routes>
                
                <Route path="login" element={<PublicRouter> <LoginPage /> </PublicRouter>} />
                <Route path="/*" element={<PrivateRouter> <HerosRoutes /> </PrivateRouter>} />
                <Route path="/*" element={<HerosRoutes />} />
            </Routes>
        </>
    )
}

export default AppRouter