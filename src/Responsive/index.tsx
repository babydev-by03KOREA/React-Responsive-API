import React from "react";
import {useMediaQuery} from "react-responsive";
import styled from "styled-components";

type Props = {
    children: React.ReactNode,
}

export const Mobile = ({children}:Props) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    });
    return (
        <React.Fragment>
            {isMobile && children}
        </React.Fragment>
    );
};

export const Pc = ({children}:Props) => {
    const isPc = useMediaQuery({
       query: "(min-width:769px)"
    });
    return (
        <React.Fragment>
            {isPc && children}
        </React.Fragment>
    );
};
