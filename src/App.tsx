import React, { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import { SiteContent } from "./components/SiteContent/SiteContent";
import { SiteLayout } from "./components/SiteLayout/SiteLayout";

export const App = () => {
  const [section, setSection] = useState(0);
  const [counter, setCounter] = useState(0);

  const onSectionChange = () => {
    setCounter(counter + 1);
  };

  useEffect(onSectionChange, [section]);

  return (
    <div className="App">
      <SiteLayout
        header={
          <Header
            title="Заголовок"
            navigation={<Navigation onSelect={(value) => setSection(value)} />}
          />
        }
        content={
          <SiteContent>
            Количество переходов: {counter}
            {section === 0 && <Home />}
            {section === 1 && <About />}
          </SiteContent>
        }
      />
    </div>
  );
};
