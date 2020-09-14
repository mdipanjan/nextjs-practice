import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{"Home"}</title>
      </Head>
      <div className="section-1 row">
        <div className="bg-danger col-6">
          <div className="sec1-text-box">
            <h1 className="sec1-main-text">SALE OFF! UP TO 70%</h1>
            <p className="sec1-sub-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="sec1-shop-now">SHOP NOW</p>
          </div>
          <div>
            <p className="sec1-indicator">INTRO</p>
          </div>
        </div>
        <div className="col-5 Sec1-img-part">
          <div className={"sec1-image-wrap"}>
            <img className={"sec1-image"} src="/assets/images/shopper.png" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
