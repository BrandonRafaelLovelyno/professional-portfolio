import dynamic from "next/dynamic";

const ComponentWithBrowserOnlyCode = dynamic(
  () => import("../../../../components/page/work"),
  {
    ssr: false,
  }
);

export default function WorkPage() {
  return <ComponentWithBrowserOnlyCode />;
}
