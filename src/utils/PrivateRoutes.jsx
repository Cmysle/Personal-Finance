import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from './user'

const PrivateRoutes = () => {
    const user = useUser()

    return user.current === null ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoutes