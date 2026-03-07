import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import StartScreen from './components/StartScreen';
import FallbackSelector from './components/FallbackSelector';
import ResultsScreen from './components/ResultsScreen';
import LoadingIsland from './components/LoadingIsland';

function AppContent() {
  const { state } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-ocean-50/30 to-white">
      <Header />
      <main className="max-w-lg mx-auto pb-8">
        {state.step === 'start' && <StartScreen />}
        {state.step === 'locating' && <LoadingIsland message="Detecting your location..." />}
        {state.step === 'fallback' && <FallbackSelector />}
        {state.step === 'results' && <ResultsScreen />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
