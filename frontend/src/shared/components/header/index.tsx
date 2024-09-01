'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();
  const handleCheckout = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1432,
        }}
      >
        <Toolbar>
          <Image src={'/images/logo.svg'} alt="Logo" width={147} height={36} />
          <Stack style={{ marginInline: 40 }} direction="row" spacing={6}>
            <Button
              fullWidth
              variant="text"
              onClick={() => handleCheckout('/')}
            >
              Início
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => handleCheckout('/cart')}
            >
              Carrinho
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => handleCheckout('/orders')}
            >
              Pedidos
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => handleCheckout('/profile')}
            >
              Perfil
            </Button>
          </Stack>
          <Stack style={{ marginLeft: 'auto' }} direction="row" spacing={2}>
            <Button
              fullWidth
              variant="contained"
              sx={{ width: 157 }}
              onClick={() => handleCheckout('/')}
            >
              Dashboard
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ width: 93 }}
              onClick={() => handleCheckout('/')}
            >
              Entrar
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;