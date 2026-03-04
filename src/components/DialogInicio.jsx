import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, Button, Box, useTheme, useMediaQuery, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ x: "100%", opacity: 0 }}   // empieza fuera a la derecha
      animate={{ x: 0, opacity: 1 }}       // se mueve a su posición normal
      exit={{ x: "100%", opacity: 0 }}     // sale hacia la derecha
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // movimiento natural tipo resorte
      {...props}
    />
  );
});

export default function DialogSelector({ open, onClose, onSelect }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selected, setSelected] = useState(null);
  const closeControls = useAnimation();

  useEffect(() => {
    if (open) setSelected(null);
  }, [open]);

  const options = [
    { label: "For Kids", value: "kids", color: "rgb(0,117,86)", icon: <SportsEsportsIcon sx={{ mr: 1 }} /> },
    { label: "Parents", value: "parents", color: "rgb(0,131,207)", icon: <FamilyRestroomIcon sx={{ mr: 1 }} /> },
    { label: "Coaches", value: "coaches", color: "rgb(255,106,0)", icon: <EmojiEventsIcon sx={{ mr: 1 }} /> },
  ];

  const handleSelect = (option) => {
    setSelected(option.value);
    if (onSelect) onSelect(option.value);
  };

  useEffect(() => {
    if (open) {
      // empieza la animación de la X cuando se abre el diálogo
      closeControls.start({
        rotate: 1080, // 3 giros
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    } else {
      // resetear la rotación cuando se cierra
      closeControls.set({ rotate: 0 });
    }
  }, [open, closeControls]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      BackdropProps={{
        sx: { backgroundColor: "rgba(0,0,0,0.83)" },
      }}
      sx={{
        "& .MuiDialog-container": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        },
      }}
      PaperProps={{
        component: motion.div,       // 👈 importante
        initial: { x: "100%", opacity: 0 }, // 👈 props de Framer Motion
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
        transition: { type: "spring", stiffness: 300, damping: 30 },
        sx: {
          width: { xs: "95%", sm: 700 },
          minHeight: { xs: "50%", sm: 500 },
          borderRadius: 3,
          p: { xs: 3, sm: 5 },
          background: "linear-gradient(135deg, #d8f8c8 0%, #a8e0a5 60%, #f0faff 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "1.1rem", sm: "1.5rem" },
          fontFamily: "'Poppins', sans-serif",
          mb: 1.5,
        }}
      >
        Select your Category ⛳
        <IconButton
          aria-label="Cerrar"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "black",
            zIndex: 3, // 👈 más arriba que ::before y ::after
            "&:hover": { backgroundColor: "rgba(255,255,255,.15)" },

            // animación al abrir
            animation: open ? "spinTwice 0.6s ease-in-out" : "none",
            animationFillMode: "forwards",
            "@keyframes spinTwice": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(720deg)" },
            },
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: 28 }} />
        </IconButton>

      </DialogTitle>

      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 1,
              }}
            >
              {options.map((option) => (
                <motion.div
                  key={option.value}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Button
                    fullWidth
                    onClick={() => handleSelect(option)}
                    sx={{
                      fontWeight: 700,
                      textTransform: "none",
                      py: isMobile ? 2 : 2.5,
                      borderRadius: 2,
                      fontSize: isMobile ? "1.2rem" : "1.4rem",
                      position: "relative",
                      overflow: "hidden",
                      color: "#fff",
                      border: "3px solid #FFD700", // borde dorado
                      background: `linear-gradient(145deg, ${option.color} 0%, ${option.color} 70%, #fff 100%)`,
                      boxShadow:
                        "0 6px 15px rgba(0,0,0,0.5), inset 0 -5px 8px rgba(255,255,255,0.15)",

                      transition: "all 0.3s ease",

                      // brillo realista en borde
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -5,
                        left: -5,
                        right: -5,
                        bottom: -5,
                        borderRadius: "inherit",
                        border: "2px solid rgba(255,255,255,0.15)", // borde brillante suave
                        pointerEvents: "none",
                        zIndex: 1,
                        boxShadow: "0 0 15px rgba(255,255,255,0.2)", // ligero resplandor
                        animation: "softShine 4s ease-in-out infinite alternate",
                      },

                      "&:hover": {
                        filter: "brightness(1.15)",
                        transform: "scale(1.03)",
                        boxShadow:
                          "0 8px 20px rgba(0,0,0,0.6), inset 0 -6px 10px rgba(255,255,255,0.2)",
                      },

                      "@keyframes softShine": {
                        "0%": { opacity: 0.15, transform: "rotate(0deg)" },
                        "50%": { opacity: 0.25, transform: "rotate(2deg)" },
                        "100%": { opacity: 0.15, transform: "rotate(0deg)" },
                      },
                    }}
                  >
                    {option.icon}{option.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog >
  );
}