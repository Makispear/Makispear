import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const mockNavLinks = [
  {
    name: 'Home',
    link: '#home'
  },
  {
    name: 'About',
    link: '#about'
  },
  {
    name: 'Work',
    link: '#work'
  },
  {
    name: 'Contact',
    link: '#contact'
  }
];
const mockCurrentNavLink = jest.fn();
const mockSetCurrentNavLink = jest.fn();

afterEach(cleanup)

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav 
      navLinks={mockNavLinks}
      currentNavLink={mockCurrentNavLink}
      setNavLink={mockSetCurrentNavLink}
    />)
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<Nav 
      navLinks={mockNavLinks}
      currentNavLink={mockCurrentNavLink}
      setNavLink={mockSetCurrentNavLink}
    />)

    expect(asFragment).toMatchSnapshot()
  })

  it('has links', () => {
    const { getByTestId } = render(<Nav 
      navLinks={mockNavLinks}
      currentNavLink={mockCurrentNavLink}
      setNavLink={mockSetCurrentNavLink}
    />)

    expect(getByTestId('home')).toHaveTextContent('Home')
    expect(getByTestId('about')).toHaveTextContent('About')
    expect(getByTestId('work')).toHaveTextContent('Work')
    expect(getByTestId('contact')).toHaveTextContent('Contact')
  })
})
