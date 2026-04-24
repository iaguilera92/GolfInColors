import React, { useEffect, useMemo, useState } from "react";
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
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    let done = false;
    const forceReveal = () => {
      if (done) return;
      done = true;
      setReveal(true);
    };

    const onReady = () => forceReveal();
    window.addEventListener("app:ready", onReady);

    if (document.documentElement.dataset.appReady === "1") {
      forceReveal();
    }

    const fallback = setTimeout(forceReveal, 5000);
    return () => {
      window.removeEventListener("app:ready", onReady);
      clearTimeout(fallback);
    };
  }, []);

  const gridVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.22 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

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

  const handleSelect = (option) => {
    if (isSelecting) return;
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
            component={motion.div}
            variants={gridVariants}
            initial="hidden"
            animate={reveal ? "visible" : "hidden"}
          >
            {options.map((option, index) => (
              <motion.div
                key={option.value}
                variants={itemVariants}
                style={{ pointerEvents: reveal ? "auto" : "none" }}
              >
                <Box>
                <motion.div whileTap={{ scale: 0.985 }} whileHover={{ scale: 1.01 }}>
                  <Box
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${option.label}`}
                    onClick={() => {
                      if (option.value === "shop" || option.value === "coaches") return;
                      handleSelect(option);
                    }}
                    onKeyDown={(e) => {
                      if (option.value === "shop" || option.value === "coaches") return;
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelect(option);
                      }
                    }}
                    aria-disabled={option.value === "shop" || option.value === "coaches"}
                    sx={{
                      position: "relative",
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
                      cursor: option.value === "shop" || option.value === "coaches" ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                      opacity: option.value === "shop" || option.value === "coaches" ? 0.82 : 1,
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

                    {(option.value === "shop" || option.value === "coaches") && (
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 1,
                          background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(15,35,28,0.2) 100%)",
                        }}
                      >
                        <Box
                          sx={{
                            px: 1.2,
                            py: 0.45,
                            borderRadius: 99,
                            backgroundColor: "rgba(255,255,255,0.9)",
                            border: "1px solid rgba(10,38,30,0.12)",
                            color: "#4f5e58",
                            fontWeight: 800,
                            fontSize: { xs: "0.72rem", sm: "0.78rem" },
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                          }}
                        >
                          Coming soon
                        </Box>
                      </Box>
                    )}
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
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Features;








