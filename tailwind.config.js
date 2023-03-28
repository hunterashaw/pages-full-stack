const plugin = require('tailwindcss/plugin')

const generateColor = (hue, saturation) => {
    const result = {}
    for (let i = 0; i <= 1000; i += 25) {
        result[i] = `hsl(${hue}, ${saturation}%, ${100 - i / 10}%)`
    }
    return result
}
const apply = utilities => {
    const result = {}
    result[`@apply ${utilities}`] = {}
    return result
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{tsx,jsx}'],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                primary: generateColor(20, 50),
                secondary: generateColor(70, 15),
                gray: generateColor(50, 10)
            }
        }
    },
    plugins: [
        plugin(({ addBase, addComponents, addUtilities }) => {
            addBase({
                html: {
                    fontFamily: `sans-serif`
                }
            })
            addUtilities({
                '.pad': {
                    padding: '0.5rem 1rem'
                },
                '.cols-l': {
                    gridTemplateColumns: 'max-content auto'
                },
                '.cols-c': {
                    gridTemplateColumns: 'max-content auto max-content'
                },
                '.cols-r': {
                    gridTemplateColumns: 'auto max-content'
                },
                '.rows-t': {
                    gridTemplateRows: 'max-content auto'
                },
                '.rows-b': {
                    gridTemplateRows: 'auto max-content'
                },
                '.rows-c': {
                    gridTemplateRows: 'max-content auto max-content'
                }
            })
        })
    ]
}
