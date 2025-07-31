import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <Link href="/about">Page</Link>
      <Link href="/articles/news-123=en">Read in english</Link>
      <Link href="/articles/news-123=fr">Read in French</Link>
    </div>
  );
};

export default Home;