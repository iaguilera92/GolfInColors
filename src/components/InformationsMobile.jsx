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
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SportsGolf, School, GolfCourse, Rule, TrackChanges } from "@mui/icons-material";

const journeySteps = [
  {
    icon: <SportsGolf sx={{ color: "white", fontSize: "2rem" }} />,
    text: "1. Discover the Game",
    desc: "Children are introduced to the basic elements of golf in a playful, approachable way.",
    hideLine: false,
    tone: "#4FC3F7",
  },
  {
    icon: <School sx={{ color: "white", fontSize: "2rem" }} />,
    text: "2. Build The Foundations",
    desc: "Through guided activities and early skill development.",
    hideLine: false,
    tone: "#66BB6A",
  },
  {
    icon: <GolfCourse sx={{ color: "white", fontSize: "2rem" }} />,
    text: "3. Experience the Game of Golf",
    desc: "Children explore the environment of golf.",
    hideLine: false,
    tone: "#FFB74D",
  },
  {
    icon: <Rule sx={{ color: "white", fontSize: "2rem" }} />,
    text: "4. Understand How to Play",
    desc: "They are introduced to simple rules and etiquette.",
    hideLine: false,
    tone: "#BA68C8",
  },
  {
    icon: <TrackChanges sx={{ color: "white", fontSize: "2rem" }} />,
    text: "5. Step into Structured Training",
    desc: "They transition into academy-style learning.",
    hideLine: true,
    tone: "#EF5350",
  },
];

function Informations() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        backgroundImage: "url(PATTERN.webp)",
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
          <Grid item xs={12} md={8}>
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
                    mb: item.hideLine ? 0 : 0.55,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: { xs: 78, md: 90 } }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: 70,
                        height: 110,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {!item.hideLine && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 60,
                            width: "2px",
                            height: 70,
                            background:
                              "repeating-linear-gradient(to bottom, white 0 4px, transparent 4px 8px)",
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
                          background: `linear-gradient(145deg, ${item.tone}cc, ${item.tone}99)`,
                          boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
                          position: "relative",
                          animation: "softPulse 2.6s ease-in-out infinite",
                          animationDelay: `${index * 0.2}s`,
                          willChange: "transform",
                          transform: "translateZ(0)",
                          "@keyframes softPulse": {
                            "0%, 100%": {
                              transform: "scale(1)",
                              boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
                            },
                            "50%": {
                              transform: "scale(1.05)",
                              boxShadow: "0 9px 18px rgba(0,0,0,0.3)",
                            },
                          },
                        }}
                      >
                        {item.icon}
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
                      mt: -6,
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
      </Container>
    </Box>
  );
}

export default Informations;









