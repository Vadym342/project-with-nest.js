import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hook';
import Dashboard from '../../modules/MbararaAdmin/components/Dashboard/Dashboard';
import MenuAppBar from '../../modules/MbararaAdmin/components/SideBar/AppBar';
import { userSelector } from '../../redux';


const MbararaAdmin = () => {
  const user = useAppSelector(userSelector);
  const history = useNavigate();

  const handleUnAuthorized = () => {
    history('/login');
  }
  return (
    <div>
      {
        user?.user?.role === "ADMIN" ? (
          <>
            <Dashboard />
          </>
        ) : (
          <>
            <div>
              <Button onClick={handleUnAuthorized}>
                Go to login
              </Button>
            </div>
          </>
        )
      }
    </div>
  );
};

export default MbararaAdmin;
