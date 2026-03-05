import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, Button, Box, useTheme, useMediaQuery, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

export default function DialogSelector({ open, onClose, onSelect }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

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
    if (option.value === "kids") {
      navigate("/kids");
    }
  };

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
        sx: {
          width: { xs: "95%", sm: 700 },
          minHeight: { xs: "50%", sm: 500 },
          borderRadius: 3,
          p: { xs: 3, sm: 5 },
          background: "linear-gradient(135deg, #d6f5d0 0%, #8fd39a 58%, #e9fff2 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: { xs: "1.15rem", sm: "1.6rem" },
          fontFamily: "'Poppins', sans-serif",
          mb: 2,
          color: "#0d2b45",
          letterSpacing: "0.03em",
          lineHeight: 1.2,
          px: 2.5,
          py: 1,
          borderRadius: 99,
          background: "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(232,247,255,0.74) 100%)",
          border: "1px solid rgba(13,43,69,0.12)",
          boxShadow: "0 8px 16px rgba(13,43,69,0.12)",
        }}
      >
        {"Select your Category \u26F3"}
        <IconButton
          aria-label="Cerrar"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "black",
            zIndex: 3,
            width: 40,
            height: 40,
            "&:hover": { backgroundColor: "rgba(255,255,255,.15)" },
            transition: "background-color 0.2s ease",
            "@keyframes spinTwiceIcon": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(720deg)" },
            },
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: 28, animation: open ? "spinTwiceIcon 0.6s ease-in-out" : "none", transformOrigin: "center" }} />
        </IconButton>
      </DialogTitle>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 1,
        }}
      >
        {options.map((option) => (
          <Box key={option.value}>
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
                border: "3px solid #FFD700",
                background: `linear-gradient(145deg, ${option.color} 0%, ${option.color} 70%, #fff 100%)`,
                boxShadow: "0 6px 15px rgba(0,0,0,0.5), inset 0 -5px 8px rgba(255,255,255,0.15)",
                transition: "all 0.2s ease",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -5,
                  left: -5,
                  right: -5,
                  bottom: -5,
                  borderRadius: "inherit",
                  border: "2px solid rgba(255,255,255,0.15)",
                  pointerEvents: "none",
                  zIndex: 1,
                  boxShadow: "0 0 15px rgba(255,255,255,0.2)",
                },
                "&:hover": {
                  filter: "brightness(1.12)",
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.6), inset 0 -6px 10px rgba(255,255,255,0.2)",
                },
              }}
            >
              {option.icon}
              {option.label}
            </Button>
          </Box>
        ))}
      </Box>
    </Dialog>
  );
}







