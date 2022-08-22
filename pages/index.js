import Head from "next/head"

import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader.jsx"
import Header from "../components/Header.js"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery </title>
                <meta name="description" content="Generated lottery by smart contract" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader />  */}
            <Header />
            {/*header connect button/ nav bar */}
            <LotteryEntrance />
        </div>
    )
}
