/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "4rem",
            },
            colors: {
                noir: {
                    300: "rgb(25, 25, 25)",
                },
            },
        },
    },
    plugins: [],
};
