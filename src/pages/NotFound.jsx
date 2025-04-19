import React from 'react';
import { Typography, Box } from '@mui/material';

export default function NotFound() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h3" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5">
        Page not found.
      </Typography>
    </Box>
  );
}