import {createContext} from 'react';

// Hooks look like a state and a Updater,as like this.
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;