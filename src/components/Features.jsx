import React, { useMemo, useState } from "react";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Features() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  const options = useMemo(
    () => [
      {
        label: "For Kids",
        value: "kids",
        toneA: "#1aa97a",
        toneB: "#0b7f59",
        image: "/IMAGE_09.avif",
      },
      {
        label: "Parents",
        value: "parents",
        toneA: "#2c95e3",
        toneB: "#0f6fb8",
        image: "/IMAGE_10.avif",
      },
      {
        label: "Coaches",
        value: "coaches",
        toneA: "#f08b32",
        toneB: "#cf6710",
        image: "/IMAGE_02.avif",
      },
      {
        label: "Shop",
        value: "shop",
        toneA: "#ffcf4d",
        toneB: "#e69a00",
        image: "/shop.avif",
      },
    ],
    []
  );

  const routeByCategory = {
    kids: "/kids",
    parents: "/parents",
    coaches: "/coaches",
    shop: "/catalogo",
  };

  const playClick = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = 620;
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // ignore audio failures silently
    }
  };

  const handleSelect = (option) => {
    if (isSelecting) return;
    playClick();
    setSelected(option.value);
    setIsSelecting(true);

    if (option.value !== "shop") {
      localStorage.setItem("remember_category_choice", "1");
      localStorage.setItem("user_category", option.value);
      sessionStorage.removeItem("user_category");
    }

    const nextRoute = routeByCategory[option.value];
    setTimeout(() => {
      if (nextRoute) navigate(nextRoute);
      setIsSelecting(false);
    }, 260);
  };

  return (
    <Box
      id="category-features-section"
      sx={{
        background: "#ffffff",
        pt: { xs: 0.2, sm: 0.6 },
        pb: { xs: 1.1, sm: 2.4 },
      }}
    >
      <Container sx={{ maxWidth: { xs: "900px !important", md: "1220px !important" } }}>
        <Box
          sx={{
            borderRadius: 4,
            pt: { xs: 0.5, sm: 1.2 },
            px: { xs: 2, sm: 3 },
            pb: { xs: 0.9, sm: 2.2 },
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 900,
              fontSize: { xs: "1.18rem", sm: "1.72rem" },
              fontFamily: "'Poppins', sans-serif",
              mb: { xs: 1.2, sm: 2 },
              color: "#083c2c",
              letterSpacing: "0.03em",
              textShadow: "0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            {"Choose Your Path"}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, minmax(0, 1fr))" },
              gap: { xs: 1.0, sm: 1.4 },
            }}
          >
            {options.map((option) => (
              <Box key={option.value}>
                <motion.div whileTap={{ scale: 0.985 }} whileHover={{ scale: 1.01 }}>
                  <Box
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${option.label}`}
                    onClick={() => handleSelect(option)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelect(option);
                      }
                    }}
                    sx={{
                      borderRadius: 3,
                      backgroundColor: "#ffffff",
                      border:
                        selected === option.value
                          ? `2px solid ${option.toneB}`
                          : "1px solid rgba(10,38,30,0.14)",
                      boxShadow:
                        selected === option.value
                          ? `0 0 0 2px ${option.toneA}33, 0 10px 22px rgba(0,0,0,0.14)`
                          : "0 8px 18px rgba(0,0,0,0.12)",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Box
                      component="img"
                      src={option.image}
                      alt={option.label}
                      sx={{
                        width: "100%",
                        height: { xs: 128, sm: 145 },
                        objectFit: "cover",
                        display: "block",
                        background: option.value === "shop" ? "#fff" : "linear-gradient(180deg, #9fd8ff 0%, #cfeeff 45%, #eaf8ff 100%)",
                      }}
                    />
                  </Box>
                </motion.div>

                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 800,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    color: "#123126",
                    pt: 0.9,
                    px: 0.8,
                    letterSpacing: "0.01em",
                  }}
                >
                  {option.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Features;








