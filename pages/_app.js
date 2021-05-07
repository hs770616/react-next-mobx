import "../styles/globals.css";
import { Provider } from "mobx-react";
import stores from "../src/stores";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider {...stores}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
