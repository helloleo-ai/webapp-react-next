'use client'
import { useState } from 'react';
import { Typography, Grid, Box, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';

const Dashboard = () => {
  const [visibleCharts, setVisibleCharts] = useState({
    salesOverview: true,
    yearlyBreakup: true,
    monthlyEarnings: true,
    recentTransactions: true,
    productPerformance: true,
    blog: true,
  });

  const toggleChart = (chart: keyof typeof visibleCharts) => {
    setVisibleCharts(prev => ({ ...prev, [chart]: !prev[chart] }));
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Typography variant="h2" gutterBottom>
        Welcome to your Dashboard 👋
      </Typography>
      <Box mb={3}>
        <Grid container spacing={2}>
          <Grid item><Button variant="outlined" onClick={() => toggleChart('salesOverview')}>Toggle Sales Overview</Button></Grid>
          <Grid item><Button variant="outlined" onClick={() => toggleChart('yearlyBreakup')}>Toggle Yearly Breakup</Button></Grid>
          <Grid item><Button variant="outlined" onClick={() => toggleChart('monthlyEarnings')}>Toggle Monthly Earnings</Button></Grid>
          <Grid item><Button variant="outlined" onClick={() => toggleChart('recentTransactions')}>Toggle Recent Transactions</Button></Grid>
          <Grid item><Button variant="outlined" onClick={() => toggleChart('productPerformance')}>Toggle Product Performance</Button></Grid>
          <Grid item><Button variant="outlined" onClick={() => toggleChart('blog')}>Toggle Blog</Button></Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {visibleCharts.salesOverview && (
            <Grid item xs={12} lg={8}>
              <SalesOverview />
            </Grid>
          )}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              {visibleCharts.yearlyBreakup && (
                <Grid item xs={12}>
                  <YearlyBreakup />
                </Grid>
              )}
              {visibleCharts.monthlyEarnings && (
                <Grid item xs={12}>
                  <MonthlyEarnings />
                </Grid>
              )}
            </Grid>
          </Grid>
          {visibleCharts.recentTransactions && (
            <Grid item xs={12} lg={4}>
              <RecentTransactions />
            </Grid>
          )}
          {visibleCharts.productPerformance && (
            <Grid item xs={12} lg={8}>
              <ProductPerformance />
            </Grid>
          )}
          {visibleCharts.blog && (
            <Grid item xs={12}>
              <Blog />
            </Grid>
          )}
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
