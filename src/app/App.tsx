import { useState } from 'react';
import { HomeScreenV2 } from './components/v2/HomeScreenV2';
import { AlertScreenV2 } from './components/v2/AlertScreenV2';
import { GuideScreenV2 } from './components/v2/GuideScreenV2';
import { HistoryScreen } from './components/v2/HistoryScreen';
import { AlertDetailScreen } from './components/v2/AlertDetailScreen';

type Screen = 'home' | 'alert' | 'guide' | 'history' | 'alertDetail';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedAlertId, setSelectedAlertId] = useState<string | null>(null);

  const handleNavigate = (screen: Screen, alertId?: string) => {
    setCurrentScreen(screen);
    if (alertId) setSelectedAlertId(alertId);
  };

  return (
    <div className="size-full flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md h-full max-h-[844px] bg-[#0D1B2A] shadow-2xl overflow-hidden">
        {currentScreen === 'home' && <HomeScreenV2 onNavigate={handleNavigate} />}
        {currentScreen === 'alert' && <AlertScreenV2 onNavigate={handleNavigate} />}
        {currentScreen === 'guide' && <GuideScreenV2 onNavigate={handleNavigate} />}
        {currentScreen === 'history' && <HistoryScreen onNavigate={handleNavigate} />}
        {currentScreen === 'alertDetail' && <AlertDetailScreen onNavigate={handleNavigate} alertId={selectedAlertId} />}
      </div>
    </div>
  );
}
