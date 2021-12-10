import React from "react";
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Work from '..';

const titles = [
  {title: "Anytime Books",testId: 'anytimebooks'},
  {title: "HomeRoom",testId: 'homeroom'},
  {title: 'Run Buddy',testId: 'runbuddy'},
  {title: 'Weather App',testId: 'weatherapp'},
  {title: 'Star Wars API',testId: 'startwars'},
  {title: 'Timed Coding Quiz',testId: 'timedcodingquiz'},
  {title: 'Work Day Scheduler',testId: 'workdayscheduler'}
]

afterEach(cleanup)

describe('Work component', () => {
  it('renders', () => {
    render(<Work  />)
  })

  it('Matches snapshot', () => {
    const { asFragment } = render(<Work />)

    expect(asFragment).toMatchSnapshot()
  })

  it('has a "View All" btn', () => {
    const { getByTestId } = render(<Work />)

    expect(getByTestId('viewAll')).toHaveTextContent('View All')
  })

  it('has titles on each project', () => {
    const { getByTestId } = render(<Work />)

    titles.forEach(item => {
      expect(getByTestId(item.testId)).toHaveTextContent(item.title)
    })
  })

})
