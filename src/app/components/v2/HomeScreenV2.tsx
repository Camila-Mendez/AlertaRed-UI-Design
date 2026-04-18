import { Shield, Clock, Smartphone, Bell, TrendingDown, History, BarChart3, Calendar } from 'lucide-react';

type HomeScreenV2Props = {
  onNavigate: (screen: 'home' | 'alert' | 'guide' | 'history' | 'alertDetail', alertId?: string) => void;
};

export function HomeScreenV2({ onNavigate }: HomeScreenV2Props) {
  const recentActivity = [
    { time: '2 horas', type: 'scan', message: 'Análisis de notificaciones completado', count: 12 },
    { time: '5 horas', type: 'app', message: 'Nueva app detectada: TikTok', count: null },
    { time: '8 horas', type: 'clear', message: 'Sin señales de riesgo detectadas', count: null },
    { time: '1 día', type: 'scan', message: 'Análisis nocturno completado', count: 8 },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0D1B2A]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A2937] to-[#0F2027] px-6 py-6 text-white border-b border-gray-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-[#D62828]" />
            <h1 className="text-2xl">
              Alerta<span className="text-[#D62828]">Red</span>
            </h1>
          </div>
          <button
            onClick={() => onNavigate('history')}
            className="p-2 hover:bg-[#1A2937] rounded-lg transition-colors"
          >
            <History className="w-6 h-6" />
          </button>
        </div>
        <p className="text-gray-400 text-sm">Protección Digital Activa</p>
      </div>

      {/* Status Card */}
      <div className="px-6 -mt-4 relative z-10">
        <div className="bg-[#1A2937] rounded-2xl shadow-lg p-6 border-2 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            <span className="text-lg text-white">Modo Pasivo Activo</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Última revisión</p>
              <p className="text-sm text-white">Hace 15 min</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Capas activas</p>
              <p className="text-sm text-white">0, 1, 2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6">
        {/* Stats Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-gray-400" />
              <h2 className="text-white">Resumen (24h)</h2>
            </div>
            <button
              onClick={() => onNavigate('history')}
              className="text-sm text-[#D62828] hover:text-[#B91C1C]"
            >
              Ver todo
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#1A2937] rounded-xl p-4 shadow-sm border border-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4 text-[#D62828]" />
                <p className="text-xs text-gray-400">Apps</p>
              </div>
              <p className="text-2xl text-white">8</p>
              <p className="text-xs text-green-400 mt-1">↓ 2 menos que ayer</p>
            </div>

            <div className="bg-[#1A2937] rounded-xl p-4 shadow-sm border border-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-4 h-4 text-[#D62828]" />
                <p className="text-xs text-gray-400">Notificaciones</p>
              </div>
              <p className="text-2xl text-white">47</p>
              <p className="text-xs text-gray-400 mt-1">Analizadas</p>
            </div>
          </div>

          <div className="bg-green-500 bg-opacity-20 rounded-xl p-4 border border-green-500 border-opacity-30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Sin alertas detectadas</p>
                <p className="text-xs text-green-400 mt-1">14 días consecutivos seguros</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <h2 className="text-white">Esta semana</h2>
          </div>

          <div className="bg-[#1A2937] rounded-xl p-4 shadow-sm border border-gray-800">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Total de análisis</span>
                <span className="text-sm text-white">156</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-[#D62828] h-2 rounded-full" style={{ width: '68%' }} />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Lun</span>
                <span>Mar</span>
                <span>Mié</span>
                <span>Jue</span>
                <span>Vie</span>
                <span>Sáb</span>
                <span className="text-[#D62828]">Dom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <h2 className="text-white">Actividad reciente</h2>
            </div>
            <button
              onClick={() => onNavigate('history')}
              className="text-sm text-[#D62828] hover:text-[#B91C1C]"
            >
              Ver historial
            </button>
          </div>

          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="bg-[#1A2937] rounded-lg p-3 shadow-sm border border-gray-800 flex items-center gap-3"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'scan' ? 'bg-red-600/25' :
                  activity.type === 'app' ? 'bg-purple-500 bg-opacity-20' :
                  'bg-green-500 bg-opacity-20'
                }`}>
                  {activity.type === 'scan' && <Bell className="w-4 h-4 text-red-100" />}
                  {activity.type === 'app' && <Smartphone className="w-4 h-4 text-purple-400" />}
                  {activity.type === 'clear' && <Shield className="w-4 h-4 text-green-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{activity.message}</p>
                  <p className="text-xs text-gray-500">Hace {activity.time}</p>
                </div>
                {activity.count && (
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                    {activity.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo Button */}
        <div className="pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-3 text-center">Vista de demostración</p>
          <button
            onClick={() => onNavigate('alert')}
            className="w-full bg-[#D62828] text-white rounded-xl p-4 hover:bg-[#B91C1C] transition-colors shadow-md"
          >
            Ver Alerta de Ejemplo
          </button>
        </div>
      </div>
    </div>
  );
}
