import React from "react";
import { Box, Container, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const colorCards = [
  {
    step: 1,
    title: "Blue Starter",
    description:
      "First introduction to golf through fun, creativity, motor skills, and basic safety around golf equipment.",
    color: "#1B83CC",
    glow: "rgba(27,131,204,0.16)",
  },
  {
    step: 2,
    title: "Yellow Builder",
    description:
      "Building golf fundamentals, confidence, coordination, and learning different areas of the game.",
    color: "#FDBB2F",
    glow: "rgba(253,187,47,0.16)",
  },
  {
    step: 3,
    title: "Red Explorer",
    description:
      "Learning golf terms, understanding the golf course, and experiencing the game in a deeper way.",
    color: "#FF471F",
    glow: "rgba(255,71,31,0.16)",
  },
  {
    step: 4,
    title: "Orange Player",
    description:
      "Learning how to play through rules, etiquette, structure, and on-course awareness.",
    color: "#FF6A00",
    glow: "rgba(255,106,0,0.16)",
  },
  {
    step: 5,
    title: "Green Champion",
    description:
      "Preparing children with the confidence, habits, and knowledge needed to join a more structured training environment.",
    color: "#017458",
    glow: "rgba(1,116,88,0.16)",
  },
];

const Card = ({ item }) => (
  <Box
    sx={{
      position: "relative",
      borderRadius: 3,
      border: "1px solid rgba(10,38,30,0.08)",
      borderTop: `3px solid ${item.color}`,
      background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,252,251,0.98) 100%)",
      boxShadow: "0 12px 24px rgba(13,43,69,0.08)",
      overflow: "hidden",
      px: 1.8,
      py: 2.1,
      height: "100%",
      minHeight: { xs: 180, sm: 210, md: 238 },
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: 1.15,
      "&::before": {
        content: '""',
        position: "absolute",
        inset: "auto auto -24px -24px",
        width: 110,
        height: 110,
        borderRadius: "50%",
        background: item.glow,
        pointerEvents: "none",
      },
    }}
  >
    {/* Circle — star + step badge */}
    <Box sx={{ position: "relative", width: 54, height: 54, flexShrink: 0 }}>
      <Box
        sx={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: item.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          boxShadow: `0 8px 18px ${item.glow}`,
        }}
      >
        <StarRoundedIcon sx={{ fontSize: 26 }} />
      </Box>
      {/* Step number badge */}
      <Box
        sx={{
          position: "absolute",
          bottom: -2,
          right: -2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#fff",
          border: `2px solid ${item.color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 900,
          fontSize: "0.65rem",
          color: item.color,
          lineHeight: 1,
        }}
      >
        {item.step}
      </Box>
    </Box>

    <Typography
      sx={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        fontSize: { xs: "1.08rem", sm: "1.14rem" },
        color: "#0c2a44",
        lineHeight: 1.1,
      }}
    >
      {item.title}
    </Typography>

    <Typography
      sx={{
        color: "#35536a",
        fontSize: { xs: "0.94rem", sm: "0.98rem" },
        lineHeight: 1.6,
      }}
    >
      {item.description}
    </Typography>
  </Box>
);

function Areas() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 0,
        background: "#f7f4ee",
        pt: { xs: 0.4, sm: 0.6 },
        pb: { xs: 2.5, sm: 3.5 },
      }}
    >
      <Container sx={{ maxWidth: { xs: "980px !important", md: "1180px !important" } }}>
        <Box
          sx={{
            borderRadius: { xs: 4, sm: 5 },
            border: "1px solid rgba(10,38,30,0.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,250,247,0.96) 100%)",
            boxShadow: "0 14px 34px rgba(0,0,0,0.08)",
            px: { xs: 2.2, sm: 4 },
            py: { xs: 1.7, sm: 3.1 },
          }}
        >
          {/* Golf flag icon */}
          <Box
            sx={{ display: "grid", placeItems: "center", color: "rgba(46,125,50,0.92)", mb: 0.4 }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" style={{ width: 28, height: 28 }}>
              <path d="M6 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 4c6 2 8-1 11 1-3 4-5 2-11 4z" fill="currentColor" opacity="0.9" />
              <circle cx="6" cy="3" r="1" fill="currentColor" />
            </svg>
          </Box>

          {/* Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1, sm: 1.4 },
              mt: { xs: -0.35, sm: -0.5 },
              mb: 1,
            }}
          >
            <Box sx={{ width: { xs: 34, sm: 58 }, height: 2, borderRadius: 999, background: "rgba(46,125,50,0.75)", flexShrink: 0 }} />
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                color: "rgba(46,125,50,0.92)",
                fontSize: { xs: "0.92rem", sm: "1.15rem", md: "1.48rem" },
                lineHeight: 1.1,
                letterSpacing: { xs: "0.14em", sm: "0.16em", md: "0.18em" },
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              THE 5 COLORS OF OUR SYSTEM
            </Typography>
            <Box sx={{ width: { xs: 34, sm: 58 }, height: 2, borderRadius: 999, background: "rgba(46,125,50,0.75)", flexShrink: 0 }} />
          </Box>

          {/* Subtitle */}
          <Typography
            sx={{
              mt: 0.35,
              textAlign: "center",
              color: "#4f6760",
              fontSize: { xs: "0.98rem", sm: "1.06rem" },
              lineHeight: 1.7,
              maxWidth: "780px",
              mx: "auto",
            }}
          >
            A simple framework built around fun, progression, understanding, structure, and confidence — follow the colors to guide your child&apos;s journey.
          </Typography>

          {/* ── Desktop: cards + arrows ── */}
          <Box
            sx={{
              display: { xs: "none", md: "grid" },
              gridTemplateColumns: "1fr 28px 1fr 28px 1fr 28px 1fr 28px 1fr",
              alignItems: "stretch",
              mt: 4,
            }}
          >
            {colorCards.map((item, i) => (
              <React.Fragment key={item.title}>
                <Card item={item} />
                {i < colorCards.length - 1 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ArrowForwardRoundedIcon
                      sx={{
                        fontSize: 22,
                        color: item.color,
                        filter: `drop-shadow(0 0 4px ${item.glow})`,
                      }}
                    />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Box>

          {/* ── Mobile / Tablet: cards only ── */}
          <Box
            sx={{
              display: { xs: "grid", md: "none" },
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: { xs: 1.2, sm: 1.4 },
              mt: { xs: 3, sm: 4 },
            }}
          >
            {colorCards.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Areas;
