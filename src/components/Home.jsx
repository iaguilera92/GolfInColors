// src/components/Home.jsx
import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero";
import Features from "./Features";
import { useOutletContext } from "react-router-dom";

function Home({ informationsRef, setVideoReady }) {
    const { showApp, openDialogInicio } = useOutletContext();
    return (
        <Box>
            <Hero informationsRef={informationsRef} setVideoReady={setVideoReady} onStartClick={openDialogInicio} />
            <Box>
                <Features videoReady={showApp} informationsRef={informationsRef} />
            </Box>
        </Box>
    );
}


export default Home;

