import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import Typography from '@mui/material/Typography';

export default function Cart() {
  const t = useTranslations('general.home');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '86vh' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {/* {t('body.title')} */}
          Carrinho
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>

      </Box>
    </Box>
  );
}
