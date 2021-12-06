import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact />)
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<Contact />)

    expect(asFragment).toMatchSnapshot()
  })
})
