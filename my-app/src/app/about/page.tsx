import Link from "next/link";

export const metadata = {
  title: 'About Page',
  description: 'This is the about page of the application',
}
const About = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>This is about page</h1>
    </div>
  );
};

export default About;