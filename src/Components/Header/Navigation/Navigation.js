import { forwardRef } from "react";

const Navigation = forwardRef(({props},ref) => {
    return <nav ref={ref}></nav>;
});

export default Navigation;
