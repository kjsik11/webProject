import React from 'react';
import styled from 'styled-components';
import { usePreventScroll } from '@react-aria/overlays';

import { useUI } from '@components/ui/context';
import { Header, Head } from '.';
import Footer from './Footer';

const Root = styled.div``;

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { displayModal, closeModal } = useUI();
  usePreventScroll({ isDisabled: !displayModal });
  const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handler = () => {
      const { scrollTop } = document.documentElement;
      setHasScrolled(scrollTop > 0);
    };

    handler();

    document.addEventListener('scroll', handler);

    return () => document.removeEventListener('scroll', handler);
  }, []);

  return (
    <Root className="relative font-noto w-full min-h-full pt-20">
      <Header />

      <main className="relative min-h-[1024px]">{children}</main>
      <Footer />
    </Root>
  );
};

export default Layout;
