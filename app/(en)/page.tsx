import type { Metadata } from "next";
import HomePage from "../components/HomePage";
import { en } from "../i18n/en";

export const metadata: Metadata = {
  title: en.meta.home.title,
  description: en.meta.home.description,
};

export default function Page() {
  return <HomePage lang="en" />;
}
