import { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid gray;
    margin: 10px;
    padding: 0;
    border-radius: 1rem;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TabMenu = styled.ul`
    display: flex;
    width: 90%;
    padding: 0;
    list-style: none;

    .submenu {
        width: calc(100% / 3);
        height: 40px;
        background-color: #F4E5FF;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: #D9ADF9;
            cursor: pointer;
        }
    }
`;

export const Desc = styled.div`
    text-align: center;
    width: 90%;
`;

export const Tab = () => {
    const [ currentTab, setcurrentTab ] = useState(0);

    const menuArr = [
        { name: 'Tab1', content: 'Tab menu one 안뇽안뇽' },
        { name: 'Tab2', content: 'Tab menu two' },
        { name: 'Tab3', content: 'Tab menu three' }
    ]

    const selectMenuHandler = (index) => {
        setcurrentTab(index);
    }

    return (
        <>
            <Container>
                <TabMenu>
                {
                    menuArr.map((tab, idx) => {
                        return <li key={idx} onClick={() => selectMenuHandler(idx)} className={`submenu${currentTab === idx ? " focused" : ""}`}>{tab.name}</li>
                    })
                }
                </TabMenu>
                <Desc>
                    <p>{menuArr[currentTab].content}</p>
                </Desc>
            </Container>
        </>
    )
}

