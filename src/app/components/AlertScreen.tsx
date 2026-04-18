import { AlertCircle, Instagram, Clock, ShieldAlert, ChevronLeft, ShieldOff } from 'lucide-react';

type AlertScreenProps = {
  onNavigate: (screen: 'home' | 'alert' | 'guide') => void;
};

export function AlertScreen({ onNavigate }: AlertScreenProps) {
  return (
    <div className="flex flex-col h-full bg-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-6 text-white">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 mb-4 text-red-100 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Volver</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <AlertCircle className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl mb-1">ALERTA ACTIVA</h1>
            <p className="text-red-100 text-sm">Requiere atención inmediata</p>
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

        {/* Platform Detected */}
        <div className="bg-white rounded-xl p-5 mb-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Plataforma Detectada</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-lg text-gray-900">Instagram</p>
              <p className="text-sm text-gray-500">Mensajes directos</p>
            </div>
          </div>
        </div>

        {/* Pattern Details */}
        <div className="bg-white rounded-xl p-5 mb-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Patrón Detectado</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">Solicitud de datos personales</p>
                <p className="text-xs text-gray-500">Conversación con perfil desconocido</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">Horario inusual</p>
                <p className="text-xs text-gray-500">Actividad a las 11:48pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-200">
          <p className="text-xs text-amber-800 mb-2">⚠️ Señales adicionales</p>
          <ul className="text-sm text-amber-900 space-y-1">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Conversación iniciada hace menos de 24 horas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Patrón de mensajes frecuentes y rápidos</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('guide')}
            className="w-full bg-blue-600 text-white rounded-xl p-4 hover:bg-blue-700 transition-colors shadow-md"
          >
            Ver Guía de Acción
          </button>
          <button className="w-full bg-red-600 text-white rounded-xl p-4 hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2">
            <ShieldOff className="w-5 h-5" />
            Bloquear App
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-white border-2 border-gray-300 text-gray-700 rounded-xl p-4 hover:bg-gray-50 transition-colors"
          >
            Marcar como Revisado
          </button>
        </div>
      </div>
    </div>
  );
}
