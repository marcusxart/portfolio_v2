import styled from "styled-components";
import PageHeader from "../components/pageHeader";
import { Section, Container } from "./about";
import ntfng from "../assets/images/nftng.webp";
import learngual from "../assets/images/learngual.jpg";
import harmonic from "../assets/images/harmonic.jpg";
import azmarineberg from "../assets/images/azmarineberg.jpg";
import pouchfi from "../assets/images/pouchfi.jpg";
import ProjectCard from "../components/projectCard";

const Portfoilo = () => {
  const works = [
    {
      skill: "Full stack engineer",
      title: "Learngual",
      date: "Jun 2023 - Sep 2024",
      img: learngual,
      link: "https://learngual.com/",
    },
    {
      skill: "Frontend engineer",
      title: "PouchFi",
      date: "Mar 2023 - Nov 2023",
      img: pouchfi,
      link: "https://www.pouchfi.io/",
    },
    {
      skill: "Frontend engineer",
      title: "Azmarineberg limited",
      date: "Jan 2023 - Mar 2023",
      img: azmarineberg,
      link: "https://www.azmarineberg.com/",
    },
    {
      skill: "Frontend engineer",
      title: "NFT NG",
      date: "Apr 2022 - Oct 2022",
      img: ntfng,
      link: "https://www.nftng.io/",
    },
    {
      skill: "Frontend engineer",
      title: "Harmonic Studioz",
      date: "Mar 2021 - Aug 2023",
      img: harmonic,
    },
  ];
  return (
    <>
      <PageHeader title="Portfoilo" />
      <Container>
        <Section>
          <h2>Professional experience</h2>
          <Grid>
            {works.map((i, key) => (
              <ProjectCard key={key} data={i} />
            ))}
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Portfoilo;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;
