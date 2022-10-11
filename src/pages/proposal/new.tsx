import type { NextPage } from "next";
import { useEffect } from "react";

import Layout from "@/components/dashboard-layout";

import { IsSchool } from "@/utils/profileType";
import { useRouter } from "next/router";

const NewProposal: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!IsSchool()) {
      router.push("/home");
    }
  }, [router]);

  return <Layout title="Create Proposal">IN PROGRESS</Layout>;
};

export default NewProposal;
