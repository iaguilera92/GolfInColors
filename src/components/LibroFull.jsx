import { Box, Button, Grid, Typography } from "@mui/material";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { motion } from "framer-motion";

export default function LibroFull({
  bookOpen,
  isMobile,
  isPortrait,
  shouldShowRotateOverlay,
  storyPage,
  storyBookPages,
  currentRightPageImage,
  isPageTurning,
  turnId,
  flipDirection,
  handlePageTurn,
}) {
  return (
    <>
      {bookOpen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 0,
            px: 0.5,
            mt: { xs: isPortrait ? 4.1 : 1.6, sm: 1.1 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              color: "#ffffff",
              textShadow: "0 2px 8px rgba(0,0,0,0.28)",
              fontSize: { xs: "0.86rem", sm: "0.95rem" },
            }}
          >
            {"My Story Book "}{storyPage + 1}/{storyBookPages.length}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          width: "100%",
          borderRadius: 3.4,
          p: bookOpen ? { xs: 1, sm: 1.4 } : { xs: 0.8, sm: 1 },
          border: "1px solid rgba(111,68,31,0.45)",
          background: "linear-gradient(180deg, #f7d99a 0%, #d89e56 52%, #b66b32 100%)",
          boxShadow: bookOpen
            ? "0 22px 38px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -10px 18px rgba(110,62,22,0.24)"
            : "0 14px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.35)",
          position: "relative",
          overflow: "visible",
          transformStyle: "preserve-3d",
          transform: bookOpen
            ? "perspective(1800px) rotateX(8deg) rotateY(-2deg)"
            : "perspective(1200px) rotateX(4deg)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 12,
            bottom: 12,
            left: 10,
            right: 10,
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(243,232,214,0.92) 0%, rgba(229,210,184,0.92) 100%)",
            boxShadow: "0 16px 26px rgba(51,28,10,0.16)",
            transform: "translateY(6px)",
            zIndex: -2,
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: 10,
            bottom: 10,
            width: bookOpen ? 34 : 18,
            transform: "translateX(-50%)",
            borderRadius: 999,
            background:
              "linear-gradient(90deg, rgba(58,28,10,0.05) 0%, rgba(58,28,10,0.22) 50%, rgba(58,28,10,0.05) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          },
        }}
      >
        <Grid
          container
          spacing={0}
          alignItems="stretch"
          sx={{ width: "100%", m: 0, position: "relative", perspective: "1200px", zIndex: 2 }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: { xs: 16, sm: 20 },
              transform: "translateX(-50%)",
              borderRadius: 99,
              background: "linear-gradient(90deg, #2a1005 0%, #4c2310 50%, #2a1005 100%)",
              boxShadow:
                "inset 2px 0 4px rgba(255,255,255,0.1), inset -2px 0 5px rgba(0,0,0,0.24), 0 0 12px rgba(42,17,5,0.18)",
              zIndex: 4,
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 2,
                borderRadius: "inherit",
                background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.04) 100%)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: 2,
                transform: "translateX(-50%)",
                background: "rgba(255,255,255,0.12)",
              },
            }}
          />
          <Grid item xs={6} sx={{ pr: { xs: 0.5, sm: 0.6 } }}>
            <Box
              sx={{
                height: bookOpen ? { xs: isPortrait ? "56vh" : "48vh", sm: "70vh" } : { xs: 180, sm: 220 },
                borderRadius: 2.2,
                py: { xs: 1.9, sm: 2.1 },
                px: { xs: 1.9, sm: 3.5 },
                background: "linear-gradient(180deg, #fffdf8 0%, #fbf4e8 100%)",
                border: "1px solid rgba(148,111,73,0.3)",
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.42), inset -10px 0 12px rgba(177,137,94,0.08), 0 10px 18px rgba(45,26,11,0.12)",
                transform: "perspective(1200px) rotateY(14deg) skewY(-1deg)",
                transformOrigin: "right center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: -2,
                  width: 18,
                  background:
                    "repeating-linear-gradient(180deg, rgba(255,251,244,0.98) 0 2px, rgba(234,220,196,0.96) 2px 4px, rgba(196,165,126,0.42) 4px 5px)",
                  pointerEvents: "none",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 8,
                  bottom: 8,
                  left: 8,
                  right: 8,
                  borderRadius: 18,
                  background:
                    "radial-gradient(circle at 50% 52%, rgba(255,255,255,0) 48%, rgba(176,138,98,0.08) 100%)",
                  pointerEvents: "none",
                },
              }}
            >
              <motion.div
                key={`page-content-${storyPage}`}
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.34, ease: "easeOut" }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {storyPage === 0 && (
                  <>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "#0f4b75",
                        fontSize: bookOpen
                          ? { xs: isPortrait ? "1.02rem" : "0.88rem", sm: "1.42rem" }
                          : { xs: "1rem", sm: "1.1rem" },
                        mb: 0.35,
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      {storyBookPages[storyPage].title}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "#1f4f82",
                        fontSize: bookOpen
                          ? { xs: isPortrait ? "0.9rem" : "0.78rem", sm: "1.18rem" }
                          : { xs: "0.86rem", sm: "0.92rem" },
                        mb: 0.8,
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      {storyBookPages[storyPage].subtitle}
                    </Typography>
                  </>
                )}
                <Typography
                  sx={{
                    color: "#31546f",
                    lineHeight: bookOpen && !isMobile ? 1.7 : 1.62,
                    fontSize: bookOpen
                      ? { xs: isPortrait ? "0.82rem" : "0.7rem", sm: "1.08rem" }
                      : { xs: "0.82rem", sm: "0.9rem" },
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {storyBookPages[storyPage].text}
                </Typography>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ pl: { xs: 0.5, sm: 0.6 } }}>
            <Box
              sx={{
                height: bookOpen ? { xs: isPortrait ? "56vh" : "48vh", sm: "70vh" } : { xs: 180, sm: 220 },
                borderRadius: 2.2,
                background: "linear-gradient(180deg, #fffdf8 0%, #fbf4e8 100%)",
                border: "1px solid rgba(148,111,73,0.3)",
                overflow: "hidden",
                pointerEvents: shouldShowRotateOverlay ? "none" : "auto",
                position: "relative",
                p: { xs: 1.15, sm: 1.35 },
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.42), inset 10px 0 12px rgba(177,137,94,0.08), 0 10px 18px rgba(45,26,11,0.12)",
                transform: "perspective(1200px) rotateY(-14deg) skewY(1deg)",
                transformOrigin: "left center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: -2,
                  width: 18,
                  background:
                    "repeating-linear-gradient(180deg, rgba(255,251,244,0.98) 0 2px, rgba(234,220,196,0.96) 2px 4px, rgba(196,165,126,0.42) 4px 5px)",
                  pointerEvents: "none",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 8,
                  bottom: 8,
                  left: 8,
                  right: 8,
                  borderRadius: 18,
                  background:
                    "radial-gradient(circle at 50% 52%, rgba(255,255,255,0) 48%, rgba(176,138,98,0.08) 100%)",
                  pointerEvents: "none",
                },
              }}
            >
              <Box
                component="img"
                src={currentRightPageImage}
                alt={`Story illustration ${storyPage + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Grid>
          {isPageTurning && (
            <>
              <motion.div
                key={`page-shadow-${turnId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 0.62, ease: [0.25, 0.8, 0.25, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  zIndex: 5,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.08) 100%)",
                }}
              />

              <motion.div
                key={`page-flip-${turnId}`}
                initial={{ rotateY: 0, x: "0%", opacity: 0.98 }}
                animate={{
                  rotateY: flipDirection > 0 ? -180 : 180,
                  x: flipDirection > 0 ? "-100%" : "100%",
                  opacity: [0.98, 0.98, 0.85],
                }}
                transition={{ duration: 0.62, ease: [0.25, 0.8, 0.25, 1] }}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: flipDirection > 0 ? "50%" : "0%",
                  width: "50%",
                  transformOrigin: flipDirection > 0 ? "left center" : "right center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  pointerEvents: "none",
                  zIndex: 6,
                  background:
                    flipDirection > 0
                      ? "linear-gradient(90deg, rgba(255,251,245,0.99) 0%, rgba(241,214,175,0.9) 70%, rgba(222,190,148,0.85) 100%)"
                      : "linear-gradient(270deg, rgba(255,251,245,0.99) 0%, rgba(241,214,175,0.9) 70%, rgba(222,190,148,0.85) 100%)",
                  boxShadow: flipDirection > 0 ? "-24px 0 34px rgba(0,0,0,0.26)" : "24px 0 34px rgba(0,0,0,0.26)",
                  borderRadius: flipDirection > 0 ? "0 12px 12px 0" : "12px 0 0 12px",
                }}
              />
            </>
          )}
        </Grid>
      </Box>

      {bookOpen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            px: { xs: 1.1, sm: 0.8 },
            mt: 0,
            position: bookOpen && isMobile ? "absolute" : "relative",
            left: bookOpen && isMobile ? 0 : "auto",
            right: bookOpen && isMobile ? 0 : "auto",
            bottom: bookOpen && isMobile ? (isPortrait ? 24 : 18) : "auto",
            zIndex: 9,
          }}
        >
          <Button
            size="small"
            onClick={() => handlePageTurn(-1)}
            disabled={storyPage === 0 || isPageTurning}
            sx={{
              minWidth: { xs: isPortrait ? 46 : 42, sm: 54 },
              p: { xs: isPortrait ? 0.35 : 0.24, sm: 0.55 },
              borderRadius: 99,
              color: "#173d5d",
              fontWeight: 900,
              border: "1px solid rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.42)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 8px 18px rgba(16,47,74,0.16)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.56)",
                borderColor: "rgba(255,255,255,0.82)",
              },
              "&.Mui-disabled": {
                color: "rgba(23,61,93,0.38)",
                borderColor: "rgba(255,255,255,0.26)",
                backgroundColor: "rgba(255,255,255,0.18)",
                boxShadow: "none",
              },
            }}
          >
            <NavigateBeforeRoundedIcon sx={{ fontSize: { xs: isPortrait ? 26 : 24, sm: 30 } }} />
          </Button>
          <Button
            size="small"
            onClick={() => handlePageTurn(1)}
            disabled={storyPage === storyBookPages.length - 1 || isPageTurning}
            sx={{
              minWidth: { xs: isPortrait ? 46 : 42, sm: 54 },
              p: { xs: isPortrait ? 0.35 : 0.24, sm: 0.55 },
              borderRadius: 99,
              color: "#173d5d",
              fontWeight: 900,
              border: "1px solid rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.42)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 8px 18px rgba(16,47,74,0.16)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.56)",
                borderColor: "rgba(255,255,255,0.82)",
              },
              "&.Mui-disabled": {
                color: "rgba(23,61,93,0.38)",
                borderColor: "rgba(255,255,255,0.26)",
                backgroundColor: "rgba(255,255,255,0.18)",
                boxShadow: "none",
              },
            }}
          >
            <NavigateNextRoundedIcon sx={{ fontSize: { xs: isPortrait ? 26 : 24, sm: 30 } }} />
          </Button>
        </Box>
      )}
    </>
  );
}
