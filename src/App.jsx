import { Provider } from "react-redux";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import appStore from "./store/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};

export default App;
