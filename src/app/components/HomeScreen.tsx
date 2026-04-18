import { Shield, Clock, Smartphone, Bell, ChevronRight } from 'lucide-react';

type HomeScreenProps = {
  onNavigate: (screen: 'home' | 'alert' | 'guide') => void;
};

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-white">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl">AlertaRed</h1>
          <Shield className="w-8 h-8" />
        </div>
        <p className="text-blue-100 text-sm">Protección Digital Activa</p>
      </div>

      {/* Status Card */}
      <div className="px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            <span className="text-lg text-gray-900">Modo Pasivo Activo</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Estado</span>
              <span className="text-green-600 font-medium">Monitoreando</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 mt-6 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-gray-600" />
          <h2 className="text-gray-900">Últimas 24 horas</h2>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Sin alertas detectadas</p>
                <p className="text-xs text-green-600 mt-1">Todo está bajo control</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Apps monitoreadas</span>
              </div>
              <span className="text-xl text-gray-900">8</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Notificaciones analizadas</span>
              </div>
              <span className="text-xl text-gray-900">47</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('alert')}
          className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-700">Ver Historial</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Demo Button */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-3 text-center">Vista de demostración</p>
          <button
            onClick={() => onNavigate('alert')}
            className="w-full bg-red-500 text-white rounded-xl p-4 hover:bg-red-600 transition-colors"
          >
            Ver Alerta de Ejemplo
          </button>
        </div>
      </div>
    </div>
  );
}
