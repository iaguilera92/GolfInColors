import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmojiFlagsRoundedIcon from "@mui/icons-material/EmojiFlagsRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import BackpackRoundedIcon from "@mui/icons-material/BackpackRounded";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Parents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    {
      title: "STAR PATH",
      description:
        "A fun golf and movement program where kids earn stars as they progress through physical and golf challenges",
      colors: ["#ff7b31", "#ff5a1f"],
      cta: "Start",
    },
    {
      title: "KIDS KIT",
      description:
        "Playful learning materials that motivate kids to learn golf and strengthen the parent-child connection.",
      colors: ["#2b9d57", "#1f7e43"],
      cta: "Learn at home",
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
          <Box sx={{ mt: { xs: 5, sm: 7 } }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#fff",
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "1.6rem", sm: "2rem" },
                fontWeight: 900,
                letterSpacing: "0.03em",
                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                mb: 2.2,
              }}
            >
              Our Programs
            </Typography>

            <Grid container spacing={isMobile ? 1.6 : 2.2}>
              {programs.map((program, index) => {
                const programIcon =
                  index === 0 ? <EmojiFlagsRoundedIcon sx={{ fontSize: 22 }} /> :
                    index === 1 ? <StarRoundedIcon sx={{ fontSize: 22 }} /> :
                      <BackpackRoundedIcon sx={{ fontSize: 22 }} />;
                return (
                  <Grid item xs={12} md={4} key={program.title}>
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
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: -40,
                          right: -40,
                          width: 120,
                          height: 120,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.16)",
                        },
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 18px 30px rgba(0,0,0,0.28)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          backgroundColor: "rgba(0,0,0,0.24)",
                          border: "1px solid rgba(255,255,255,0.34)",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                          animation: "iconPulse 1.8s ease-in-out infinite",
                          "@keyframes iconPulse": {
                            "0%": { transform: "scale(1)", opacity: 0.95 },
                            "50%": { transform: "scale(1.1)", opacity: 1 },
                            "100%": { transform: "scale(1)", opacity: 0.95 },
                          },
                          mb: 1.3,
                          mx: "auto",
                        }}
                      >
                        <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", "& svg": { display: "block" } }}>{programIcon}</Box>
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: { xs: "1.18rem", sm: "1.3rem" },
                          letterSpacing: "0.04em",
                          lineHeight: 1.1,
                          textAlign: "center",
                          mb: 1.3,
                        }}
                      >
                        {program.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "0.95rem", sm: "1rem" },
                          lineHeight: 1.55,
                          color: "rgba(255,255,255,0.96)",
                          maxWidth: 330,
                        }}
                      >
                        {program.description}
                      </Typography>

                      <Box sx={{ mt: 1.25, display: "flex", justifyContent: "flex-end" }}>
                        <Button
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            fontWeight: 700,
                            borderRadius: 99,
                            width: 150,
                            px: 2,
                            py: 0.55,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            border: "1px solid rgba(255,255,255,0.46)",
                            color: "#fff",
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,0.3)",
                            },
                          }}
                        >
                          {program.cta}
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}



