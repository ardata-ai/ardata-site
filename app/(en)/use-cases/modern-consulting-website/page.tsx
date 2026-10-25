import type { Metadata } from "next";
import UseCasePage from "../../../components/UseCasePage";
import { pageMetadata } from "../../../i18n/metadata";

export const metadata: Metadata = pageMetadata("en", "useCase");

export default function Page() {
  return <UseCasePage lang="en" />;
}
