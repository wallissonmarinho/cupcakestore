"use client"
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react'


function stringAvatar(name: string) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}

function UserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}>
          <Avatar {...stringAvatar('Tom Marvolo Riddle')} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem>
          <Typography onClick={handleCloseUserMenu} textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem>
          <Typography onClick={handleCloseUserMenu} textAlign="center">Account</Typography>
        </MenuItem>
        <MenuItem>
          <Typography onClick={handleCloseUserMenu} textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default UserMenu
