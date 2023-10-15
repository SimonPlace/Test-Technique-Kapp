import Header from "components/Header";
import UserList from "features/UserList";
import { fetchUsers } from "features/UserList/userSlice";
import { Provider } from "react-redux";
import store from "store";
import Theme from "./theme";

store.dispatch(fetchUsers());

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Header />
        <UserList />
      </Theme>
    </Provider>
  );
}

export default App;
