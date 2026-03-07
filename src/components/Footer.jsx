import { Box, Container, Typography, Link, keyframes, useMediaQuery, Snackbar, Alert, useTheme, SvgIcon } from "@mui/material";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useInView } from "react-intersection-observer";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // Ãcono de Administration
import { useNavigate } from "react-router-dom";

// Animaciones de apariciÃ³n y transformaciÃ³n
const growElement = keyframes`0% { transform: scale(0.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; }`;
const shrinkCircle = keyframes`0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0); opacity: 0; }`; // CÃ­rculo desapareciendo
const expandIcon = keyframes`0% { transform: scale(1); } 100% { transform: scale(1.5); }`; // Icono creciendo
const TikTokIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24h-3.45v13.21a2.89 2.89 0 1 1-2.89-3 2.9 2.9 0 0 1 .72.09V9.23a6.34 6.34 0 0 0-.72-.04A6.34 6.34 0 1 0 15.82 15V8.36a8.2 8.2 0 0 0 4.77 1.53V6.69z" />
  </SvgIcon>
);


// BotÃ³n social con animaciones
const SocialButton = ({ href, Icon, bgColor, hoverStyles, isMobile }) => (
  <Box component="a" href={href} target="_blank" rel="noopener" sx={{
    width: isMobile ? 60 : 40,
    height: isMobile ? 60 : 40,
    borderRadius: "50%", position: "relative", display: "flex",
    alignItems: "center", justifyContent: "center", overflow: "hidden",
    "&:hover .circle": { animation: `${shrinkCircle} 900ms forwards` },
    "&:hover .icon": { animation: `${expandIcon} 150ms 150ms ease-in forwards`, ...hoverStyles }
  }}>
    {/* CÃ­rculo de fondo */}
    <Box className="circle" sx={{
      position: "absolute", width: "100%", height: "100%", borderRadius: "50%",
      background: bgColor, transition: "transform 300ms ease-out"
    }} />
    {/* Icono con color inicial en blanco */}
    <Icon className="icon" sx={{
      color: "white", fontSize: isMobile ? 35 : 24, position: "absolute",
      transition: "color 300ms ease-in, transform 300ms ease-in"
    }} />
  </Box>
);


const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setOpenAlert(true);
    navigate("/administracion"); // Redirige a /administracion
  };
  // Animaciones al hacer scroll
  const { ref: logoRef, inView: logoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: socialRef, inView: socialInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => {
        setVersion(data.version);
      })
      .catch((err) => {
        console.error("No se pudo cargar la versiÃ³n:", err);
      });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        padding: "20px 0",
        color: "white",
        background: "linear-gradient(145deg, rgba(27,47,69,0.78) 0%, rgba(36,59,90,0.76) 52%, rgba(17,29,45,0.8) 100%)",
        overflow: "hidden",
        isolation: "isolate",
        borderTop: "1px solid rgba(255,255,255,0.18)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 42%), linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 48%, rgba(255,255,255,0.1) 100%)",
          opacity: 0.95,
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.24) 100%)",
          zIndex: 0,
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* ðŸ”¹ DiseÃ±o para Escritorio con 3 Columnas */}
        {!isMobile && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // ðŸ”¹ 3 columnas iguales
              gap: 4, // ðŸ”¹ Espacio entre columnas
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* ðŸ”¹ Columna 1: Contacto */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Contacto
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src="telefono-icon.png" alt="TelÃ©fono" width={16} style={{ filter: 'brightness(0)' }} />
                <Link href="tel:+15617975986" color="rgb(255 255 255)">+1 (561) 7975986</Link>
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src="mail-icon.png" alt="Correo" width={16} style={{ filter: 'brightness(0)' }} />
                <Link href="mailto:anikaveintemilla@gmail.com" color="rgb(255 255 255)">anikaveintemilla@gmail.com</Link>
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }} color="rgb(255 255 255)">
                <img src="location-icon.png" alt="UbicaciÃ³n" width={16} style={{ filter: 'brightness(0)' }} />
                Ecuador, calle 12 #11-117.
              </Typography>
            </Box>

            {/* ðŸ”¹ Columna 2: Logo + Redes Sociales */}
            <Box
              ref={logoRef}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 2,
                animation: logoInView ? `${growElement} 1s forwards` : "none",
              }}
            >
              <img src="/logo.png" alt="Logo" style={{ height: "95px", marginBottom: "10px" }} />
              <Box
                ref={socialRef}
                sx={{
                  display: "flex",
                  gap: 4,
                  mt: 1.25,
                  animation: socialInView ? `${growElement} 1s forwards` : "none",
                }}
              >
                <SocialButton
                  href="https://www.instagram.com/golfincolors/"
                  Icon={InstagramIcon}
                  bgColor="linear-gradient(45deg, #cf198c, #f41242)"
                  hoverStyles={{
                    color: "#cf198c",
                    background: "-webkit-linear-gradient(45deg, #cf198c, #f41242)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />

                <SocialButton
                  href="https://www.tiktok.com/@golfincolors"
                  Icon={TikTokIcon}
                  bgColor="linear-gradient(45deg, #111111, #25F4EE)"
                  hoverStyles={{
                    color: "#25F4EE",
                    background: "-webkit-linear-gradient(45deg, #25F4EE, #FE2C55)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              </Box>
            </Box>

            {/* ðŸ”¹ Columna 3: Proveedores */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5 }}>

              <img src="area-clientes.png" onClick={handleClick} width={120} alt="Ãrea Clientes" style={{ marginTop: -35, marginBottom: "10px" }} />

              <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }} color="rgb(255 255 255)">
                <AdminPanelSettingsIcon fontSize="small" />
                <Link href="administracion" color="inherit" onClick={handleClick}>
                  Administration
                </Link>
              </Typography>
            </Box>

          </Box>
        )}

        {/* ðŸ”¹ DiseÃ±o para MÃ³viles */}
        {isMobile && (
          <Box display="flex" flexDirection="column" alignItems="center" mb={7}>
            <Box ref={logoRef} sx={{ pt: 1.5, animation: logoInView ? `${growElement} 1s forwards` : "none" }}>
              <img src="/logo-golfincolors.png" alt="Logo" style={{ height: "85px", marginBottom: "0" }} />
            </Box>

            {/* Redes Sociales */}
            <Box ref={socialRef} sx={{ display: "flex", gap: 6, mt: 1.25, mb: 2, animation: socialInView ? `${growElement} 1s forwards` : "none", }}            >
              <SocialButton href="https://www.instagram.com/golfincolors/" Icon={InstagramIcon} bgColor="linear-gradient(45deg, #cf198c, #f41242)" isMobile={isMobile} />
              <SocialButton href="https://www.tiktok.com/@golfincolors" Icon={TikTokIcon} bgColor="linear-gradient(45deg, #111111, #25F4EE)" isMobile={isMobile} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", gap: 0.5 }}
            >
              <img src="area-clientes.png" onClick={handleClick} width={120} alt="Ãrea Clientes" style={{ marginTop: 10, marginRight: 30, marginBottom: "0px" }} />

              <Typography ml={"10px"} sx={{ display: "flex", alignItems: "center", gap: 0 }} color="rgb(255 255 255)">
                <AdminPanelSettingsIcon fontSize="small" />
                <Link href="administracion" color="inherit" onClick={handleClick}>
                  Administration
                </Link>
              </Typography>
            </Box>
          </Box>
        )}

        <Typography variant="body2" align="center" mt={2} sx={{ marginTop: "5vh", color: "white" }}>
          @golfincolors 2026 {version && `- v${version}`}
        </Typography>
        <Typography variant="body2" align="center" mt={2} sx={{ marginTop: "1vh", cursor: "pointer", color: "white" }} onClick={() => window.open("http://plataformas-web.cl", "_blank")}>
          DiseÃ±ado por www.plataformas-web.cl
        </Typography>
      </Container>
    </Box >
  );
};

export default Footer;
















