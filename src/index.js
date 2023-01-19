import './style.css';
import MainFoo from './app/App.js';

document.addEventListener('DOMContentLoaded', () => {
  const data = `Collapsible content is minimally styled - we add only a bit of margin between the bar and content, 
                and the header adopts the default theme styles of the container within which it sits.
                To provide a stronger visual connection between the collapsible header and content, add 
                the data-content-theme attribute to the wrapper and specify a theme swatch letter. 
                This applies the border and background color of the swatch to the content block and 
                changes the corner rounding to square off the bottom of the header and round the bottom 
                of the content block instead to visually group these elements.`;
  MainFoo(data);
});
