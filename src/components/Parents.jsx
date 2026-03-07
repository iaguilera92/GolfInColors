import { Box, Button, Collapse, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmojiFlagsRoundedIcon from "@mui/icons-material/EmojiFlagsRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Parents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [rolesOpen, setRolesOpen] = useState(false);

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 13.5, sm: 15 },
        pb: 8,
        backgroundImage: "linear-gradient(rgba(0,0,0,0.26), rgba(0,0,0,0.26)), url('/fondo-4.png')",
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
              color: "#fff",
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
                textShadow: "0 3px 14px rgba(0,0,0,0.45)",
              }}
            >
              <Box component="span" sx={{ display: "block", color: "#ffffff", fontSize: { xs: "1.6rem", sm: "2rem" }, fontWeight: 700 }}>
                SUPPORTING
              </Box>
              <Box component="span" sx={{ display: "block", color: "#FFE8A3", fontSize: { xs: "2rem", sm: "2.7rem", md: "3.1rem" }, fontWeight: 900 }}>
                YOUR CHILD'S
              </Box>
              <Box component="span" sx={{ display: "block", color: "#9BE7FF", fontSize: { xs: "2rem", sm: "2.8rem", md: "3.3rem" }, fontWeight: 900 }}>
                GOLF JOURNEY
              </Box>
              <Box component="span" sx={{ display: "block", color: "rgba(255,255,255,0.96)", fontSize: { xs: "1.5rem", sm: "1.9rem" }, fontWeight: 700 }}>
                STARTS
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#FFCF99",
                  fontSize: { xs: "2.2rem", sm: "3.1rem", md: "3.6rem" },
                  fontWeight: 900,
                  lineHeight: 0.95,
                  WebkitTextStroke: "1.5px #ffffff",
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
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 2px 8px rgba(0,0,0,0.35)",
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
                border: "2px solid rgba(255,255,255,0.7)",
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
              mt: { xs: 5, sm: 7 },
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.36)",
              background: "linear-gradient(145deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.22) 100%)",
              boxShadow: "0 14px 26px rgba(0,0,0,0.22)",
            }}
          >
            <Grid container spacing={2.2} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 900,
                    fontSize: { xs: "1.4rem", sm: "1.9rem" },
                    lineHeight: 1.15,
                    mb: 1.2,
                  }}
                >
                  A complete learning system for families
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.95)",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Golf In Colors offers a structured learning system made up of playful programs and tools designed to support both kids and parents throughout the learning journey. Each program has a clear purpose, helping children learn golf step by step while parents understand how to guide, motivate, and support their progress at every stage.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 1.6,
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 99,
                    px: 2.2,
                    py: 0.8,
                    backgroundColor: "#1B83CC",
                    "&:hover": { backgroundColor: "#156ba6" },
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
                    border: "2px solid rgba(255,255,255,0.72)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.24)",
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
          <Box sx={{ mt: { xs: 4.2, sm: 5.5 } }}>
            <Box
              sx={{
                p: { xs: 2, sm: 2.4 },
                borderRadius: 3,
                border: "2px dashed rgba(255,255,255,0.72)",
                background: "linear-gradient(135deg, #5f6670 0%, #434a54 100%)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 12px 22px rgba(0,0,0,0.2)",
                position: "relative",
                overflow: "hidden",
                "&::after": {
                  content: "\"\"",
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "linear-gradient(110deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 80%)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LockRoundedIcon sx={{ fontSize: 22 }} />
                <Typography sx={{ fontWeight: 900, fontSize: { xs: "1.08rem", sm: "1.2rem" } }}>
                  FAQ's
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.84rem", sm: "0.9rem" }, color: "rgba(255,255,255,0.92)" }}>
                (Coming soon)
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: { xs: 5, sm: 7 } }}>
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
                border: rolesOpen ? "2px solid rgba(255,255,255,0.9)" : "1.5px solid rgba(255,255,255,0.55)",
                background: rolesOpen
                  ? "linear-gradient(145deg, rgba(7,102,153,0.95) 0%, rgba(13,79,122,0.95) 100%)"
                  : "linear-gradient(145deg, rgba(7,102,153,0.9) 0%, rgba(13,79,122,0.9) 100%)",
                boxShadow: "0 12px 22px rgba(0,0,0,0.22)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "1.2rem", sm: "1.45rem" },
                  fontWeight: 900,
                  letterSpacing: "0.03em",
                }}
              >
                Roles
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.95)" }}>
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
                        border: "1.3px solid rgba(255,255,255,0.45)",
                        background: "linear-gradient(145deg, rgba(7,102,153,0.9) 0%, rgba(13,79,122,0.9) 100%)",
                        boxShadow: "0 12px 22px rgba(0,0,0,0.22)",
                        color: "#fff",
                        height: "100%",
                      }}
                    >
                      <Typography sx={{ fontWeight: 900, fontSize: { xs: "1.05rem", sm: "1.14rem" }, mb: 0.45 }}>
                        <Box component="span" sx={{ color: "#FFE8A3", mr: 0.55 }}>
                          {role.step}.
                        </Box>
                        {role.title}
                      </Typography>
                      <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" }, color: "#9BE7FF", mb: 0.65 }}>
                        "{role.quote}"
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: { xs: "0.92rem", sm: "0.98rem" }, lineHeight: 1.55 }}>
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













