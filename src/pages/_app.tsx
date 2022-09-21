import "react-phone-number-input/style.css";
import "../styles/global.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <Component {...pageProps} />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
