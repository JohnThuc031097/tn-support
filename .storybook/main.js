/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
        "@storybook/addon-mdx-gfm"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {},
    docs: {
        autodocs: "tag",
    },
};
export default config;
