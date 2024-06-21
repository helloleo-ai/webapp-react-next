<<<<<<< SEARCH
<Typography variant="h2" gutterBottom sx={{ marginBottom: 3 }}>
        Welcome to your Dashboard 👋
      </Typography>
=======
<Typography variant="h2" gutterBottom sx={{ marginBottom: 3 }}>
        Welcome to your Dashboard 👋
      </Typography>
>>>>>>> REPLACE

const Dashboard = () => {
  return (
    <PageContainer title="My Dashboard" description="this is Dashboard">
      <Typography variant="h2" gutterBottom sx={{ marginBottom: 3 }}>
        Welcome to your Dashboard 👋
      </Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Dashboard;
>>>>>>> REPLACE
