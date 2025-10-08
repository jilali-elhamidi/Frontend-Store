import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
} from "@mui/material";

const Dashboard = () => {
  // Données des cartes principales
  const stats = [
    { title: "On route vehicles", value: 38, color: "#1976d2" },
    { title: "Vehicles with errors", value: 2, color: "#d32f2f" },
    { title: "Vehicles deviated from route", value: 1, color: "#ed6c02" },
    { title: "Late deliveries", value: 4, color: "#9c27b0" },
  ];

  // Données pour "Overview"
  const overview = [
    { label: "Delivered", percent: 80, color: "#4caf50" },
    { label: "Pending", percent: 15, color: "#ff9800" },
    { label: "Cancelled", percent: 5, color: "#f44336" },
  ];

  // Données pour "Condition"
  const condition = [
    { label: "Good", percent: 70, color: "#66bb6a" },
    { label: "Average", percent: 20, color: "#ffa726" },
    { label: "Critical", percent: 10, color: "#ef5350" },
  ];

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Logistics Dashboard
      </Typography>

      {/* Ligne de statistiques principales */}
      <Grid container spacing={2}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                textAlign: "center",
                p: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h3" color={item.color} fontWeight="bold">
                {item.value}
              </Typography>
              <Typography color="text.secondary" fontSize="1rem">
                {item.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Ligne Overview + Condition */}
      <Grid container spacing={2} mt={3}>
        {/* Overview */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, p: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Vehicles Overview
            </Typography>
            {overview.map((item, i) => (
              <Box key={i} mb={2}>
                <Typography fontSize="0.9rem" mb={0.5}>
                  {item.label}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.percent}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: item.color,
                    },
                  }}
                />
              </Box>
            ))}
          </Card>
        </Grid>

        {/* Condition */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, p: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Vehicles Condition
            </Typography>
            {condition.map((item, i) => (
              <Box key={i} mb={2}>
                <Typography fontSize="0.9rem" mb={0.5}>
                  {item.label}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.percent}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: item.color,
                    },
                  }}
                />
              </Box>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
