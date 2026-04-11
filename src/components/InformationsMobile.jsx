import {
  Box,
  Typography,
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

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
      transition={{ delay: 0.15 + index * 0.12, duration: 0.7, ease: "easeOut" }}
      style={{ display: "inline-block", marginRight: "4px" }}
    >
      {word}
    </motion.span>
  ));
}

function StatFlipCard({ item, index, inView, delayed }) {
  return (
    <Grid item xs={6} key={item.text}>
      <Box
        sx={{
          width: "100%",
          height: 145,
          perspective: "1000px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 2.2s",
            transitionDelay: inView ? `${0.2 + index * 0.1}s` : "0s",
            transform: inView ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              borderRadius: "20px",
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.5)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.22)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 1.4,
              textAlign: "center",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "20px",
              backgroundColor: "rgba(24, 26, 27, 0.92)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.22)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 1.2,
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 700, fontSize: "2.05rem", lineHeight: 1, mb: 0.65 }}>
              +{delayed ? <CountUp start={0} end={item.count} duration={3} separator="." /> : "0"}
            </Typography>
            <Box sx={{ fontSize: "0.76rem", lineHeight: 1.3, fontFamily: "'Oswald', sans-serif" }}>
              {splitTextIntoWords(item.text, delayed)}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

function Informations() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  const { ref: impactRef, inView: impactInView } = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    if (impactInView) {
      const timer = setTimeout(() => {
        setDelayed(true);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [impactInView]);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        backgroundImage: "url(PATTERN.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        pt: 5,
        pb: { xs: 7, md: 9 },
        mb: { xs: 10, md: 14 },
        color: "white",
        overflow: "hidden",
        borderBottomLeftRadius: isMobile ? "80px" : "120px",
        borderBottomRightRadius: isMobile ? "80px" : "120px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      <Container
        ref={ref}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px !important",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: { xs: 4, md: 5 },
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              color: "white",
              textShadow: "0 3px 10px rgba(0,0,0,0.6)",
              letterSpacing: "0.02em",
              transform: "translateX(10px)",
            }}
          >
            How the Journey Works
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            {journeySteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 0.2,
                    mb: item.hideLine ? 0 : 0.2,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: { xs: 78, md: 90 } }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: 70,
                        height: 92,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {!item.hideLine && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 58,
                            width: "2px",
                            height: 52,
                            background: "repeating-linear-gradient(to bottom, white 0 4px, transparent 4px 8px)",
                            opacity: 0.8,
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
                        <Typography sx={{ color: "white", fontWeight: 900, fontSize: isMobile ? "1.35rem" : "1.5rem", lineHeight: 1, textShadow: "0 2px 6px rgba(0,0,0,0.35)" }}>{index + 1}</Typography>
                      </Box>
                    </Box>
                  </ListItemIcon>

                  <ListItemText
                    primary={item.text}
                    secondary={item.desc}
                    primaryTypographyProps={{
                      sx: {
                        color: "white",
                        fontWeight: 700,
                        fontSize: isMobile ? "0.97rem" : "1.08rem",
                        letterSpacing: "0.01em",
                        textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                      },
                    }}
                    secondaryTypographyProps={{
                      sx: {
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.45,
                        fontSize: isMobile ? "0.82rem" : "0.9rem",
                        mt: 0.4,
                      },
                    }}
                    sx={{
                      mt: -3,
                      px: 1.1,
                      py: 1.05,
                      borderRadius: 2.2,
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.24)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.22)",
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </Grid>
        </Grid>

        <Box sx={{ mt: 4.5 }} ref={impactRef}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 2,
              fontSize: "1.15rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Our Impact
          </Typography>

          <Grid container spacing={1.5}>
            {stats.map((item, index) => (
              <StatFlipCard key={item.text} item={item} index={index} inView={impactInView} delayed={delayed} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Informations;
