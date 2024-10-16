import styled from "styled-components";
import PageHeader from "../components/pageHeader";
import { Section, Container } from "./about";
import ProjectCard from "../components/projectCard";

const Portfoilo = () => {
  return (
    <>
      <PageHeader title="Portfoilo" />
      <Container>
        <Section>
          <h2>Professional experience</h2>
          <Grid>
            <ProjectCard />
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Portfoilo;

const Grid = styled.div``;
