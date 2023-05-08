/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'media',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                'josefin-sans': ['josefin sans'],
                'josefin-sans-italic': ['josefin sans italic'],
                sans: [
                    'Inter var, sans-serif',
                    {
                        fontFeatureSettings: '"cv11", "ss01"',
                        fontVariationSettings: '"opsz" 32'
                    }
                ]
            },
            backgroundImage: {
                lightning: "url('/images/lightning-volcano.webp')",
                lightning1: "url('/images/lightning1.webp')",
                'lightning1-chill': "url('/images/lightning1-chill.png')",
                'lightning1-chill2': "url('/images/lightning1-chill2.png')",
                lightning2: "url('/images/lightning2.webp')"
            },
            dropShadow: {
                hard: '4px 4px 0px #0d579b',
                'hard-sm': '2px 2px 0px #0d579b'
            },
            colors: {
                ltngWhite: '#FFF0D6',
                ltngYellow: '#EEC47A',
                btcOrange: '#f7931a',
                btcGray: '#4d4d4d',
                btcBlue: '#0d579b',
                btcGreen: '#329239'
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
