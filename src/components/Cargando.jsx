import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import "./css/Cargando.css";

const Cargando = () => {
    const [glow, setGlow] = useState(false);
    const [showElectricEffect, setShowElectricEffect] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const NUM_ROWS = isMobile ? 10 : 16;
    const [showImage, setShowImage] = useState(false);
    const [showStrips, setShowStrips] = useState(true);
    const [showDots, setShowDots] = useState(false);

    const COLORS = {
        strip: 'rgb(248, 252, 252)', // blanco frío, NO gris
        glow: '#ffffff',                      // glow principal
        glowSoft: 'rgba(255,255,255,0.6)',
        glowMedium: 'rgba(255,255,255,0.4)',
        dot: '#e5e5e5',                       // puntos
        dotGlow: '#ffffff',
    };

    useEffect(() => {
        const timerGlow = setTimeout(() => {
            setGlow(true);
            setShowElectricEffect(true);
            setShowDots(true); // 👈 habilita los puntos de forma independiente

            setTimeout(() => {
                setShowElectricEffect(false);
            }, 1000);
        }, 1200);

        return () => clearTimeout(timerGlow);
    }, []);


    //FONDO TIRAS VERTICALES
    useEffect(() => {
        const showImageTimer = setTimeout(() => {
            setShowImage(true);

            const hideStripsTimer = setTimeout(() => {
                setShowStrips(false);
            }, 2000); // duración del fadeIn

            return () => clearTimeout(hideStripsTimer);
        }, 800); // ⏳ duración de las tiras

        return () => clearTimeout(showImageTimer);
    }, []);


    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#f9fefe',
                zIndex: 9999,
            }}
        >

            {/* FONDO */}
            {/*
            {showStrips && (
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column', // Ahora filas horizontales
                        zIndex: 1,
                    }}
                >
                    {Array.from({ length: NUM_ROWS }).map((_, index) => {
                        const colors = ["rgb(0,117,86)", "rgb(0,131,207)", "rgb(255,106,0)"];
                        const bgColor = colors[index % colors.length]; // fondo de color

                        return (
                            <Box
                                key={index}
                                sx={{
                                    width: '100%',
                                    height: `${100 / NUM_ROWS}%`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.05,
                                        ease: 'easeInOut',
                                    }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundColor: bgColor,
                                    }}
                                />

                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.08,
                                        ease: 'easeInOut',
                                    }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#f8fcfc', // blanca
                                        transformOrigin: index % 2 === 0 ? 'right center' : 'left center',
                                    }}
                                />
                            </Box>
                        );
                    })}
                </Box>
            )}
        */}

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: isMobile
                        ? 'url(fondo-rosmiya-mobile.webp)'
                        : 'url(footer-rosmiya.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                    opacity: 1,
                    animation: 'fadeInBg 2s ease-in forwards',

                    // 🔑 CLAVE
                    filter: 'brightness(1.05) saturate(1.05)',
                }}
            />


            {/* Contenido */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transform: 'translateY(-5%)',
                    zIndex: 3,
                    opacity: 1,
                    transition: 'opacity 2s ease-in',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        position: 'relative',
                    }}
                >

                    {/* Logo */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 0.5, // 👈 más juntas
                            }}
                        >
                            {[
                                "/logo-golfincolors-1.png",
                                "/logo-golfincolors-2.png",
                                "/logo-golfincolors-3.png",
                            ].map((src, index) => (
                                <motion.img
                                    key={index}
                                    src={src}
                                    variants={{
                                        hidden: { x: 80, opacity: 0 },
                                        visible: { x: 0, opacity: 1 },
                                    }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    style={{
                                        height: isMobile ? 32 : 48, // 👈 ajusta tamaño según pantalla
                                    }}
                                />
                            ))}
                        </Box>

                        <Box
                            sx={{
                                height: 16,          // ⬅️ justo para las barras
                                marginTop: 3,        // ⬅️ separación elegante
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}
                        >
                            {showDots && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    style={{
                                        display: 'flex',
                                        gap: 6,
                                    }}
                                >
                                    {[
                                        "rgb(0, 117, 86)",   // verde
                                        "rgb(0, 131, 207)",  // azul
                                        "rgb(255, 106, 0)",  // naranja
                                    ].map((color, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                scaleY: glow ? [0.7, 1.15, 0.7] : 1,
                                                opacity: [0.6, 1, 0.6],
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1,
                                                delay: i * 0.15,
                                                ease: 'easeInOut',
                                            }}
                                            style={{
                                                width: 4,
                                                height: 14,
                                                borderRadius: 2,
                                                backgroundColor: color, // ⬅️ color individual
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </Box>


                    </motion.div>
                </Box>

            </Box>

        </Box>
    );
};

export default Cargando;
