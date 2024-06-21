import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const DocumentationPage = () => {
    return (
        <PageContainer title="Documentation" description="Learn about the different features we offer">
            <DashboardCard title="🌟 Welcome to the Documentation! 🌟">
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Discover the amazing features we offer:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <EmojiObjectsIcon />
                            </ListItemIcon>
                            <ListItemText primary="User-Friendly Interface" secondary="Our platform is designed with simplicity and ease of use in mind!" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="Customizable Settings" secondary="Tailor the app to your preferences with our extensive settings." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SecurityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Top-Notch Security" secondary="Your data is always safe with our advanced security measures." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <UpdateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Regular Updates" secondary="We provide regular updates to keep the app feature-rich and bug-free." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmojiEventsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Achievements and Rewards" secondary="Earn badges and rewards as you use the app!" />
                        </ListItem>
                    </List>
                </Box>
            </DashboardCard>
        </PageContainer>
    );
};

export default DocumentationPage;

