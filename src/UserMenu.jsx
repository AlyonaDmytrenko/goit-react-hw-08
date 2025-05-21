import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./redux/auth/selectors";
import { logoutThunk } from "./redux/auth/operations";


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span>Welcome, {user.name}</span>
      <button onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
