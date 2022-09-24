import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid gray;
    margin: 10px;
    padding: 10px;
    border-radius: 1rem;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ToggleContainer = styled.div`
    .box {
        position: relative;
        z-index: -1;
    }

    .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: #8b8b8b;
        &.toggle--checked {
            background-color: #73D989;
        }
    }

    .toggle-circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #ffffff;
        transition: 0.3s;
        &.toggle--checked {
            left: 27px;
        }
    }

    &:hover {
        cursor: pointer;
    }
`

export const Toggle = () => {
    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
        setisOn(!isOn);
    }

    return (
        <Container>
            <ToggleContainer onClick={toggleHandler}>
                <div className="box">
                    <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}></div>
                    <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}></div>
                </div>
            </ToggleContainer>
        </Container>
        
    )
}

