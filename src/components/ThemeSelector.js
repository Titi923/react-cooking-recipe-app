import { useTheme } from "../hooks/useTheme"
import modeIcon from "../assets/icon_sun.svg"

// styles
import "./ThemeSelector.css"

const themeColors = ['#f8ae00', '#0bc50e', '#9825a0']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light': 'dark');
  }
  
  return (
    <div className="theme-selector">
        <div className="theme-buttons">
        {themeColors.map(color => (
          <div 
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
      <div className="mode-toggle">
        <img 
          onClick={toggleMode}
          src={modeIcon} 
          alt="dark/light toggle icon"
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
    </div>
  )
}
