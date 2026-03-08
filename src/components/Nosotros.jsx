import { Box, Typography, Grid, Container, useTheme, useMediaQuery, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Nosotros = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrollY, setScrollY] = useState(0);

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + i * 0.1 },
    }),
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);


  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: '100vh',
        width: '100%',
        py: 14,
        px: 0,
        pb: 3.5,
        position: 'relative',
        overflow: 'hidden',
        // ?? Fondo pasto golf
        backgroundColor: "#f8f6f1",
        backgroundSize: "420px 420px",
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "top left",
      }}
    >
      {/* Tï¿½tulo */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant={isMobile ? "h5" : "h5"}
          fontWeight={800}
          sx={{
            position: "relative",
            display: "inline-flex",
            letterSpacing: "0.04em",
            color: "#1f6d56",

            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "4px",
              borderRadius: "4px",
              background: "#1f6d56",
            },
          }}
        >
          {"About Us".split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </Typography>
      </Box>




      {/* Primera fila con animaciï¿½n */}
      <Box maxWidth="1200px" mx="auto">
        <Grid container spacing={3} alignItems="center">

          <Grid item xs={12} md={6}>
            <Box px={{ xs: 2, sm: 0 }}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: '#fffdf9', borderRadius: 3,
                    border: '1px solid rgba(61,95,79,0.14)',
                    borderTop: '5px solid #f0bf67',
                    boxShadow: '0 14px 26px rgba(0,0,0,0.12)',
                    p: { xs: 2, sm: 2.5, md: 3 }, // padding responsivo mï¿½s compacto
                  }}
                >
                  <CardContent>
                    {/* Tï¿½tulo */}                    {/* Pï¿½rrafo 1 */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'black',
                        textAlign: 'justify',
                        mb: 1.5, // margen mï¿½s pequeï¿½o
                        fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      Golf in Colors was created by two partners who have experienced every stage of the game, from youth golf to high-level competition. Along the way, they noticed a challenging reality: many children are introduced to golf, but only a few continue, compete, or make it a lasting part of their lives. They realized that the first experiences children have with golf play a critical role in shaping their relationship with it.
                    </Typography>

                    {/* Pï¿½rrafo 2 */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'black',
                        textAlign: 'justify',
                        mb: 1.5,
                        fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      Golf in Colors was created to make those early experiences more engaging, positive, and meaningful by combining creativity, storytelling, and simple skill development. Our approach goes beyond the lesson itself. Golf in Colors connects the learning that happens on the course with meaningful moments at home, transforming golf into a shared family experience.
                    </Typography>

                    {/* Pï¿½rrafo 3 */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'black',
                        textAlign: 'justify',
                        fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      By connecting learning on and off the course, we help children build a genuine and lasting relationship with the game.
                    </Typography>
                  </CardContent>
                </Card>

              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Box textAlign="center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{
                    maxWidth: isMobile ? '48%' : '64%',
                    height: 'auto',
                  }}
                />

              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: '100vw',
          position: 'relative',
          mt: 4,
          mb: 4,
          py: { xs: 2.6, md: 3.2 },
          backgroundImage: 'url(/fondo-5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? `center ${scrollY * 0.3}px` : 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            width: '100%',
            px: 2,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h4"}
            fontWeight={600}
            sx={{
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
              textAlign: 'center',
              letterSpacing: '0.02em',
            }}
          >
            We inspire and teach <span style={{ color: '#00c853' }}>Golf</span>
          </Typography>
        </Container>
      </Box>

      <Box maxWidth="1200px" mx="auto" mt={2} mb={2}>
        <Box px={{ xs: 2, sm: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card
              sx={{
                backgroundColor: '#fffdf9', borderRadius: 3,
                border: '1px solid rgba(61,95,79,0.14)',
                borderTop: '5px solid #f0bf67',
                boxShadow: '0 14px 26px rgba(0,0,0,0.12)',
                p: 2,
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1c5a47', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase', position: 'relative', display: 'inline-block', pr: 1.4, pb: 0.45, mb: 1.6, '&::before': { content: '""', position: 'absolute', right: 0, top: '46%', width: 8, height: 8, borderRadius: '50%', transform: 'translateY(-50%)', background: '#f0bf67' }, '&::after': { content: '""', position: 'absolute', left: 0, bottom: 0, width: '100%', height: 3, borderRadius: 999, background: 'linear-gradient(90deg, #1f6d56 0%, #2b8a69 100%)' } }}>
                  PURPOSE
                </Typography>
                <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify', mb: 1.5 }}>
                  Golf in Colors was created with a clear purpose to help children fall in love with the game of golf from an early age in a way that feels fun, natural, and meaningful.
                </Typography>
                <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify', mb: 1.5 }}>
                  We believe that a passion for golf is not built only on the driving range or the putting green. It grows through experiences, shared moments, and emotional connections-both on the course and beyond it.
                </Typography>
                <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify', mb: 1.5 }}>
                  These shared experiences extend what children learn in lessons, and turn every step of the journey into an opportunity to connect and enjoy the game together.
                </Typography>
                <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify' }}>
                  By combining creativity with early skill development, we help children build confidence and develop a genuine love for golf-often without even realizing they're learning.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>
      {/* Segunda fila con animaciï¿½n */}
      <Box maxWidth="1200px" mx="auto" mt={2}>
        <Grid container spacing={3} alignItems="flex-start">
          {/* Imagen a la izquierda con animaciï¿½n */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }} // ?? mejora el comportamiento en scroll
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', p: 0,
                  mt: isMobile ? 1.5 : 1
                }}
              >
                <img
                  src="mision-empresa.png"
                  alt="Logo React"
                  style={{ maxWidth: isMobile ? '56%' : '62%', height: 'auto' }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Mission + Vision a la derecha con animaciï¿½n */}
          <Grid item xs={12} md={6}>
            <Box px={{ xs: 2, sm: 0 }}>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }} // ?? mejora el comportamiento en scroll
              >
                <Card
                  sx={{
                    backgroundColor: '#fffdf9', borderRadius: 3,
                    border: '1px solid rgba(61,95,79,0.14)',
                    borderTop: '5px solid #f0bf67',
                    boxShadow: '0 14px 26px rgba(0,0,0,0.12)',
                    p: 2, // menos padding
                  }}
                >
                  <CardContent sx={{ p: 2 }}> {/* ajuste adicional de padding interno */}
                    {/* Mission */}
                    <Typography variant="h5" gutterBottom sx={{ color: '#1c5a47', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase', position: 'relative', display: 'inline-block', pr: 1.35, pb: 0.42, mb: 1.45, '&::before': { content: '""', position: 'absolute', right: 0, top: '46%', width: 8, height: 8, borderRadius: '50%', transform: 'translateY(-50%)', background: '#7fc9b1' }, '&::after': { content: '""', position: 'absolute', left: 0, bottom: 0, width: '100%', height: 3, borderRadius: 999, background: 'linear-gradient(90deg, #1f6d56 0%, #56a587 100%)' } }}>
                      Mission
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify', mb: 1.5 }}>
                      At Golf in Colors, our mission is to inspire children to discover golf in a fun, creative, and meaningful way. We support parents and coaches with tools, learning materials, and experiences designed to make the game engaging, natural, and emotionally positive for young players. Through this approach, we aim to create environments where curiosity, joy, and motivation encourage children to continue exploring and enjoying the game.
                    </Typography>

                    {/* Vision */}
                    <Typography variant="h5" gutterBottom sx={{ color: '#1c5a47', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase', position: 'relative', display: 'inline-block', pr: 1.35, pb: 0.42, mb: 1.45, mt: 0.6, '&::before': { content: '""', position: 'absolute', right: 0, top: '46%', width: 8, height: 8, borderRadius: '50%', transform: 'translateY(-50%)', background: '#f0bf67' }, '&::after': { content: '""', position: 'absolute', left: 0, bottom: 0, width: '100%', height: 3, borderRadius: 999, background: 'linear-gradient(90deg, #1f6d56 0%, #56a587 100%)' } }}>
                      Vision
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify' }}>
                      Our vision is to help shape a new generation of golfers who grow up seeing the game as more than a sport, but as an experience that sparks imagination, builds confidence, and strengthens family bonds. We aspire to become a global reference in children's golf by creating a community where learning the game extends beyond the course, turning golf into a joyful journey that children and families can share for a lifetime.
                    </Typography>
                  </CardContent>
                </Card>

              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Secciï¿½n Entrenadores */}
      <Box maxWidth="1200px" mx="auto" mt={6} mb={6} textAlign="center">
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight={700}
          mb={3}
          sx={{
            color: '#163d32',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '100%',        // ahora cubre todo el texto
              height: '4px',
              backgroundColor: '#1f6d56',
              borderRadius: 2,
            },
          }}
        >
          FOUNDERS
        </Typography>

        <Typography
          sx={{
            mb: 2.2,
            color: '#224d3f',
            fontWeight: 600,
            fontSize: { xs: '0.9rem', sm: '0.98rem' },
            letterSpacing: '0.01em'
          }}
        >
          The family-driven vision behind Golf in Colors
        </Typography>
        <Grid container spacing={0} justifyContent="center">
          {[
            { img: "coache-1.png", name: "Sergio" },
            { img: "coache-2.png", name: "Anika" }
          ].map((coach, index) => (
            <Grid item xs="auto" key={index} sx={{ mx: 2 }}>
              <Box
                sx={{
                  width: { xs: 130, sm: 170 },
                  height: { xs: 130, sm: 170 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '4px solid #31d0aa',
                  background: 'linear-gradient(135deg, #FFD580 0%, #FF9E80 45%, #ff7f50 100%)',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.28), 0 0 0 4px rgba(49,208,170,0.28), 0 0 18px rgba(49,208,170,0.65)', // degradado animado
                  '&:hover': {
                    transform: 'scale(1.08)',
                    borderColor: '#7ff5d7',
                    boxShadow: '0 16px 34px rgba(0,0,0,0.35), 0 0 0 6px rgba(49,208,170,0.35), 0 0 26px rgba(88,248,209,0.85)', // borde brillante al pasar mouse
                  },
                }}
              >
                <img
                  src={`/${coach.img}`}
                  alt={coach.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mt: 1.2,
                  fontWeight: 800,
                  fontSize: { xs: '1.06rem', sm: '1.2rem' },
                  letterSpacing: '0.03em',
                  color: '#183f33',
                  textShadow: '0 1px 2px rgba(255,255,255,0.45)'
                }}
              >
                {coach.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Nosotros;































