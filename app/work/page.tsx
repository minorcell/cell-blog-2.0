import { getBlogType } from "@/app/lib/data/blog";
export default async function Work() {
  const res = await getBlogType();
  return (
    <div className="animate-fadeIn">
      {res.data.map((item: string) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}
