import { Provider } from "react-redux";
import store from "store";
import Theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <Theme>Hello World</Theme>
    </Provider>
  );
}

export default App;
