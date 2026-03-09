import { Box, Button, Container, Typography } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { useEffect } from "react";

export default function Coaches() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 8, sm: 15 },
        pb: 8,
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/fondo-5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            color: "#fff",
            mb: { xs: 3.5, sm: 5 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              pt: { xs: 6, sm: 8 },
              mb: { xs: 2.5, sm: 4 },
              lineHeight: 1.1
            }}
          >
            <Box
              component="span"
              sx={{
                display: "block",
                color: "#ffffff",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              CREATING
            </Box>

            <Box
              component="span"
              sx={{
                display: "block",
                color: "#ffffff",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              A COLORFUL
            </Box>

            <Box
              component="span"
              sx={{
                display: "block",
                color: "#ffffff",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              PATH FOR FUTURE
            </Box>

            <Box
              component="span"
              sx={{
                display: "block",
                color: "#FFE8A3",
                fontSize: { xs: "1.3rem", sm: "2rem", md: "2.2rem" },
                fontWeight: 900,
                lineHeight: 1,
                textShadow: "0 6px 16px rgba(0,0,0,0.3)",
              }}
            >
              GOLFERS
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              color: "rgba(255,255,255,0.96)",
              textShadow: "0 2px 10px rgba(0,0,0,0.35)",
            }}
          >
            "Let's Make the First Swing a Fun One!"
          </Typography>
        </Box>

        <Box
          sx={{
            p: { xs: 2.2, sm: 3 },
            borderRadius: 3.2,
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            border: "1.5px solid rgba(255,255,255,0.5)",
            background: "linear-gradient(150deg, rgba(19,108,172,0.9) 0%, rgba(27,131,204,0.86) 100%)",
            boxShadow: "0 14px 26px rgba(0,0,0,0.24)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: -44,
              right: -44,
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.16)",
            },
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
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              mb: 1.4,
              mx: "auto",
            }}
          >
            <AutoAwesomeRoundedIcon sx={{ fontSize: 24 }} />
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              color: "#fff",
              fontSize: { xs: "1.35rem", sm: "1.7rem" },
              fontWeight: 900,
              letterSpacing: "0.03em",
              mb: 1.6,
            }}
          >
            OUR SYSTEM
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.96)", fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.6, mb: 1.25 }}>
            Golf In Colors is a creative, family-centered learning system designed to motivate kids to learn golf through play, movement, and connection.
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.96)", fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.6, mb: 1.25 }}>
            Our approach combines playful programs like Tee Box, where kids learn golf step by step through games and stories, and Star Path, which integrates physical activity and goal-based challenges to keep children active and motivated.
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.96)", fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.6, mb: 1.25 }}>
            Learning is reinforced with our Kids Kits, including coloring books, puzzles, stories, and interactive activities that extend the experience beyond the course and into the home.
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.96)", fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.6, mb: 1.25 }}>
            At the heart of our system are clear roles for parents, kids, and coaches, working together as a team to create a fun, supportive, and effective learning environment.
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.96)", fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.6 }}>
            This is more than golf lessons-it's a system that helps families grow together through the game.
          </Typography>

          <Box sx={{ mt: 1.8, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 99,
                px: 2.2,
                py: 0.65,
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.46)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 2.2, sm: 2.8 },
            p: { xs: 2.2, sm: 3 },
            borderRadius: 3.2,
            color: "#fff",
            border: "1.5px solid rgba(255,255,255,0.42)",
            background: "linear-gradient(150deg, rgba(24,117,90,0.9) 0%, rgba(12,89,70,0.9) 100%)",
            boxShadow: "0 14px 26px rgba(0,0,0,0.22)",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#fff",
              fontSize: { xs: "1.3rem", sm: "1.6rem" },
              fontWeight: 900,
              letterSpacing: "0.03em",
              mb: 1.6,
            }}
          >
            ROLES
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 1.4,
            }}
          >
            <Box
              sx={{
                p: { xs: 1.4, sm: 1.6 },
                borderRadius: 2.4,
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.34)",
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: { xs: "1rem", sm: "1.1rem" }, mb: 0.6 }}>
                Role for Kids
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: { xs: "0.92rem", sm: "0.98rem" }, lineHeight: 1.55 }}>
                Kids explore golf through stories, movement, and playful challenges that build confidence and make every lesson exciting.
              </Typography>
            </Box>

            <Box
              sx={{
                p: { xs: 1.4, sm: 1.6 },
                borderRadius: 2.4,
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.34)",
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: { xs: "1rem", sm: "1.1rem" }, mb: 0.6 }}>
                Role for Adults
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: { xs: "0.92rem", sm: "0.98rem" }, lineHeight: 1.55 }}>
                Adults guide, motivate, and support each stage, helping children stay consistent while turning golf into a shared family journey.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

