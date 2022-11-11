import React from "react";
import { useNavigate } from "react-router-dom";

export const GuestGrand = ({ children }: { children: any }) => {
    const navigate = useNavigate();
    const islogined = true;
    React.useEffect(() => {
        if (islogined) {
            navigate("/dashbound")
        }
    })
    return children;
};
