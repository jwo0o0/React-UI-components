import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid gray;
    margin: 10px;
    padding: 0 10px;
    border-radius: 1rem;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TagContainer = styled.div`
    display: flex;
    border: 1px solid #C9D8FF;
    border-radius: 10px;
    width: 750px;
    justify-content: flex-start;
    align-items: center;

    > ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 0 0 0 5px;
        .tag {
            background-color: #C9D8FF;
            border-radius: 10px;
            padding: 10px;
            margin: 5px 5px;
            height: 16px;
            display: flex;
            align-items: center;
        }

        .tag-title {
            margin-right: 5px;
            color: #4E4E4E;
            font-size: 15px;
        }

        .tag-close-icon {
            background-color: #D7D7D7;
            width: 20px; height: 20px;
            border-radius: 50%;
            text-align: center;
            font-size: 15px;
            color: #4E4E4E;
        }
    }

    > input {
        border: none;
        margin: 0 10px;
        height: 80px;

        &:focus {
            outline: transparent;
        }
    }

    &:focus-within {
        border: 1px solid #4E4E4E;
    }
`

export const Tag = () => {
    const initialTags = ['카페라떼', '딸기라떼'];
    const [tags, setTags] = useState(initialTags);

    const removeTags = (indexToRemove) => {
        console.log("remove");
        const copied = tags.slice();
        copied.splice(indexToRemove, 1);
        setTags(copied);
    };

    const addTags = (event) => {
        if (event.key === "Enter") {
            const input = event.target.value;
            if (!tags.includes(input) && input !== "") {
                setTags([...tags, input]);
                event.target.value = "";
            }
        }
    };

    return (
        <Container>
            <TagContainer>
                <ul id="tags">
                {tags.map((tag, idx) => (
                    <li key={idx} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span className="tag-close-icon" onClick={() => removeTags(idx)}>x</span>
                    </li>
                ))}
                </ul>
                <input className="tag-input" type="text" onKeyUp={(e) => {addTags(e)}} placeholder="Press enter to add tags" />
            </TagContainer>
        </Container>
    )
}