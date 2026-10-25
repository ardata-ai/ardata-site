import type { Metadata } from "next";
import AboutPage from "../../../components/AboutPage";
import { pageMetadata } from "../../../i18n/metadata";

export const metadata: Metadata = pageMetadata("he", "about");

export default function Page() {
  return <AboutPage lang="he" />;
}
