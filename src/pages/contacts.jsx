import styled from "styled-components";
import PageHeader from "../components/pageHeader";
import { Section, Container } from "./about";
import { MdEmail, MdWifiCalling3 } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import InputField from "../components/inputField";

const Contacts = () => {
  const bio = [
    { text: "+2349036909617", icon: MdWifiCalling3, title: "Phone" },
    { text: "cemeji64@gmail.com", icon: MdEmail, link: true, title: "Email" },
    { text: "Lagos, Nigeria", icon: FaLocationDot, title: "Location" },
  ];
  return (
    <>
      <PageHeader title="Contacts" />
      <Contain>
        <Section>
          <h2>Contacts</h2>{" "}
          <BioGroup>
            {bio.map((b, idx) => (
              <li key={idx}>
                <div>
                  <b.icon color="#f26b38" size="28px" />
                  <span>{b.title}</span>
                </div>
                <p>{b.text}</p>
              </li>
            ))}
          </BioGroup>
        </Section>
        <Form>
          <InputField placeholder="Name" />
          <InputField placeholder="Email" type="email" />
          <InputField placeholder="Message" type="textarea" />
          <button className="active">Send message</button>
        </Form>
      </Contain>
    </>
  );
};

export default Contacts;

const Contain = styled(Container)`
  gap: 30px;
`;

const BioGroup = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  li {
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      span {
        font-weight: 500;
        font-size: 13px;
        color: var(--link-text);
      }
    }
    p,
    a {
      font-size: 13px;
      line-height: 23px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  button {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    height: 42px;
    cursor: pointer;
    padding: 0px 30px;
    font-size: 13px;
    line-height: 40px;
    border: 1px solid var(--btn-border);
    color: var(--link-text);
    &.active {
      background-color: var(--accent);
      border-color: var(--accent);
    }
    &:hover {
      background-color: var(--accent);
      color: var(--link-text);
      border-color: var(--accent);
    }
  }
`;
