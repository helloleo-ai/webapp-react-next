import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { CustomButton } from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

// ... (keep the existing code)

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
  <>
    {/* ... (keep the existing JSX) */}
    <Box>
      <CustomButton
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
        type="submit"
      >
        Sign In
      </CustomButton>
    </Box>
    {subtitle}
  </>
);

export default AuthLogin;
