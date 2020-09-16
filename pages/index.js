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
        <div className="col-6">
          <div className="sec1-text-box">
            <h1 className="sec1-main-text">SALE OFF! UP TO 70%</h1>
            <p className="sec1-sub-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="sec1-shop-now">SHOP NOW</p>
            <div className="shop-rec"></div>
          </div>
          <div className="sec1-indicator-wrap">
            <div>
              <p className="sec1-indicator">INTRO</p>
            </div>
            <div className="line"></div>
            <p className="num">01</p>
          </div>
        </div>
        <div className="col-5 Sec1-img-part">
          <div className={"sec1-image-wrap"}>
            <img className={"sec1-image"} src="/assets/images/shopper.png" />
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="sec2-indicator-wrap">
          <div>
            <p className="sec1-indicator">INTRO</p>
          </div>
          <div className="line"></div>
          <p className="num">02</p>
        </div>
        <div className="container ">
          <div className="row product-link-container">
            <div className="col-6 ">
              <ul className="product-link-wrap">
                <li>T-Shirt</li>
                <li>Pans</li>
                <li>Shoe</li>
                <li>Jacket</li>
                <li>Fashion</li>
              </ul>
            </div>
            <div className="col-6 all-link-wrap">
              <ul className="all-link">
                <li>ALL PRODUCTS</li>
                {/* <div className="shop-rec"></div> */}
              </ul>
            </div>
          </div>
          <div className="card-wrap">
            <div className="row ">
              <div className="col-4">
                <div className="bg-danger sec2-card">2</div>
                <p>Cuffed Beanie</p>
              </div>
              <div className="col-4">
                <div className="bg-danger sec2-card"></div>
                <p>Grey Beanie</p>
              </div>
              <div className="col-4">
                <div className="bg-danger sec2-card"></div>
                <p>Calvin Klein Sweatpants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
