'use client'
import { Grid, Box, Button } from '@mui/material';
import { useState } from 'react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';

export default function Dashboard() {
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
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Button onClick={() => toggleChart('salesOverview')}>
              {visibleCharts.salesOverview ? 'Hide' : 'Show'} Sales Overview
            </Button>
            {visibleCharts.salesOverview && <SalesOverview />}
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button onClick={() => toggleChart('yearlyBreakup')}>
                  {visibleCharts.yearlyBreakup ? 'Hide' : 'Show'} Yearly Breakup
                </Button>
                {visibleCharts.yearlyBreakup && <YearlyBreakup />}
              </Grid>
              <Grid item xs={12}>
                <Button onClick={() => toggleChart('monthlyEarnings')}>
                  {visibleCharts.monthlyEarnings ? 'Hide' : 'Show'} Monthly Earnings
                </Button>
                {visibleCharts.monthlyEarnings && <MonthlyEarnings />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Button onClick={() => toggleChart('recentTransactions')}>
              {visibleCharts.recentTransactions ? 'Hide' : 'Show'} Recent Transactions
            </Button>
            {visibleCharts.recentTransactions && <RecentTransactions />}
          </Grid>
          <Grid item xs={12} lg={8}>
            <Button onClick={() => toggleChart('productPerformance')}>
              {visibleCharts.productPerformance ? 'Hide' : 'Show'} Product Performance
            </Button>
            {visibleCharts.productPerformance && <ProductPerformance />}
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => toggleChart('blog')}>
              {visibleCharts.blog ? 'Hide' : 'Show'} Blog
            </Button>
            {visibleCharts.blog && <Blog />}
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}