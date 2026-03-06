import { Container, Grid, Alert, CardActionArea, Snackbar, Typography, Box, Button, useTheme, useMediaQuery, } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "./css/Features.css"; // Importamos el CSS
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import DialogTrabajos from "./DialogTrabajos";
import { cargarTrabajos } from "../helpers/HelperTrabajos";
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';

dayjs.extend(duration);

// DATA
const features = [
  {
    label: "Classes for Kids",
    imageSrc: "/golf-1.jpg",
  },
  {
    label: "Classes for Adults",
    imageSrc: "/golf-2.jpg",
  },
  {
    label: "Personalized Training",
    imageSrc: "/golf-3.jpg",
  },
  {
    label: "High Performance",
    imageSrc: "/golf-4.jpg",
  },
  {
    label: "Clinics & Workshops",
    imageSrc: "/golf-5.jpg",
  },
];
const disabledLabels = ["ClÃ­nicas y Talleres"]; // ejemplo



// EFECTOS
function Features({ videoReady, informationsRef }) {

  const theme = useTheme();
  const timestamp = Date.now();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState("");
  const deadline = dayjs("2025-09-20T15:00:00").toDate();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [trabajos, setTrabajos] = useState([]);
  const [openTrabajos, setOpenTrabajos] = useState(false);
  const scrollToRef = (ref, offset = -80) => ref?.current && window.scrollTo({ top: ref.current.getBoundingClientRect().top + window.scrollY + offset, behavior: 'smooth' });

  // handlers
  const handleTrabajosClick = () => setOpenTrabajos(true);
  const handleCloseTrabajos = () => setOpenTrabajos(false);

  //TRABAJOS S3
  useEffect(() => {
    cargarTrabajos(`https://rosmiyasc.s3.us-east-2.amazonaws.com/Trabajos.xlsx?t=${timestamp}`)
      .then(setTrabajos);
  }, []);


  //EVITAR ANIMACIÃ“N DUPLICADA
  useEffect(() => {
    let timer;
    if (inView && !hasAnimated) {
      if (videoReady) {
        timer = setTimeout(() => {
          setHasAnimated(true);
        }, 0);
      }
    }
    return () => clearTimeout(timer);
  }, [videoReady, inView, hasAnimated]);

  //APARICIÃ“N
  const cardAnimation = {
    hidden: { opacity: 0, x: 150 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 1 + index * 0.3, ease: "easeOut" },
    }),
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeLeft("Finalizado");
        clearInterval(timer);
      } else {
        const d = dayjs.duration(diff);
        const days = Math.floor(d.asDays());
        const hours = d.hours();
        const minutes = d.minutes();

        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // TRABAJOS ACTIVOS
  const trabajosActivos = trabajos.filter(t => Number(t.Estado) === 1);

  // Ahora cuentas sobre los activos
  const mayoristas = trabajosActivos.filter(t => Number(t.TipoTrabajo) === 2).length;
  const confeccionesrosmiya = trabajosActivos.filter(t => Number(t.TipoTrabajo) === 1).length;

  return (
    <Box
      sx={{
        background: `
      linear-gradient(
        180deg,
        #ffffff 0%,
        #f5fcfb 40%,
        #eaf7f5 70%,
        #d5ede9 100%
      )
    `,
        py: 1,
        paddingBottom: "15px",
        color: "#ffffff",
        overflowY: "visible",
      }}
    >

      <Container sx={{ py: 0, maxWidth: "1500px !important", overflow: 'hidden' }}>
        <Box ref={ref} sx={{ mt: 0 }}>
          <Grid container spacing={2} justifyContent="center" mt={0.8}>
            {features.map((feature, index) => {
              const isDisabled = disabledLabels.includes(feature.label);
              if (isMobile && index >= 4) return null;

              return (
                <Grid item xs={6} sm={4} md={2.2} key={index}>
                  <motion.div
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                    variants={cardAnimation}
                    custom={index}
                  >
                    <Box
                      onClick={() => {
                        if (!isDisabled) navigate("/catalogo");
                      }}
                      sx={{
                        cursor: isDisabled ? "not-allowed" : "pointer",
                        opacity: isDisabled ? 0.45 : 1,
                        pointerEvents: isDisabled ? "none" : "auto",
                        transition: "transform .3s ease",
                        "&:hover": {
                          transform: isDisabled ? "none" : "translateY(-4px)",
                        },
                      }}
                    >
                      {/* Imagen */}
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: 132, sm: 160 },
                          borderRadius: 3,
                          overflow: "hidden",
                          position: "relative",
                          boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
                          filter: isDisabled ? "grayscale(100%) brightness(0.85)" : "none",
                        }}
                      >
                        <img
                          src={feature.imageSrc}
                          alt={feature.label}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition:
                              feature.label === "Adulto"
                                ? "center 30%"   // baja la imagen (muestra mÃ¡s arriba)
                                : "top",
                          }}
                        />

                        {/* Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.15))",
                          }}
                        />

                        {/* PrÃ³ximamente */}
                        {isDisabled && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 12,
                              right: 12,
                              px: 1.2,
                              py: 0.4,
                              borderRadius: "999px",
                              backgroundColor: "rgba(255,255,255,.85)",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              color: "#444",
                            }}
                          >
                            PrÃ³ximamente
                          </Box>
                        )}
                      </Box>

                      {/* Texto */}
                      <Box sx={{ mt: 1.2, textAlign: "center" }}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#0f172a",
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        >
                          {feature.label}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#475569",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>



        </Box>
      </Container >

      <DialogTrabajos
        open={openTrabajos}
        onClose={handleCloseTrabajos}
        trabajos={trabajosActivos}
        primaryLabel="Ver Servicios"
        onPrimaryClick={() => { handleCloseTrabajos(); scrollToRef(informationsRef); }}
      />
    </Box >
  );
}

export default Features;

