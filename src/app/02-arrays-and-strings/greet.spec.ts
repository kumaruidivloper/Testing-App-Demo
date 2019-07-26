import { greet } from './greet';

describe('greet', () => {
    it('should include the name in the message', () => {
        // expect(greet('kumar')).toBe('Welcome kumar');
        expect(greet('kumar')).toContain('kumar');
    });
});
