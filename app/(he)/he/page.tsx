import type { Metadata } from "next";
import HomePage from "../../components/HomePage";
import { pageMetadata } from "../../i18n/metadata";

export const metadata: Metadata = pageMetadata("he", "home");

export default function Page() {
  return <HomePage lang="he" />;
}
