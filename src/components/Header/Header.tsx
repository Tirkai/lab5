import React from "react";
import "./style.css";

interface IHeaderProps {
  title: React.ReactNode;
  navigation: React.ReactNode;
}

export const Header = (props: IHeaderProps) => (
  <div className="header">
    <div className="header__container">
      <div className="header__title">{props.title}</div>
      <div className="header__navigation">{props.navigation}</div>
    </div>
  </div>
);
