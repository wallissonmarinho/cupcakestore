import { create } from 'zustand';
import React from 'react';

type userMenuStore = {
  anchorElUser: null | HTMLElement;
};

type userMenuActions = {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  createAvatarString: (name: string) => { children: string };
};

const useUserMenuStore = create<userMenuStore & userMenuActions>((set) => ({
  anchorElUser: null,
  handleOpenUserMenu: (event) =>
    set(() => ({ anchorElUser: event.currentTarget })),
  handleCloseUserMenu: () => set(() => ({ anchorElUser: null })),
  createAvatarString: (name) => ({
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  })
}));

export default useUserMenuStore;
