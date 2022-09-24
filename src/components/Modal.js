import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
    position: relative;
    border: 1px solid gray;
    margin: 10px;
    padding: 10px;
    border-radius: 1rem;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalBackdrop = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalView = styled.div`
    z-index: 100;
    background: white;
    width: 400px;
    height: 200px;
    font-size: 15px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    > button {
        margin-top: 10px;
        margin-left: 350px;
        width: 25px; height: 25px;
        text-align: center;
        border-radius: 1rem;
        background-color: #F4E5FF;
        color: #818181;
        border: none;
    }

    > div {
        margin-top: 60px;
    }
`
export const ModalBtn = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 1rem;
    border: none;
    background-color: #F4E5FF;
    font-size: 15px;

    &:hover {
        background-color: #D9ADF9;
    }
`

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        if (isOpen === true) setIsOpen(false);
        else setIsOpen(true);
    }
    return (
        <>
            <ModalContainer>
                {
                    isOpen ? <ModalBackdrop onClick={openModalHandler}>
                        <ModalView onClick={(e) => e.stopPropagation()}>
                            <button onClick={openModalHandler}><a>X</a></button>
                            <div>안뇽 모달창</div>
                        </ModalView>
                    </ModalBackdrop>
                        : null
                }
                <ModalBtn onClick={openModalHandler}>
                    {
                        `${isOpen ? "Opened!" : "Open Modal"}`
                    }
                </ModalBtn>
            </ModalContainer>                
        </>
        
        
    )
}