import { useContext, useState } from "react";
import "./App.css";
import { Box, Flex, Theme } from "@radix-ui/themes";
import ThemeContext from "./conextapi/ThemeContext";
import AppBar from "./components/AppBar.jsx";
import AllRoutes from "./allroutes/AllRoutes.jsx";
import Socials from "./components/Socials.jsx";

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <Theme className={isDark ? "dark-theme" : "light-theme"}>
      <Box pt="2" pb="2" pl={"9"} pr={"9"}>
        <AppBar />
        <Flex gap={"9"} pt={"9"} pb="9" height={"90vh"} mt={"5"}>
          <Socials/>
          <AllRoutes />
          <Flex justify={"end"} style={{borderBottom:"5px solid black"}} pb="5">
          <span style={{writingMode:"vertical-lr",transform: "rotate(180deg)", fontSize:"0.6rem"}}>sinhaanishkumar@outlook.com</span>
          </Flex>
        </Flex>
      </Box>
    </Theme>
  );
}

export default App;
