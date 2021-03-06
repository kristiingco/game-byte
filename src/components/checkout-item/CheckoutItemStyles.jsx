import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 20px;
    font-size: 20px;
    align-items: center;
`;

export const CheckoutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const CheckoutItemName = styled.span`
    width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
    width: 23%;
    display: flex;
    padding: 20px;
`;

export const CheckoutItemArrow = styled.span`
    cursor: pointer;
`;

export const CheckoutItemValue = styled.span`
    margin: 0 10px;
`;

export const CheckoutItemPrice = styled.span`
    width: 23%;
`;

export const CheckoutRemoveButton = styled.div`
    cursor: pointer;
`;
