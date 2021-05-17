module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                skin: {
                    primary: `var(--color-text-primary)`,
                    base: `var(--color-text-base)`,
                    heading: `var(--color-text-heading)`,
                    'neutral-inverted': `var(--color-text-neutral-inverted)`,
                    'neutral-body': `var(--color-text-neutral-body)`,
                },
            },
            backgroundColor: {
                skin: {
                    neutral: `var(--color-background-neutral)`,
                    'neutral-inverted': `var(--color-background-neutral-inverted)`,
                    hover: `var(--color-background-base)`,
                    'hover-inverted': `var(--color-background-hover)`,
                },
            },
            gradientColorStops: {
                skin: {
                    'primary-start': `var(--color-gradient-primary-start)`,
                    'primary-end': `var(--color-gradient-primary-end)`,
                    'neutral-start': `var(--color-gradient-neutral-start)`,
                    'neutral-end': `var(--color-gradient-neutral-end)`,
                },
            },
            fontFamily: {
                body: ['Overpass'],
                utility: ['Ubuntu'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
