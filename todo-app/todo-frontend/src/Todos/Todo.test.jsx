import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import { expect } from 'vitest';

describe('Todo component', () => {
  const todo = {
    text: "todo text",
    done: false,
  }

  const onClickComplete = vi.fn()
  const onClickDelete = vi.fn()

  test('renders content', () => {
    render(<Todo 
      todo={todo} 
      onClickComplete={onClickComplete} 
      onClickDelete={onClickDelete} 
    />)
  
    expect(screen.getByText('todo text')).toBeVisible();
    expect(screen.getByText('This todo is not done')).toBeVisible();
  });
});
