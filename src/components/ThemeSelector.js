import { useTheme } from "../hooks/useTheme"

// styles
import "./ThemeSelector.css"

const themeColors = ['#f8ae00', '#0bc50e', '#9825a0']

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  
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
    </div>
  )
}
