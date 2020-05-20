// Change the cheating state of the robot

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('Change the cheating state when the robot is being clicked', () => {
  const { getByText } = render(<App />)
  const robot = getByText('🤖')
  fireEvent.click(robot)

  expect(robot).toHaveClass('cheating')

  fireEvent.click(robot)

  expect(robot).not.toHaveClass('cheating')
})

test('If player plays against the cheating robot, they will lose', () => {
  // Click on the robot to activate IDDQD
  // Click on a choice
  // We should robot won.

  const { getByText, getByTestId } = render(<App />)
  const robot = getByText('🤖')
  fireEvent.click(robot)

  fireEvent.click(getByText('🌴'))

  expect(getByTestId('result'))

  getByText("Computer won")
  //  punishingPlayer will run, and validate result will run, and will return Lost.
})