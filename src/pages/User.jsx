import React from 'react';
import { Typography, Box } from '@mui/material';

export default function User() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Typography>
        Users. Here’s a users or your projects.
      </Typography>
    </Box>
  );
}