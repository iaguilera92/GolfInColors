import { useState, useEffect, useRef } from "react";
import { Container, Typography, Box, Snackbar, Alert, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./css/Hero.css";
import CircularProgress from "@mui/material/CircularProgress";

function AnimatedLine({ text, delay = 0, startDelay = 0, size, color = "#ffffff", weight = 800, stroke, isMobile }) {
  const letters = text.split("");

  return (
    <Typography
      variant="h3"
      className="text"
      sx={{
        fontSize: size || (isMobile ? "1.1rem !important" : "2.2rem !important"),
        whiteSpace: "pre-line",
        textAlign: "center",
        position: "relative",
        display: "inline-block",
        lineHeight: 1,
        marginBottom: 0,
        letterSpacing: "0.02em",
        maxWidth: isMobile ? "92vw" : "none",
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}-${text}`}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: startDelay + delay + index * 0.03 }}
          style={{
            position: "relative",
            display: "inline-block",
            whiteSpace: "pre",
            color,
            fontWeight: weight,
            textShadow: "0 3px 14px rgba(0,0,0,0.45)",
            WebkitTextStroke: stroke || "0px transparent",
          }}
        >
          {char}
        </motion.span>
      ))}
    </Typography>
  );
}

function Hero({ informationsRef, setVideoReady, onStartClick }) {
  const [openAlert, setOpenAlert] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(true);
  const [mostrarTransicion, setMostrarTransicion] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const heroRef = useRef(null);
  const navigate = useNavigate();

  const rotatingPhrases = [
    "Together, we're shaping the future of golf.",
    "One colorful step at the time.",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = document.getElementById("background-video");
    const observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting ? video?.play() : video?.pause();
    }, { threshold: 0.3 });

    if (video) observer.observe(video);
    return () => video && observer.unobserve(video);
  }, []);

  useEffect(() => {
    const fallback = setTimeout(() => {
      if (loadingVideo) setLoadingVideo(false);
    }, 3000);
    return () => clearTimeout(fallback);
  }, [loadingVideo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  return (
    <>
      {mostrarTransicion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "hsl(322.86deg 95.45% 91.37%)",
            zIndex: 9999,
          }}
        />
      )}

      <Box
        ref={heroRef}
        sx={{
          position: "relative",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {loadingVideo && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size={60} sx={{ color: "#ffffff" }} />
            </Box>
          )}
          <video
            autoPlay
            muted
            loop
            playsInline
            id="background-video"
            onLoadedData={() => {
              setLoadingVideo(false);
              if (setVideoReady) setVideoReady(true);
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source src="video-inicio.mp4" type="video/mp4" />
          </video>
        </Box>

        {!loadingVideo && (
          <Container
            sx={{
              position: "relative",
              color: "white",
              zIndex: 2,
              perspective: "1000px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "170px",
                pt: { xs: 4.8, sm: 6.8 },
                gap: { xs: 0.35, sm: 0.45 },
              }}
            >
              <Box
                sx={{
                  minHeight: { xs: 42, sm: 58 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {phraseIndex === 0 ? (
                  <Box key="hero-phrase-0" sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.2 }}>
                    <AnimatedLine
                      text="Together, we're shaping"
                      startDelay={0.2}
                      size={isMobile ? "1.2rem !important" : "2.1rem !important"}
                      color="#ffffff"
                      weight={700}
                      stroke={isMobile ? "0.4px rgba(255,255,255,0.65)" : "0.8px rgba(255,255,255,0.75)"}
                    />
                    <AnimatedLine
                      text="the future of golf."
                      startDelay={0.95}
                      delay={0}
                      size={isMobile ? "1.2rem !important" : "2.1rem !important"}
                      color="#ffffff"
                      weight={700}
                      stroke={isMobile ? "0.4px rgba(255,255,255,0.65)" : "0.8px rgba(255,255,255,0.75)"}
                    />
                  </Box>
                ) : (
                  <AnimatedLine
                    key="hero-phrase-1"
                    text={rotatingPhrases[phraseIndex]}
                    startDelay={0.2}
                    size={isMobile ? "1.2rem !important" : "2.1rem !important"}
                    color="#ffffff"
                    weight={700}
                    stroke={isMobile ? "0.4px rgba(255,255,255,0.65)" : "0.8px rgba(255,255,255,0.75)"}
                  />
                )}
              </Box>

              {showButton && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Box sx={{ mt: isMobile ? 4 : 1 }}>
                    <button
                      className="btn-3"
                      onClick={() => navigate("/nosotros")}
                    >
                      <span>About Us</span>
                    </button>
                  </Box>
                </motion.div>
              )}
            </Box>
          </Container>
        )}

        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={() => setOpenAlert(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: "100%" }}>
            Revisa nuestros servicios y catalogo. Bienvenido.
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default Hero;






