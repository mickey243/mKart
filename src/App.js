import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "./redux/AuthSlice";

import AllProducts from "./components/AllProducts/AllProducts";
function App() {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  console.log(isLogin);

  const clickHandlerLogIn = (e) => {
    e.preventDefault();
    dispatch(authAction.logIn());
  };
  const clickHandlerLogout = (e) => {
    e.preventDefault();
    dispatch(authAction.logOut());
  };
  return (
    <div className="App">
      {/* {isLogin ? <h1>Login</h1> : <h1>Logout</h1>}
      {!isLogin && <button onClick={clickHandlerLogIn}>Login</button>}
      {isLogin && <button onClick={clickHandlerLogout}>Logout</button>} */}
      <AllProducts />
    </div>
  );
}

export default App;
