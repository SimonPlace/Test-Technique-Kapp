import Header from "components/Header";
import { Provider } from "react-redux";
import store from "store";
import Theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Header />
      </Theme>
    </Provider>
  );
}

export default App;
