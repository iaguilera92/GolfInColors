import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

const coachActivities = [
  {
    title: "Formacion para coaches",
    description:
      "Capacitamos a coaches para ensenar golf a ninos de 2 a 8 anos con clases dinamicas, seguras y adaptadas a cada etapa.",
  },
  {
    title: "Metodologia divertida",
    description:
      "Aplicamos una metodologia con juegos, retos y materiales visuales para que el aprendizaje sea activo, creativo y motivador.",
  },
  {
    title: "Planificacion de clases",
    description:
      "Estructuramos sesiones con objetivos claros para desarrollar coordinacion, tecnica basica y confianza desde las primeras lecciones.",
  },
  {
    title: "Acompanamiento a familias",
    description:
      "Guiamos a padres y apoderados para reforzar en casa el proceso de aprendizaje y mantener una experiencia positiva para cada nino.",
  },
];

export default function Coaches() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 13.5, sm: 15 },
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
              fontWeight: 900,
              fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.2rem" },
              letterSpacing: "0.02em",
              textShadow: "0 4px 14px rgba(0,0,0,0.4)",
              mb: 1.2,
            }}
          >
            Coaches
          </Typography>

          <Typography
            sx={{
              maxWidth: 820,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.12rem" },
              color: "rgba(255,255,255,0.95)",
              lineHeight: 1.6,
              textShadow: "0 2px 10px rgba(0,0,0,0.35)",
            }}
          >
            En Golf In Colors formamos coaches para crear experiencias de aprendizaje memorables,
            donde cada nino aprende golf con alegria, estructura y acompanamiento.
          </Typography>
        </Box>

        <Grid container spacing={2.2}>
          {coachActivities.map((activity) => (
            <Grid item xs={12} md={6} key={activity.title}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 2.2, sm: 2.8 },
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.38)",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.12) 100%)",
                  backdropFilter: "blur(2px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFE8A3",
                    fontWeight: 900,
                    fontSize: { xs: "1.2rem", sm: "1.35rem" },
                    mb: 1,
                  }}
                >
                  {activity.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.96)",
                    fontSize: { xs: "0.96rem", sm: "1rem" },
                    lineHeight: 1.65,
                  }}
                >
                  {activity.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
