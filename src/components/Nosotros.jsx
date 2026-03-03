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
          {"Nosotros".split("").map((char, index) => (
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
                      ¿Quiénes Somos?
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
                      Golf in Color busca integrar orgánicamente un equipo que incluye al padre, quien lidera el proyecto; al entrenador, quien dirige el proceso; y al niño, a quien el sistema busca beneficiar e inspirar para que se enamore y apasione por el golf. Este equipo tendrá roles definidos para garantizar que cada miembro se mantenga alineado con nuestra experiencia y enfoque.
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
                      <strong>El sistema:</strong> El sistema está diseñado con materiales educativos interactivos, como libros para colorear, rompecabezas, juegos de preguntas, cuentos y actividades divertidas, para mantener a los niños entretenidos tanto dentro como fuera del campo de golf, sin depender exclusivamente de la tecnología.
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
                      Además, ofrecemos contenido de video y herramientas tecnológicas para mantenernos a la vanguardia, compitiendo creativamente con actividades que a menudo captan la atención de los niños de maneras menos atractivas. Queremos mantenerlos concentrados y entretenidos de una manera divertida, sin ser invasivos, a la vez que garantizamos su motivación y entusiasmo.
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
            Inspiramos y enseñamos <span style={{ color: '#00c853' }}>Golf</span>
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

          {/* Misión + Visión a la derecha con animación */}
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
                    {/* Misión */}
                    <Typography variant="h5" color="black" gutterBottom>
                      Misión
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify', mb: 1.5 }}>
                      Nuestra misión es desarrollar una plataforma y un sistema fáciles de replicar y adaptar en campos de golf, clubes, ciudades y países donde se practica. El objetivo es garantizar que cada niño, en su primera clase, tenga una experiencia tan impactante que lo motive a continuar y a participar en este deporte toda la vida.
                    </Typography>

                    {/* Visión */}
                    <Typography variant="h5" color="black" gutterBottom>
                      Visión
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify' }}>
                      Nuestra visión es posicionar nuestro servicio, plataforma o sistema como un método eficaz y rentable para todos los clubes, ciudades y países donde se juega al golf. Nuestro objetivo es guiar a entrenadores, padres y abuelos en el noble, pero a la vez desafiante, objetivo de impactar al mayor número posible de niños, introduciéndolos al golf de una manera creativa y divertida.
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
          EQUIPO
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
          Guiamos a nuevos entrenadores para enseñar golf a niños de 2 a 8 años, usando materiales dinámicos y divertidos que generan clases atractivas. Buscamos que la primera experiencia del niño y sus padres sea memorable y motive su pasión por el golf.
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
