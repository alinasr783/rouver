import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Projects() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Typography>
        Here are your current projects and their statuses.
      </Typography>
    </Box>
  );
}