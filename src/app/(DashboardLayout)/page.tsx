'use client'
import { Grid, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';

const Dashboard = () => {
  const [visibleCards, setVisibleCards] = useState<string[]>([
    'sales', 'yearly', 'monthly', 'recent', 'product', 'blog'
  ]);

  const handleVisibility = (event: React.MouseEvent<HTMLElement>, newVisibleCards: string[]) => {
    setVisibleCards(newVisibleCards);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mb={3}>
        <ToggleButtonGroup
          value={visibleCards}
          onChange={handleVisibility}
          aria-label="card visibility"
        >
          <ToggleButton value="sales" aria-label="sales overview">
            Sales Overview
          </ToggleButton>
          <ToggleButton value="yearly" aria-label="yearly breakup">
            Yearly Breakup
          </ToggleButton>
          <ToggleButton value="monthly" aria-label="monthly earnings">
            Monthly Earnings
          </ToggleButton>
          <ToggleButton value="recent" aria-label="recent transactions">
            Recent Transactions
          </ToggleButton>
          <ToggleButton value="product" aria-label="product performance">
            Product Performance
          </ToggleButton>
          <ToggleButton value="blog" aria-label="blog">
            Blog
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {visibleCards.includes('sales') && (
            <Grid item xs={12} lg={8}>
              <SalesOverview />
            </Grid>
          )}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              {visibleCards.includes('yearly') && (
                <Grid item xs={12}>
                  <YearlyBreakup />
                </Grid>
              )}
              {visibleCards.includes('monthly') && (
                <Grid item xs={12}>
                  <MonthlyEarnings />
                </Grid>
              )}
            </Grid>
          </Grid>
          {visibleCards.includes('recent') && (
            <Grid item xs={12} lg={4}>
              <RecentTransactions />
            </Grid>
          )}
          {visibleCards.includes('product') && (
            <Grid item xs={12} lg={8}>
              <ProductPerformance />
            </Grid>
          )}
          {visibleCards.includes('blog') && (
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
