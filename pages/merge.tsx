import type { NextPage } from "next";
import { parse } from "node-html-parser";

const Merge: NextPage = ({ out }: any) => {
  return <pre>{JSON.stringify(JSON.parse(out), undefined, "\t")}</pre>;
};

export const getStaticProps = async () => {
  // const url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=`;
  // const no = 1033;
  // const res = await fetch(url + no);
  // const json = await res.json();

  const myUrl = `https://kyun.github.io/lotto_analysis/merge`;
  const myRes = await fetch(myUrl);
  // myRes.text();
  const myJson = await myRes.text();
  const root = parse(myJson);
  const text = root.querySelector("pre")?.text;
  return {
    props: {
      out: text,
    },
  };
};

export default Merge;
