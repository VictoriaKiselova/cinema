import { NavLink } from "react-router-dom";
import SeachMovies from "../SeachMovies/SeachMovies.jsx";
import css from "./Navigation.module.css";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import ModalMenu from "../../pages/ModalMenu/ModalMenu.jsx";

// const getNavLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export default function Navigation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <header className={css.header}>
      <div className={css.searchBox}>
        <div className={css.navMenu}>
          <HiMenu className={css.iconMenu} onClick={openModal} />
          <NavLink className={css.logo} to="/">
            CINEMA
          </NavLink>
        </div>
        <SeachMovies />
      </div>
      <ModalMenu modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </header>
  );
}
