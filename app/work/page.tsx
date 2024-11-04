import { getBlogType } from "@/app/lib/data/blog";
export default async function Work() {
  const res = await getBlogType();
  return (
    <div>
      {res.data.map((item: string) => (
        <h1 key={item + item}>{item}</h1>
      ))}
    </div>
  );
}
