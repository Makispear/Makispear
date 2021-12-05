import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup)

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav />)
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<nav />)

    expect(asFragment).toMatchSnapshot()
  })

  it('has links', () => {
    const { getByTestId } = render(<Nav />)

    expect(getByTestId('home')).toHaveTextContent('Home')
    expect(getByTestId('about')).toHaveTextContent('About')
    expect(getByTestId('work')).toHaveTextContent('Work')
    expect(getByTestId('contact')).toHaveTextContent('Contact')
  })
})
