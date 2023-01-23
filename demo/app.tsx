import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./main";

const rootElement = document.getElementById("root");

createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </StrictMode>
);
