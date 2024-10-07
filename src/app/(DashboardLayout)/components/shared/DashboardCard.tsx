import React, { useState } from "react";
import { Card, CardContent, Typography, Stack, Box, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={"center"}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ""}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              <Box>
                {action}
                <IconButton
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>
            </Stack>
          ) : null}

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {children}
          </Collapse>
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;