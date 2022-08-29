import { useState } from "react";
import style from "./dashboard-layout.module.scss";
// import MainHeader from '@/components/shared/MainHeader';
// import Sidenav from '@/components/shared/Sidenav';

const MainLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={style.page}>
      <div className={style.sidebar}></div>
      <div className={style.pageContainer}>
        <div className={style.menu}></div>
        <main className={style.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
