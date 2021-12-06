import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup)

describe('About Component', () => {
  it('renders', () => {
    render(<About />)
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<About />)

    expect(asFragment).toMatchSnapshot()
  })

  it('contains a title plus past education and job name', () => {
      const { getByTestId } = render(<About />)
  
      expect(getByTestId('section-title')).toHaveTextContent('About Me')
      expect(getByTestId('education')).toHaveTextContent('University of Connecticut certified Full-Stack Web Developer')
  })
})
