import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { Splash } from "../typings";
import { fetchSplashes } from "../utils/fetchSplashes";

interface Props {
  splashes: Splash[];
}

const Home = ({ splashes }: Props) => {
  return (
    // <div
    //   style={{
    //     backgroundImage:
    //       "url(" +
    //       "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100" +
    //       ")",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>WotterChat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed splashes={splashes} />
        <Widgets />
      </main>
    </div>
    // </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const splashes = await fetchSplashes();

  return {
    props: {
      splashes,
    },
  };
};
