import React from 'react';
import Header from '@/shared/components/header';
import Container from '@mui/material/Container';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1432,
        }}
      >
        {children}
      </Container>
    </>
  );
}

export default HomeLayout;
