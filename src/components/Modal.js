import React from "react";
import { useState } from "react";
import style from "../style/Modal.css";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        if (isOpen === true) setIsOpen(false);
        else setIsOpen(true);
    }
    return (
        <div className="ModalContainer">
            {
                isOpen ? <div className="ModalBackdrop" onClick={openModalHandler}>
                    <div className="ModalView" onClick={(e) => e.stopPropagation()}>
                        <button onClick={openModalHandler}><a>X</a></button>
                        <div>안뇽 모달창</div>
                    </div>
                </div>
                : null
            }
            <button className="ModalBtn" onClick={openModalHandler}>
                {
                    `${isOpen ? "Opened!" : "Open Modal"}`
                }
            </button>
        </div>
    )
}

export default Modal;