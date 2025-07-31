import Link from "next/link";

const NewsArticle =async ({params,searchParams}:{params: Promise<{articlesId: string}>;searchParams: Promise<{lang?: "en" | "es" | "fr"}>}) => {
  const {articlesId} = await params;
  const {lang = "en"} = await searchParams;
  return (
    
    <div>
      <h1>News article {articlesId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articlesId}=${lang}`}>English</Link>
        <Link href={`/articles/${articlesId}=${lang}`}>Spain</Link>
        <Link href={`/articles/${articlesId}=${lang}`}>French</Link>
      </div>
    </div>
  );
};

export default NewsArticle;