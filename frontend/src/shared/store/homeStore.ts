import { create } from 'zustand';

type homeStore = {
  open: boolean;
};

type homeActions = {
  handleModalOpen: () => void;
  handleModalClose: () => void;
};

const useHomeStore = create<homeStore & homeActions>((set) => ({
  open: false,
  handleModalOpen: () => set(() => ({ open: true })),
  handleModalClose: () => set(() => ({ open: false }))
}));

export default useHomeStore;
