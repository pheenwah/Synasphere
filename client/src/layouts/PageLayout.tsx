import type { ReactNode } from "react";
import "../styles/layouts/PageLayout.css";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="page-content">{children}</div>;
}
