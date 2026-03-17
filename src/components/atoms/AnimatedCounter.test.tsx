import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AnimatedCounter } from './AnimatedCounter';

describe('AnimatedCounter Component', () => {
  it('renders the "Fetch Count" label', () => {
    render(<AnimatedCounter count={0} />);
    expect(screen.getByText('Fetch Count')).toBeInTheDocument();
  });

  it('displays the correct count passed via props', () => {
    render(<AnimatedCounter count={5} />);
    // Since the number 5 is rendered inside the motion.div, we look for that text
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('updates the displayed count when props change', () => {
    const { rerender } = render(<AnimatedCounter count={1} />);
    expect(screen.getByText('1')).toBeInTheDocument();

    // Re-render the component with a new prop
    rerender(<AnimatedCounter count={2} />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});