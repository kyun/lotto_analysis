// SummaryPage with Next Route
import React from "react";
import { NextPage } from "next";
import SummaryBox from "~/components/SummaryBox";
import dynamic from "next/dynamic";
import SummaryLayout from "~/components/common/SummaryLayout";
import WinNumberBox from "~/components/WinNumberBox";

const KoreanCurrency = dynamic(
  () => import("~/components/common/KoreanCurrency"),
  { ssr: false }
);

const SummaryPage: NextPage = () => {
  return (
    <SummaryLayout>
      <br />
      <div style={{ textAlign: "center" }}>
        <WinNumberBox />
      </div>
      <br />
      {/* <SummaryBox
        label="판매 금액 총합"
        value={<KoreanCurrency value={65856966266000} />}
      /> */}
    </SummaryLayout>
  );
};
export default SummaryPage;
