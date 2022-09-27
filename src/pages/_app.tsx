import "react-phone-number-input/style.css";
import "@/styles/global.scss";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
