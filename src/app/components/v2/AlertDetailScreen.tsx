import { ChevronLeft, Instagram, Clock, MapPin, Smartphone, Activity, CheckCircle2, MessageCircle, Chrome, AlertCircle } from 'lucide-react';

type AlertDetailScreenProps = {
  onNavigate: (screen: 'home' | 'alert' | 'guide' | 'history' | 'alertDetail', alertId?: string) => void;
  alertId: string | null;
};

export function AlertDetailScreen({ onNavigate, alertId }: AlertDetailScreenProps) {
  // Mock data based on alertId
  const alertData = {
    '1': {
      date: 'Hoy, 18 de Abril',
      time: '11:48 PM',
      platform: 'Instagram',
      level: 'high',
      status: 'active',
      patterns: [
        'Solicitud de datos personales',
        'Horario inusual de actividad',
        'Conversación nueva (< 24h)',
        'Patrón de mensajes rápidos',
      ],
      timeline: [
        { time: '11:48 PM', event: 'Alerta generada - Nivel Alto', type: 'alert' },
        { time: '11:45 PM', event: 'Capa 2 activada - NLP detectó patrón de riesgo', type: 'detection' },
        { time: '11:42 PM', event: 'Actividad fuera de horario habitual', type: 'warning' },
        { time: '11:38 PM', event: 'Conversación iniciada con perfil desconocido', type: 'info' },
      ],
      context: {
        conversationAge: 'Menos de 1 hora',
        messageCount: '12 mensajes',
        deviceLocation: 'San José, Costa Rica',
        networkType: 'WiFi residencial',
      },
    },
    '3': {
      date: 'Ayer, 17 de Abril',
      time: '10:15 PM',
      platform: 'WhatsApp',
      level: 'medium',
      status: 'resolved',
      patterns: [
        'Conversación con número desconocido',
        'Solicitud de encuentro presencial',
      ],
      timeline: [
        { time: '9:20 AM (Hoy)', event: 'Marcada como resuelta por el cuidador', type: 'resolved' },
        { time: '10:15 PM', event: 'Alerta generada - Nivel Medio', type: 'alert' },
        { time: '10:12 PM', event: 'Patrón de invitación detectado', type: 'detection' },
      ],
      context: {
        conversationAge: '2 días',
        messageCount: '28 mensajes',
        deviceLocation: 'San José, Costa Rica',
        networkType: 'Datos móviles',
      },
    },
    '5': {
      date: '16 de Abril',
      time: '11:22 PM',
      platform: 'Chrome',
      level: 'low',
      status: 'resolved',
      patterns: ['Búsqueda inusual detectada', 'Consultas fuera del contexto habitual'],
      timeline: [
        { time: '11:35 PM', event: 'Marcada como resuelta por el cuidador', type: 'resolved' },
        { time: '11:22 PM', event: 'Alerta generada - Nivel Bajo', type: 'alert' },
        { time: '11:20 PM', event: 'Patrón de búsqueda atípico detectado', type: 'detection' },
      ],
      context: {
        conversationAge: 'Sesión actual',
        messageCount: '3 consultas',
        deviceLocation: 'San José, Costa Rica',
        networkType: 'WiFi residencial',
      },
    },
    '7': {
      date: '14 de Abril',
      time: '10:05 PM',
      platform: 'Instagram',
      level: 'medium',
      status: 'resolved',
      patterns: ['Mensaje con solicitud de foto', 'Contacto poco frecuente'],
      timeline: [
        { time: '15 Abr', event: 'Marcada como resuelta por el cuidador', type: 'resolved' },
        { time: '10:05 PM', event: 'Alerta generada - Nivel Medio', type: 'alert' },
        { time: '10:02 PM', event: 'Clasificador de contenido activado', type: 'detection' },
      ],
      context: {
        conversationAge: '1 día',
        messageCount: '6 mensajes',
        deviceLocation: 'San José, Costa Rica',
        networkType: 'Datos móviles',
      },
    },
  };

  const alert =
    alertId != null && alertData[alertId as keyof typeof alertData]
      ? alertData[alertId as keyof typeof alertData]
      : alertData['1'];

  return (
    <div className="flex flex-col h-full bg-[#0D1B2A]">
      {/* Header */}
      <div className={`px-6 py-6 text-white border-b border-gray-800 ${
        alert.level === 'high' ? 'bg-gradient-to-r from-[#D62828] to-[#B91C1C]' :
        alert.level === 'medium' ? 'bg-gradient-to-r from-orange-600 to-orange-700' :
        'bg-gradient-to-r from-yellow-600 to-yellow-700'
      }`}>
        <button
          onClick={() => onNavigate('history')}
          className={`flex items-center gap-2 mb-4 transition-colors ${
            alert.level === 'high' ? 'text-red-100 hover:text-white' :
            alert.level === 'medium' ? 'text-orange-100 hover:text-white' :
            'text-yellow-100 hover:text-white'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Volver al Historial</span>
        </button>
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            alert.level === 'high' ? 'bg-red-500' :
            alert.level === 'medium' ? 'bg-orange-500' :
            'bg-yellow-500'
          }`}>
            {alert.platform === 'Instagram' ? (
              <Instagram className="w-7 h-7 text-white" />
            ) : alert.platform === 'WhatsApp' ? (
              <MessageCircle className="w-7 h-7 text-white" />
            ) : alert.platform === 'Chrome' ? (
              <Chrome className="w-7 h-7 text-white" />
            ) : (
              <AlertCircle className="w-7 h-7 text-white" />
            )}
          </div>
          <div>
            <h1 className="text-xl mb-1">Detalle de Alerta</h1>
            <p className={`text-sm ${
              alert.level === 'high' ? 'text-red-100' :
              alert.level === 'medium' ? 'text-orange-100' :
              'text-yellow-100'
            }`}>
              {alert.date} • {alert.time}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6">
        {/* Status Badge */}
        {alert.status === 'resolved' && (
          <div className="bg-gray-700 bg-opacity-30 rounded-xl p-4 mb-4 flex items-center gap-3 border border-gray-700">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-white">Alerta Resuelta</p>
              <p className="text-xs text-gray-400">Revisada y marcada como resuelta</p>
            </div>
          </div>
        )}

        {/* Platform & Level */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-4 shadow-sm border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Información General</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Plataforma</span>
              <span className="text-sm text-white">{alert.platform}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Nivel de riesgo</span>
              <span className={`text-sm px-3 py-1 rounded-full ${
                alert.level === 'high' ? 'bg-red-600/25 text-red-100 border border-red-400/40' :
                alert.level === 'medium' ? 'bg-orange-500/20 text-orange-100 border border-orange-400/40' :
                'bg-yellow-500/20 text-yellow-100 border border-yellow-400/40'
              }`}>
                {alert.level === 'high' ? 'Alto' : alert.level === 'medium' ? 'Medio' : 'Bajo'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Estado</span>
              <span className={`text-sm px-3 py-1 rounded-full ${
                alert.status === 'active' ? 'bg-red-600/25 text-red-100 border border-red-400/40' : 'bg-gray-700 text-gray-300'
              }`}>
                {alert.status === 'active' ? 'Activa' : 'Resuelta'}
              </span>
            </div>
          </div>
        </div>

        {/* Patterns Detected */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-4 shadow-sm border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Patrones Detectados</p>
          <div className="space-y-2">
            {alert.patterns.map((pattern, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                  alert.level === 'high' ? 'bg-[#D62828]' :
                  alert.level === 'medium' ? 'bg-orange-400' :
                  'bg-yellow-400'
                }`} />
                <p className="text-sm text-white">{pattern}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Context Data */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-4 shadow-sm border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Contexto</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <p className="text-xs text-gray-400">Antigüedad</p>
              </div>
              <p className="text-sm text-white">{alert.context.conversationAge}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-gray-500" />
                <p className="text-xs text-gray-400">Actividad</p>
              </div>
              <p className="text-sm text-white">{alert.context.messageCount}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                <p className="text-xs text-gray-400">Ubicación</p>
              </div>
              <p className="text-sm text-white">{alert.context.deviceLocation}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Smartphone className="w-4 h-4 text-gray-500" />
                <p className="text-xs text-gray-400">Red</p>
              </div>
              <p className="text-sm text-white">{alert.context.networkType}</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-6 shadow-sm border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Línea de Tiempo</p>
          <div className="space-y-4">
            {alert.timeline.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    item.type === 'alert' ? 'bg-[#D62828]' :
                    item.type === 'detection' ? 'bg-orange-400' :
                    item.type === 'warning' ? 'bg-yellow-400' :
                    item.type === 'resolved' ? 'bg-green-400' :
                    'bg-blue-400'
                  }`} />
                  {index < alert.timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-700 mt-1" style={{ minHeight: '32px' }} />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-xs text-gray-500 mb-1">{item.time}</p>
                  <p className="text-sm text-white">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        {alert.status === 'active' && (
          <div className="space-y-3 pb-6">
            <button
              onClick={() => onNavigate('guide')}
              className="w-full bg-blue-600 text-white rounded-xl p-4 hover:bg-blue-700 transition-colors shadow-md"
            >
              Ver Guía de Acción
            </button>
            <button
              onClick={() => onNavigate('history')}
              className="w-full bg-transparent border-2 border-gray-700 text-white rounded-xl p-4 hover:bg-[#1A2937] transition-colors"
            >
              Marcar como Revisada
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
