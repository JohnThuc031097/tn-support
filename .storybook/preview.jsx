import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/index.css'
import { ColorModeProvider } from '../src/contexts/ColorModeContext';
import { StrictMode } from 'react';

export const decorators = [
    withThemeByDataAttribute({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
        attributeName: 'data-mode',
    }),
    (Story) => (
        <StrictMode>
            <ColorModeProvider>
                {Story()}
            </ColorModeProvider>
        </StrictMode>
    ),
];

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'light', value: '#f8fafc' },
                { name: 'dark', value: '#334155' },
            ],
        },
    },
    decorators
};

export default preview;
