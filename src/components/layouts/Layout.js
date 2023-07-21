import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }){
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/images/logo.png" />
            </Head>
            < Header logoSource="/images/logo.png" />
                <main>
                    {children}
                </main>
            < Footer />
        </>
    )
}

export default Layout;