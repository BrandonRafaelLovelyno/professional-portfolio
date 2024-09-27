import dynamic from "next/dynamic";

const DynamicWorkPage = dynamic(() => import("@/components/page/work"), {
  ssr: false,
});

export default DynamicWorkPage;
