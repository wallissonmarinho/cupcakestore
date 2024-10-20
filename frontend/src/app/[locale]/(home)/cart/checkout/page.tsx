'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const [payment, setPayment] = React.useState('');
  const [delivery, setDelivery] = React.useState('');
  const router = useRouter();

  const handleDelivery = (event: SelectChangeEvent) => {
    setDelivery(event.target.value as string);
  };

  const handlePayment = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '86vh' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
      </Box>

      <Box
        sx={{
          p: 2,
          backgroundColor: "#E8EBF8",
          borderRadius: '10px',
          border: '2px solid #D6DDFD',
          marginBottom: '20px'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              Destinatário:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              João da Silva
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              Endereço:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Rua dos Bobos, nº 0, Bairro dos Bobos, São Paulo - SP
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              Telefone:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              (11) 99999-9999
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              Email:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              jhon@mail.com
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#D6DDFD" }}>
            <TableRow>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF", borderTopLeftRadius: '10px' }}>Nome do produto</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }}>Valor</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }}>Quantidade</TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF", borderTopRightRadius: '10px' }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ backgroundColor: "#E8EBF8" }}>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }}>
                Cupcake Chocolate
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }}>
                R$ 6,00
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }}>
                01
              </TableCell>
              <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }}>
                R$ 6,00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box sx={{ marginTop: '20px' }}>
          <Divider />
        </Box >
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Forma de pagamento</Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '40%' }}>
                  <InputLabel id="payment-select-label">Selecione</InputLabel>
                  <Select
                    labelId="payment-select-label"
                    id="payment-select"
                    value={payment}
                    label="Selecione"
                    onChange={handlePayment}
                  >
                    <MenuItem value={'pix'}>Pix</MenuItem>
                    <MenuItem value={'entrega'}>Pagar na entrega</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Entrega</Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '40%' }}>
                  <InputLabel id="delivery-select-label">Selecione</InputLabel>
                  <Select
                    labelId="delivery-select-label"
                    id="delivery-select"
                    value={delivery}
                    label="Selecione"
                    onChange={handleDelivery}
                  >
                    <MenuItem value={'endereco'}>Entregar no endereço</MenuItem>
                    <MenuItem value={'retirar'}>Retirar no local</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Valor do produto</Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} component="th" scope="row">
                        Total
                      </TableCell>
                      <TableCell sx={{ borderBottom: "2px solid #EFEFFF" }} align="right">
                        R$ 100,00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box />
              <Box>
                <Button
                  variant="outlined"
                  sx={{ mr: 1 }}
                  onClick={() => navigateTo('/')}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                >
                  Finalizar
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>


    </Box >
  );
}
