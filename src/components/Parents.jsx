import { Box, Button, Collapse, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import TeamSection from "./TeamSection";
import Informations from "./Informations";

export default function Parents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [faqOpen, setFaqOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const faqs = [
    {
      q: "What benefits does golf offer my child?",
      a: "Golf helps develop coordination, balance, and focus. It also teaches discipline, respect, and how to follow rules, while supporting cognitive growth and building confidence.",
    },
    {
      q: "What should my role be during lessons?",
      a: "Support and observe. Let the coach guide the session while you encourage your child and reinforce a positive experience.",
    },
  ];

  return (
    <>
      {/* 1. YOUR CHILD'S GOLF JOURNEY STARTS WITH YOU + FIRST AT HOME  |  2. A WINNING TEAM */}
      <Box
        sx={{
          pt: { xs: 13.5, sm: 15 },
          pb: { xs: 1, sm: 1.5 },
          backgroundColor: "rgb(248 246 241)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
        }}
      >
        <Container maxWidth="lg">
          {/* YOUR CHILD'S GOLF JOURNEY STARTS WITH YOU */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box
              sx={{
                textAlign: "center",
                color: "#0d2b45",
                px: { xs: 1, sm: 4 },
                mt: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: { xs: 0.98, sm: 1.0 },
                  letterSpacing: "0.015em",
                  fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.6rem" },
                  textShadow: "none",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#0d2b45",
                    fontSize: { xs: "1.65rem", sm: "2.05rem", md: "2.25rem" },
                    fontWeight: 950,
                    textShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  YOUR CHILD&apos;S
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#0d2b45",
                    fontSize: { xs: "1.65rem", sm: "2.05rem", md: "2.25rem" },
                    fontWeight: 950,
                    textShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  GOLF JOURNEY
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#35536a",
                    fontSize: { xs: "1.55rem", sm: "1.95rem", md: "2.1rem" },
                    fontWeight: 800,
                    mt: { xs: 0.2, sm: 0.25 },
                  }}
                >
                  STARTS
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.35rem" },
                    fontWeight: 950,
                    lineHeight: 0.95,
                    background: "linear-gradient(90deg, #1B83CC 0%, #0b8f63 55%, #1aa97a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  WITH YOU
                </Box>
              </Typography>
            </Box>
          </motion.div>

          {/* FIRST AT HOME */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <Box sx={{ mt: { xs: 3, sm: 4 } }}>
              <Box
                sx={{
                  p: { xs: 2, sm: 2.6 },
                  borderRadius: 3,
                  border: "1px solid rgba(13,43,69,0.12)",
                  background: "linear-gradient(165deg, #ffffff 0%, #f4f9ff 100%)",
                  boxShadow: "0 14px 28px rgba(13,43,69,0.10)",
                }}
              >
                <Typography
                  sx={{
                    color: "#35536a",
                    fontWeight: 700,
                    fontSize: { xs: "1rem", sm: "1.12rem" },
                    lineHeight: 1.35,
                    textAlign: "center",
                    mb: 1.6,
                  }}
                >
                  FIRST AT HOME
                </Typography>

                <Typography
                  sx={{
                    color: "#27475f",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.75,
                    mb: 1.2,
                  }}
                >
                  As a parent, you play one of the most important roles in your child&apos;s journey. Your support, encouragement, and presence help create a positive environment where they can grow, explore, and truly enjoy the game. Being there for them, celebrating their progress and guiding them toward the right opportunities, makes all the difference.
                </Typography>

                <Typography
                  sx={{
                    color: "#27475f",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.75,
                    mb: 1.2,
                  }}
                >
                  Choosing the right coach is a key part of this experience. A great coach helps create connection, confidence, and excitement for learning, allowing your child to feel motivated and engaged.
                </Typography>

                <Typography
                  sx={{
                    color: "#27475f",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.75,
                  }}
                >
                  When there is open communication between you, your child, and the coach, the experience becomes even more meaningful, creating a strong foundation for growth, enjoyment, and long-term development in the game.
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Family clarity */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <Box
              sx={{
                mt: { xs: 2.2, sm: 3.2 },
                borderRadius: { xs: 4, sm: 5 },
                border: "1px solid rgba(10,38,30,0.08)",
                background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(244,249,251,0.98) 100%)",
                boxShadow: "0 14px 34px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
                <Box sx={{ px: { xs: 2.2, sm: 3.8 }, py: { xs: 3, sm: 4.2 } }}>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                      color: "#083c2c",
                      fontSize: { xs: "1.36rem", sm: "1.72rem", md: "1.95rem" },
                      lineHeight: 1.12,
                      mb: 0.9,
                    }}
                  >
                    Let Us Show You the Way
                  </Typography>

                  <Typography
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      px: 1.1,
                      py: 0.45,
                      borderRadius: 99,
                      background: "rgba(27,131,204,0.10)",
                      color: "#1B83CC",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: "0.72rem",
                      mb: 1.4,
                    }}
                  >
                    Parent framework
                  </Typography>

                  <Typography
                    sx={{
                      color: "#35536a",
                      fontSize: { xs: "0.96rem", sm: "1.02rem" },
                      lineHeight: 1.75,
                      maxWidth: "62ch",
                      mb: 2,
                    }}
                  >
                    Golf in Colors provides parents with a clear framework to understand their role in their child&apos;s development, allowing them to support without creating pressure or confusion. It offers a structured environment where progress is visible and consistent, giving parents confidence in the process and in the decisions they are making. By connecting what happens at the academy with experiences at home, it turns golf into a shared activity, creating meaningful moments between children and their families. This approach brings clarity, trust, and involvement to each stage of the journey, while allowing parents to feel part of a positive and guided experience.
                  </Typography>

                  <Box
                    sx={{
                      mt: 0.5,
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                      gap: 1.2,
                    }}
                  >
                    {[
                      { label: "Clear guidance", sub: "Simple direction that removes uncertainty." },
                      { label: "Visible progress", sub: "Steady progress you can see and trust." },
                      { label: "Shared family growth", sub: "Home and academy working as one." },
                    ].map((item, index) => (
                      <Box
                        key={item.label}
                        sx={{
                          borderRadius: 3,
                          px: 1.5,
                          py: 1.45,
                          background:
                            index === 0
                              ? "linear-gradient(180deg, rgba(77,211,192,0.10) 0%, rgba(77,211,192,0.04) 100%)"
                              : index === 1
                              ? "linear-gradient(180deg, rgba(27,131,204,0.10) 0%, rgba(27,131,204,0.04) 100%)"
                              : "linear-gradient(180deg, rgba(52,169,111,0.10) 0%, rgba(52,169,111,0.04) 100%)",
                          border: "1px solid rgba(10,38,30,0.08)",
                          minHeight: 74,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 900,
                              fontFamily: "'Poppins', sans-serif",
                              color: "#0c2a44",
                              fontSize: { xs: "0.9rem", sm: "0.96rem" },
                              lineHeight: 1.2,
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography sx={{ mt: 0.35, color: "#5d7582", fontSize: "0.76rem", lineHeight: 1.35 }}>
                            {item.sub}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    minHeight: { xs: 210, sm: 260, md: "100%" },
                    backgroundImage: "url(PATTERN.avif)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(5,30,20,0.52)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      px: 3,
                      py: 4,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 900,
                        fontSize: { xs: "1.18rem", sm: "1.5rem", md: "1.68rem" },
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        mb: 0.9,
                        color: "#ffffff",
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      Family clarity
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.7, maxWidth: "29ch", color: "rgba(255,255,255,0.85)" }}>
                      Support becomes easier when everyone knows the role they play in the journey.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Understanding the Roles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <Box
              sx={{
                mt: { xs: 2.2, sm: 3.2 },
                borderRadius: { xs: 4, sm: 5 },
                border: "1px solid rgba(10,38,30,0.08)",
                background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(243,248,250,0.98) 100%)",
                boxShadow: "0 14px 34px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
                <Box
                  sx={{
                    px: { xs: 2.2, sm: 3.8 },
                    py: { xs: 3, sm: 4.2 },
                    order: { xs: 1, md: 2 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                      color: "#083c2c",
                      fontSize: { xs: "1.34rem", sm: "1.7rem", md: "1.9rem" },
                      lineHeight: 1.12,
                      mb: 1.2,
                    }}
                  >
                    Understanding the Roles
                  </Typography>

                  <Typography
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      px: 1.1,
                      py: 0.45,
                      borderRadius: 99,
                      background: "rgba(11,143,99,0.10)",
                      color: "#087a55",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: "0.72rem",
                      mb: 1.4,
                    }}
                  >
                    Roles in sync
                  </Typography>

                  <Typography
                    sx={{
                      color: "#35536a",
                      fontSize: { xs: "0.96rem", sm: "1.02rem" },
                      lineHeight: 1.75,
                      maxWidth: "62ch",
                      mb: 2,
                    }}
                  >
                    Clear roles are essential because they create structure, consistency, and trust throughout a child&apos;s learning experience. When each person understands their responsibility - the parent providing emotional support, the coach guiding the learning process, and the child exploring and growing - everything becomes more aligned and effective. This clarity eliminates confusion, reduces unnecessary pressure, and creates a positive environment where the child feels safe, motivated, and confident. With everyone working in the same direction, the learning process becomes more natural, progress becomes consistent, and the overall experience becomes something both the child and the family can truly enjoy.
                  </Typography>

                  <Box
                    sx={{
                      mt: 0.5,
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                      gap: 1.2,
                    }}
                  >
                    {[
                      { label: "Parent support", sub: "Support without pressure." },
                      { label: "Coach guidance", sub: "Guidance that keeps learning on track." },
                      { label: "Child growth", sub: "Curiosity and confidence growing together." },
                    ].map((item, index) => (
                      <Box
                        key={item.label}
                        sx={{
                          borderRadius: 3,
                          px: 1.6,
                          py: 1.5,
                          background:
                            index === 0
                              ? "linear-gradient(180deg, rgba(27,131,204,0.14) 0%, rgba(27,131,204,0.06) 100%)"
                              : index === 1
                              ? "linear-gradient(180deg, rgba(11,143,99,0.14) 0%, rgba(11,143,99,0.06) 100%)"
                              : "linear-gradient(180deg, rgba(240,191,47,0.14) 0%, rgba(240,191,47,0.06) 100%)",
                          border: "1px solid rgba(10,38,30,0.08)",
                          minHeight: 74,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 900,
                              fontFamily: "'Poppins', sans-serif",
                              color: "#0c2a44",
                              fontSize: { xs: "0.9rem", sm: "0.96rem" },
                              lineHeight: 1.2,
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography sx={{ mt: 0.35, color: "#5d7582", fontSize: "0.76rem", lineHeight: 1.35 }}>
                            {item.sub}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    minHeight: { xs: 230, sm: 280, md: "100%" },
                    backgroundImage: "url(PATTERN.avif)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    overflow: "hidden",
                    order: { xs: 2, md: 1 },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(5,30,20,0.52)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      px: 3,
                      py: 4,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 900,
                        fontSize: { xs: "1.12rem", sm: "1.42rem", md: "1.62rem" },
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        mb: 1.1,
                        color: "#ffffff",
                        textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      Trust, structure and confidence
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.7, maxWidth: "30ch", color: "rgba(255,255,255,0.85)" }}>
                      When everyone understands their role, the learning path becomes calmer, clearer, and more enjoyable.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* 2. A WINNING TEAM */}
          <Box sx={{ mt: { xs: 2.4, sm: 3.2 }, mb: 0 }}>
            <TeamSection />
          </Box>
        </Container>
      </Box>

      {/* 3. How the Journey Works (Informations) */}
      <Informations />

      {/* 4. ROLES  |  5. FAQ's */}
      <Box
        sx={{
          pt: { xs: 3, sm: 4 },
          pb: 8,
          backgroundColor: "rgb(248 246 241)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
        }}
      >
        <Container maxWidth="lg">
          {/* ROLES */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box
              sx={{
                mb: { xs: 3.4, sm: 4.4 },
                p: { xs: 2.2, sm: 3, md: 3.4 },
                borderRadius: 4,
                border: "1px solid rgba(13,43,69,0.10)",
                background: "linear-gradient(165deg, #ffffff 0%, #f4f9ff 100%)",
                boxShadow: "0 16px 30px rgba(13,43,69,0.10)",
                overflow: "hidden",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: "radial-gradient(circle at top right, rgba(27,131,204,0.08) 0, rgba(27,131,204,0) 38%)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 1.15,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    background: "linear-gradient(135deg, #1B83CC 0%, #0b8f63 100%)",
                    color: "#fff",
                    boxShadow: "0 10px 18px rgba(27,131,204,0.18)",
                    flexShrink: 0,
                  }}
                >
                  <HelpOutlineRoundedIcon sx={{ fontSize: 24 }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                      color: "#0c2a44",
                      fontSize: { xs: "1.1rem", sm: "1.18rem" },
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      lineHeight: 1.05,
                    }}
                  >
                    ROLES
                  </Typography>
                  <Typography
                    sx={{
                      color: "#35536a",
                      fontWeight: 700,
                      fontSize: { xs: "0.9rem", sm: "0.98rem" },
                      lineHeight: 1.3,
                      mt: 0.25,
                    }}
                  >
                    How the Journey Works at Home
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "#27475f",
                  fontSize: { xs: "0.94rem", sm: "1rem" },
                  lineHeight: 1.72,
                  maxWidth: "72ch",
                }}
              >
                Reinforcing what children learn at the academy while creating meaningful parent-child connection through golf.
              </Typography>

              <Box
                sx={{
                  mt: 0,
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(5, minmax(0, 1fr))" },
                  gap: 1.1,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[
                  "Discover the game",
                  "Build the foundation",
                  "Experience the Game of Golf",
                  "Understand How to Play",
                  "Step into structured training",
                ].map((step, index) => (
                  <Box
                    key={step}
                    sx={{
                      p: 1.45,
                      borderRadius: 3,
                      border: "1px solid rgba(13,43,69,0.10)",
                      background:
                        index % 2 === 0
                          ? "linear-gradient(180deg, rgba(27,131,204,0.08) 0%, rgba(27,131,204,0.03) 100%)"
                          : "linear-gradient(180deg, rgba(11,143,99,0.08) 0%, rgba(11,143,99,0.03) 100%)",
                      minHeight: 92,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        background: "linear-gradient(135deg, #0d2b45 0%, #1B83CC 100%)",
                        color: "#fff",
                        fontWeight: 900,
                        fontFamily: "'Poppins', sans-serif",
                        boxShadow: "0 8px 14px rgba(13,43,69,0.18)",
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography
                      sx={{
                        color: "#0c2a44",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: "0.92rem", sm: "0.98rem" },
                        lineHeight: 1.25,
                      }}
                    >
                      {step}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* FAQ's */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box>
              <Box
                role="button"
                tabIndex={0}
                onClick={() => setFaqOpen((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFaqOpen((prev) => !prev);
                  }
                }}
                sx={{
                  p: { xs: 2, sm: 2.3 },
                  borderRadius: 3,
                  border: faqOpen ? "1.8px solid rgba(11,143,99,0.28)" : "1px solid rgba(13,43,69,0.12)",
                  background: faqOpen
                    ? "linear-gradient(165deg, #ffffff 0%, #f3fff9 100%)"
                    : "linear-gradient(165deg, #ffffff 0%, #f7fff9 100%)",
                  boxShadow: faqOpen
                    ? "0 16px 30px rgba(11,143,99,0.14)"
                    : "0 12px 24px rgba(13,43,69,0.12)",
                  color: "#0d2b45",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -34,
                    right: -34,
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background: faqOpen ? "rgba(11,143,99,0.14)" : "rgba(27,131,204,0.08)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      background: "linear-gradient(135deg, #2b3a45 0%, #087a55 100%)",
                      color: "#fff",
                      boxShadow: "0 8px 16px rgba(11,143,99,0.18)",
                    }}
                  >
                    <HelpOutlineRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: { xs: "1.15rem", sm: "1.35rem" },
                        lineHeight: 1.05,
                        color: "#0c2a44",
                      }}
                    >
                      FAQ&apos;s
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.82rem", sm: "0.9rem" },
                        color: "#4a6478",
                        mt: 0.25,
                      }}
                    >
                      Common questions from parents
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", color: "#2b3a45", position: "relative", zIndex: 1 }}>
                  {faqOpen ? <CloseIcon sx={{ fontSize: 20 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />}
                </Box>
              </Box>

              <Collapse in={faqOpen} timeout={700}>
                <Grid container spacing={isMobile ? 1.6 : 2.2} sx={{ mt: 0.1 }}>
                  {faqs.map((item) => (
                    <Grid item xs={12} md={6} key={item.q}>
                      <Box
                        sx={{
                          p: { xs: 2, sm: 2.3 },
                          borderRadius: 2.8,
                          border: "1px solid rgba(13,43,69,0.12)",
                          background: "linear-gradient(165deg, #ffffff 0%, #f8fffb 100%)",
                          boxShadow: "0 12px 24px rgba(13,43,69,0.1)",
                          height: "100%",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            background: "linear-gradient(180deg, rgba(11,143,99,0.04) 0%, rgba(255,255,255,0) 46%)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 900,
                            color: "#0c2a44",
                            fontSize: { xs: "1.02rem", sm: "1.12rem" },
                            lineHeight: 1.2,
                            mb: 0.8,
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {item.q}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#4a6478",
                            fontSize: { xs: "0.92rem", sm: "0.98rem" },
                            lineHeight: 1.62,
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {item.a}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Collapse>
            </Box>
          </motion.div>

          {/* Hidden section */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ display: "none" }}
          >
            <Box
              sx={{
                mt: { xs: 3, sm: 4 },
                p: { xs: 2, sm: 3 },
                borderRadius: 3,
                border: "1px solid rgba(13,43,69,0.12)",
                background: "linear-gradient(165deg, #ffffff 0%, #f4f9ff 100%)",
                boxShadow: "0 14px 28px rgba(13,43,69,0.12)",
              }}
            >
              <Grid
                container
                spacing={2.2}
                alignItems="center"
                sx={{
                  borderLeft: { xs: "4px solid #1B83CC", sm: "6px solid #1B83CC" },
                  pl: { xs: 1.1, sm: 1.4 },
                }}
              >
                <Grid item xs={12} md={7}>
                  <Typography
                    sx={{
                      color: "#0c2a44",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                      fontSize: { xs: "1.35rem", sm: "1.85rem" },
                      lineHeight: 1.15,
                      mb: 1.2,
                    }}
                  >
                    A complete learning system for families
                  </Typography>

                  <Typography
                    sx={{
                      color: "#27475f",
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    Golf In Colors offers a structured learning system made up of playful programs and tools designed to support both kids and parents throughout the learning journey. Each program has a clear purpose, helping children learn golf step by step while parents understand how to guide, motivate, and support their progress at every stage.
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      mt: 1.7,
                      textTransform: "none",
                      fontWeight: 700,
                      borderRadius: 99,
                      px: 2.4,
                      py: 0.8,
                      background: "linear-gradient(135deg, #1B83CC 0%, #1169a8 100%)",
                      boxShadow: "0 8px 16px rgba(27,131,204,0.28)",
                      "&:hover": { background: "linear-gradient(135deg, #1679bb 0%, #0f5f96 100%)" },
                    }}
                  >
                    Read More
                  </Button>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src="/parents-2.jpeg"
                    alt="Family Learning System"
                    sx={{
                      width: "100%",
                      borderRadius: 2.4,
                      border: "2px solid rgba(13,43,69,0.14)",
                      boxShadow: "0 10px 20px rgba(13,43,69,0.16)",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
