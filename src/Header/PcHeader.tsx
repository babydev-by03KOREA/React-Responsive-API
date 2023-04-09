import React from "react";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";

type Props = {
    children?: React.ReactNode,
}

export const PcHeader = ({children}: Props) => {
    return (
        <HeaderPcBox>
            {children}
        </HeaderPcBox>
    );
};

const HeaderPcBox = styled.div`
  text-align: center;
  line-height: 20px;
  font-style: 20px;
  background-color: skyblue;
`;
