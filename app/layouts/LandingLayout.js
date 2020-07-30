import Head from "next/head";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hugo Farji</title>
      </Head>
      {children}
    </>
  )
}

export default LandingLayout