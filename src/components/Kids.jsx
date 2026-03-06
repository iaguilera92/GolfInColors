import { useEffect, useRef, useState } from "react";
import { Box, Button, Collapse, Grid, Paper, Stack, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { motion } from "framer-motion";

const menus = ["Stories", "Videos", "Games"];

const menuStyles = {
  Stories: {
    bg: "#f28b30",
    bgActive: "#e67815",
    icon: AutoStoriesIcon,
  },
  Videos: {
    bg: "#1f5d3a",
    bgActive: "#17492d",
    icon: OndemandVideoIcon,
  },
  Games: {
    bg: "#1B83CC",
    bgActive: "#126eae",
    icon: SportsEsportsIcon,
  },
};

const storyStages = [
  "My first golf lesson",
  "My first tournament",
  "My first group Lesson",
  "How discovered golf",
];


const storyBookPages = [
  {
    title: "Page 1",
    subtitle: "Welcome to Story Mode",
    text: "Max and Sofi start their golf journey with fun, colors and imagination.",
  },
  {
    title: "Page 2",
    subtitle: "Practice with Joy",
    text: "Every lesson includes playful challenges to build confidence step by step.",
  },
  {
    title: "Page 3",
    subtitle: "Ready to Explore",
    text: "Keep turning pages and discover new adventures before each golf stage.",
  },
];

const characters = [
  { img: "max.png", name: "Max" },
  { img: "sofi.png", name: "Sofi" },
  { img: "coache-1.png", name: "Coach Sergio" },
  { img: "coache-2.png", name: "Coach Anika" },
  { img: "coache-3.png", name: "Hugo" },
  { img: "coache-4.png", name: "Lisa" },
];

export default function Kids() {
  const [activeMenu, setActiveMenu] = useState("Stories");
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [spinMenu, setSpinMenu] = useState(null);
  const [storyPage, setStoryPage] = useState(0);
  const [flipDirection, setFlipDirection] = useState(1);
  const [isPageTurning, setIsPageTurning] = useState(false);
  const [turnId, setTurnId] = useState(0);
  const pageTurnTimersRef = useRef([]);
  const activeMenuRef = useRef("Stories");

  useEffect(() => {
    if (!spinMenu) return;

    const timer = setTimeout(() => {
      setSpinMenu(null);
    }, 900);

    return () => clearTimeout(timer);
  }, [spinMenu]);
  useEffect(() => {
    activeMenuRef.current = activeMenu;
  }, [activeMenu]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeMenuRef.current === "Stories") {
        setStoriesOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      pageTurnTimersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const handlePageTurn = (direction) => {
    if (isPageTurning) return;

    const targetPage = Math.max(0, Math.min(storyPage + direction, storyBookPages.length - 1));
    if (targetPage === storyPage) return;

    setFlipDirection(direction);
    setIsPageTurning(true);

    const updateTimer = setTimeout(() => {
      setStoryPage(targetPage);
    }, 300);

    const endTimer = setTimeout(() => {
      setIsPageTurning(false);
    }, 620);

    pageTurnTimersRef.current.push(updateTimer, endTimer);
  };
  const handleSectionClick = (menu) => {
    if (menu === "Stories") {
      if (!storiesOpen) {
        setSpinMenu("Stories");
      }

      setActiveMenu("Stories");
      setStoriesOpen((prev) => !prev);
      return;
    }

    if (activeMenu === menu) {
      setActiveMenu(null);
      setStoriesOpen(false);
      return;
    }

    setSpinMenu(menu);
    setActiveMenu(menu);
    setStoriesOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        position: "relative",
        backgroundImage: "url(/fondo-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" sx={{ textAlign: "center", pt: { xs: 5, sm: 7 }, mb: { xs: 3, sm: 5 } }}>
          <Box
            component="span"
            sx={{
              display: "block",
              color: "#ffffff",
              fontSize: { xs: "1.4rem", sm: "1.8rem" },
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            LEARNING & TEACHING
          </Box>

          <Box
            component="span"
            sx={{
              display: "block",
              color: "#FFE8A3",
              fontSize: { xs: "2.1rem", sm: "3rem", md: "3.8rem" },
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            GOLF
          </Box>

          <Box
            component="span"
            sx={{
              display: "block",
              color: "rgba(255,255,255,0.95)",
              fontSize: { xs: "1.1rem", sm: "1.5rem" },
              fontWeight: 600,
              letterSpacing: "0.015em",
            }}
          >
            HAS NEVER BEEN THIS
          </Box>

          <Box
            component="span"
            sx={{
              display: "block",
              color: "#9BE7FF",
              fontSize: { xs: "2.8rem", sm: "4.5rem", md: "5.2rem" },
              fontWeight: 900,
              lineHeight: 0.95,
              WebkitTextStroke: "2px #ffffff",
              textShadow: "0 8px 20px rgba(0,0,0,0.35)",
            }}
          >
            FUN
          </Box>
        </Typography>

        <Box sx={{ width: "100%", maxWidth: 920 }}>
          <Stack spacing={1.5}>
            {menus.map((menu) => {
              const isActive = activeMenu === menu;
              const isStories = menu === "Stories";
              const isVideos = menu === "Videos";
              const isGames = menu === "Games";
              const config = menuStyles[menu];
              const Icon = config.icon;

              return (
                <Box key={menu}>
                  <Paper
                    elevation={0}
                    onClick={() => handleSectionClick(menu)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSectionClick(menu);
                      }
                    }}
                    sx={{
                      p: { xs: 2, sm: 2.2 },
                      borderRadius: 3,
                      border: isActive ? "2px solid rgba(255,255,255,0.9)" : "1px solid transparent",
                      backgroundColor: isActive ? config.bgActive : config.bg,
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-1px)",
                        filter: "brightness(1.05)",
                        boxShadow: "0 10px 22px rgba(13,43,69,0.18)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Icon sx={{ fontSize: 24 }} />
                      <Typography sx={{ fontWeight: 800, color: "#fff", fontSize: "1.1rem" }}>
                        {menu}
                      </Typography>
                    </Box>

                    <Box sx={{ color: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center" }}>
                      {isStories ? (
                        storiesOpen ? (
                          <CloseIcon
                            sx={{
                              fontSize: 20,
                              animation: spinMenu === menu ? "spinCloseX 0.9s ease-in-out" : "none",
                              "@keyframes spinCloseX": {
                                "0%": { transform: "rotate(0deg)" },
                                "100%": { transform: "rotate(1080deg)" },
                              },
                            }}
                          />
                        ) : (
                          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
                        )
                      ) : isActive ? (
                        <CloseIcon
                          sx={{
                            fontSize: 20,
                            animation: spinMenu === menu ? "spinCloseX 0.9s ease-in-out" : "none",
                            "@keyframes spinCloseX": {
                              "0%": { transform: "rotate(0deg)" },
                              "100%": { transform: "rotate(1080deg)" },
                            },
                          }}
                        />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
                      )}
                    </Box>
                  </Paper>

                  {isStories && (
                    <Collapse in={storiesOpen} timeout={850}>
                      <Stack spacing={2.5} sx={{ mt: 2 }}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: { xs: 2, sm: 3 },
                            borderRadius: 4,
                            border: "2px solid rgba(255,255,255,0.7)",
                            background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(236,250,255,0.88) 100%)",
                            textAlign: "center",
                            boxShadow: "0 12px 26px rgba(0,0,0,0.14)",
                          }}
                        >
                          <Typography sx={{ fontWeight: 900, color: "#ff6b35", fontSize: { xs: "1.2rem", sm: "1.4rem" }, mb: 1.2 }}>
                            STORY MODE
                          </Typography>

                          <Box
                            component="img"
                            src="/stories.png"
                            alt="Stories"
                            sx={{
                              width: "100%",
                              maxWidth: 560,
                              borderRadius: 2.8,
                              mb: 2,
                              border: "3px solid #ffffff",
                              backgroundColor: "#00c7ba",
                              boxShadow: "0 10px 22px rgba(49,213,255,0.42)",
                              filter: "none",
                            }}
                          />


                          <Box
                            sx={{
                              maxWidth: 640,
                              mx: "auto",
                              mb: 2,
                              borderRadius: 4.5,
                              p: { xs: 1.2, sm: 1.5 },
                              position: "relative",
                              overflow: "hidden",
                              background: "linear-gradient(145deg, #ffcf70 0%, #ff9ca9 48%, #8ad6ff 100%)",
                              border: "3px solid rgba(255,255,255,0.9)",
                              boxShadow: "0 16px 28px rgba(0,0,0,0.24)",

                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 1.1,
                                px: 0.5,
                              }}
                            >
                              <Button
                                size="small"
                                onClick={() => handlePageTurn(-1)}
                                disabled={storyPage === 0 || isPageTurning}
                                sx={{
                                  minWidth: 36,
                                  p: 0.2,
                                  borderRadius: 99,
                                  color: "#21476b",
                                  fontWeight: 900,
                                  border: "1px solid rgba(255,255,255,0.95)",
                                  backgroundColor: "rgba(255,255,255,0.62)",
                                }}
                              >
                                <NavigateBeforeRoundedIcon />
                              </Button>

                              <Typography sx={{ fontWeight: 900, color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.28)", fontSize: { xs: "0.86rem", sm: "0.95rem" } }}>
                                My Story Book {storyPage + 1}/{storyBookPages.length}
                              </Typography>

                              <Button
                                size="small"
                                onClick={() => handlePageTurn(1)}
                                disabled={storyPage === storyBookPages.length - 1 || isPageTurning}
                                sx={{
                                  minWidth: 36,
                                  p: 0.2,
                                  borderRadius: 99,
                                  color: "#21476b",
                                  fontWeight: 900,
                                  border: "1px solid rgba(255,255,255,0.95)",
                                  backgroundColor: "rgba(255,255,255,0.62)",
                                }}
                              >
                                <NavigateNextRoundedIcon />
                              </Button>
                            </Box>

                            <Box
                              sx={{
                                borderRadius: 3,
                                p: { xs: 0.85, sm: 1.15 },
                                border: "2px solid rgba(255,255,255,0.78)",
                                background: "linear-gradient(180deg, #f3d8aa 0%, #dfb174 100%)",
                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
                              }}
                            >
                              <Grid
                                container
                                spacing={1.1}
                                alignItems="stretch"
                                sx={{
                                  position: "relative",
                                  perspective: "1200px",
                                  "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: "3%",
                                    right: "52%",
                                    bottom: -6,
                                    height: 10,
                                    borderRadius: 99,
                                    background: "rgba(52,34,20,0.22)",
                                    filter: "blur(5px)",
                                    zIndex: 0,
                                  },
                                  "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    left: "52%",
                                    right: "3%",
                                    bottom: -6,
                                    height: 10,
                                    borderRadius: 99,
                                    background: "rgba(52,34,20,0.22)",
                                    filter: "blur(5px)",
                                    zIndex: 0,
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    position: "absolute",
                                    left: "50%",
                                    top: 0,
                                    bottom: 0,
                                    width: { xs: 10, sm: 13 },
                                    transform: "translateX(-50%)",
                                    borderRadius: 99,
                                    background: "repeating-linear-gradient(180deg, #7d4e27 0 8px, #9e6535 8px 16px)",
                                    boxShadow: "inset -2px 0 0 rgba(255,255,255,0.22), inset 2px 0 0 rgba(0,0,0,0.16), 0 10px 18px rgba(0,0,0,0.24)",
                                    zIndex: 2,
                                  }}
                                />

                                <Grid item xs={6}>
                                  <Box
                                    sx={{
                                      height: { xs: 220, sm: 230 },
                                      borderRadius: 2.2,
                                      p: { xs: 1.4, sm: 1.7 },
                                      backgroundColor: "#fffdf8",
                                      backgroundImage: "radial-gradient(circle at 10px 10px, rgba(255,202,96,0.18) 1px, transparent 1.2px)",
                                      backgroundSize: "20px 20px",
                                      border: "1px solid rgba(148,111,73,0.3)",
                                      boxShadow: "0 12px 20px rgba(0,0,0,0.2), 2px 0 0 #f7ecd9, 5px 0 0 #f2e3ca, 8px 0 0 #ead9bf, inset -8px 0 12px rgba(0,0,0,0.08)",
                                      transform: "rotateY(3deg)",
                                      transformStyle: "preserve-3d",
                                      position: "relative",
                                      zIndex: 1,
                                      overflow: "hidden",
                                      perspective: "1200px",
                                      "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 14,
                                        bottom: 14,
                                        left: -6,
                                        width: 10,
                                        borderRadius: 99,
                                        background: "repeating-linear-gradient(180deg, #f8ecd9 0 4px, #ecd9bd 4px 8px)",
                                        boxShadow: "-1px 0 0 rgba(0,0,0,0.1)",
                                      },
                                      "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        top: 10,
                                        bottom: 10,
                                        right: -5,
                                        width: 6,
                                        borderRadius: 99,
                                        background: "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 100%)",
                                      },
                                    }}
                                  >
                                    {isPageTurning && (
                                      <motion.div
                                        key={`sheet-${turnId}`}
                                        initial={{ rotateY: 0, x: 0, opacity: 1 }}
                                        animate={{
                                          rotateY:
                                            flipDirection > 0
                                              ? [0, -18, -68, -132, -176]
                                              : [0, 18, 68, 132, 176],
                                          x: flipDirection > 0 ? [0, 1, 3, 5, 6] : [0, -1, -3, -5, -6],
                                          opacity: 1,
                                        }}
                                        transition={{ duration: 0.62, ease: [0.22, 0.61, 0.36, 1], times: [0, 0.18, 0.45, 0.75, 1] }}
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          zIndex: 5,
                                          pointerEvents: "none",
                                          transformOrigin: flipDirection > 0 ? "left center" : "right center",
                                          transformStyle: "preserve-3d",
                                        }}
                                      >
                                          <Box
                                            sx={{
                                              position: "absolute",
                                              inset: 0,
                                              borderRadius: 2.2,
                                              backgroundColor: "#fffdf8",
                                              backgroundImage:
                                                "radial-gradient(circle at 10px 10px, rgba(255,202,96,0.18) 1px, transparent 1.2px)",
                                              backgroundSize: "20px 20px",
                                              border: "1px solid rgba(148,111,73,0.3)",
                                              boxShadow: "0 14px 24px rgba(0,0,0,0.26)",
                                              backfaceVisibility: "hidden",
                                              WebkitBackfaceVisibility: "hidden",
                                            }}
                                          />
                                          <Box
                                            sx={{
                                              position: "absolute",
                                              inset: 0,
                                              borderRadius: 2.2,
                                              transform: "rotateY(180deg)",
                                              background:
                                                "linear-gradient(180deg, #f8f0e3 0%, #efe0ca 100%)",
                                              border: "1px solid rgba(148,111,73,0.28)",
                                              boxShadow: "inset 0 0 24px rgba(0,0,0,0.08)",
                                              backfaceVisibility: "hidden",
                                              WebkitBackfaceVisibility: "hidden",
                                            }}
                                          />
                                          <Box
                                            sx={{
                                              position: "absolute",
                                              top: 0,
                                              bottom: 0,
                                              right: flipDirection > 0 ? -2 : "auto",
                                              left: flipDirection < 0 ? -2 : "auto",
                                              width: 8,
                                              background:
                                                "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.06) 100%)",
                                              borderRadius: 99,
                                              filter: "blur(0.2px)",
                                            }}
                                          />
                                        </motion.div>
                                      )}

                                    <motion.div
                                      key={`page-content-${storyPage}`}
                                      initial={{ opacity: 0.1 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.34, ease: "easeOut" }}
                                      style={{ position: "relative", zIndex: 2, height: "100%" }}
                                    >
                                      <Typography sx={{ fontWeight: 900, color: "#0f4b75", fontSize: { xs: "1rem", sm: "1.1rem" }, mb: 0.35 }}>
                                        {storyBookPages[storyPage].title}
                                      </Typography>
                                      <Typography sx={{ fontWeight: 800, color: "#ff7f50", fontSize: { xs: "0.86rem", sm: "0.92rem" }, mb: 0.8 }}>
                                        {storyBookPages[storyPage].subtitle}
                                      </Typography>
                                      <Typography sx={{ color: "#31546f", lineHeight: 1.55, fontSize: { xs: "0.82rem", sm: "0.9rem" } }}>
                                        {storyBookPages[storyPage].text}
                                      </Typography>
                                      <Typography sx={{ mt: 0.8, fontSize: { xs: "0.75rem", sm: "0.8rem" }, color: "#4e6d1f", fontWeight: 800 }}>
                                        Swing, Smile, Repeat!
                                      </Typography>
                                    </motion.div>
                                  </Box>
                                </Grid>
                                <Grid item xs={6}>
                                  <Box
                                    sx={{
                                      height: { xs: 220, sm: 230 },
                                      borderRadius: 2.2,
                                      p: { xs: 1.4, sm: 1.7 },
                                      backgroundColor: "#fffdf8",
                                      backgroundImage: "radial-gradient(circle at 10px 10px, rgba(255,202,96,0.18) 1px, transparent 1.2px)",
                                      backgroundSize: "20px 20px",
                                      border: "1px solid rgba(148,111,73,0.3)",
                                      boxShadow: "0 12px 20px rgba(0,0,0,0.2), -2px 0 0 #f7ecd9, -5px 0 0 #f2e3ca, -8px 0 0 #ead9bf, inset 8px 0 12px rgba(0,0,0,0.08)",
                                      transform: "rotateY(-3deg)",
                                      transformStyle: "preserve-3d",
                                      position: "relative",
                                      zIndex: 1,
                                      "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 10,
                                        bottom: 10,
                                        left: -5,
                                        width: 6,
                                        borderRadius: 99,
                                        background: "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 100%)",
                                      },
                                    }}
                                  >
                                    <Typography sx={{ fontWeight: 900, color: "#4e6d1f", fontSize: { xs: "0.95rem", sm: "1.03rem" }, mb: 0.7 }}>
                                      {storyPage < storyBookPages.length - 1 ? "Next Adventure" : "The End"}
                                    </Typography>
                                    {storyPage < storyBookPages.length - 1 ? (
                                      <>
                                        <Typography sx={{ fontWeight: 800, color: "#2f4e65", fontSize: { xs: "0.84rem", sm: "0.9rem" }, mb: 0.45 }}>
                                          {storyBookPages[storyPage + 1].title}
                                        </Typography>
                                        <Typography sx={{ color: "#5a7388", lineHeight: 1.45, fontSize: { xs: "0.78rem", sm: "0.84rem" } }}>
                                          {storyBookPages[storyPage + 1].subtitle}
                                        </Typography>
                                        <Box sx={{ mt: 1.1, display: "flex", gap: 0.7 }}>
                                          <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ffb347" }} />
                                          <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#7dd3fc" }} />
                                          <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#86efac" }} />
                                        </Box>
                                      </>
                                    ) : (
                                      <Typography sx={{ color: "#5a7388", lineHeight: 1.55, fontSize: { xs: "0.8rem", sm: "0.88rem" } }}>
                                        Great job! You finished this mini book. Ready for the stages below?
                                      </Typography>
                                    )}
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>

                          <Stack spacing={1.2} sx={{ maxWidth: 560, mx: "auto" }}>
                            {storyStages.map((stage, idx) => (
                              <Box
                                key={stage}
                                sx={{
                                  borderRadius: 2.5,
                                  py: 1.1,
                                  px: 1.5,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                  background:
                                    idx === 0
                                      ? "linear-gradient(135deg, #d9f2ff 0%, #bfe4ff 100%)"
                                      : idx === 1
                                      ? "linear-gradient(135deg, #ffd9df 0%, #ffc4cf 100%)"
                                      : idx === 2
                                      ? "linear-gradient(135deg, #fff6c9 0%, #ffe89f 100%)"
                                      : "linear-gradient(135deg, #daf8df 0%, #bff0c8 100%)",
                                  border: "2px solid rgba(255,255,255,0.85)",
                                  boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
                                  transition: "transform 0.2s ease",
                                  "&:hover": { transform: "translateY(-2px) scale(1.01)" },
                                }}
                              >
                                <Box
                                  sx={{
                                    minWidth: 32,
                                    height: 32,
                                    borderRadius: "50%",
                                    backgroundColor:
                                      idx === 0
                                        ? "#1B83CC"
                                        : idx === 1
                                        ? "#e64b5d"
                                        : idx === 2
                                        ? "#e7b100"
                                        : "#2ea44f",
                                    color: "#fff",
                                    display: "grid",
                                    placeItems: "center",
                                    fontWeight: 900,
                                  }}
                                >
                                  {idx + 1}
                                </Box>
                                <Typography sx={{ fontWeight: 800, color: "#123a57", textAlign: "left" }}>
                                  {stage}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Paper>

                        <Paper
                          elevation={0}
                          sx={{
                            p: { xs: 2, sm: 3 },
                            borderRadius: 3,
                            border: "1px solid rgba(13,43,69,0.16)",
                            backgroundColor: "rgba(255,255,255,0.85)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 900,
                              color: "#0d2b45",
                              textAlign: "center",
                              fontSize: { xs: "1.35rem", sm: "1.9rem" },
                              letterSpacing: "0.03em",
                              textTransform: "uppercase",
                              mb: 1.2,
                            }}
                          >
                            Meet the Characters
                          </Typography>

                          <Typography
                            sx={{
                              color: "#264b68",
                              textAlign: "center",
                              maxWidth: 760,
                              mx: "auto",
                              mb: 2.5,
                              lineHeight: 1.7,
                              fontSize: { xs: "0.95rem", sm: "1rem" },
                            }}
                          >
                            Join Max and his sister Sophie on a colorful golf adventure at Golf in Colors Academy.
                            With Coach Sergio and Coach Anika, every lesson becomes a playful journey where
                            imagination, teamwork, and confidence grow with every swing.
                          </Typography>

                          <Grid container spacing={0} justifyContent="center">
                            {characters.map((character, index) => (
                              <Grid item xs="auto" key={index} sx={{ mx: 1.5, mb: 2 }}>
                                <Box
                                  sx={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: "50%",
                                    p: "4px",
                                    background:
                                      "linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
                                    "&:hover": {
                                      transform: "scale(1.1)",
                                      boxShadow: "0 10px 20px rgba(0,0,0,0.28)",
                                    },
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: "50%",
                                      p: "3px",
                                      backgroundColor: "#fff",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <Box
                                      component="img"
                                      src={`/${character.img}`}
                                      alt={character.name}
                                      sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition:
                                          ["Coach Sergio", "Hugo", "Lisa"].includes(character.name)
                                            ? "center 15%"
                                            : "center 30%",
                                        transform: "scale(1.2)",
                                        borderRadius: "50%",
                                      }}
                                    />
                                  </Box>
                                </Box>
                                <Typography
                                  variant="body2"
                                  sx={{ mt: 1, fontWeight: 700, color: "#FF7F50", textAlign: "center" }}
                                >
                                  {character.name}
                                </Typography>
                              </Grid>
                            ))}
                          </Grid>
                        </Paper>
                      </Stack>
                    </Collapse>
                  )}

                  {isVideos && (
                    <Collapse in={activeMenu === "Videos"} timeout={850}>
                      <Paper
                        elevation={0}
                        sx={{
                          mt: 2,
                          p: { xs: 2, sm: 3 },
                          borderRadius: 3,
                          border: "1px solid rgba(13,43,69,0.16)",
                          backgroundColor: "rgba(255,255,255,0.88)",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: 640,
                            mx: "auto",
                            p: "4px",
                            borderRadius: 3,
                            background: "linear-gradient(180deg, rgba(255,194,125,0.98) 0%, rgba(255,150,84,0.98) 100%)",
                            boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
                          }}
                        >
                          <Box
                            component="img"
                            src="/video-1.png"
                            alt="Videos"
                            sx={{
                              width: "100%",
                              display: "block",
                              borderRadius: 2.5,
                              border: "3px solid #ffffff",
                            }}
                          />
                        </Box>

                        <Stack spacing={1.5} sx={{ mt: 2, maxWidth: 760, mx: "auto", width: "100%" }}>
                          <Box sx={{ p: "4px", borderRadius: 2.5, background: "linear-gradient(180deg, rgba(255,194,125,0.98) 0%, rgba(255,150,84,0.98) 100%)", boxShadow: "0 8px 16px rgba(0,0,0,0.16)" }}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "3px", backgroundColor: "#ffffff", p: "3px", borderRadius: 2 }}>
                              <Box component="img" src="/video-2.png" alt="Video 2" sx={{ width: "100%", borderRadius: 1.5 }} />
                              <Box component="img" src="/video-3.png" alt="Video 3" sx={{ width: "100%", borderRadius: 1.5 }} />
                            </Box>
                          </Box>

                          <Box sx={{ p: "4px", borderRadius: 2.5, background: "linear-gradient(180deg, rgba(255,194,125,0.98) 0%, rgba(255,150,84,0.98) 100%)", boxShadow: "0 8px 16px rgba(0,0,0,0.16)" }}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "3px", backgroundColor: "#ffffff", p: "3px", borderRadius: 2 }}>
                              <Box component="img" src="/video-4.png" alt="Video 4" sx={{ width: "100%", borderRadius: 1.5 }} />
                              <Box component="img" src="/video-5.png" alt="Video 5" sx={{ width: "100%", borderRadius: 1.5 }} />
                            </Box>
                          </Box>

                          <Box sx={{ p: "4px", borderRadius: 2.5, background: "linear-gradient(180deg, rgba(255,194,125,0.98) 0%, rgba(255,150,84,0.98) 100%)", boxShadow: "0 8px 16px rgba(0,0,0,0.16)" }}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "3px", backgroundColor: "#ffffff", p: "3px", borderRadius: 2 }}>
                              <Box component="img" src="/video-6.png" alt="Video 6" sx={{ width: "100%", borderRadius: 1.5 }} />
                              <Box component="img" src="/video-7.png" alt="Video 7" sx={{ width: "100%", borderRadius: 1.5 }} />
                            </Box>
                          </Box>
                        </Stack>
                        <Stack spacing={1.2} sx={{ mt: 2.2, maxWidth: 760, mx: "auto", width: "100%" }}>
                          <Button
                            fullWidth
                            sx={{
                              textTransform: "none",
                              fontWeight: 900,
                              borderRadius: 2,
                              py: 1,
                              color: "#fff",
                              background: "linear-gradient(135deg, #1B83CC 0%, #0f6dae 100%)",
                              boxShadow: "0 8px 16px rgba(27,131,204,0.32)",
                              "&:hover": { background: "linear-gradient(135deg, #1679bb 0%, #0d649f 100%)" },
                            }}
                          >
                            My first golf lesson
                          </Button>

                          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 1.2 }}>
                            <Button
                              fullWidth
                              sx={{
                                textTransform: "none",
                                fontWeight: 900,
                                borderRadius: 2,
                                py: 1,
                                color: "#fff",
                                background: "linear-gradient(135deg, #2ea44f 0%, #24883f 100%)",
                                boxShadow: "0 8px 16px rgba(46,164,79,0.28)",
                                "&:hover": { background: "linear-gradient(135deg, #289445 0%, #1f7938 100%)" },
                              }}
                            >
                              Safty rules
                            </Button>

                            <Button
                              fullWidth
                              sx={{
                                textTransform: "none",
                                fontWeight: 900,
                                borderRadius: 2,
                                py: 1,
                                color: "#fff",
                                background: "linear-gradient(135deg, #f28b30 0%, #e07215 100%)",
                                boxShadow: "0 8px 16px rgba(242,139,48,0.3)",
                                "&:hover": { background: "linear-gradient(135deg, #e77f22 0%, #d4680d 100%)" },
                              }}
                            >
                              Golf elements
                            </Button>
                          </Box>
                        </Stack>
                      </Paper>
                    </Collapse>
                  )}

                  {isGames && (
                    <Collapse in={activeMenu === "Games"} timeout={850}>
                      <Paper
                        elevation={0}
                        sx={{
                          mt: 2,
                          p: { xs: 2, sm: 3 },
                          borderRadius: 3,
                          border: "1px solid rgba(13,43,69,0.16)",
                          backgroundColor: "rgba(255,255,255,0.9)",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: 640,
                            mx: "auto",
                            p: "4px",
                            borderRadius: 3,
                            position: "relative",
                            background: "linear-gradient(180deg, rgba(151,200,255,0.98) 0%, rgba(92,153,230,0.98) 100%)",
                            boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
                          }}
                        >
                          <Box
                            component="img"
                            src="/games.png"
                            alt="Games"
                            sx={{
                              width: "100%",
                              display: "block",
                              borderRadius: 2.5,
                              border: "3px solid #ffffff",
                            }}
                          />
                          <Typography
                            sx={{
                              position: "absolute",
                              left: { xs: 12, sm: 18 },
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "#ffffff",
                              fontWeight: 900,
                              fontSize: { xs: "1rem", sm: "1.35rem" },
                              lineHeight: 1.1,
                              textAlign: "left",
                              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                              maxWidth: { xs: 120, sm: 170 },
                            }}
                          >
                            CHOOSE YOUR LEVEL!
                          </Typography>
                        </Box>

                        <Stack spacing={1.1} sx={{ mt: 2, mb: 1.2, maxWidth: 640, mx: "auto", width: "100%" }}>
                          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 1 }}>
                            <Box sx={{ fontWeight: 900, fontSize: { xs: "0.9rem", sm: "1rem" }, letterSpacing: "0.02em", color: "#ffffff", textAlign: "center", px: 1.2, py: 0.55, borderRadius: 99, border: "2px solid #0f5ea0", backgroundColor: "#1B83CC" }}>LEVEL 1</Box>
                            <Box sx={{ fontWeight: 900, fontSize: { xs: "0.9rem", sm: "1rem" }, letterSpacing: "0.02em", color: "#ffffff", textAlign: "center", px: 1.2, py: 0.55, borderRadius: 99, border: "2px solid #1d6f33", backgroundColor: "#2ea44f" }}>LEVEL 2</Box>
                            <Box sx={{ fontWeight: 900, fontSize: { xs: "0.9rem", sm: "1rem" }, letterSpacing: "0.02em", color: "#ffffff", textAlign: "center", px: 1.2, py: 0.55, borderRadius: 99, border: "2px solid #8a6a00", backgroundColor: "#d9a300" }}>LEVEL 3</Box>
                          </Box>

                          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 1, width: { xs: "100%", sm: "66.66%" }, mx: "auto" }}>
                            <Box sx={{ fontWeight: 900, fontSize: { xs: "0.9rem", sm: "1rem" }, letterSpacing: "0.02em", color: "#ffffff", textAlign: "center", px: 1.2, py: 0.55, borderRadius: 99, border: "2px solid #5a2f8f", backgroundColor: "#8f5cc4" }}>LEVEL 4</Box>
                            <Box sx={{ fontWeight: 900, fontSize: { xs: "0.9rem", sm: "1rem" }, letterSpacing: "0.02em", color: "#ffffff", textAlign: "center", px: 1.2, py: 0.55, borderRadius: 99, border: "2px solid #9e2a12", backgroundColor: "#d1491f" }}>LEVEL 5</Box>
                          </Box>
                        </Stack>

                        <Box
                          sx={{
                            maxWidth: 640,
                            mx: "auto",
                            borderRadius: 2.5,
                            overflow: "hidden",
                            background: "linear-gradient(180deg, rgba(151,200,255,0.98) 0%, rgba(92,153,230,0.98) 100%)",
                            p: "4px",
                            boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
                          }}
                        >
                          <Box sx={{ backgroundColor: "#1B83CC", borderRadius: 2, p: "3px" }}>
                            <Stack spacing={0.5}>
                              <Box component="img" src="/game-1.png" alt="Game 1" sx={{ width: "100%", display: "block", borderRadius: 1.2 }} />
                              <Box component="img" src="/game-2.png" alt="Game 2" sx={{ width: "100%", display: "block", borderRadius: 1.2 }} />
                              <Box component="img" src="/game-3.png" alt="Game 3" sx={{ width: "100%", display: "block", borderRadius: 1.2 }} />
                              <Box component="img" src="/game-4.png" alt="Game 4" sx={{ width: "100%", display: "block", borderRadius: 1.2 }} />
                              <Box component="img" src="/game-5.png" alt="Game 5" sx={{ width: "100%", display: "block", borderRadius: 1.2 }} />
                              <Box component="img" src="/game-6.png" alt="Game 6" sx={{ width: "100%", display: "block", borderRadius: 1.2 }} />
                            </Stack>
                          </Box>
                        </Box>
                      </Paper>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
























































































