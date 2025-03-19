"use client"; 

import { Provider } from "react-redux";
import store from "./Redux/store";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Random Quote Machine</title>
        </head>
        <body>
          {children}
          <script
            src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
            async
          ></script>
        </body>
      </html>
    </Provider>
  );
}
