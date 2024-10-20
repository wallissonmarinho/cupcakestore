'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter, usePathname } from 'next/navigation';
import { Colors } from '@/styles/theme/colors';

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };


  const isSelected = (path: string) => pathname === path;

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
              sx={{
                borderBottom: isSelected('/') ? `1px solid ${Colors.primary}` : 'none',
                borderRadius: 0,
              }}
              onClick={() => navigateTo('/')}
            >
              Início
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{
                borderBottom: isSelected('/cart') ? `1px solid ${Colors.primary}` : 'none',
                borderRadius: 0,
              }}
              onClick={() => navigateTo('/cart')}
            >
              Carrinho
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{
                borderBottom: isSelected('/orders') ? `1px solid ${Colors.primary}` : 'none',
                borderRadius: 0,
              }}
              onClick={() => navigateTo('/orders')}
            >
              Pedidos
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{
                borderBottom: isSelected('/profile') ? `1px solid ${Colors.primary}` : 'none',
                borderRadius: 0,
              }}
              onClick={() => navigateTo('/profile')}
            >
              Perfil
            </Button>
          </Stack>
          <Stack style={{ marginLeft: 'auto' }} direction="row" spacing={2}>
            <Button
              fullWidth
              variant="contained"
              sx={{ width: 157 }}
              onClick={() => navigateTo('/dashboard')}
            >
              Dashboard
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ width: 93 }}
              onClick={() => navigateTo('/login')}
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
