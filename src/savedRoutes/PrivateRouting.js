import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = () => {
  console.log("isLogin",isLogin());
  
  return isLogin() ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;