"use client";

import { twMerge } from "tailwind-merge";
import ClientSelection from "@/components/section/page/client/client-selection";
import ClientDetail from "@/components/section/page/client/client-detail";

const ClientPage: React.FC = () => {
  return (
    <>
      <ClientSelection />
      <ClientDetail />
    </>
  );
};

export default ClientPage;
