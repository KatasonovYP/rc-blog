import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('shared/button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test clear theme', () => {
        render(<Button theme="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug()
    });
});
