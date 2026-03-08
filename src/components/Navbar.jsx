import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, Drawer, Typography, ListItem, ListItemButton, ListItemText, Container, Box, useTheme, useMediaQuery, Dialog, DialogTitle, DialogContent, SvgIcon } from "@mui/material";
import { WhatsApp as WhatsAppIcon, Menu as MenuIcon, Home, Mail, Close } from "@mui/icons-material"; // Agregamos Close para la "X"
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion, AnimatePresence } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { keyframes } from "@emotion/react";
import ViewListIcon from '@mui/icons-material/ViewList';
import GroupsIcon from '@mui/icons-material/Groups';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CloseIcon from "@mui/icons-material/Close";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import { useLocation } from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";

const TikTokIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24h-3.45v13.21a2.89 2.89 0 1 1-2.89-3 2.9 2.9 0 0 1 .72.09V9.23a6.34 6.34 0 0 0-.72-.04A6.34 6.34 0 1 0 15.82 15V8.36a8.2 8.2 0 0 0 4.77 1.53V6.69z" />
  </SvgIcon>
);


const socialData = {
  Instagram: { href: "https://www.instagram.com/golfincolors/", Icon: InstagramIcon, bgColor: "linear-gradient(45deg, #cf198c, #f41242)", hoverColor: "#cf198c" },
  TikTok: { href: "https://www.tiktok.com/@golfincolors", Icon: TikTokIcon, bgColor: "linear-gradient(45deg, #111111, #25F4EE)", hoverColor: "#25F4EE" }
};

const shrinkCircle = keyframes`0%{transform:scale(1);opacity:1;}100%{transform:scale(0);opacity:0;}`;
const expandIcon = keyframes`0%{transform:scale(1);opacity:1;}100%{transform:scale(1.5);opacity:1;}`;
const rotateTwice = keyframes`from{transform:rotate(0deg);}to{transform:rotate(720deg);}`;

const menuItemVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: (i) => ({ x: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } }),
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const bienvenidaVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: 40, transition: { duration: 0.3 } },
};



const SocialButton = ({ href, Icon, bgColor, hoverStyles }) => (
  <Box component="a" href={href} target="_blank" rel="noopener" sx={{
    width: 42, height: 42, borderRadius: "50%", position: "relative", display: "flex",
    alignItems: "center", justifyContent: "center", overflow: "hidden",
    "&:hover .circle": { animation: `${shrinkCircle} 300ms forwards` },
    "&:hover .icon": { animation: `${expandIcon} 300ms forwards`, ...hoverStyles },
  }}>
    <Box className="circle" sx={{
      position: "absolute", width: "100%", height: "100%", borderRadius: "50%",
      background: bgColor, transition: "transform 300ms ease-out",
    }} />
    <Icon className="icon" sx={{
      color: "white", fontSize: 26, position: "absolute",
      transition: "color 300ms ease-in, transform 300ms ease-in",
    }} />
  </Box>
);

const menuItems = [
  { name: "Home", icon: <Home /> }, //{ name: "Catalog", icon: <ViewCarouselIcon /> },
  { name: "About Us", icon: <GroupsIcon /> },
  { name: "Contact", icon: <Mail /> },
  { name: "Games", icon: <SchoolIcon />, disabled: true },
  { name: "Shop", icon: <StorefrontRoundedIcon />, highlight: true },
];

function Navbar({ contactoRef, informationsRef, videoReady }) {
  const [open, setOpen] = useState(false), [isScrolled, setIsScrolled] = useState(false), [openPDF, setOpenPDF] = useState(false);
  const theme = useTheme(), isMobile = useMediaQuery(theme.breakpoints.down('sm')), navigate = useNavigate();
  const pdfSrc = `/plataformasweb-pdf.pdf#zoom=${isMobile ? 100 : 60}`;
  const location = useLocation();
  const isCatalogoRoute = location.pathname === "/catalogo";
  const mostrarAnimacion = videoReady || (location.pathname !== '/' && location.pathname !== '');
  const [animacionMostrada, setAnimacionMostrada] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const maxScroll = 80; // hasta donde se desvanece
  const opacity = Math.max(0, 1 - scrollY / maxScroll);
  const translateY = Math.min(scrollY, maxScroll);
  const [mostrarAdmin, setMostrarAdmin] = useState(false);
  const [titulo, setTitulo] = useState("?? Envios a todo Venezuela");
  const [mostrarTexto, setMostrarTexto] = useState(true);

  useEffect(() => {
    // ? cada vez que cambia la ruta, forzamos a mostrar el banner y el logo
    setAnimacionMostrada(true);
    setTitulo("?? Envios a todo Ecuador");
  }, [location.pathname]);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleOpenPDF = () => isMobile ? window.open("/plataformasweb-pdf.pdf", "_blank") : setOpenPDF(true);
  const handleClosePDF = () => setOpenPDF(false);

  const goToCatalogo = () => {
    if (location.pathname === "/catalogo") {
      document.body.classList.remove("nav-white");
      scrollToTop();
      return;
    }

    // muestra blanco inmediato
    document.body.classList.add("nav-white");

    requestAnimationFrame(() => {
      navigate("/catalogo", { replace: true });
    });
  };

  const handleClick = (item) => {
    setOpen(false);

    const actions = {
      Contacto: () => {
        if (location.pathname === "/") {
          contactoRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/", { state: { scrollTo: "contacto" } });
        }
      },
      Contact: () => {
        if (location.pathname === "/") {
          contactoRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/", { state: { scrollTo: "contacto" } });
        }
      },

      Inicio: () =>
        location.pathname !== "/" ? navigate("/") : scrollToTop(),
      Home: () =>
        location.pathname !== "/" ? navigate("/") : scrollToTop(),
      Shop: goToCatalogo,

      Servicios: () => navigate("/servicios"),
      Catalogo: goToCatalogo,
      Nosotros: () => navigate("/nosotros"),
      "About Us": () => navigate("/nosotros"),
      Presentacion: handleOpenPDF,
    };

    actions[item.name]?.();
  };


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LogoInicio = () => (navigate("/"), scrollToTop());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const flag = sessionStorage.getItem("mostrarAdmin");
    if (flag === "1") {
      setMostrarAdmin(true);
    }
  }, []);

  // ?? Alternar cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarTexto((prev) => !prev);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  const drawerMenuItems = [
    ...menuItems.filter((item) => item.name !== "Shop"),
    ...menuItems.filter((item) => item.name === "Shop"),
  ];

  return (
    <>

      <Box
        sx={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          width: "96%",
          zIndex: 1100,
          borderRadius: "50px",
          overflow: "hidden",
          transition: 'margin-top 0.2s ease',
          marginTop: 1,

        }}
      >
        <AppBar
          position="relative"
          sx={{
            backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "transparent",
            backdropFilter: isScrolled ? "blur(10px)" : "none",
            boxShadow: "none",
            transition: "all 0.3s ease",
            borderRadius: "50px",
            overflow: "hidden",
          }}
        >
          <Container>
            <Toolbar>
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: "50%", md: "calc(15% + 0%)" },
                  transform: "translateX(-50%)",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <AnimatePresence mode="wait">
                  {(mostrarAnimacion || animacionMostrada) && (
                    <motion.div
                      key={(mostrarAnimacion ? "mostrar" : "forzado")}
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1,
                        delay: mostrarAnimacion ? 1 : 0, // delay segun si fue forzado o no
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <motion.img
                        src="/logo.png"
                        alt="Logo"
                        onClick={LogoInicio}
                        initial={{ opacity: 0, x: -200 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: scrollY > 50 ? 0.7 : 1,
                          y: scrollY > 50 ? -4 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                          height: "55px",
                          marginTop: "10px",
                          cursor: "pointer",

                        }}
                      />

                    </motion.div>
                  )}
                </AnimatePresence>



              </Box>

              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                {menuItems.map((item, index) => {
                  const isShop = item.name === "Shop";
                  const button = (
                    <Button
                      key={item.name}
                      component={motion.button}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={menuItemVariants}
                      disabled={item.disabled}
                      onClick={() => !item.disabled && handleClick(item)}
                      sx={{
                        color: item.disabled ? "rgba(255,255,255,0.4)" : "white",
                        fontFamily: "Poppins, sans-serif",
                        padding: isShop ? "10px 18px" : "10px 14px",
                        background: isShop
                          ? "linear-gradient(160deg, #FFE082 0%, #FFC43D 38%, #FFB300 62%, #E68A00 100%)"
                          : "transparent",
                        border: isShop ? "2px solid rgba(255, 230, 120, 0.95)" : "none",
                        borderRadius: isShop ? "999px" : "8px",
                        boxShadow: isShop
                          ? "0 0 18px rgba(255, 195, 45, 0.72), 0 8px 20px rgba(120, 72, 0, 0.42), inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -7px 12px rgba(130,80,0,0.28)"
                          : "none",
                        textShadow: isShop ? "0 1px 2px rgba(0,0,0,0.45)" : "none",
                        cursor: item.disabled ? "not-allowed" : "pointer",
                        "&:hover": {
                          background: item.disabled
                            ? "transparent"
                            : isShop
                              ? "linear-gradient(160deg, #FFE79A 0%, #FFC94F 35%, #FFB623 62%, #F58B00 100%)"
                              : "rgba(255, 255, 255, 0.1)",
                          transform: isShop ? "scale(1.03)" : "none",
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  );

                  return item.disabled ? (
                    <Tooltip key={item.name} title="Coming soon">
                      <span>{button}</span>
                    </Tooltip>
                  ) : (
                    button
                  );
                })}
              </Box>

              <IconButton color="inherit" edge="end" onClick={() => setOpen(!open)} sx={{ display: { xs: "block", md: "none" } }}>
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <MenuIcon sx={{ color: isCatalogoRoute ? "#111" : "#fff" }} />
                </motion.div>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      {/* Menu movil */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            display: "flex",
            flexDirection: "column",
            height: "100dvh",
            width: { xs: "80vw", sm: "60vw", md: "50vw" },
            maxWidth: "700px",
            minWidth: "300px",

            // ?? Fondo pasto golf
            backgroundColor: "rgba(255,255,255,0.22)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            color: "white",

            // ? Profundidad
            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.28)",

            // ?? Borde sutil verde
            borderLeft: "1px solid rgba(255,255,255,0.38)",

            p: 0,
          },
        }}
      >


        <Box sx={{ overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 0.5 }}>
            <IconButton
              aria-label="Abrir menu"
              onClick={() => setOpen(false)}
              sx={{
                animation: open ? `${rotateTwice} 1s ease-in-out` : "none",
              }}
            >
              <Close sx={{ fontSize: 32, color: "#163024" }} />
            </IconButton>
          </Box>


          {/* ?? Menu navegacion */}
          <AnimatePresence mode="wait">
            {open && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
                style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}
              >
                {drawerMenuItems.map((item, index) => {
                  const content = (
                    <ListItem
                      key={item.name}
                      component={motion.li}
                      variants={itemVariants}
                      disablePadding
                      sx={{
                        opacity: item.disabled ? 0.45 : 1,
                        cursor: item.disabled ? "not-allowed" : "pointer",
                      }}
                    >
                      <ListItemButton
                        disabled={item.disabled}
                        onClick={() => !item.disabled && handleClick(item)}
                        sx={{
                          px: 2,
                          py: 0.7,
                          borderBottom: "1px solid rgba(22,48,36,0.16)",
                          borderTop: index === 0 ? "1px solid rgba(22,48,36,0.2)" : "none",

                          ...(item.name === "Shop" && {
                            fontWeight: 800,
                            borderRadius: 2,
                            mx: 1,
                            my: 0.5,
                            position: "relative",
                            overflow: "hidden",
                            color: "#fff",
                            textShadow: "0 1px 2px rgba(0,0,0,0.45)",
                            border: "2px solid rgba(255, 230, 120, 0.95)",

                            background:
                              "linear-gradient(160deg, #FFE082 0%, #FFC43D 38%, #FFB300 62%, #E68A00 100%)",

                            boxShadow:
                              "0 0 18px rgba(255, 195, 45, 0.72), 0 8px 20px rgba(120, 72, 0, 0.42), inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -7px 12px rgba(130,80,0,0.28)",

                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: -28,
                              left: -60,
                              width: 64,
                              height: "165%",
                              background:
                                "linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,247,210,0.75) 52%, rgba(255,255,255,0) 100%)",
                              transform: "skewX(-12deg)",
                              animation: "goldSweep 3.1s cubic-bezier(.4,0,.2,1) infinite",
                            },

                            "&::after": {
                              content: '""',
                              position: "absolute",
                              inset: 0,
                              borderRadius: "inherit",
                              background:
                                "radial-gradient(circle at 22% 25%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 44%)",
                              animation: "goldPulse 2.4s ease-in-out infinite",
                              pointerEvents: "none",
                            },

                            "&:hover": {
                              transform: "scale(1.04)",
                              filter: "brightness(1.1)",
                              background:
                                "linear-gradient(160deg, #FFE79A 0%, #FFC94F 35%, #FFB623 62%, #F58B00 100%)",
                              boxShadow:
                                "0 0 26px rgba(255, 210, 85, 0.92), 0 10px 24px rgba(120,72,0,0.54)",
                            },
                          }),

                          "&:hover": {
                            backgroundColor:
                              item.name === "Shop"
                                ? undefined
                                : item.disabled
                                  ? "transparent"
                                  : "rgba(22,48,36,0.06)",
                          },

                          "@keyframes goldSweep": {
                            "0%": { left: "-70%", opacity: 0 },
                            "28%": { opacity: 0.85 },
                            "55%": { opacity: 0.55 },
                            "100%": { left: "135%", opacity: 0 },
                          },

                          "@keyframes goldPulse": {
                            "0%": { opacity: 0.3 },
                            "50%": { opacity: 0.58 },
                            "100%": { opacity: 0.3 },
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <Box
                                sx={{
                                  color: item.disabled
                                    ? "rgba(255,255,255,0.45)"
                                    : item.name === "Shop"
                                      ? "white"
                                      : "white",
                                  fontSize: "1.7rem",
                                  marginBottom: "-5px",
                                }}
                              >
                                {item.icon}
                              </Box>

                              <Box sx={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                                <span
                                  style={{
                                    color: item.disabled
                                      ? "rgba(255,255,255,0.55)"
                                      : item.name === "Shop"
                                        ? "white"
                                        : "white",

                                    fontWeight: item.name === "Shop" ? "700" : "700",
                                    fontSize: "1.07rem",
                                  }}
                                >
                                  {item.name}
                                </span>

                                {item.disabled && (
                                  <span
                                    style={{
                                      color: "rgba(22,48,36,0.5)",
                                      fontSize: "0.8rem",
                                      fontWeight: "400",
                                    }}
                                  >
                                    (Coming soon)
                                  </span>
                                )}
                              </Box>
                            </Box>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  );

                  return item.disabled ? (
                    <Tooltip key={item.name} title="Coming soon">
                      <span>{content}</span>
                    </Tooltip>
                  ) : (
                    content
                  );
                })}


              </motion.ul>
            )}
          </AnimatePresence>

          {/* ?? Espacio flexible para empujar bienvenida y redes al fondo */}
          <Box sx={{ flexGrow: 1 }} />

          {/* ?? Tarjeta bienvenida */}
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                variants={bienvenidaVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    px: 2,
                    py: 1,
                    mx: 2,
                    mb: 0,
                    pt: 0,
                    color: "white",
                    backdropFilter: "blur(8px)",

                    // ?? Glass turquesa suave
                    background: `
      radial-gradient(
        circle at top left,
        rgba(255, 255, 255, 0.08),
        transparent 70%
      ),
      linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.62),
        rgba(0, 0, 0, 0.48)
      )
    `,

                    // ?? Borde sutil
                    border: "1px solid rgba(255,255,255,0.24)",

                    // ? Profundidad leve
                    boxShadow: "0 8px 18px rgba(0,0,0,0.28)",
                  }}
                >

                  <Box sx={{ display: "flex", alignItems: "center", mb: 0 }}>
                    <Box
                      component="img"
                      src="/logo.png"
                      alt="Bienvenidos"
                      sx={{
                        width: 44,
                        height: 44,
                        objectFit: "contain",
                        borderRadius: 2,
                        mr: 1,
                      }}
                    />
                    <Typography
                      fontSize="0.8rem"
                      fontWeight={600}
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        letterSpacing: 0.3,
                      }}
                    >
                      Welcome to GolfInColors
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.85,
                      fontSize: "0.85rem",
                      mb: 1.1,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    Connect and work with us.
                  </Typography>


                  <Button
                    variant="text"
                    size="small"
                    endIcon={
                      <ArrowForwardIosRoundedIcon
                        sx={{
                          fontSize: 16,
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    }
                    onClick={() => {
                      if (informationsRef?.current) {
                        const offset = -80;
                        const y = informationsRef.current.getBoundingClientRect().top + window.scrollY + offset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        setOpen(false);
                      }
                    }}
                    sx={{
                      mt: 1,
                      minHeight: 'unset',
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      textTransform: "none",
                      fontFamily: 'Poppins, sans-serif',
                      pl: 0,
                      py: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "white",
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                        "& .MuiSvgIcon-root": {
                          transform: "translateX(3px)",
                        },
                      },
                    }}
                  >
                    Start now
                  </Button>

                </Box>
              </motion.div>

            )}
          </AnimatePresence>
          {/* Administration */}
          {open && (
            <motion.div
              variants={bienvenidaVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Box
                onClick={() => navigate("/administracion")}
                sx={{
                  background: `
          radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 70%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.48))
        `,
                  borderRadius: 3,
                  px: 2,
                  py: 2,
                  mx: 2,
                  mt: 1,
                  color: "white",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.28)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxHeight: 45,
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.32)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: "1rem",
                    letterSpacing: 0.5,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.6,
                  }}
                >
                  <>
                    <SettingsSuggestRoundedIcon sx={{ fontSize: 18 }} />
                    Administration
                  </>
                </Typography>
              </Box>
            </motion.div>
          )}

          {/* Redes sociales al final del menu movil */}
          <AnimatePresence mode="wait">
            {open && (
              <>
                {/* Redes sociales animadas */}

                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                    marginBottom: isMobile ? 0 : 90,
                    padding: "20px 0",
                  }}
                >
                  {["Instagram", "TikTok"].map((social) => {
                    const info = socialData[social];

                    return (
                      <motion.div
                        key={social}
                        variants={{
                          hidden: { opacity: 0, x: 40 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.5, ease: "easeOut" },
                          },
                          exit: { opacity: 0, x: 30, transition: { duration: 0.3 } },
                        }}
                      >
                        <SocialButton
                          href={info.href}
                          Icon={info.Icon}
                          bgColor={info.bgColor}
                          hoverStyles={{
                            color: info.hoverColor,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Box>
      </Drawer >
      {/* PDF */}
      <Dialog
        open={openPDF}
        onClose={handleClosePDF}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: {
            backgroundColor: "#f5f7fa",
            color: "#1a1a1a",
            borderRadius: 3,
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.7)"
          }
        }}
        disableScrollLock
      >

        <DialogTitle
          sx={{
            fontWeight: 600,
            fontSize: "1.25rem",
            px: 3,
            py: 2.5,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            position: "relative",
            background: `linear-gradient(135deg, #e0f2ff 0%, #ffffff 100%)`,
            color: "#1a237e",
          }}
        >
          Presentacion rosmiya - PDF
          <IconButton aria-label="close" onClick={handleClosePDF} sx={{ position: "absolute", right: 12, top: 12, color: "#1a237e" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ height: { xs: "75vh", sm: "80vh", md: "85vh" }, width: "100%", backgroundColor: "#000", }}>

            <iframe src={pdfSrc} title="Presentacion Plataformas web" width="100%" height="100%" style={{ border: 'none' }} />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Navbar;









































