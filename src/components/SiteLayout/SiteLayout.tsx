import "./style.css";

interface ISiteLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

export const SiteLayout = (props: ISiteLayoutProps) => (
  <div className="siteLayout">
    <div className="siteLayout__header">{props.header}</div>
    <div className="siteLayout__content">{props.content}</div>
  </div>
);
