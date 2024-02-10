import type { ReactNode } from "react";
import { useEffect, useState, useCallback } from "react";
import Header from "./Header/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
