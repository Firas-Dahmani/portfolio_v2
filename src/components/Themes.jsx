export const lightTheme = {

    body:"#fff",
    text:"#000",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "252, 246, 244",
    textRgba:"0,0,0",
}

export const DarkTheme = {

    body:"#000",
    text:"#fff",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "252, 246, 244",
    bodyRgba:"0,0,0",
}

// Breakpoints in em
export const breakpoints = {
    sm: 20,
    md: 30,
    lg: 45,
    xl: 60,
    xxl: 80,
  };
  
  export const mediaQueries = (key) => {
    return (style) => `@media (max-width: ${key}em) { ${style} }`;
  };