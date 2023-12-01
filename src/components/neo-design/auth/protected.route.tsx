import { useLocation, useNavigate, Outlet, Navigate } from "react-router-dom";
import { selectCurrentToken, setCredentials } from "../../../store/slices/authSlice";
import { useTypedSelector, useAppDispatch } from '../../../store/store';

const ProtectedRoute = () => {
    const location = useLocation();
    const token = useTypedSelector(selectCurrentToken);

    return <>
        { token ? 
            <Outlet />
            :            
            <Navigate to='/auth' state={{ from: location }} replace />
        }
    </>
}

export default ProtectedRoute;