import { ChevronLeft, Instagram, CheckCircle2, MessageSquare, Search, Eye } from 'lucide-react';

type GuideScreenProps = {
  onNavigate: (screen: 'home' | 'alert' | 'guide') => void;
};

export function GuideScreen({ onNavigate }: GuideScreenProps) {
  const steps = [
    {
      number: 1,
      title: 'Abre Instagram en el celular de tu hijo/a',
      description: 'Busca el ícono de Instagram en la pantalla principal o en el cajón de aplicaciones.',
      icon: Instagram,
      color: 'bg-purple-500',
    },
    {
      number: 2,
      title: 'Toca el ícono de mensajes',
      description: 'En la esquina superior derecha, toca el ícono de mensajes directos (DM).',
      icon: MessageSquare,
      color: 'bg-blue-500',
    },
    {
      number: 3,
      title: 'Busca conversación nueva',
      description: 'Identifica conversaciones recientes o con perfiles que no reconozcas. Presta atención a nombres desconocidos.',
      icon: Search,
      color: 'bg-green-500',
    },
    {
      number: 4,
      title: 'Revisa mensajes recientes',
      description: 'Lee las últimas conversaciones. Busca solicitudes de información personal, fotos, o invitaciones a encuentros.',
      icon: Eye,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-6 text-white">
        <button
          onClick={() => onNavigate('alert')}
          className="flex items-center gap-2 mb-4 text-green-100 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Volver a Alerta</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl mb-1">GUÍA CONTEXTUAL</h1>
            <p className="text-green-100 text-sm">Paso a paso para verificar</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6 bg-gray-50">
        {/* Platform Info */}
        <div className="bg-white rounded-xl p-5 mb-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Plataforma detectada</p>
              <p className="text-lg text-gray-900">Instagram</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white shadow-md`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      Paso {step.number}
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Tips */}
        <div className="bg-blue-50 rounded-xl p-5 mb-6 border border-blue-200">
          <p className="text-sm text-blue-900 mb-3">💡 Consejos de seguridad</p>
          <ul className="text-sm text-blue-800 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>Mantén la calma y conversa con tu hijo/a sin juzgar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>Toma capturas de pantalla como evidencia si es necesario</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>Si encuentras algo preocupante, contacta a las autoridades</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-6">
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-green-600 text-white rounded-xl p-4 hover:bg-green-700 transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Marcar como Revisado
          </button>
          <button
            onClick={() => onNavigate('alert')}
            className="w-full bg-white border-2 border-gray-300 text-gray-700 rounded-xl p-4 hover:bg-gray-50 transition-colors"
          >
            Volver a Alerta
          </button>
        </div>
      </div>
    </div>
  );
}
