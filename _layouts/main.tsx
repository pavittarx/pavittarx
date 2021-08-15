import Head from "next/head";
import Header from "@/components/Header";
import { string } from "prop-types";
import { ReactChild } from "react";

type LayoutProps = {
  title: string;
  children: ReactChild;
};

const MainLayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title> {title ? title : "pavittarx"} </title>
      </Head>
      <Header />
      <main className="main-ctr">{children}</main>
    </>
  );
};

export default MainLayout;
