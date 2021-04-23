import { Transition } from '@headlessui/react';
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
`;

const menuItems = [
  {
    label: 'Team Project',
    path: '/team-project',
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <Root className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white text-xl">
                Home
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {menuItems.map((item, idx) => (
                  <a
                    key={`menuItem-${idx}`}
                    className="text-white px-3 py-2 rounded-md text-sm hover:text-gray-400 font-medium"
                    href={item.path}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <a
                  type="button"
                  className="bg-gray-800 text-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  href="/profile"
                >
                  <span className="sr-only">Open user menu</span>
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition show={menuOpen}>
        <div className="sm:hidden overflow-hidden" id="mobile-menu">
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, idx) => (
                <a
                  key={`mobile-menuItem-${idx}`}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  href={item.path}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </Root>
  );
};

export default Header;
