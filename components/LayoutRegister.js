import React from "react";
import Head from "next/head";
function LayoutRegister({ children }) {
  return (
    <div className="layout-register">
      <Head>
        <title>Mehmon24</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}

export default LayoutRegister;
