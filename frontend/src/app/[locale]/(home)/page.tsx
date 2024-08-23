import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardOrganization from './components/cardOrganization';
import Pagination from '@mui/material/Pagination';

export default function Home() {
  const t = useTranslations('general.home');
  const organizations = [
    { name: 'TeslaTeslaTeslaTeslaTeslaTesladxfgx', code: 'sdf65sdf545' },
    { name: 'SpaceX', code: 'sdf65sdf545' },
    { name: 'X', code: 'sdf65sdf545' },
    { name: 'Fiat', code: 'sdf65sdf545' },
    { name: 'Hyundai', code: 'sdf65sdf545' },
    { name: 'Honda', code: 'sdf65sdf545' },
    { name: 'Hyundai', code: 'sdf65sdf545' },
    { name: 'Honda', code: 'sdf65sdf545' },
    { name: 'Toyota' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '86vh' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {t('body.title')}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {organizations.length > 0 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container rowSpacing={3} spacing={4} columns={{ xl: 17 }}>
                {organizations.map((organization) => (
                  <Grid item key={organization.name}>
                    <CardOrganization
                      name={organization.name}
                      code={organization.code || ""}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>

      <Box>
        <Pagination
          count={10}
          color="primary"
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 4,
          }}
        />
      </Box>
    </Box>
  );
}
