// src/components/Home.jsx
import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import Features from "./Features";
import { useOutletContext } from "react-router-dom";

function Home({ informationsRef, setVideoReady }) {
    const { showApp, openDialogInicio } = useOutletContext();

    const handleStartClick = () => {
        if (openDialogInicio) {
            openDialogInicio();
            return;
        }

        const section = document.getElementById("category-features-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Box>
            <Hero informationsRef={informationsRef} setVideoReady={setVideoReady} onStartClick={handleStartClick} />
            <Box>
                <Features videoReady={showApp} informationsRef={informationsRef} />
            </Box>
        </Box>
    );
}

export default Home;
