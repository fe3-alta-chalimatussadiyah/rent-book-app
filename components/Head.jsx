import Head from "next/head";

function HeadApp(props) {
  return (
    <Head>
      <title>{props.title ? props.title : 'Rent Book'}</title>
      <meta
        name="description"
        content={props.description ? props.description : 'Rent book through the Diy Book online book rental store. You can rent unlimited paperback books and save time, money and shelf space.'}
      />
      <link
        rel="icon"
        href={
              props.icon
                ? props.icon
                : 'public/favicon.io/'
            }
      />
    </Head>
  );
}

export default HeadApp;
