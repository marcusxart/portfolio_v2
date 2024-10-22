import styled from "styled-components";
import PageHeader from "../components/pageHeader";
import profile from "../assets/images/profile.png";
import Button from "../components/button";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import {
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaLaptop,
  FaLocationDot,
  FaNodeJs,
  FaReact,
  FaScrewdriverWrench,
  FaServer,
} from "react-icons/fa6";
import { MdEmail, MdWifiCalling3 } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";
import { TbShoppingCartCog } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiBabel,
  SiFramer,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiSequelize,
  SiWebpack,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";

const About = () => {
  const bio = [
    { text: "Chinonso Emerenwa", icon: FaUserAlt },
    { text: "Born on 25 April, 1997", icon: FaCalendarAlt },
    { text: "Lagos, Nigeria", icon: FaLocationDot },
    { text: "cemeji64@gmail.com", icon: MdEmail },
    { text: "+2349036909617", icon: MdWifiCalling3 },
  ];

  const service = [
    {
      text: "Web development",
      desc: "Custom web applications, responsive design, and progressive web applications for engaging user experiences.",
      icon: BsBrowserChrome,
    },
    {
      text: "Front-end development",
      desc: "Dynamic single-page applications using React and Next.js, along with clean HTML, CSS, and JavaScript.",
      icon: FaLaptop,
    },
    {
      text: "Back-end development",
      desc: "RESTful APIs, efficient database design, and secure authentication systems.",
      icon: FaServer,
    },
    {
      text: "Full stack development",
      desc: "Complete application development with seamless front-end and back-end integration and tailored deployment solutions.",
      icon: FaCode,
    },
    {
      text: "Maintenance and support",
      desc: "Ongoing bug fixes, performance optimization, and regular updates for smooth operation.",
      icon: FaScrewdriverWrench,
    },
    {
      text: "E-commerce solutions",
      desc: "Custom e-commerce platforms with secure payment integration and effective inventory management.",
      icon: TbShoppingCartCog,
    },
  ];

  const skills = [
    { text: "HTML5", icon: FaHtml5 },
    { text: "CSS3", icon: FaCss3Alt },
    { text: "Tailwind CSS", icon: RiTailwindCssFill },
    { text: "Framer", icon: SiFramer },
    { text: "JavaScript", icon: IoLogoJavascript },
    { text: "React Js", icon: FaReact },
    { text: "Redux", icon: SiRedux },
    { text: "Next Js", icon: SiNextdotjs },
    { text: "Babel", icon: SiBabel },
    { text: "Webpack", icon: SiWebpack },
    { text: "VS Code", icon: VscVscode },
    { text: "Git", icon: FaGitAlt },
    { text: "Node Js", icon: FaNodeJs },
    { text: "Express Js", icon: FaNodeJs },
    { text: "Mongo database", icon: SiMongodb },
    { text: "Mongoose", icon: SiMongoose },
    { text: "MySQL database", icon: SiMysql },
    { text: "Postgres database", icon: BiLogoPostgresql },
    { text: "Sequelize ", icon: SiSequelize },
  ];

  return (
    <>
      <PageHeader title="About" />
      <Container>
        <Section>
          <h2>About me</h2>
          <GridInfo>
            <img src={profile} alt="My photo" />
            <Info>
              <p>
                I&apos;m Chinonso M. Emerenwa, a Full Stack JavaScript Developer
                with five years of experience creating dynamic web applications.
                Based in Nigeria, I specialize in front-end technologies like
                React and Vue.js, as well as back-end frameworks such as Node.js
                and Express. My passion for technology drives me to deliver
                tailored solutions while maintaining effective communication
                with clients. I also contribute to open-source projects and
                enjoy sharing my knowledge through workshops. Let&apos;s connect
                to bring your ideas to life!
              </p>
              <BioGroup>
                {bio?.map((i, idx) => (
                  <li key={idx}>
                    <i.icon color="#f26b38" />
                    <span>{i.text}</span>
                  </li>
                ))}
              </BioGroup>
              <Button
                text="Download CV"
                className="active"
                target="_blank"
                to="https://drive.google.com/file/d/1pQIAA9-VOIKQT7zFoPRlAd2TDZSp2iDs/view?usp=sharing"
              />
            </Info>
          </GridInfo>
        </Section>
        <Section>
          <h2>My Services</h2>
          <ServicesGrid>
            {service.map((s, idx) => (
              <li key={idx}>
                <div>
                  <s.icon color="#f26b38" size="32px" />
                  <h3>{s.text}</h3>
                </div>
                <p>{s.desc}</p>
              </li>
            ))}
          </ServicesGrid>
        </Section>
        <Section>
          <h2>Skill set</h2>
          <SkillGrid>
            {skills?.map((i, idx) => (
              <li key={idx}>
                <i.icon size="60px" color="#f26b38" />
                <span>{i.text}</span>
              </li>
            ))}
          </SkillGrid>
        </Section>
      </Container>
    </>
  );
};

export default About;

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 65px 150px;
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media screen and (min-width: 840px) {
    padding: 0 80px 150px;
    gap: 140px;
  }
`;

export const Section = styled.div`
  h2 {
    text-transform: uppercase;
    color: var(--link-text);
    letter-spacing: 0.04em;
    font-size: 16px;
    width: fit-content;
    font-weight: 500;
    position: relative;
    box-shadow: inset 0 -6px 0 #666;
    margin: 0 0 32px;
    @media screen and (min-width: 440px) {
      margin: 0 0 40px;
    }
  }
`;

const GridInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 500%;
  }
  @media screen and (min-width: 440px) {
    display: grid;
    align-items: flex-start;
    gap: 30px;
    text-align: left;
    grid-template-columns: 80px 1fr;
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: 100px 1fr;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  > p {
    font-size: 13px;
    line-height: 23px;
  }
  @media screen and (min-width: 440px) {
    gap: 30px;
  }
`;

const BioGroup = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
  /* @media screen and (min-width: 840px) {
    grid-template-columns: repeat(3, 1fr);
  } */
  li {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      font-size: 13px;
      line-height: 18px;
      white-space: nowrap;
    }
  }
`;

const ServicesGrid = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  @media screen and (min-width: 840px) {
    gap: 50px 32px;
  }
  li {
    > div {
      display: flex;
      align-items: center;
      gap: 16px;
      h3 {
        color: var(--link-text);
        font-weight: 500;
        font-size: 13px;
      }
    }
    > p {
      font-size: 13px;
      line-height: 23px;
      margin-top: 16px;
    }
  }
`;

const SkillGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  @media screen and (min-width: 840px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 40px;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    span {
      color: var(--link-text);
      font-size: 13px;
      text-align: center;
    }
  }
`;
