import Modal from "react-modal";
import { HiX } from "react-icons/hi";
import { MdLocalMovies } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaHotjar } from "react-icons/fa";
import { MdOutlineDataExploration } from "react-icons/md";
import { MdOutlineUpcoming } from "react-icons/md";
import css from './ModalMenu.module.css'

export default function ModalMenu({ modalIsOpen, closeModal }) {
  return (
      <Modal isOpen={modalIsOpen}
       onRequestClose={closeModal}
       className={css.modalContent}
       overlayClassName={css.ReactModal__Overlay}
       >
        <button className={css.closeButton} onClick={closeModal}>
        <HiX className={css.iconMenu}/>
      </button>
        <ul className={css.list}>
          <li className={css.listMenu}><FaHotjar className={css.iconMenu}/> Popular</li>
          <li className={css.listMenu}><MdOutlineDataExploration className={css.iconMenu}/> Top Rated</li>
          <li className={css.listMenu}><MdOutlineUpcoming className={css.iconMenu}/> Upcoming</li>
          <li className={css.listMenu}><MdLocalMovies className={css.iconMenu}/> Movies</li>
          <li className={css.listMenu}><BiSolidCameraMovie className={css.iconMenu}/> TV</li>
        </ul>
      </Modal>
    
  );
}
