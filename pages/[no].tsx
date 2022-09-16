import { NextPage } from "next";
import { useRouter } from "next/router";

const NoPage: NextPage = ({ json }: any) => {
  const router = useRouter();
  return (
    <div>
      <h1>No {router.query.no}</h1>
      <pre>{JSON.stringify(json, null, "\t")}</pre>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { no: "1" } }, { params: { no: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
} // `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { no } = context.params;
  const url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${no}`;
  const res = await fetch(url);
  const json = await res.json();
  return {
    // Passed to the page component as props
    props: { json },
  };
}

export default NoPage;
