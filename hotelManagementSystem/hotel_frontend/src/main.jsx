import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Mantine UI

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { colorSchemeManager, resolver, Theme } from "./Themes/Theme.js";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider
      theme={Theme}
      colorSchemeManager={colorSchemeManager}
      // defaultColorScheme="dark" // هيبدأ Dark لو مفيش حاجة متسيفة
      cssVariablesResolver={resolver} // <--- السطر ده هو أهم حتة
    >
      <Notifications position="top-right" />
      <App />
    </MantineProvider>
  </BrowserRouter>,
);
