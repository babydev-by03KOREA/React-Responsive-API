import React from "react";
import {MobileHeader} from "./Header/MobileHeader";
import {PcHeader} from "./Header/PcHeader";
import {useMediaQuery} from "react-responsive";

function App() {
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});
    return (
        <React.Fragment>
            {
                isMobile ?
                    (<MobileHeader>MOBILE HEADER</MobileHeader>)
                    :
                    (<PcHeader>PC HEADER</PcHeader>)
            }
        </React.Fragment>
    );
}

export default App;
