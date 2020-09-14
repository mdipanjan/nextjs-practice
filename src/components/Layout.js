import Head from "next/head";
import Navbar from "./Navbar/index";

function Layout({ children, home }) {
  return (
    <div className="layout-wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="og:title" content={"Test"} />
      </Head>
      <Navbar />
      <main>{children}</main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Layout;
