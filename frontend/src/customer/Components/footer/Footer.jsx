import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  TextField,
  Button,
  useTheme,
  Paper,
} from '@mui/material'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: isDark ? 'grey.900' : '#f9f9f9',
        color: isDark ? 'grey.300' : 'text.primary',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Branding & Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: 'primary.main' }}
            >
              Shopperoo
            </Typography>
            <Typography variant="body2" mt={1}>
              📞 +971-55896xxxxx / +91-82790xxxxx
            </Typography>
            <Typography variant="body2">✉️ hello@zynetic.com</Typography>
            <Typography variant="body2" mt={1}>
              India - PT: 108, Gachibowli, S Lingampally, Telangana, 500032
            </Typography>
            <Typography variant="body2">
              Dubai - AL Khabeesi Building, Plot 128-246, Office No. G-01-572,
              Dubai, UAE
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={4} container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Company
              </Typography>
              <Stack spacing={1}>
                {['About Us', 'Our Solutions', 'Contact'].map((label) => (
                  <Link key={label} href="#" underline="hover" color="inherit">
                    {label}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Partnership
              </Typography>
              <Stack spacing={1}>
                {[
                  'Dubai Partnership',
                  'Indian Partnership',
                  'Location Partnership',
                ].map((label) => (
                  <Link key={label} href="#" underline="hover" color="inherit">
                    {label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>

          {/* Newsletter & App Store */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Stay Updated
            </Typography>
            <Stack direction="row" spacing={1} mb={2}>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Your email"
                sx={{ bgcolor: 'background.paper', flex: 1 }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Stack>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Download the App
            </Typography>
            <Stack direction="row" spacing={2}>
              <Paper
                elevation={2}
                component="a"
                href="#"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  py: 1,
                  bgcolor: 'background.paper',
                  textDecoration: 'none',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2" fontWeight="bold">
                  App Store
                </Typography>
              </Paper>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                sx={{ width: 120, borderRadius: 2 }}
              />
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 5, pt: 3 }}
        >
          {/* Social Icons */}
          <Stack direction="row" spacing={2} justifyContent="center">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, index) => (
              <IconButton
                key={index}
                href="#"
                sx={{
                  color: 'text.primary',
                  transition: 'all 0.3s',
                  '&:hover': { color: 'primary.main', transform: 'scale(1.2)' },
                }}
              >
                <Icon size={20} />
              </IconButton>
            ))}
          </Stack>

          {/* Copyright */}
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            align="center"
          >
            &copy; 2025 - Shopperoo EV. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
