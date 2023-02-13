import Head from "next/head";
import Header from "./Header";
import { Raleway } from "@next/font/google";
import Footer from "./Footer";
const raleway = Raleway({ subsets: ["latin"] });

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className={raleway.className}>
        <Head>
          <title>React Dashboard Chart</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="py-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
