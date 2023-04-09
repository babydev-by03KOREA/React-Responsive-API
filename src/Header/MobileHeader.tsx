import React from "react";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";

type Props = {
    children?: React.ReactNode,
}

export const MobileHeader = ({children}: Props) => {
    return (
        <HeaderMobildBox>
            {children}
        </HeaderMobildBox>
    );
};

const HeaderMobildBox = styled.div`
  text-align: center;
  line-height: 20px;
  font-style: 20px;
  background-color: pink;
`;
