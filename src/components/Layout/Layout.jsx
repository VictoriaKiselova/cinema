import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.wrapper}>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
