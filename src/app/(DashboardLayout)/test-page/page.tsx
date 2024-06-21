'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const TestPage = () => {
  return (
<PageContainer title="Test Page" description="this is a Test page">
      <DashboardCard title="Test Page">
        <Typography>This is a test page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default TestPage;
