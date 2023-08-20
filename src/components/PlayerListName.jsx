/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "eslint-plugin-react-hooks";

export default function PlayerListName({ player }) {
    const navigate = useNavigate();
    return (
        <div>
            <h3>{player.name}</h3>
            <button
                onClick={() => {
                navigate(`/${player.id}`);
                }}
            >
                See Details
            </button>
        </div>
    );
}