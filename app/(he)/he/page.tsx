import type { Metadata } from "next";
import HomePage from "../../components/HomePage";
import { he } from "../../i18n/he";

export const metadata: Metadata = {
  title: he.meta.home.title,
  description: he.meta.home.description,
};

export default function Page() {
  return <HomePage lang="he" />;
}
