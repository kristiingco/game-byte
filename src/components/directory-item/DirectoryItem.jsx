import React from "react";

import { useNavigate } from "react-router-dom";

import {
    BackgroundImage,
    Content,
    DirectoryItemContainer,
} from "./DirectoryItemStyles.jsx";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, size, linkUrl } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(linkUrl);

    return (
        <DirectoryItemContainer size={size} onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Content>
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </Content>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
