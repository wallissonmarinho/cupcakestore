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
import Pagination from '@mui/material/Pagination';

export default function Orders() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '86vh' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Pedidos
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#D6DDFD" }}>
            <TableRow>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF", borderTopLeftRadius: '10px' }}>Status do pedido</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">Método de pagamento</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">Tipo de entrega</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">Data do pedido</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF", borderTopRightRadius: '10px' }} align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ backgroundColor: "#E8EBF8" }}>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} component="th" scope="row">
                A caminho
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                Cartão 3205*****9080
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                Correios
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                26/05/2024
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                R$100,00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
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
    </Box >
  );
}
