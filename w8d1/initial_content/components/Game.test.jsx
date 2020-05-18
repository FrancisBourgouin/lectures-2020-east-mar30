import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Game from './Game'

test('Change cheat state when clicking on robot', () => {

  const {getByText, getByTestId} = render(<Game />)

  fireEvent.click(getByText('🤖'))

  expect(getByTestId('robot-icon')).toHaveClass('cheating')

  fireEvent.click(getByText('🤖'))
  
  expect(getByTestId('robot-icon')).not.toHaveClass('cheating')


})