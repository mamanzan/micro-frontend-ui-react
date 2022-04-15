import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6
import "../scss/LayoutSidebarMain.scss";

type DropdownProps = {
  sidebar: JSX.Element;
  main: JSX.Element;
};

export const LayoutSidebarMain = ({ sidebar, main }: DropdownProps) => {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);

  return (
    <div className="layout">
      <CSSTransition in={isShowingSidebar} timeout={500} classNames="move">
        <aside className="layout__sidebar">{sidebar}</aside>
      </CSSTransition>

      <CSSTransition in={isShowingSidebar} timeout={500} classNames="move">
        <button
          className="layout__hide-sidebar"
          onClick={() => setIsShowingSidebar(false)}
        >
          <span className="oi" data-glyph="arrow-thick-left"></span>
        </button>
      </CSSTransition>

      {!isShowingSidebar && (
        <button
          className="layout__show-sidebar"
          onClick={() => setIsShowingSidebar(true)}
        >
          <span className="oi" data-glyph="menu"></span>
        </button>
      )}

      <main className="layout__main">{main}</main>
    </div>
  );
};
