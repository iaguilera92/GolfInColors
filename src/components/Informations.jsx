import { Box, Typography, Container, Grid, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EmojiEvents } from "@mui/icons-material";
import CountUp from "react-countup";
import "./css/Informations.css";

const stats = [
  { count: 45, text: "Years of Combined Golf Experience", tone: "#4FC3F7", image: "/golf-1.jpg" },
  { count: 20, text: "Years Developing Young Golfers", tone: "#66BB6A", image: "/golf-2.jpg" },
  { count: 500, text: "Kids introduced to the Game", tone: "#FFB74D", image: "/golf-3.jpg" },
  { count: 2, text: "Learning environments", tone: "#BA68C8", image: "/golf-4.jpg" },
];

const journeySteps = [
  {
    text: "Discover the Game",
    desc: "Children are introduced to the basic elements of golf in a playful, approachable way.",
    hideLine: false,
    tone: "#4FC3F7",
  },
  {
    text: "Build The Foundations",
    desc: "Through guided activities and early skill development.",
    hideLine: false,
    tone: "#66BB6A",
  },
  {
    text: "Experience the Game of Golf",
    desc: "Children explore the environment of golf.",
    hideLine: false,
    tone: "#FFB74D",
  },
  {
    text: "Understand How to Play",
    desc: "They are introduced to simple rules and etiquette.",
    hideLine: false,
    tone: "#BA68C8",
  },
  {
    text: "Step into Structured Training",
    desc: "They transition into academy-style learning.",
    hideLine: true,
    tone: "#EF5350",
  },
];

function splitTextIntoWords(text, active) {
  return text.split(" ").map((word, index) => (
    <motion.span
      key={`${word}-${index}`}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: active ? 1 : 0, x: active ? 0 : "100%" }}
      transition={{ delay: 0.2 + index * 0.14, duration: 0.8, ease: "easeOut" }}
      style={{ display: "inline-block", marginRight: "5px" }}
    >
      {word}
    </motion.span>
  ));
}

function StatFlipCard({ item, index, inView, isMobile, hasAnimated, delayed }) {
  return (
    <Grid item xs={6} key={item.text}>
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          borderRadius: 2,
          width: "100%",
          height: { xs: 150, md: 170 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Poppins', sans-serif",
          perspective: "1000px",
          position: "relative",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transformStyle: "preserve-3d",
            transition: "transform 2.4s",
            transitionDelay: inView ? `${0.25 + index * 0.12}s` : "0s",
            transform: inView || hasAnimated ? "rotateY(180deg)" : "rotateY(0deg)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "22px",
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.5)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.24)",
              overflow: "hidden",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "rgba(24, 26, 27, 0.9)",
              borderRadius: "22px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.24)",
              transform: "rotateY(180deg)",
              px: { xs: 1.25, md: 2 },
            }}
          >
            <Box sx={{ minWidth: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                sx={{
                  fontFamily: "'Saira', sans-serif",
                  fontWeight: 700,
                  minWidth: "80px",
                  textAlign: "center",
                  marginBottom: "0.15em",
                  fontSize: { xs: "2.3rem", md: "2.4rem" },
                  color: "white",
                }}
              >
                +{delayed ? <CountUp start={0} end={item.count} duration={3.1} separator="." /> : "0"}
              </Typography>
              <Box sx={{ textAlign: "center", maxWidth: "100%", fontSize: { xs: "0.8rem", md: "0.98rem" }, fontFamily: "'Oswald', sans-serif", lineHeight: 1.3 }}>
                {splitTextIntoWords(item.text, delayed)}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

function Informations() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });
  const { ref: impactRef, inView: impactInView } = useInView({ threshold: 0.45, triggerOnce: true });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [hasAnimated, setHasAnimated] = useState(false);
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    if (impactInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [impactInView, hasAnimated]);

  useEffect(() => {
    if (impactInView) {
      const timer = setTimeout(() => {
        setDelayed(true);
      }, 1700);
      return () => clearTimeout(timer);
    }
  }, [impactInView]);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 10,
        backgroundImage: "url(fondo-7.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: isMobile ? 8 : 3,
        pt: 1,
        marginTop: "0",
        marginBottom: "-10px",
        color: "white",
        overflow: "hidden",
        borderBottomLeftRadius: isMobile ? "90px" : "120px",
        borderBottomRightRadius: isMobile ? "90px" : "120px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 1,
          borderBottomLeftRadius: isMobile ? "90px" : "120px",
          borderBottomRightRadius: isMobile ? "90px" : "120px",
        },
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          color: "white",
          maxWidth: "1400px !important",
          paddingLeft: isMobile ? "0" : "24px",
          paddingRight: isMobile ? "0" : "24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ position: "relative", textAlign: "center", mb: 2 }} ref={ref}>
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4fd1c5, #38b2ac)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid rgba(255,255,255,0.9)",
              mx: "auto",
              mb: 0.5,
              boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <motion.div
              initial={{ rotate: 0, scale: 0.85 }}
              animate={inView || hasAnimated ? { rotate: 1080, scale: 1 } : { rotate: 0, scale: 0.85 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
            >
              <EmojiEvents sx={{ fontSize: 18, color: "white" }} />
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={inView || hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontFamily: "'Montserrat', Helvetica, Arial, sans-serif !important",
                fontSize: { xs: "1.5rem", md: "2rem" },
                paddingLeft: { xs: "40px", md: "30px" },
                paddingRight: { xs: "40px", md: "30px" },
                letterSpacing: "3px",
                my: 0,
                display: "inline-block",
                position: "relative",
                zIndex: 1,
                color: "white",
              }}
            >
              How the Journey Works
            </Typography>
          </motion.div>

          <motion.hr
            initial={{ opacity: 0 }}
            animate={inView || hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              position: "absolute",
              top: isMobile ? "calc(80% - 30px)" : "calc(100% - 30px)",
              left: "5%",
              width: "90%",
              border: "1px solid white",
              zIndex: 0,
              background: "white",
              clipPath: "polygon(0% 0%, 0% 0%, 15% 100%, 0% 100%, 0% 0%, 100% 0%, 85% 100%, 100% 100%, 100% 0%)",
            }}
          />
        </Box>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            {journeySteps.map((item, index) => {
              const { ref: itemRef, inView: itemInView } = useInView({ threshold: 0.43, triggerOnce: true });

              return (
                <motion.div
                  key={`animated-${index}`}
                  ref={itemRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={itemInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      zIndex: 2,
                      py: 0.2,
                      mb: item.hideLine ? 0 : 0.2,
                      paddingLeft: isMobile ? "0" : "16px",
                      paddingRight: isMobile ? "0" : "16px",
                    }}
                  >
                    <ListItemIcon sx={{ zIndex: 2, minWidth: { xs: 78, md: 90 } }}>
                      <Box sx={{ position: "relative", width: 70, height: 92, display: "flex", justifyContent: "center" }}>
                        {!item.hideLine && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={itemInView ? { height: 52 } : { height: 0 }}
                            transition={{ delay: 0.2 * index, duration: 1, ease: "easeInOut" }}
                            style={{
                              position: "absolute",
                              top: "58px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "2px",
                              backgroundImage: "linear-gradient(white 40%, rgba(255,255,255,0) 0%)",
                              backgroundPosition: "left",
                              backgroundSize: "2px 6px",
                              backgroundRepeat: "repeat-y",
                              zIndex: 1,
                              opacity: 0.5,
                            }}
                          />
                        )}

                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            border: "2px solid white",
                            display: "grid",
                            placeItems: "center",
                            background: item.tone,
                            boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
                            position: "relative",
                            zIndex: 2,
                          }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.34], opacity: [0.62, 0] }}
                            transition={{ duration: 1.15, repeat: Infinity, ease: "easeOut", delay: index * 0.14, repeatDelay: 0.05 }}
                            style={{
                              position: "absolute",
                              inset: -4,
                              borderRadius: "50%",
                              border: "2.2px solid rgba(255,255,255,0.95)",
                              pointerEvents: "none",
                            }}
                          />
                          <Typography
                            sx={{
                              color: "white",
                              fontWeight: 900,
                              fontSize: isMobile ? "1.35rem" : "1.5rem",
                              lineHeight: 1,
                              textShadow: "0 2px 6px rgba(0,0,0,0.35)",
                            }}
                          >
                            {index + 1}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItemIcon>

                    <ListItemText
                      sx={{
                        fontFamily: "'Montserrat', Helvetica, Arial, sans-serif !important",
                        "& .MuiListItemText-primary": {
                          fontSize: isMobile ? "0.99rem" : "1.2rem",
                          color: "white",
                          fontWeight: 700,
                        },
                        "& .MuiListItemText-secondary": {
                          color: "rgba(255,255,255,0.8)",
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

          <Grid item xs={12} md={6} sx={{ mt: { xs: 2, md: -1 } }} ref={impactRef}>
            <Box sx={{ mb: 2, position: "relative", zIndex: 10 }}>
              <Typography
                component={motion.h5}
                initial={{ opacity: 0, y: 20 }}
                animate={inView || hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  mb: 1,
                  textAlign: isMobile ? "center" : "left",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontSize: { xs: "1.2rem", md: "1.6rem" },
                  color: "#ffffff",
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "0px",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                Our Impact
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {stats.map((item, index) => (
                <StatFlipCard
                  key={item.text}
                  item={item}
                  index={index}
                  inView={impactInView}
                  isMobile={isMobile}
                  hasAnimated={hasAnimated}
                  delayed={delayed}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Informations;
