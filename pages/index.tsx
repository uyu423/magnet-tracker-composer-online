import Layout from "./components/MyLayout";
import Link from "next/link";
import { PropsWithChildren } from "react";

const PostLink = (props: PropsWithChildren<{ id: string }>) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Hello Next.js" />
        <PostLink id="Learn Next.js is awesome" />
        <PostLink id="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}

// const Index = () => (
//   <Layout>
//     <p>Hello Netxt.js</p>
//   </Layout>
// );

// export default Index;
