export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                tn: {
                    light: {
                        DEFAULT: '#f1f5f9',
                        hover: '#cbd5e1',
                        focus: '#cbd5e1',
                        disabled: '#94a3b8',
                        text: {
                            DEFAULT: '#1e293b',
                            hover: '#64748b',
                            focus: '#334155',
                            disabled: '#475569'
                        }
                    },
                    dark: {
                        DEFAULT: '#1e293b',
                        hover: '#475569',
                        focus: '#475569',
                        disabled: '#94a3b8',
                        text: {
                            DEFAULT: '#f8fafc',
                            hover: '#64748b',
                            focus: '#cbd5e1',
                            disabled: '#94a3b8'
                        }
                    }
                },
            },
        },
    },
    plugins: [
        require("tw-elements/dist/plugin.cjs")
    ],
}