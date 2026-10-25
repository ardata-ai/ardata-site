import type { Metadata } from "next";
import AboutPage from "../../components/AboutPage";
import { en } from "../../i18n/en";

export const metadata: Metadata = {
  title: en.meta.about.title,
  description: en.meta.about.description,
};

export default function Page() {
  return <AboutPage lang="en" />;
}
