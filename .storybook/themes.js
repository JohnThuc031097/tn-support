// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create(
    {
        base: 'dark',

        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',

        // brandTitle: 'T-Monitor',
        // brandUrl: 'https://example.com',
        // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
        // brandTarget: '_self',

        //
        colorPrimary: '#3A10E5',
        colorSecondary: '#585C6D',

        // UI
        appBg: '#1e293b',
        appContentBg: '#1e293b',
        appBorderColor: '#585C6D',
        appBorderRadius: 4,

        // Text colors
        textColor: '#cbd5e1',
        textInverseColor: '#cbd5e1',

        // Toolbar default and active colors
        barTextColor: '#cbd5e1',
        barSelectedColor: '#f8fafc',
        barBg: '#1e293b',

        // Form colors
        inputBg: '#1e293b',
        inputBorder: '#10162F',
        inputTextColor: '#cbd5e1',
        inputBorderRadius: 2,

    }
);