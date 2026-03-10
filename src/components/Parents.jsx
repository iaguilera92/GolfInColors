import { Box, Button, Collapse, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmojiFlagsRoundedIcon from "@mui/icons-material/EmojiFlagsRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
export default function Parents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [rolesOpen, setRolesOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const programs = [
    {
      title: "TEE BOX",
      description:
        "Tee Box is a 5-level at-home golf program designed to help kids learn while parents stay connected and involved",
      colors: ["#0a6abf", "#1B83CC"],
      cta: "Explore",
    },
  ];
  const roles = [
    {
      step: "1",
      title: "Initial Guidance",
      quote: "We show the way",
      description: "Show the path with clear steps to begin.",
    },
    {
      step: "2",
      title: "Practical Orientation",
      quote: "Simple, practical guidance",
      description: "Easy instructions to learn and practice.",
    },
    {
      step: "3",
      title: "Learning Together",
      quote: "Learn together",
      description: "Understand the fundamentals while learning as a team.",
    },
    {
      step: "4",
      title: "Progress and Growth",
      quote: "Progress that shines",
      description: "Reach goals and move forward with confidence.",
    },
    {
      step: "5",
      title: "Quality Experience",
      quote: "Quality family time",
      description: "Turn the activity into a meaningful moment.",
    },
  ];

  const faqs = [
    {
      q: "What age is best to start learning golf?",
      a: "Many kids can start as early as 3 to 5 with playful movement and simple fundamentals. The best age is when your child is curious, can follow basic instructions, and enjoys active play.",
    },
    {
      q: "How often should my child practice at home?",
      a: "Short sessions work best. Aim for 10 to 15 minutes, 2 to 4 times per week. Consistency matters more than duration, and it should always feel fun.",
    },
    {
      q: "What should my child bring to a lesson?",
      a: "Comfortable shoes, a hat, water, sunscreen, and a positive attitude. If they have clubs, bring them, but most beginner programs can provide equipment at first.",
    },
    {
      q: "How do coaches keep kids engaged and safe?",
      a: "Great coaches use games, clear routines, and kid-friendly cues. They set safe zones, manage spacing and turns, and keep the environment positive so kids stay focused without pressure.",
    },
    {
      q: "How can parents and coaches work together to help my child improve?",
      a: "Ask coaches for one simple focus to practice at home, celebrate effort over results, and keep communication open. The best progress happens when parents support the process and coaches guide the learning steps.",
    },
  ];


  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 13.5, sm: 15 },
        pb: 8,
        backgroundColor: "#f8f6f1",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      <Container maxWidth="lg">
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
                lineHeight: { xs: 1.02, sm: 1.04 },
                letterSpacing: "0.02em",
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" },
                textShadow: "none",
              }}
            >
              <Box component="span" sx={{ display: "block", color: "#2a4a5f", fontSize: { xs: "1.6rem", sm: "2rem" }, fontWeight: 700 }}>
                SUPPORTING
              </Box>
              <Box component="span" sx={{ display: "block", color: "#0f6fb8", fontSize: { xs: "2rem", sm: "2.7rem", md: "3.1rem" }, fontWeight: 900 }}>
                YOUR CHILD'S
              </Box>
              <Box component="span" sx={{ display: "block", color: "#0b8f63", fontSize: { xs: "2rem", sm: "2.8rem", md: "3.3rem" }, fontWeight: 900 }}>
                GOLF JOURNEY
              </Box>
              <Box component="span" sx={{ display: "block", color: "#3e556b", fontSize: { xs: "1.5rem", sm: "1.9rem" }, fontWeight: 700 }}>
                STARTS
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#e67a1f",
                  fontSize: { xs: "2.2rem", sm: "3.1rem", md: "3.6rem" },
                  fontWeight: 900,
                  lineHeight: 0.95,
                  WebkitTextStroke: "0px",
                }}
              >
                WITH YOU
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                maxWidth: 860,
                mx: "auto",
                fontSize: { xs: "1rem", sm: "1.15rem" },
                fontWeight: 500,
                lineHeight: 1.5,
                color: "#35536a",
                textShadow: "none",
              }}
            >
              Golf In Colors helps parents guide, support, and motivate their kids through a playful and structured learning system.
            </Typography>

            <Box
              component="img"
              src="/parents.png"
              alt="Parents Golf Program"
              sx={{
                width: { xs: "110%", sm: "100%" },
                maxWidth: { xs: "none", sm: 880 },
                mt: { xs: 2.6, sm: 3 },
                ml: { xs: "-5%", sm: 0 },
                borderRadius: { xs: 2, sm: 3 },
                border: "2px solid rgba(13,43,69,0.18)",
                backgroundColor: "#f5e6cf",
                p: { xs: 0.8, sm: 1 },
                boxShadow: "0 14px 28px rgba(0,0,0,0.28)",
                objectFit: "contain",
              }}
            />
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

        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <Box sx={{ mt: { xs: 4, sm: 5 } }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#0d2b45",
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "1.6rem", sm: "2rem" },
                fontWeight: 900,
                letterSpacing: "0.03em",
                mb: 2.2,
              }}
            >
              Our Programs
            </Typography>

            <Grid container spacing={isMobile ? 1.6 : 2.2} justifyContent="center">
              {programs.map((program) => (
                <Grid item xs={12} md={8} key={program.title}>
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: 3.2,
                      color: "#fff",
                      position: "relative",
                      overflow: "hidden",
                      border: "1.5px solid rgba(255,255,255,0.5)",
                      background: `linear-gradient(150deg, ${program.colors[0]} 0%, ${program.colors[1]} 100%)`,
                      boxShadow: "0 14px 26px rgba(0,0,0,0.24)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        backgroundColor: "rgba(0,0,0,0.24)",
                        border: "1px solid rgba(255,255,255,0.34)",
                        mb: 1.3,
                      }}
                    >
                      <EmojiFlagsRoundedIcon sx={{ fontSize: 24 }} />
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: { xs: "1.2rem", sm: "1.35rem" },
                        letterSpacing: "0.04em",
                        lineHeight: 1.1,
                        mb: 1.1,
                      }}
                    >
                      {program.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        lineHeight: 1.55,
                        color: "rgba(255,255,255,0.96)",
                        maxWidth: 600,
                      }}
                    >
                      {program.description}
                    </Typography>

                    <Box sx={{ mt: 1.5, display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        variant="contained"
                        onClick={() => navigate("/catalogo")}
                        sx={{
                          textTransform: "none",
                          fontWeight: 700,
                          borderRadius: 99,
                          px: 2.4,
                          py: 0.75,
                          backgroundColor: "rgba(255,255,255,0.22)",
                          border: "1px solid rgba(255,255,255,0.46)",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.32)",
                          },
                        }}
                      >
                        {program.cta}
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>


          <Box sx={{ mt: { xs: 2.2, sm: 3 } }}>
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
                    background: "linear-gradient(135deg, #0b8f63 0%, #087a55 100%)",
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

              <Box sx={{ display: "flex", alignItems: "center", color: "#0b8f63", position: "relative", zIndex: 1 }}>
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

          <Box sx={{ mt: { xs: 3, sm: 4 } }}>
            <Box
              role="button"
              tabIndex={0}
              onClick={() => setRolesOpen((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setRolesOpen((prev) => !prev);
                }
              }}
              sx={{
                p: { xs: 2, sm: 2.3 },
                borderRadius: 3,
                border: rolesOpen ? "1.8px solid rgba(27,131,204,0.34)" : "1px solid rgba(13,43,69,0.12)",
                background: rolesOpen
                  ? "linear-gradient(165deg, #ffffff 0%, #eef7ff 100%)"
                  : "linear-gradient(165deg, #ffffff 0%, #f4f9ff 100%)",
                boxShadow: rolesOpen
                  ? "0 16px 30px rgba(27,131,204,0.16)"
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
                  background: rolesOpen ? "rgba(27,131,204,0.12)" : "rgba(11,143,99,0.08)",
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  sx={{
                    color: "#0c2a44",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "1.22rem", sm: "1.5rem" },
                    fontWeight: 900,
                    letterSpacing: "0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  Roles
                </Typography>
                <Typography
                  sx={{
                    mt: 0.35,
                    color: "#4a6478",
                    fontSize: { xs: "0.82rem", sm: "0.9rem" },
                    fontWeight: 600,
                  }}
                >
                  How parents guide every step
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", color: "#0f6fb8", position: "relative", zIndex: 1 }}>
                {rolesOpen ? <CloseIcon sx={{ fontSize: 20 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />}
              </Box>
            </Box>

            <Collapse in={rolesOpen} timeout={700}>
              <Grid container spacing={isMobile ? 1.6 : 2.2} sx={{ mt: 0.1 }}>
                {roles.map((role) => (
                  <Grid item xs={12} md={6} key={role.step}>
                    <Box
                      sx={{
                        p: { xs: 2, sm: 2.3 },
                        borderRadius: 2.8,
                        border: "1px solid rgba(13,43,69,0.12)",
                        background: "linear-gradient(165deg, #ffffff 0%, #f7fbff 100%)",
                        boxShadow: "0 12px 24px rgba(13,43,69,0.1)",
                        color: "#0c2a44",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          background: "linear-gradient(180deg, rgba(27,131,204,0.04) 0%, rgba(255,255,255,0) 42%)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 0.8,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <Box
                          sx={{
                            minWidth: 34,
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "linear-gradient(135deg, #1B83CC 0%, #1169a8 100%)",
                            color: "#fff",
                            fontWeight: 900,
                            boxShadow: "0 6px 12px rgba(27,131,204,0.22)",
                          }}
                        >
                          {role.step}
                        </Box>
                        <Typography sx={{ fontWeight: 900, fontSize: { xs: "1.05rem", sm: "1.14rem" }, color: "#0c2a44", lineHeight: 1.15 }}>
                          {role.title}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 800, fontSize: { xs: "0.95rem", sm: "1rem" }, color: "#0b8f63", mb: 0.7, position: "relative", zIndex: 1 }}>
                        "{role.quote}"
                      </Typography>
                      <Typography sx={{ color: "#4a6478", fontSize: { xs: "0.92rem", sm: "0.98rem" }, lineHeight: 1.62, position: "relative", zIndex: 1 }}>
                        {role.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Collapse>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}













