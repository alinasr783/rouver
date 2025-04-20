import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Typography>
        Welcome to your dashboard. Here’s a summary of your activity.
      </Typography>
    </Box>
  );
}