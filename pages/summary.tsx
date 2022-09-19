// SummaryPage with Next Route
import React from "react";
import { NextPage } from "next";
import SummaryBox from "components/SummaryBox";
import dynamic from "next/dynamic";

const KoreanCurrency = dynamic(
  () => import("components/common/KoreanCurrency"),
  { ssr: false }
);

const SummaryPage: NextPage = () => {
  return (
    <div>
      <h1>Summary Page</h1>

      <SummaryBox
        label="판매 금액 총합"
        value={<KoreanCurrency value={123123123123} />}
      />
    </div>
  );
};
export default SummaryPage;
