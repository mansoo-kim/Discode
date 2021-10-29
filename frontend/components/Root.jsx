import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

const Root = () => {
  return (
    <Provider>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
}

export default Root
