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
        // 🎨 Fondo pasto golf
        background: `
      linear-gradient(
        180deg,
        #c7e8b0 0%,    /* verde claro superior */
        #8fcf5f 100%   /* verde más intenso abajo */
      ),
      radial-gradient(
        circle at 20% 30%,
        rgba(255,255,255,0.1) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(0,0,0,0.05) 0%,
        transparent 45%
      )
    `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Título */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant={isMobile ? "h4" : "h4"}
          fontWeight={800}
          sx={{
            position: "relative",
            display: "inline-flex",
            letterSpacing: "0.04em",
            background: "white", // naranja más vivo
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "4px",
              borderRadius: "4px",
              background: "white", // mismo degradado en la línea
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




      {/* Primera fila con animación */}
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
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    p: { xs: 2, sm: 2.5, md: 3 }, // padding responsivo más compacto
                  }}
                >
                  <CardContent>
                    {/* Título */}
                    <Typography
                      variant="h5" // más pequeño que h4
                      sx={{
                        color: 'black',
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }, // tamaño responsivo
                        fontWeight: 700,
                        mb: 1.5, // margen inferior más compacto
                      }}
                    >
                      Who Are We?
                    </Typography>

                    {/* Párrafo 1 */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'black',
                        textAlign: 'justify',
                        mb: 1.5, // margen más pequeño
                        fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      Golf in Color aims to organically integrate a team that includes the parent, who leads the project; the coach, who guides the process; and the child, whom the system is designed to support and inspire to fall in love with golf. This team has clearly defined roles to ensure every member stays aligned with our experience and approach.
                    </Typography>

                    {/* Párrafo 2 */}
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
                      <strong>The system:</strong> The system is designed with interactive educational materials such as coloring books, puzzles, quiz games, stories, and fun activities to keep children engaged both on and off the golf course, without relying exclusively on technology.
                    </Typography>

                    {/* Párrafo 3 */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'black',
                        textAlign: 'justify',
                        fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      In addition, we offer video content and technology tools to stay at the forefront, creatively competing with activities that often capture children's attention in less meaningful ways. We want to keep them focused and entertained in a fun, non-invasive way while ensuring their motivation and enthusiasm.
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
                    maxWidth: isMobile ? '65%' : '100%',
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
          py: 4,
          backgroundImage: 'url(/fondo-5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? `center ${scrollY * 0.3}px` : 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          textAlign: 'right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
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
              color: '#ffffff', // letras blancas
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              textAlign: 'right',
            }}
          >
            We inspire and teach <span style={{ color: '#00c853' }}>Golf</span>
          </Typography>
        </Container>
      </Box>



      {/* Segunda fila con animación */}
      <Box maxWidth="1200px" mx="auto" mt={2}>
        <Grid container spacing={3} alignItems="flex-start">
          {/* Imagen a la izquierda con animación */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }} // 👈 mejora el comportamiento en scroll
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  p: 0,
                  mt: isMobile ? -3 : 0
                }}
              >
                <img
                  src="mision-empresa.png"
                  alt="Logo React"
                  style={{ maxWidth: '65%', height: 'auto' }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Mission + Vision a la derecha con animación */}
          <Grid item xs={12} md={6}>
            <Box px={{ xs: 2, sm: 0 }}>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }} // 👈 mejora el comportamiento en scroll
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    p: 2, // menos padding
                  }}
                >
                  <CardContent sx={{ p: 2 }}> {/* ajuste adicional de padding interno */}
                    {/* Mission */}
                    <Typography variant="h5" color="black" gutterBottom>
                      Mission
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify', mb: 1.5 }}>
                      Our mission is to develop a platform and system that are easy to replicate and adapt in golf courses, clubs, cities, and countries where golf is played. The goal is to ensure that every child has such an impactful first lesson that they feel motivated to continue and stay connected to the sport for life.
                    </Typography>

                    {/* Vision */}
                    <Typography variant="h5" color="black" gutterBottom>
                      Vision
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify' }}>
                      Our vision is to position our service, platform, and system as an effective and cost-efficient method for clubs, cities, and countries where golf is played. Our objective is to guide coaches, parents, and grandparents in the noble yet challenging mission of reaching as many children as possible and introducing them to golf in a creative and fun way.
                    </Typography>
                  </CardContent>
                </Card>

              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Sección Entrenadores */}
      <Box maxWidth="1200px" mx="auto" mt={6} mb={6} textAlign="center">
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight={700}
          mb={3}
          sx={{
            color: 'white',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '100%',        // ahora cubre todo el texto
              height: '4px',
              backgroundColor: 'white',
              borderRadius: 2,
            },
          }}
        >
          TEAM
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'black',
            textAlign: 'center',
            mb: 4,
            px: { xs: 2, sm: 6 },
          }}
        >
          We guide new coaches to teach golf to children ages 2 to 8 using dynamic and fun materials that create engaging classes. We aim for the first experience for both the child and their parents to be memorable and to spark a lasting passion for golf.
        </Typography>

        <Grid container spacing={0} justifyContent="center">
          {[
            { img: "coache-1.png", name: "Coach Sergio" },
            { img: "coache-2.png", name: "Coach Annie" },
            { img: "coache-3.png", name: "Hugo" },
            { img: "coache-4.png", name: "Lisa" }
          ].map((coach, index) => (
            <Grid item xs="auto" key={index} sx={{ mx: 1.5 }}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '3px solid transparent',
                  background: 'linear-gradient(135deg, #FFD580, #FF9E80)', // degradado animado
                  '&:hover': {
                    transform: 'scale(1.1)',
                    borderColor: '#FF7F50', // borde brillante al pasar mouse
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
                  mt: 1,
                  fontWeight: 700,
                  color: '#FF7F50', // naranja más visible
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

