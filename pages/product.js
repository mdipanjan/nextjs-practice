import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{"About"}</title>
      </Head>
      <div className="">
        <h1 className="test-color">Product</h1>
      </div>
    </Layout>
  );
}
