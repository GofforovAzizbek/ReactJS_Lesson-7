import { HomePage } from './pages/HomePage';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return <HomePage theme={theme} toggleTheme={toggleTheme} />;
}

export default App;
