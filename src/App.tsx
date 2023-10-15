import Header from "components/Header";
import UserList from "components/UserList";
import { Provider } from "react-redux";
import store from "store";
import Theme from "./theme";

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
