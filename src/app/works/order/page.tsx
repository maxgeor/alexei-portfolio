import type { Metadata } from "next";
import { WorksOrderTool } from "@/components/WorksOrderTool";

export const metadata: Metadata = {
  title: "Works order (draft)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WorksOrderPage() {
  return (
    <main>
      <h1 className="sr-only">Works order draft tool</h1>
      <WorksOrderTool />
    </main>
  );
}
