import styled from "styled-components";
import BlogCard from "../components/blogCard";
import PageHeader from "../components/pageHeader";
import { Container, Section } from "./about";

const Blog = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <>
      <PageHeader title="Blog" />
      <Container>
        <Section>
          <h2>Latest posts</h2>
          <Grid>
            {list.map((i) => (
              <BlogCard key={i} />
            ))}
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Blog;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;
