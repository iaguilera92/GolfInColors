import { Box, Container, Typography, SvgIcon } from "@mui/material";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";

const TikTokIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24h-3.45v13.21a2.89 2.89 0 1 1-2.89-3 2.9 2.9 0 0 1 .72.09V9.23a6.34 6.34 0 0 0-.72-.04A6.34 6.34 0 1 0 15.82 15V8.36a8.2 8.2 0 0 0 4.77 1.53V6.69z" />
  </SvgIcon>
);

const SocialButton = ({ href, Icon, label }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    sx={{
      width: 38,
      height: 38,
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      background: "rgba(15,27,40,0.06)",
      border: "1px solid rgba(15,27,40,0.10)",
      color: "#0f1b28",
      transition: "background 180ms ease, transform 180ms ease",
      "&:hover": {
        background: "rgba(27,131,204,0.14)",
        transform: "translateY(-2px)",
      },
    }}
  >
    <Icon sx={{ fontSize: 20 }} />
  </Box>
);

const FooterPill = ({ icon: Icon, title, text, href, color }) => (
  <Box
    component={href ? "a" : "div"}
    href={href}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.2,
      px: 1.4,
      py: 1.1,
      borderRadius: 2.5,
      background: "rgba(15,27,40,0.03)",
      border: "1px solid rgba(15,27,40,0.07)",
      textDecoration: "none",
      color: "inherit",
    }}
  >
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        background: color || "#1B83CC",
        flexShrink: 0,
      }}
    >
      <Icon sx={{ fontSize: 17, color: "#fff" }} />
    </Box>
    <Box>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "0.76rem",
          color: "#8a9aa8",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "0.91rem",
          color: "#0f1b28",
          lineHeight: 1.3,
          mt: 0.2,
        }}
      >
        {text}
      </Typography>
    </Box>
  </Box>
);

const Footer = () => {
  const navigate = useNavigate();
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => setVersion(data.version))
      .catch(() => {});
  }, []);

  const shortcuts = [
    { label: "Home", onClick: () => navigate("/") },
    { label: "Kids", onClick: () => navigate("/kids") },
    { label: "Parents", onClick: () => navigate("/parents") },
    { label: "Coaches", onClick: () => navigate("/coaches") },
    { label: "Administration", onClick: () => navigate("/administracion") },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "#0f1b28",
        background: "#f7f4ee",
        borderTop: "none",
      }}
    >

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 4.5, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* Brand */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: { xs: 2.2, md: 2.8 },
              minHeight: { md: 310 },
              borderRadius: 4,
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(15,27,40,0.08)",
              boxShadow: "0 18px 34px rgba(15,27,40,0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.4 }}>
              <img src="/logo-golfincolors.png" alt="Golf In Colors" style={{ height: 46 }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.18rem",
                    letterSpacing: "0.04em",
                    color: "#0f1b28",
                  }}
                >
                  Golf In Colors
                </Typography>
                <Typography sx={{ color: "#536472", fontSize: "0.9rem" }}>
                  Golf education for kids
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                color: "#4f6170",
                lineHeight: 1.75,
                maxWidth: "42ch",
                mb: 2,
                fontSize: "0.95rem",
              }}
            >
              Inspiring kids to discover golf through creativity, color, and play. A structured learning journey for young golfers and their families at Crandon Golf Academy, Miami.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, flexWrap: "wrap", mt: "auto" }}>
              <SocialButton href="https://www.instagram.com/golfincolors/" Icon={InstagramIcon} label="Instagram" />
              <SocialButton href="https://www.tiktok.com/@golfincolors" Icon={TikTokIcon} label="TikTok" />
            </Box>
          </Box>

          {/* Contact */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: { xs: 2.2, md: 2.8 },
              minHeight: { md: 310 },
              borderRadius: 4,
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(15,27,40,0.08)",
              boxShadow: "0 18px 34px rgba(15,27,40,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 2,
                color: "#0f1b28",
              }}
            >
              Contact
            </Typography>

            <Box sx={{ display: "grid", gap: 1.1 }}>
              <FooterPill icon={CallRoundedIcon} title="Phone" text="+1 (561) 797-5986" href="tel:+15617975986" color="#1B83CC" />
              <FooterPill icon={MailRoundedIcon} title="Email" text="anikaveintemilla@gmail.com" href="mailto:anikaveintemilla@gmail.com" color="#017458" />
              <FooterPill icon={LocationOnRoundedIcon} title="Location" text="Crandon Golf Academy. Miami. Key Biscayne" color="#FF6A00" />
            </Box>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              p: { xs: 2.2, md: 2.8 },
              minHeight: { md: 310 },
              borderRadius: 4,
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(15,27,40,0.08)",
              boxShadow: "0 18px 34px rgba(15,27,40,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 2,
                color: "#0f1b28",
              }}
            >
              Quick Links
            </Typography>

            <Box sx={{ display: "grid", gap: 1.05 }}>
              {shortcuts.map((item) => (
                <Box
                  key={item.label}
                  component="button"
                  onClick={item.onClick}
                  sx={{
                    all: "unset",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    px: 1.5,
                    py: 1.2,
                    borderRadius: 3,
                    background: "rgba(15,27,40,0.03)",
                    border: "1px solid rgba(15,27,40,0.08)",
                    color: "#0f1b28",
                    transition: "transform 180ms ease, background 180ms ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      background: "rgba(27,131,204,0.10)",
                    },
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "0.94rem" }}>{item.label}</Typography>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18, color: "#1B83CC" }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: { xs: 3.5, md: 4.2 },
            pt: 2.2,
            borderTop: "1px solid rgba(15,27,40,0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.4,
          }}
        >
          <Typography
            sx={{
              color: "#536472",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: { xs: "0.84rem", md: "0.9rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            © {new Date().getFullYear()} Golf In Colors.{version ? ` v${version}` : ""}
          </Typography>

          <Typography
            onClick={() => window.open("http://plataformas-web.cl", "_blank", "noopener,noreferrer")}
            sx={{
              cursor: "pointer",
              color: "#1B83CC",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: { xs: "0.76rem", md: "0.82rem" },
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Designed by plataformas-web.cl
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
