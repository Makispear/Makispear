import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

afterEach(cleanup)

describe('Footer Component', () => {
  it('renders', () => {
    render(<Footer />)
  })

  it('has a copyright sign', () => {
    const { getByTestId } = render(<Footer />)

    expect(getByTestId('copyright')).toContainHTML('©');
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<Footer />)

    expect(asFragment).toMatchSnapshot()
  })
})
