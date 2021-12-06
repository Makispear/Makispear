import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '..';

afterEach(cleanup)

describe('Hero Component', () => {
  it('renders', () => {
    render(<Hero />)
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<Hero />)

    expect(asFragment).toMatchSnapshot()
  })

  it('Contains ocupation and name', () => {
      const { getByTestId } = render(<Hero />)
  
      expect(getByTestId('name')).toHaveTextContent('Maki Aboabida')
      expect(getByTestId('occupation')).toHaveTextContent('Full-Stack Web Developer')
  })
})
