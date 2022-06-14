import Head from "next/head";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";

export default function Home({ pizzaList, admin }) {
  const [modalclose, setModalClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setModalClose={setModalClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!modalclose && <Add setModalClose={setModalClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get(`https://pizza-green.vercel.app/api/products`);

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
