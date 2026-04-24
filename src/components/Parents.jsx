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
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.2,
                  color: "#0b8f63",
                  fontSize: { xs: "0.96rem", sm: "1.08rem", md: "1.15rem" },
                  fontWeight: 950,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  mb: { xs: 0.6, sm: 0.8 },
                  "&::before, &::after": {
                    content: '""',
                    height: "2px",
                    width: { xs: 34, sm: 44, md: 56 },
                    borderRadius: 2,
                    background: "rgba(11,143,99,0.55)",
                  },
                }}
              >
                SUPPORT
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

            {/* Descriptor moved into the new block above FAQ's */}
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
                  color: "#0c2a44",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: "1.35rem", sm: "1.75rem" },
                  lineHeight: 1.15,
                  textAlign: "center",
                  mb: 0.6,
                }}
              >
                Your Child's Golf Journey Starts With You
              </Typography>

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
                Let Us Show You the Way
              </Typography>

              <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.65, mb: 1.2 }}>
                As a parent, it can be difficult to balance wanting what’s best for your child with actually doing what’s best for them. Your role is to be their biggest supporter and cheerleader while helping them find the right environment to grow as a golfer.
              </Typography>
              <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.65 }}>
                Finding the right coach is essential to creating engagement with the sport. Not every coach is skilled at working with kids, and not everyone has the patience it requires. That’s why feedback from both your child and the coach is key to making sure the experience is positive and productive.
              </Typography>

              <Box sx={{ mt: 2.2, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }, gap: { xs: 1.4, sm: 1.8 } }}>
                <Box
                  sx={{
                    p: { xs: 1.8, sm: 2.1 },
                    borderRadius: 2.6,
                    border: "1px solid rgba(13,43,69,0.12)",
                    background: "linear-gradient(165deg, #ffffff 0%, #f2fff8 100%)",
                    boxShadow: "0 14px 28px rgba(13,43,69,0.10)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -34,
                      right: -34,
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "rgba(11,143,99,0.12)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background:
                        "linear-gradient(110deg, rgba(255,255,255,0) 18%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 82%)",
                      opacity: 0.35,
                    },
                  }}
                >
                  <Typography sx={{ color: "#0c2a44", fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: { xs: "1.15rem", sm: "1.25rem" }, mb: 0.8, lineHeight: 1.1 }}>
                    Guidance
                  </Typography>
                  <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "0.98rem" }, lineHeight: 1.65, mb: 1 }}>
                    We support you by giving you clear, simple guidance so you know what to practice and how to keep it fun. Especially during parent-child golf time.
                  </Typography>
                  <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "0.98rem" }, lineHeight: 1.65, mb: 1 }}>
                    Games with small challenges are ideal for kids. At this stage, the focus shouldn’t be on perfect technique, but on allowing your child to explore the game in a natural, enjoyable way.
                  </Typography>
                  <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "0.98rem" }, lineHeight: 1.65 }}>
                    If you’re not ready to enroll your child in a golf camp, start with the basics: fundamental skills and proper golf etiquette. These early building blocks will set the foundation for future growth.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: { xs: 1.8, sm: 2.1 },
                    borderRadius: 2.6,
                    border: "1px solid rgba(13,43,69,0.12)",
                    background: "linear-gradient(165deg, #ffffff 0%, #f2f9ff 100%)",
                    boxShadow: "0 14px 28px rgba(13,43,69,0.10)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -34,
                      right: -34,
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "rgba(27,131,204,0.10)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background:
                        "linear-gradient(110deg, rgba(255,255,255,0) 18%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 82%)",
                      opacity: 0.32,
                    },
                  }}
                >
                  <Typography sx={{ color: "#0c2a44", fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: { xs: "1.15rem", sm: "1.25rem" }, mb: 0.8, lineHeight: 1.1 }}>
                    Learn Together
                  </Typography>
                  <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "0.98rem" }, lineHeight: 1.65, mb: 1 }}>
                    Understanding the basics of golf and how kids learn, creates an opportunity for both parent and child to grow together.
                  </Typography>
                  <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "0.98rem" }, lineHeight: 1.65, mb: 1 }}>
                    Some parents already have golf experience, while others are completely new to the game. In both cases, golf can become a shared journey of discovery and improvement.
                  </Typography>
                  <Typography sx={{ color: "#27475f", fontSize: { xs: "0.95rem", sm: "0.98rem" }, lineHeight: 1.65 }}>
                    Because golf is a sport for all ages, it can easily become a lifelong family activity. When you learn together, you nurture curiosity—and that’s where a genuine love for the game begins.
                  </Typography>
                </Box>
              </Box>
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













