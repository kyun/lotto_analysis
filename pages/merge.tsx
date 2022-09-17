import type { NextPage } from "next";
import out from "./api/out.json";

const Merge: NextPage = () => {
  return <pre>{JSON.stringify(out, undefined, "\t")}</pre>;
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Merge;
