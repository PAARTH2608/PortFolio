import Image from "next/image";
import SkillElements from "../../components/pageComponents/Skills/SkillElements";
import {
  Container,
  InformationContainer,
  Heading,
  SkillsContainer,
} from "../../components/pageStyles/SkillsPage";
import { overlayStyle } from "../main";

const Skills = props => {
  const styles = {
    backgroundColor: "transparent",
  };
  return (
    <Container id={props.id}>
      <Image
        src={"/images/skillsBg.png"}
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
          src={"/skillsInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
          className="introImg"
        />
        <Heading> HERE ARE THE LIST OF MY SKILLS</Heading>
        <SkillsContainer>
          <SkillElements />
        </SkillsContainer>
      </InformationContainer>
    </Container>
  );
};
export default Skills;
