import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardCupcake from './components/cardCupcake';
import Pagination from '@mui/material/Pagination';

export default function Home() {
  const t = useTranslations('general.home');
  const cupcakes = [
    { name: 'TeslaTeslaTeslaTeslaTeslaTesladxfgx', code: 'sdf65sdf545' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '86vh' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {t('body.title')}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {cupcakes.length > 0 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container rowSpacing={3} spacing={4} columns={{ xl: 17 }}>
                {cupcakes.map((organization) => (
                  <Grid item key={organization.name}>
                    <CardCupcake
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
