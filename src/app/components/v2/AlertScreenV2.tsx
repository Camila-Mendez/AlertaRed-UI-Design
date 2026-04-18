import { AlertCircle, Instagram, Clock, ShieldAlert, ChevronLeft, ShieldOff, History, TrendingUp } from 'lucide-react';

type AlertScreenV2Props = {
  onNavigate: (screen: 'home' | 'alert' | 'guide' | 'history' | 'alertDetail', alertId?: string) => void;
};

export function AlertScreenV2({ onNavigate }: AlertScreenV2Props) {
  return (
    <div className="flex flex-col h-full bg-[#0D1B2A]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#D62828] to-[#B91C1C] px-6 py-6 text-white border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-red-100 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Volver</span>
          </button>
          <button
            onClick={() => onNavigate('history')}
            className="p-2 text-white hover:bg-red-700/80 rounded-lg transition-colors"
            aria-label="Historial"
          >
            <History className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
            <AlertCircle className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl mb-1">ALERTA ACTIVA</h1>
            <p className="text-red-100 text-sm">Hoy, 18 de Abril • 11:48 PM</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6">
        {/* Risk Level Badge */}
        <div className="bg-red-600 text-white rounded-xl p-4 mb-6 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wide">NIVEL ALTO</span>
          </div>
          <p className="text-red-100 text-sm">
            Se detectaron múltiples señales de riesgo
          </p>
        </div>

        {/* Similar Alerts Notice */}
        <div className="bg-amber-500/15 rounded-xl p-4 mb-4 border border-amber-400/35">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-amber-50 mb-1 font-medium">Primera alerta de este tipo</p>
              <p className="text-xs text-amber-100/95 leading-relaxed">
                No se han detectado patrones similares en los últimos 30 días
              </p>
            </div>
          </div>
        </div>

        {/* Platform Detected */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-4 shadow-sm border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Plataforma Detectada</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-lg text-white">Instagram</p>
              <p className="text-sm text-gray-400">Mensajes directos</p>
            </div>
          </div>
        </div>

        {/* Pattern Details */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-4 shadow-sm border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Patrones Detectados</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              </div>
              <div>
                <p className="text-sm text-white mb-1">Solicitud de datos personales</p>
                <p className="text-xs text-gray-400">Conversación con perfil desconocido</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-white mb-1">Horario inusual</p>
                <p className="text-xs text-gray-400">Actividad a las 11:48pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-4 shadow-sm border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Contexto Adicional</p>
          <ul className="text-sm text-white space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#D62828] mt-0.5">•</span>
              <span>Conversación iniciada hace menos de 24 horas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D62828] mt-0.5">•</span>
              <span>Patrón de mensajes frecuentes y rápidos (12 mensajes)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-0.5">•</span>
              <span>Actividad fuera del horario habitual de uso</span>
            </li>
          </ul>
        </div>

        {/* Response Time */}
        <div className="bg-blue-500 bg-opacity-20 rounded-xl p-4 mb-6 border border-blue-500 border-opacity-30">
          <p className="text-xs text-blue-300 mb-2">⏱️ Tiempo de respuesta recomendado</p>
          <p className="text-sm text-blue-100">
            Por el nivel de riesgo, se recomienda revisar esta alerta en las próximas 2 horas.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('guide')}
            className="w-full bg-blue-600 text-white rounded-xl p-4 hover:bg-blue-700 transition-colors shadow-md"
          >
            Ver Guía de Acción
          </button>
          <button className="w-full bg-[#D62828] text-white rounded-xl p-4 hover:bg-[#B91C1C] transition-colors shadow-md flex items-center justify-center gap-2">
            <ShieldOff className="w-5 h-5" />
            Bloquear App Temporalmente
          </button>
          <button
            onClick={() => onNavigate('alertDetail', '1')}
            className="w-full bg-[#1A2937] border-2 border-gray-700 text-white rounded-xl p-4 hover:bg-[#0F2027] transition-colors"
          >
            Ver Detalles Completos
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-transparent border border-gray-700 text-gray-300 rounded-xl p-4 hover:bg-[#1A2937] transition-colors"
          >
            Marcar como Revisada
          </button>
        </div>
      </div>
    </div>
  );
}
