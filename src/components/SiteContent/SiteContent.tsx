import React from "react";
import "./style.css";

interface ISiteContentProps {
  children: React.ReactNode;
}

export const SiteContent = (props: ISiteContentProps) => (
  <div className="siteContent">{props.children}</div>
);
