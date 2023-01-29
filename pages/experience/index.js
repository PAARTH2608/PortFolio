import Image from "next/image";
import Socials from "../../components/pageComponents/Socials/Socials";
import {
  Container,
  InformationContainer,
  SocialContainer,
  ContentContainer,
} from "../../components/pageStyles/ProjectsContainers";
import {
  HelperDiv,
  ContactMeContainer,
  EarthContainer,
  ScrollButtonContainer,
  ScrollHeading,
  Button,
  Span1,
  Span2,
  PressEnterContainer,
} from "../../components/pageStyles/MainPage";
import ExperienceElements from "../../components/pageComponents/experience/ExperienceElements";
import { AiOutlineArrowDown } from "react-icons/ai";
import Head from "next/head";

const Experience = () => {
  const styles = {
    backgroundColor: "transparent",
  };
  const arrowStyle = {
    position: "absolute",
    display: "block",
    top: "29%",
    left: "35%",
    width: "18px",
    height: "18px",
    margin: "-4px 0 0 -4px",
    background: "white",
    "border-radius": "50%",
    "-webkit-animation": "ani-mouse 2.5s linear infinite",
    "-moz-animation": "ani-mouse 2.5s linear infinite",
    animation: "ani-mouse 2.5s linear infinite",
    color: "#CEB7FF",
    backgroundColor: "transparent",
  };
  return (
    <Container>
      <Head>
        <title>Experience</title>
      </Head>
      <HelperDiv>
        <ContactMeContainer>
          <Image
            src={"/contact.svg"}
            alt="contact"
            width={100}
            height={100}
            style={styles}
          />
        </ContactMeContainer>
      </HelperDiv>
      <InformationContainer>
        <Image
          src={"/experienceInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
        />
        <ContentContainer>
          <ExperienceElements />
        </ContentContainer>
      </InformationContainer>
      <SocialContainer>
        <Socials />
      </SocialContainer>
      <PressEnterContainer>
        <ScrollHeading>Download CV</ScrollHeading>
        <Button>
          <Span1>
            <AiOutlineArrowDown style={arrowStyle} />
          </Span1>
        </Button>
      </PressEnterContainer>
      <ScrollButtonContainer>
        <ScrollHeading>SCROLL</ScrollHeading>
        <Button>
          <Span1>
            <Span2></Span2>
          </Span1>
        </Button>
      </ScrollButtonContainer>
      <EarthContainer>
        {/* <GlowyEarth> */}
        <Image
          src={"/earth.svg"}
          height={1100}
          width={1100}
          alt="earth"
          style={styles}
        />
        {/* </GlowyEarth> */}
      </EarthContainer>
    </Container>
  );
};
export default Experience;
