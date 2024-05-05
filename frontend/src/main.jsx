import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { Suspense } from "react";
import Loader from "@components/Loader/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<Loader/>}>
      <App />
    </Suspense>
  </Provider>
);
