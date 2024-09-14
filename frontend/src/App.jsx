import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { useState } from "react";
import { ThemeComponent } from "./ThemeComponent";

function App() {
  return (
    <ChakraProvider>
      <ThemeComponent />
    </ChakraProvider>
  );
}

export default App;
