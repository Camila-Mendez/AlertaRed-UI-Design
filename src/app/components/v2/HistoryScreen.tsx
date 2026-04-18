import { ChevronLeft, AlertCircle, CheckCircle2, Clock, Filter, Instagram, MessageCircle, Chrome, TrendingUp } from 'lucide-react';
import { useState } from 'react';

type HistoryScreenProps = {
  onNavigate: (screen: 'home' | 'alert' | 'guide' | 'history' | 'alertDetail', alertId?: string) => void;
};

export function HistoryScreen({ onNavigate }: HistoryScreenProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'alerts' | 'cleared'>('all');

  const historyItems = [
    {
      id: '1',
      date: 'Hoy',
      time: '11:48 PM',
      type: 'alert',
      level: 'high',
      platform: 'Instagram',
      description: 'Solicitud de datos personales + horario inusual',
      status: 'active',
      icon: Instagram,
    },
    {
      id: '2',
      date: 'Hoy',
      time: '8:30 PM',
      type: 'cleared',
      level: null,
      platform: null,
      description: 'Análisis nocturno completado - Sin señales de riesgo',
      status: 'cleared',
      icon: CheckCircle2,
    },
    {
      id: '3',
      date: 'Ayer',
      time: '10:15 PM',
      type: 'alert',
      level: 'medium',
      platform: 'WhatsApp',
      description: 'Conversación con número desconocido',
      status: 'resolved',
      icon: MessageCircle,
    },
    {
      id: '4',
      date: 'Ayer',
      time: '3:45 PM',
      type: 'cleared',
      level: null,
      platform: null,
      description: 'Análisis diurno completado - Sin señales de riesgo',
      status: 'cleared',
      icon: CheckCircle2,
    },
    {
      id: '5',
      date: '16 Abr',
      time: '11:22 PM',
      type: 'alert',
      level: 'low',
      platform: 'Chrome',
      description: 'Búsqueda inusual detectada',
      status: 'resolved',
      icon: Chrome,
    },
    {
      id: '6',
      date: '15 Abr',
      time: '9:30 PM',
      type: 'cleared',
      level: null,
      platform: null,
      description: 'Análisis completado - Todo seguro',
      status: 'cleared',
      icon: CheckCircle2,
    },
    {
      id: '7',
      date: '14 Abr',
      time: '10:05 PM',
      type: 'alert',
      level: 'medium',
      platform: 'Instagram',
      description: 'Mensaje con solicitud de foto',
      status: 'resolved',
      icon: Instagram,
    },
  ];

  const filteredItems = historyItems.filter(item => {
    if (activeFilter === 'alerts') return item.type === 'alert';
    if (activeFilter === 'cleared') return item.type === 'cleared';
    return true;
  });

  const stats = {
    totalAlerts: historyItems.filter(i => i.type === 'alert').length,
    resolvedAlerts: historyItems.filter(i => i.type === 'alert' && i.status === 'resolved').length,
    activeAlerts: historyItems.filter(i => i.type === 'alert' && i.status === 'active').length,
  };

  return (
    <div className="flex flex-col h-full bg-[#0D1B2A]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A2937] to-[#0F2027] px-6 py-6 text-white border-b border-gray-800">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 mb-4 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Volver</span>
        </button>
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-8 h-8 text-[#D62828]" />
          <div>
            <h1 className="text-2xl mb-1">Historial</h1>
            <p className="text-gray-400 text-sm">Actividad de los últimos 30 días</p>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-red-600/20 rounded-lg p-3 text-center border border-red-500/35">
            <p className="text-2xl mb-1 text-white tabular-nums">{stats.totalAlerts}</p>
            <p className="text-xs text-red-100/90">Alertas</p>
          </div>
          <div className="bg-green-500/20 rounded-lg p-3 text-center border border-green-500/35">
            <p className="text-2xl mb-1 text-white tabular-nums">{stats.resolvedAlerts}</p>
            <p className="text-xs text-green-100/90">Resueltas</p>
          </div>
          <div className="bg-amber-500/20 rounded-lg p-3 text-center border border-amber-500/35">
            <p className="text-2xl mb-1 text-white tabular-nums">{stats.activeAlerts}</p>
            <p className="text-xs text-amber-100/90">Activas</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 bg-[#1A2937] border-b border-gray-800">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Filtrar por:</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeFilter === 'all'
                ? 'bg-[#D62828] text-white'
                : 'bg-[#0D1B2A] text-gray-400 hover:bg-[#0F2027]'
            }`}
          >
            Todas ({historyItems.length})
          </button>
          <button
            onClick={() => setActiveFilter('alerts')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeFilter === 'alerts'
                ? 'bg-[#D62828] text-white'
                : 'bg-[#0D1B2A] text-gray-400 hover:bg-[#0F2027]'
            }`}
          >
            Alertas ({stats.totalAlerts})
          </button>
          <button
            onClick={() => setActiveFilter('cleared')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeFilter === 'cleared'
                ? 'bg-[#D62828] text-white'
                : 'bg-[#0D1B2A] text-gray-400 hover:bg-[#0F2027]'
            }`}
          >
            Seguras
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-auto px-6 py-4">
        <div className="space-y-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => item.type === 'alert' ? onNavigate('alertDetail', item.id) : null}
              className={`bg-[#1A2937] rounded-xl p-4 shadow-sm border-l-4 ${
                item.type === 'alert'
                  ? item.level === 'high'
                    ? 'border-[#D62828] cursor-pointer hover:bg-[#0F2027]'
                    : item.level === 'medium'
                    ? 'border-orange-500 cursor-pointer hover:bg-[#0F2027]'
                    : 'border-yellow-500 cursor-pointer hover:bg-[#0F2027]'
                  : 'border-green-500'
              } transition-all border border-gray-800`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.type === 'alert'
                    ? item.level === 'high'
                      ? 'bg-red-600/25'
                      : item.level === 'medium'
                      ? 'bg-orange-500 bg-opacity-20'
                      : 'bg-yellow-500 bg-opacity-20'
                    : 'bg-green-500 bg-opacity-20'
                }`}>
                  <item.icon className={`w-5 h-5 ${
                    item.type === 'alert'
                      ? item.level === 'high'
                        ? 'text-red-100'
                        : item.level === 'medium'
                        ? 'text-orange-300'
                        : 'text-yellow-200'
                      : 'text-green-400'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{item.time}</span>
                    {item.status === 'active' && (
                      <span className="text-xs bg-red-600/25 text-red-100 px-2 py-0.5 rounded-full border border-red-400/40">
                        Activa
                      </span>
                    )}
                    {item.status === 'resolved' && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                        Resuelta
                      </span>
                    )}
                  </div>
                  {item.platform && (
                    <p className="text-xs text-gray-500 mb-1">{item.platform}</p>
                  )}
                  <p className="text-sm text-white">{item.description}</p>
                </div>
                {item.type === 'alert' && (
                  <ChevronLeft className="w-5 h-5 text-gray-600 transform rotate-180 flex-shrink-0" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="mt-6 bg-blue-500 bg-opacity-20 rounded-xl p-4 border border-blue-500 border-opacity-30">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <p className="text-sm text-blue-100 mb-2">📊 Tendencia positiva</p>
              <p className="text-xs text-blue-200 leading-relaxed">
                La actividad de riesgo ha disminuido un 40% en comparación con el mes pasado.
                El tiempo de respuesta promedio a alertas es de 12 minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
