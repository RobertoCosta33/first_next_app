import Head from "next/head";

export default function PageTitle({ children }) {
  return (
    <Head>
      <h1>{children}</h1>
    </Head>
  );
}
