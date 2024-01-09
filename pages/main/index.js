import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  Container,
  ContactMeContainer,
  HelperDiv,
  InformationContainer,
  ClickOpenContainer,
  PressEnterContainer,
  ScrollHeading,
  Button,
  Span1,
  ScrollButtonContainer,
} from "../../components/pageStyles/MainPage";

export const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};
const Main = (props) => {
  const styles = {
    backgroundColor: "transparent",

    "@media (MaxWidth: 1280px)": {
      width: "100%",
      height: "100%",
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const styles1 = {
    backgroundColor: "transparent",
    width: "85%",
    cursor: "pointer",
  };
  const styles2 = {
    backgroundColor: "transparent",
    cursor: "pointer",
  };

  const [toggle, setToggle] = useState(true);
  const openHandler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <Container id={props.id}>
      <Image
        src={"/images/background-1.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div style={overlayStyle}></div>
      <InformationContainer>
        <Image
          src={"/infoMainPage.svg"}
          height={250}
          width={700}
          alt="mainbgimg"
          style={styles}
        />
        <ClickOpenContainer>
          {toggle && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: toggle ? 1 : 0 }}
              transition={{ duration: 5 }}
              onClick={openHandler}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Image
                src={"/clicktoopen.svg"}
                alt="leftBorder"
                height={100}
                width={100}
                style={styles1}
              />
            </motion.div>
          )}
          {!toggle && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: toggle ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              onClick={openHandler}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Image
                src={"/mainpageinfo.svg"}
                alt="leftBorder"
                height={400}
                width={600}
                style={styles2}
              />
            </motion.div>
          )}
        </ClickOpenContainer>
      </InformationContainer>
    </Container>
  );
};

export default Main;
