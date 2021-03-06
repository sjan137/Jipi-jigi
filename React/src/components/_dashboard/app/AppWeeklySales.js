import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Link, Button } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import { ReactComponent as Bus } from '../../../svg/bus-outline.svg';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function AppWeeklySales() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Bus width={30} height={30} />
        {/* <Icon icon={<Bus />} width={24} height={24} /> */}
      </IconWrapperStyle>
      <Typography variant="h3" textDecoration="none" >교통</Typography>
      <Typography variant="subtitle2" underline="none" sx={{ opacity: 0.72 }}>
        서울 지하철
      </Typography>
    </RootStyle>
  );
}
