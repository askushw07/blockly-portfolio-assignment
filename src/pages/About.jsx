import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import React from "react";
import handImage from "../assets/Group 32.svg";
import yeoolw1 from "../assets/Vector 3.svg";
import yeoolw2 from "../assets/Vector 4.svg";
import gray1 from "../assets/Vector 5.svg";

const About = () => {
  return (
    <Box width={"100%"}>
      <Box style={{ position: "absolute", left: 0, top: "5rem", zIndex: -1 }}>
        <img style={{ width: "20rem" }} src={handImage} alt="" />
          </Box>
          
          <Box style={{ position: "absolute", right: 0, top: "5rem", zIndex: -1 }}>
        <img style={{ width: "13rem" }} src={yeoolw1} alt="" />
          </Box>
          
          <Box style={{ position: "absolute", bottom: "-18rem",left:"8rem", zIndex: -1 }}>
        <img style={{ width: "20rem" }} src={yeoolw2} alt="" />
          </Box>
          
          <Box style={{ position: "absolute", right: "5rem", bottom: "-18rem", zIndex: -1 }}>
        <img style={{ width: "20rem" }} src={gray1} alt="" />
          </Box>
          
      <Box style={{ paddingLeft: "12rem", paddingRight: "5rem" }}>
        <Flex gap={"5"} pb={"5"}>
          <Text style={{ width: "20%", fontSize: "1.2rem", fontWeight: "500" }}>
            <span style={{ fontSize: "2rem" }}>T</span>his is it. {" ;)"}
          </Text>
          <Separator my="3" size="4" mt={"7"} />
        </Flex>
        <Text style={{ fontFamily: "Segoe UI, sans-serif" }}>
          Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with
          a passion for designing beautiful and fuctional user experiences.
          Typically, he’s Driven & permanently Curious. He’s obsessed with
          designing things and even more obsessed with designing cool & clean
          stuff for the web and mobile. He has been in the business of creating
          since he hung his first painting on the wall when he was 11. He holds
          a bachelor degree in Computer Applications. During his graduation, he
          has been actively involved in the web design community for the last 3
          years. he has designed websites for small businesses, events,
          nonprofits and more. Currently he’s based in Bihar, India. Where he’s
          working as an independent creative.
          <br />
          <br />
          His interests, however, extend beyond the web and he loves helping
          people with branding and print design. He even loves designing 3D
          floor plan.
          <br />
          <br />
          When he’s not designing, he’s probably hanging out with his
          girlfriend, watching series, sketching or messing around on something
          inspired by YouTube tutorials.
        </Text>
        <Flex justify={"center"}>
          <Separator my="9" size="9" mt={"9"} style={{ width: "50%", height:"0.1rem" }} />
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
