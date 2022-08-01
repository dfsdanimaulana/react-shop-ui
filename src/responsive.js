import { css } from 'styled-components'

// create a media template
export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 381px) {
            ${props}
        }
    `
}

// create function to return media query for tablet
export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 381px) and (max-width: 768px) {
            ${props}
        }
    `
}

// create function to return media query for desktop
export const desktop = (props) => {
    return css`
        @media only screen and (min-width: 769px) {
            ${props}
        }
    `
}