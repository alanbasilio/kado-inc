import "react-phone-number-input/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/global.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default MyApp;
