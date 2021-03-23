import React from "react";
import "./style.css";

interface INavigationProps {
  onSelect: (value: number) => void;
}

export const Navigation = (props: INavigationProps) => (
  <div className="navigation">
    <div className="navigation__item" onClick={() => props.onSelect(0)}>
      Home
    </div>
    <div className="navigation__item" onClick={() => props.onSelect(1)}>
      About
    </div>
  </div>
);
