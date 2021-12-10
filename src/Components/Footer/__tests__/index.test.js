import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

const mockSocialMedia = [
  {
    name: 'GitHub',
    src: 'github.png',
    href: 'https://github.com/Makispear',
  },
  {
    name: 'LinkedIn',
    src: 'linkedin.png',
    href: 'http://www.linkedin.com/in/mekki-abo-obaida-59a48b191'
  },
  {
    name: 'Outlook',
    src: 'outlook.svg',
    href: 'mailto:maki-miko@hotmail.com?subject=I Visited Your Online Portfolio!!!&body=Hi Maki! I like your Portfolio!'
  },
  {
    name: 'Whatsapp',
    src: 'whatsapp.png',
    href: 'https://wa.me/18607941672?text=Hey Maki! I like your online portfolio!'
  }
]

afterEach(cleanup)

describe('Footer Component', () => {
  it('renders', () => {
    render(<Footer 
      socialMedia={mockSocialMedia}
      />)
  })

  it('has a copyright sign', () => {
    const { getByTestId } = render(<Footer 
      socialMedia={mockSocialMedia}
      />)

    expect(getByTestId('copyright')).toContainHTML('©');
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<Footer 
      socialMedia={mockSocialMedia}
    />)

    expect(asFragment).toMatchSnapshot()
  })
})
