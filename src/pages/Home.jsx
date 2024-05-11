import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useContext } from "react";
import hand from "../assets/Wave.svg"
import ThemeContext from "../conextapi/ThemeContext";
import Hero from "../assets/Image.svg"

const linearHello = {
    background: `linear-gradient(to right, #32f6f6, #a6a79f)`,
    padding: "0.5rem 2rem",
    borderRadius: "4rem 4rem 4rem 0",
    color: "#fff",
    fontWeight: 'bold',
}

const linaerCv = {
    background: `linear-gradient(to right, #df580c, #FD993D`,
    border:"1px solid #fff"
}
const linaerContactLight = {
    background: `linear-gradient(to right, #434343, #000`,
     border:"1px solid #fff"
}
const linaerContactDark = {
    background: `linear-gradient(to right, #434343, #817E7E`,
     border:"1px solid #fff"
}

const Home = () => {
    const { isDark } = useContext(ThemeContext);
  return (
      <Flex width={"100%"} justify={"between"}>
          
      <Box>
              <Text as="h4" style={linearHello}>Hello!</Text>
        <Box pb={"5"} pt={"5"}>
          <Heading as="h1">I’m <span style={{color:"gray",textDecoration:"underline"}}>Anish</span> <img src={hand} alt="" width={"25px"}/></Heading>
          <Text>
            UI/UX Designer, Front-End Developer & Thinker. <br />
            Based in India.
          </Text>
        </Box>
        <Flex gap={"5"} pt="9">
          <Button style={linaerCv}>Download CV</Button>
          <Button style={isDark?linaerContactDark:linaerContactLight}>Get in Touch!</Button>
        </Flex>
      </Box>
          <Flex>
              <img style={{marginTop:"-3rem", marginRight:"-7rem"}} src={Hero} alt="" />
      </Flex>
    </Flex>
  );
};

export default Home;
