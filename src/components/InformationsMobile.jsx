import { Box, Typography, Container, Grid, Button, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTshirt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from 'react-intersection-observer';
import { useOutletContext } from "react-router-dom";
import { SportsGolf, School, EmojiEvents, Groups } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./css/Informations.css";
import "swiper/css";

const promotions = [
  {
    id: 1,
    title: "??? For Kids",
    description: "They learn golf by playing and having fun from day one.",
    image: "/fondo-1.png",
    price: "Start Today",
    bgColor: "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
    textColor: "white",
    descriptors: [
      "?? Fun challenges",
      "?? Level-based progress",
      "?? Interactive learning",
      "? Real fundamentals",
      "?? More confidence",
      "? Guaranteed fun"
    ]
  },
  {
    id: 2,
    title: "???????? For Parents",
    description: "Support and track your children's progress at every stage.",
    image: "/fondo-3.jpg",
    price: "Discover More",
    bgColor: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
    textColor: "white",
    descriptors: [
      "?? Clear tracking",
      "?? Motivational system",
      "?? Structured learning",
      "?? Family involvement",
      "?? Holistic development",
      "?? Simple communication"
    ]
  },
  {
    id: 3,
    title: "?? For Coaches",
    description: "Modern tools to teach golf effectively.",
    image: "/fondo-4.png",
    price: "Boost Your Teaching",
    bgColor: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
    textColor: "white",
    descriptors: [
      "?? Student tracking",
      "?? Structured programs",
      "?? Teaching resources",
      "? Easy management",
      "??? Technical evaluation",
      "?? More efficient coaching"
    ]
  }
];

function Informations({ informationsRef, triggerInformations }) {

  // Controla la vista del componente
  const [isGrabbing, setIsGrabbing] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false, });

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showArrow, setShowArrow] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [showPopularBadge, setShowPopularBadge] = useState(false);

  const { ref: swiperRef, inView: swiperInView } = useInView({ threshold: 0.2, triggerOnce: true, });

  //CANCELAR PRIMERA ANIMACI�N
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasAnimated2, setHasAnimated2] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true); // ?? Activa la animaci�n cuando el componente es visible
    }
  }, [inView]);

  //ANIMACI�N DESCRIPTORES
  useEffect(() => {
    if (swiperInView && swiperInstance && !hasAnimated) {
      swiperInstance.slideTo(0, 1500); // mueve del �ltimo al primero
      setHasAnimated(true);
    }
  }, [swiperInView, swiperInstance, hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      const timeout = setTimeout(() => {
        setShowPopularBadge(true);
      }, 2000); // Delay de 3 segundos despu�s que el swiper termin� su animaci�n
      return () => clearTimeout(timeout);
    }
  }, [hasAnimated]);


  //EVITAR ANIMACI�N DUPLICADA
  useEffect(() => {
    if (inView && !hasAnimated2) {
      const timer = setTimeout(() => {
        setHasAnimated2(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated2]);

  const handleContactClick = (title) => {
    const mensaje = `�Hola! Me interes� la promoci�n de ${encodeURIComponent(title)} �Me comentas?`;
    window.open(`https://api.whatsapp.com/send?phone=15617975986&text=${mensaje}`, "_blank");
  };
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 10,
        backgroundImage: 'url(PATTERN.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: isMobile ? 8 : 3,
        pt: 3,
        marginTop: "0",
        marginBottom: "-10px",
        color: "white",
        overflow: 'hidden',
        borderBottomLeftRadius: isMobile ? '90px' : '120px',
        borderBottomRightRadius: isMobile ? '90px' : '120px',
      }}
    >
      {/* Overlay solo sobre la imagen */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', // oscurece solo la imagen
          zIndex: 1, // debajo del contenido
          borderBottomLeftRadius: isMobile ? '90px' : '120px',
          borderBottomRightRadius: isMobile ? '90px' : '120px',
        }}
      />
      <Container sx={{ textAlign: "center", position: "relative", color: "black", maxWidth: "1400px !important" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ height: 0, minHeight: 0, opacity: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden="true">
            <Typography
              component={motion.h5}
              initial={{ opacity: 0, y: 20 }}
              animate={showPopularBadge ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                mb: 2,
                pb: 0.5,
                textAlign: isMobile ? "center" : "left",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: { xs: "1.2rem", md: "1.6rem" },

                color: "#ffffff",        // blanco puro
                textShadow: "0 2px 8px rgba(0,0,0,0.5)", // ?? sombra sutil para resaltar sobre fondo oscuro

                position: "relative",
                display: "inline-block",

                zIndex: 2,

                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: showPopularBadge ? "100%" : "0%",
                  height: "4px",
                  borderRadius: "4px",
                  background: "#ffffff", // underline blanco
                  transition: "width 0.6s ease-out",
                  zIndex: 2,
                },
              }}
            >
              Our Services
            </Typography>
            <Box ref={swiperRef} sx={{ display: isMobile ? "block" : "block", position: "relative", px: 1, pt: 2, pb: 1, overflow: "hidden" }}>
              <Swiper
                style={{ overflow: "visible" }}
                spaceBetween={isMobile ? 15 : 15}
                slidesPerView={isMobile ? 1.07 : 1.5}
                onSwiper={setSwiperInstance}
                initialSlide={promotions.length - 1}
                centeredSlides={false}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setShowArrow(swiper.activeIndex !== 2)}
              >
                {promotions.map((promo, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        cursor: "grab",
                        "&:active": { cursor: "grabbing" },
                        height: "420px",
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Contenedor del Badge debajo de la card */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          zIndex: 0,      // ?? este contexto queda detr�s
                          pointerEvents: "none", // evita bloquear clics de la card
                        }}
                      >
                        {promo.id === 1 && (
                          <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={showPopularBadge ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                              position: "absolute",
                              top: "-16px",
                              left: 8,
                              background: "linear-gradient(#f14c2e, #d8452e)",
                              color: "white",
                              borderTopLeftRadius: "8px",
                              borderTopRightRadius: "8px",
                              padding: "6px 16px",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              height: "22px",
                              minWidth: "110px",
                              textAlign: "center",
                              display: "grid",
                              placeItems: "center",
                              gap: 6,
                              boxShadow: "0 0 12px 2px rgba(255, 105, 0, 0.6)",
                              border: "2px solid #ff6a00",
                            }}
                          >
                            Popular
                          </motion.div>
                        )}
                      </Box>

                      {/* Card Principal (encima) */}
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          mt: 2,
                          borderRadius: "16px",
                          overflow: "hidden",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                          position: "relative",
                          bgcolor: "white",
                          zIndex: 2,
                        }}
                      >

                        {/* Imagen de fondo con overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `url(${promo.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              inset: 0,
                              background:
                                promo.bgColor ||
                                "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.3))",
                            },
                            zIndex: 0,
                          }}
                        />

                        {/* Contenido */}
                        <Box
                          sx={{
                            position: "relative",
                            zIndex: 2,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",

                          }}
                        >
                          {/* T�tulo y descripci�n */}
                          <Box sx={{ mb: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 800,
                                fontSize: isMobile ? "1.05rem" : "1.15rem",
                                textAlign: "left",
                                color: promo.textColor || "white",
                                mb: 2,
                                textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                              }}
                            >
                              {promo.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                fontSize: "0.73rem",
                                color: "#f5f5f5",
                                background: "rgba(0,0,0,0.4)",
                                borderRadius: "6px",
                                p: 1,
                                lineHeight: 1.3,
                                display: "flex",
                                alignItems: "flex-start",
                                minHeight: 45,
                              }}
                            >
                              {promo.description}
                            </Typography>

                          </Box>
                          {/* Lista de descriptores */}
                          <Box component="ul" sx={{ pl: 2, mb: 5 }}>
                            {promo.descriptors?.map((desc, i) => (
                              <Typography
                                key={i}
                                component="li"
                                variant="body2"
                                sx={{
                                  color: "#eee",
                                  fontSize: "0.85rem",
                                  lineHeight: 1.5,
                                  mb: 0.5,
                                  listStyle: "none",
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "8px",
                                }}
                              >
                                {desc}
                              </Typography>
                            ))}
                          </Box>
                          {/* Bot�n Cotizar (queda abajo gracias a mt:auto) */}
                          <motion.button
                            onClick={() => handleContactClick(promo.title)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                              background: "linear-gradient(90deg, #FF9800, #F57C00)",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              width: "90%",
                              padding: "10px 20px",
                              mt: "auto",
                              fontWeight: 700,
                              fontSize: "0.95rem",
                              cursor: "pointer",
                              boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                              display: "grid",
                              placeItems: "center",
                              gap: "8px",
                            }}
                          >
                            <Box
                              component="img"
                              src="/clic.jpg"
                              alt="�cono de clic"
                              sx={{
                                width: 20,
                                height: 20,
                                userSelect: "none",
                                filter: "invert(1) brightness(2)",
                              }}
                            />  Get Quote
                          </motion.button>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}


              </Swiper>

              {
                showArrow && swiperInstance && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: "absolute", top: -4, right: 10, zIndex: 10 }}
                  >
                    <IconButton
                      onClick={() => swiperInstance.slideNext()}
                      sx={{
                        color: "white",
                        transition: "opacity 0.3s ease-in-out",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        padding: 0,
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <ArrowForwardIcon fontSize="large" sx={{ fontSize: "23px" }} />
                    </IconButton>
                  </motion.div>
                )
              }
            </Box>
          </Grid>
          <Box sx={{ position: "relative", textAlign: "center", mb: 2, mt: 5 }} ref={ref}>

            <Box
              sx={{
                width: 30,  // un poquito m�s grande
                height: 30,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #4fd1c5, #38b2ac)", // gradiente turquesa vibrante
                display: "grid",
                placeItems: "center",
                border: "1.5px solid rgba(255,255,255,0.9)", // borde blanco semitransparente
                mx: "auto",
                transform: "translateX(30px)",
                mb: 0.5,
                boxShadow: "0 4px 12px rgba(0,0,0,0.35)", // halo para resaltar sobre fondo oscuro
                position: "relative",
                zIndex: 2,
              }}
            >
              <motion.div
                initial={{ rotate: 0, scale: 0.85 }}
                animate={inView || hasAnimated2 ? { rotate: 360, scale: 1 } : { rotate: 0, scale: 0.85 }}
                transition={{
                  duration: 0.15,
                  repeat: 2,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                  transformOrigin: "center center",
                }}
              >
                <EmojiEvents sx={{ fontSize: 18, color: "white", display: "block", lineHeight: 1 }} />
              </motion.div>
            </Box>
            <motion.div
              initial={{ opacity: 0, y: 80 }} // ?? Aparece m�s abajo
              animate={inView || hasAnimated2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontFamily: "'Montserrat', Helvetica, Arial, sans-serif !important",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  paddingLeft: { xs: "40px", md: "30px" },
                  paddingRight: { xs: "40px", md: "30px" },
                  transform: "translateX(25px)",
                  letterSpacing: "3px",
                  my: 0,
                  display: "inline-block",
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "transparent",
                  color: "white",
                  "::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-5px",
                    height: "10px",
                    backgroundColor: "transparent",
                    zIndex: 2,
                  },
                }}
              >
                How the Journey Works
              </Typography>
            </motion.div>
          </Box>
          {/* Columna de los �conos */}
          <Grid item xs={12} md={6}>
            {[
              {
                icon: <SportsGolf sx={{ color: "white", fontSize: "2.2rem" }} />,
                text: "1. Discover the Game",
                desc: "Children are introduced to the basic elements of golf in a playful, approachable way. They learn what the game is before being asked to perform it.",
                hideLine: false,
              },
              {
                icon: <School sx={{ color: "white", fontSize: "2.2rem" }} />,
                text: "2. Build The Foundations",
                desc: "Through guided activities and early skill development, they begin to understand movement, coordination, and control step by step.",
                hideLine: false,
              },
              {
                icon: <EmojiEvents sx={{ color: "white", fontSize: "2.2rem" }} />,
                text: "3. Experience the Game of Golf",
                desc: "Children explore the environment of golf, learning how the course works and how to move safely and confidently within it.",
                hideLine: false,
              },
              {
                icon: <Groups sx={{ color: "white", fontSize: "2.2rem" }} />,
                text: "4. Understand How to Play",
                desc: "They are introduced to simple rules, etiquette, and structure, building awareness without pressure.",
                hideLine: false,
              },
              {
                icon: <SportsGolf sx={{ color: "white", fontSize: "2.2rem" }} />,
                text: "5. Step into Structured Training",
                desc: "Confident and prepared, they transition into an academy-style group learning environment.",
                hideLine: true,
              },
            ].map((item, index) => {
              const { ref: itemRef, inView: itemInView } = useInView({
                threshold: 0.43,
                triggerOnce: true,
              });

              return (
                <motion.div
                  key={`animated-${index}-${animationKey}`}
                  ref={itemRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={itemInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      zIndex: 2,
                      mb: item.hideLine ? 0 : 1.1,
                      paddingLeft: isMobile ? "0" : "16px",
                      paddingRight: isMobile ? "0" : "16px",
                    }}
                  >
                    <ListItemIcon sx={{ zIndex: 2 }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: 100,
                          height: 108,
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        {!item.hideLine && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={itemInView ? { height: 96 } : { height: 0 }}
                            transition={{
                              delay: 0.2 * index,
                              duration: 1,
                              ease: "linear",
                            }}
                            style={{
                              position: "absolute",
                              top: "74%",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "2px",
                              backgroundImage: "linear-gradient(white 40%, rgba(255,255,255,0) 0%)",
                              backgroundPosition: "left",
                              backgroundSize: "2px 6px",
                              backgroundRepeat: "repeat-y",
                              zIndex: 1,
                              opacity: 0.72,
                            }}
                          />
                        )}

                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: "50%",
                            border: "2px solid white", // borde blanco para contraste
                            backgroundColor: "rgba(255,255,255,0.1)", // fondo transl�cido blanco
                            display: "grid",
                            placeItems: "center",
                            position: "relative",
                            zIndex: 2,
                          }}
                        >
                          {item.icon} {/* Icono en color blanco o principal */}

                          <motion.div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              backgroundColor: "rgba(255,255,255,0.15)", // halo sutil
                              zIndex: 1,
                              animation: "pulsacion 1s ease-in-out 0.1s infinite",
                            }}
                          />
                        </Box>
                      </Box>
                    </ListItemIcon>

                    <ListItemText
                      sx={{
                        fontFamily: "'Montserrat', Helvetica, Arial, sans-serif !important",
                        mt: 0.6,
                        px: 1.1,
                        py: 0.95,
                        borderRadius: 2,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        "& .MuiListItemText-primary": {
                          fontSize: isMobile ? "0.97rem" : "1.08rem",
                          color: "white",
                          fontWeight: 700,
                          letterSpacing: "0.01em",
                        },
                        "& .MuiListItemText-secondary": {
                          color: "rgba(255,255,255,0.9)",
                          lineHeight: 1.45,
                          fontSize: isMobile ? "0.82rem" : "0.9rem",
                          mt: 0.4,
                        },
                      }}
                      primary={item.text}
                      secondary={item.desc}
                    />
                  </ListItem>
                </motion.div>
              );
            })}
          </Grid>





        </Grid>



      </Container>
    </Box >
  );
};

export default Informations;















