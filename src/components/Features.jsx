import React, { useMemo, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
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
        icon: <SportsEsportsIcon sx={{ fontSize: 22 }} />,
        description: "Stories, videos, games.",
      },
      {
        label: "Parents",
        value: "parents",
        toneA: "#2c95e3",
        toneB: "#0f6fb8",
        icon: <FamilyRestroomIcon sx={{ fontSize: 22 }} />,
        description: "Support your child at home.",
      },
      {
        label: "Coaches",
        value: "coaches",
        toneA: "#f08b32",
        toneB: "#cf6710",
        icon: <EmojiEventsIcon sx={{ fontSize: 22 }} />,
        description: "Teach with confidence.",
      },
    ],
    []
  );

  const routeByCategory = {
    kids: "/kids",
    parents: "/parents",
    coaches: "/coaches",
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

    localStorage.setItem("remember_category_choice", "1");
    localStorage.setItem("user_category", option.value);
    sessionStorage.removeItem("user_category");

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
        background: "linear-gradient(135deg, #d6f5d0 0%, #8fd39a 58%, #e9fff2 100%)",
        pt: 0.75,
        pb: 3,
      }}
    >
      <Container sx={{ maxWidth: "900px !important" }}>
        <Box
          sx={{
            borderRadius: 4,
            pt: { xs: 1.2, sm: 1.6 },
            px: { xs: 2, sm: 3 },
            pb: { xs: 2, sm: 3 },
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
              mb: 2.2,
              color: "#083c2c",
              letterSpacing: "0.03em",
              textShadow: "0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
                        {"Select your Category \u26F3"}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
            {options.map((option) => (
              <motion.div key={option.value} whileTap={{ scale: 0.985 }}>
                <Button
                  fullWidth
                  aria-label={`Select ${option.label}`}
                  onClick={() => handleSelect(option)}
                  sx={{
                    textTransform: "none",
                    py: isMobile ? 1.25 : 1.45,
                    px: isMobile ? 1.2 : 1.5,
                    borderRadius: 99,
                    position: "relative",
                    overflow: "hidden",
                    justifyContent: "flex-start",
                    gap: 1.1,
                    color: "#fff",
                    border:
                      selected === option.value
                        ? "2px solid rgba(255,255,255,0.95)"
                        : "1px solid rgba(255,255,255,0.45)",
                    background: `linear-gradient(120deg, ${option.toneA} 0%, ${option.toneB} 100%)`,
                    boxShadow:
                      selected === option.value
                        ? "0 0 0 2px rgba(255,255,255,0.26), 0 7px 14px rgba(0,0,0,0.2)"
                        : "0 4px 10px rgba(0,0,0,0.16)",
                    transition: "all 0.2s ease",
                    "&:hover": { transform: "translateY(-1px)" },
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      color: option.toneB,
                      backgroundColor: "rgba(255,255,255,0.92)",
                      boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    {option.icon}
                  </Box>

                  <Box sx={{ flex: 1, textAlign: "left" }}>
                    <Typography sx={{ fontWeight: 800, fontSize: isMobile ? "1rem" : "1.08rem", lineHeight: 1.12 }}>
                      {option.label}
                    </Typography>
                    <Typography sx={{ mt: 0.15, fontSize: isMobile ? "0.73rem" : "0.78rem", color: "rgba(255,255,255,0.9)" }}>
                      {option.description}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      minWidth: 30,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.4)",
                    }}
                  >
                    {selected === option.value ? (
                      <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#fff" }} />
                    ) : (
                      <motion.span
                        style={{ display: "grid", placeItems: "center" }}
                        animate={{ scale: [1, 1.14, 1] }}
                        transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowForwardRoundedIcon sx={{ fontSize: 17, color: "#fff" }} />
                      </motion.span>
                    )}
                  </Box>
                </Button>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ mt: 2.2, width: { xs: "86%", sm: 320 }, mx: "auto" }}>
            <Button
              fullWidth
              onClick={() => {
                playClick();
                navigate("/catalogo");
              }}
              aria-label="Open Shop"
              sx={{
                fontWeight: 800,
                textTransform: "none",
                py: 1.25,
                borderRadius: 99,
                position: "relative",
                overflow: "hidden",
                fontSize: { xs: "1.05rem", sm: "1.15rem" },
                color: "#fff",
                textShadow: "0 1px 2px rgba(0,0,0,0.45)",
                border: "2px solid rgba(255, 230, 120, 0.95)",
                background:
                  "linear-gradient(160deg, #FFE082 0%, #FFC43D 38%, #FFB300 62%, #E68A00 100%)",
                boxShadow:
                  "0 0 18px rgba(255, 195, 45, 0.72), 0 8px 20px rgba(120, 72, 0, 0.42), inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -7px 12px rgba(130,80,0,0.28)",
                transition: "transform 0.24s, box-shadow 0.24s, filter 0.24s, background 0.24s",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -40,
                  width: "35%",
                  height: "180%",
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)",
                  transform: "rotate(18deg)",
                  animation: "shopShineSweep 2.4s ease-in-out infinite",
                  pointerEvents: "none",
                },
                "&:hover": {
                  transform: "scale(1.05)",
                  filter: "brightness(1.1)",
                  background:
                    "linear-gradient(160deg, #FFE79A 0%, #FFC94F 35%, #FFB623 62%, #F58B00 100%)",
                  boxShadow:
                    "0 0 26px rgba(255, 210, 85, 0.92), 0 10px 24px rgba(120,72,0,0.54), inset 0 2px 7px rgba(255,255,255,0.42), inset 0 -7px 12px rgba(130,80,0,0.32)",
                },
                "@keyframes shopShineSweep": {
                  "0%": { left: "-45%" },
                  "55%": { left: "120%" },
                  "100%": { left: "120%" },
                },
              }}
            >
              <StorefrontRoundedIcon sx={{ mr: 1, fontSize: { xs: 22, sm: 20 } }} />
              Shop
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Features;



