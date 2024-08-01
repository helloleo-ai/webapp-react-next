'use client'
import { Typography, Grid, Box, Tooltip, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import { useState } from 'react';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import OlympicMedalsGraph from '@/app/(DashboardLayout)/components/dashboard/OlympicMedalsGraph';

const Dashboard = () => {
  const [showSalesOverview, setShowSalesOverview] = useState(true);

  const toggleSalesOverview = () => {
    setShowSalesOverview(!showSalesOverview);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box
        sx={{
          background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
          minHeight: '100vh',
          padding: '20px',
          borderRadius: '15px',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
          Welcome to your Dashboard 👋
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={toggleSalesOverview}
          sx={{ mb: 2 }}
        >
          {showSalesOverview ? 'Hide' : 'Show'} Sales Overview
        </Button>
        <Grid container spacing={3}>
          {showSalesOverview && (
            <Grid item xs={12} lg={8}>
              <Tooltip title="Overview of sales performance and trends" arrow>
                <Box sx={{ width: '100%', height: '100%' }}>
                  <SalesOverview />
                </Box>
              </Tooltip>
            </Grid>
          )}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Tooltip title="Breakdown of yearly revenue by category" arrow>
                  <Box sx={{ width: '100%', height: '100%' }}>
                    <YearlyBreakup />
                  </Box>
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <Tooltip title="Monthly earnings trend and comparison" arrow>
                  <Box sx={{ width: '100%', height: '100%' }}>
                    <MonthlyEarnings />
                  </Box>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Tooltip title="Comparison of Olympic medals won by countries" arrow>
              <Box sx={{ width: '100%', height: '100%' }}>
                <OlympicMedalsGraph />
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Tooltip title="List of recent financial transactions" arrow>
              <Box sx={{ width: '100%', height: '100%' }}>
                <RecentTransactions />
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Tooltip title="Performance metrics of various products" arrow>
              <Box sx={{ width: '100%', height: '100%' }}>
                <ProductPerformance />
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Tooltip title="Latest blog posts and updates" arrow>
              <Box sx={{ width: '100%', height: '100%' }}>
                <Blog />
              </Box>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
