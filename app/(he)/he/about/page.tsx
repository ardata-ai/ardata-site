import type { Metadata } from "next";
import AboutPage from "../../../components/AboutPage";
import { he } from "../../../i18n/he";

export const metadata: Metadata = {
  title: he.meta.about.title,
  description: he.meta.about.description,
};

export default function Page() {
  return <AboutPage lang="he" />;
}
