import React from "react";

import DirectoryItem from "../directory-item/DirectoryItem";

const categories = [
    {
        title: "games",
        imageUrl:
            "https://images.unsplash.com/photo-1627856013841-4845e538d3ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        size: "large",
        id: 1,
        linkUrl: "shop/games",
    },
    {
        title: "consoles",
        imageUrl:
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        size: "large",
        id: 2,
        linkUrl: "shop/consoles",
    },
    {
        title: "controllers",
        imageUrl:
            "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        id: 3,
        linkUrl: "shop/controllers",
    },
    {
        title: "keyboards",
        imageUrl:
            "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id: 4,
        linkUrl: "shop/keyboards",
    },
    {
        title: "headsets",
        imageUrl:
            "https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id: 5,
        linkUrl: "shop/headsets",
    },
];

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;
