import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {CwgTheme} from "@/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return  <ThemeProvider theme={CwgTheme}>

    <Component {...pageProps} />
    <CssBaseline/>
  </ThemeProvider>;
}
