import { Box, Button, Collapse, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import TeamSection from "./TeamSection";

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
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 13.5, sm: 15 },
        pb: 8,
        backgroundColor: "rgb(248 246 241)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mt: { xs: -3.2, sm: -4.0 }, mb: { xs: 2.4, sm: 3.2 } }}>
          <TeamSection />
        </Box>

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
              mt: { xs: -1.2, sm: -1.8 },
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
                YOUR CHILD'S
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
                mb: { xs: 2.2, sm: 2.6 },
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
                    FAQ's
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
  );
}
