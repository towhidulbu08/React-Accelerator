import AllPosts from "./Components/AllPosts";
import Heading from "./Components/Heading";
import Post from "./Components/Post";
import Section from "./Components/Section";

export default function App() {
  return (
    <Section isFancy={true}>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}
