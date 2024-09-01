'use client';

import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import Button from '@mui/material/Button';

export default function Cart() {
  const t = useTranslations('general.home');
  const router = useRouter();
  const handleCheckout = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '86vh' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Carrinho
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#D6DDFD" }}>
            <TableRow>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF", borderTopLeftRadius: '10px' }}>Nome do produto</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">Valor</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">Quantidade</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF", borderTopRightRadius: '10px' }} align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ backgroundColor: "#E8EBF8" }}>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} component="th" scope="row">
                Cupcake de Morango
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                R$ 6,00
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                01
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                R$ 6,00
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: "#E8EBF8" }}>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} component="th" scope="row">
                Croissant de Chocolate
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                R$ 8,00
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                02
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                R$ 16,00
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow sx={{ backgroundColor: "#E8EBF8" }}>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} colSpan={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">
                    Total: R$ 22,00
                  </Typography>
                  <Box>
                    <Button
                      variant="outlined"
                      sx={{ mr: 1 }}
                      onClick={() => handleCheckout('/')}
                    >
                      Adicionar Itens
                    </Button>
                    <Button variant="contained" color="primary">
                      Checkout
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </Box >
  );
}
