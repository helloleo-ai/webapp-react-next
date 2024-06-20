'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const TestPage = () => {
  return (
<PageContainer title="Test Pgae" description="this is a TesT pgae">
      <DashboardCard title="Test Pgae">
        <Typography>Tihs is a test pgae</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default TestPage;
