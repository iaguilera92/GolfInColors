import { Box, Container, Typography, Link, keyframes, useMediaQuery, useTheme, SvgIcon } from "@mui/material";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const growElement = keyframes`0% { transform: scale(0.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; }`;
const shrinkCircle = keyframes`0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0); opacity: 0; }`;
const expandIcon = keyframes`0% { transform: scale(1); } 100% { transform: scale(1.5); }`;

const TikTokIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24h-3.45v13.21a2.89 2.89 0 1 1-2.89-3 2.9 2.9 0 0 1 .72.09V9.23a6.34 6.34 0 0 0-.72-.04A6.34 6.34 0 1 0 15.82 15V8.36a8.2 8.2 0 0 0 4.77 1.53V6.69z" />
  </SvgIcon>
);

const SocialButton = ({ href, Icon, bgColor, hoverStyles, isMobile }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener"
    sx={{
      width: isMobile ? 50 : 34,
      height: isMobile ? 50 : 34,
      borderRadius: "50%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      "&:hover .circle": { animation: `${shrinkCircle} 900ms forwards` },
      "&:hover .icon": { animation: `${expandIcon} 150ms 150ms ease-in forwards`, ...hoverStyles },
    }}
  >
    <Box
      className="circle"
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: bgColor,
        transition: "transform 300ms ease-out",
      }}
    />
    <Icon
      className="icon"
      sx={{
        color: "white",
        fontSize: isMobile ? 29 : 20,
        position: "absolute",
        transition: "color 300ms ease-in, transform 300ms ease-in",
      }}
    />
  </Box>
);

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { ref: logoRef, inView: logoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: socialRef, inView: socialInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [version, setVersion] = useState("");

  const handleAreaClick = () => navigate("/administracion");

  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => setVersion(data.version))
      .catch(() => { });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        padding: "20px 0",
        color: "#1f2a37",
        backgroundColor: "#f7f4ee",
        overflow: "hidden",
        borderTop: "1px solid rgba(31,42,55,0.18)",
      }}
    >
      <Container maxWidth="lg">
        {!isMobile && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 4,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" sx={{ color: "inherit" }}>
                Contact
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src="telefono-icon.png" alt="Telefono" width={14} style={{ filter: "brightness(0)" }} />
                <Link href="tel:+15617975986" color="inherit">+1 (561) 7975986</Link>
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src="mail-icon.png" alt="Correo" width={14} style={{ filter: "brightness(0)" }} />
                <Link href="mailto:anikaveintemilla@gmail.com" color="inherit">anikaveintemilla@gmail.com</Link>
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }} color="inherit">
                <img src="location-icon.png" alt="Ubicacion" width={14} style={{ filter: "brightness(0)" }} />
                Crandon Golf Academy. Miami. Key Biscayne
              </Typography>
            </Box>

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
              <img src="/logo.png" alt="Logo" style={{ height: "74px", marginBottom: "8px" }} />
            </Box>

            <Box
              ref={socialRef}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2.5,
                mt: 0.5,
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
              /></Box>
          </Box>
        )}

        {isMobile && (
          <Box display="flex" flexDirection="column" alignItems="center" mb={7}>
            <Box ref={logoRef} sx={{ pt: 1.5, animation: logoInView ? `${growElement} 1s forwards` : "none" }}>
              <img src="/logo-golfincolors.png" alt="Logo" style={{ height: "68px", marginBottom: "0" }} />
            </Box>

            <Box
              ref={socialRef}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2.25,
                mt: 1.25,
                mb: 2,
                animation: socialInView ? `${growElement} 1s forwards` : "none",
              }}
            >
              <SocialButton
                href="https://www.instagram.com/golfincolors/"
                Icon={InstagramIcon}
                bgColor="linear-gradient(45deg, #cf198c, #f41242)"
                isMobile={isMobile}
              />
              <SocialButton
                href="https://www.tiktok.com/@golfincolors"
                Icon={TikTokIcon}
                bgColor="linear-gradient(45deg, #111111, #25F4EE)"
                isMobile={isMobile}
              /></Box>
          </Box>
        )}

        <Typography variant="body2" align="center" mt={2} sx={{ marginTop: "4.2vh", color: "#213547", fontFamily: "'Poppins', sans-serif", fontWeight: 700, letterSpacing: "0.03em", fontSize: { xs: "0.88rem", md: "0.94rem" }, textShadow: "0 1px 0 rgba(255,255,255,0.65)" }}>
          @golfincolors 2026 {version && `- v${version}`}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          mt={2}
          sx={{ marginTop: "0.8vh", cursor: "pointer", color: "#2f4f4f", fontFamily: "'Poppins', sans-serif", fontWeight: 600, letterSpacing: "0.02em", fontSize: { xs: "0.74rem", md: "0.8rem" }, textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px", opacity: 0.9 }}
          onClick={() => window.open("http://plataformas-web.cl", "_blank")}
        >
          Disenado por www.plataformas-web.cl
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;




