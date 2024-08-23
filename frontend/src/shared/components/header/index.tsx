import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import UserMenu from '@/shared/components/userMenu';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Image from 'next/image'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Header() {
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
            >
              Início
            </Button>
            <Button
              fullWidth
              variant="text"
            >
              Carrinho
            </Button>
            <Button
              fullWidth
              variant="text"
            >
              Pedidos
            </Button>
            <Button
              fullWidth
              variant="text"
            >
              Perfil
            </Button>
          </Stack>
          <Stack style={{ marginLeft: 'auto' }} direction="row" spacing={2}>
            <Button
              fullWidth
              variant="contained"
              sx={{ width: 157 }}
            >
              Dashboard
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ width: 93 }}
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