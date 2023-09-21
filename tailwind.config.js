/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "media",
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                "josefin-sans": ["josefin sans"],
                "josefin-sans-italic": ["josefin sans italic"],
                sans: [
                    "Inter var, sans-serif",
                    {
                        fontFeatureSettings: '"cv11", "ss01"',
                        fontVariationSettings: '"opsz" 32',
                    },
                ],
            },
            grayscale: {
                50: "50%",
            },
            backgroundImage: {
                alps1: "url('/images/hero/alps1.webp')",
                ferns1: "url('/images/hero/ferns1.webp')",
                jungle1: "url('/images/hero/jungle1.webp')",
                jungle2: "url('/images/hero/jungle2.webp')",
                beach1: "url('/images/hero/beach1.webp')",
                field1: "url('/images/hero/field1.webp')",
                patagonia1: "url('/images/hero/patagonia1.webp')",
                "mt-fuji240": "url('/images/hero/sunset-mt-fuji-2-a40.webp')",
                "mt-fuji240mobile": "url('/images/hero/sunset-mt-fuji-2-a40-mobile.webp')",
            },
            dropShadow: {
                hard: "4px 4px 0px #0d579b",
                "hard-sm": "2px 2px 0px #0d579b",
            },
            colors: {
                ltngWhite: "#FFF0D6",
                ltngYellow: "#EEC47A",
                btcOrange: "#f7931a",
                btcGray: "#4d4d4d",
                btcBlue: "#0d579b",
                btcGreen: "#329239",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
