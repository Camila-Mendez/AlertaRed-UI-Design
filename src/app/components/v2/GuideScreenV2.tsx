import { ChevronLeft, Instagram, CheckCircle2, MessageSquare, Search, Eye, Clock, BookOpen } from 'lucide-react';
import { useState } from 'react';

type GuideScreenV2Props = {
  onNavigate: (screen: 'home' | 'alert' | 'guide' | 'history' | 'alertDetail', alertId?: string) => void;
};

export function GuideScreenV2({ onNavigate }: GuideScreenV2Props) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      number: 1,
      title: 'Abre Instagram en el celular de tu hijo/a',
      description: 'Busca el ícono de Instagram en la pantalla principal o en el cajón de aplicaciones.',
      icon: Instagram,
      color: 'bg-purple-500',
      estimatedTime: '30 seg',
    },
    {
      number: 2,
      title: 'Toca el ícono de mensajes',
      description: 'En la esquina superior derecha, toca el ícono de mensajes directos (DM).',
      icon: MessageSquare,
      color: 'bg-blue-500',
      estimatedTime: '15 seg',
    },
    {
      number: 3,
      title: 'Busca conversación nueva',
      description: 'Identifica conversaciones recientes o con perfiles que no reconozcas. Presta atención a nombres desconocidos.',
      icon: Search,
      color: 'bg-green-500',
      estimatedTime: '1 min',
    },
    {
      number: 4,
      title: 'Revisa mensajes recientes',
      description: 'Lee las últimas conversaciones. Busca solicitudes de información personal, fotos, o invitaciones a encuentros.',
      icon: Eye,
      color: 'bg-orange-500',
      estimatedTime: '2-3 min',
    },
  ];

  const toggleStep = (stepNumber: number) => {
    if (completedSteps.includes(stepNumber)) {
      setCompletedSteps(completedSteps.filter(s => s !== stepNumber));
    } else {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="flex flex-col h-full bg-[#0D1B2A]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A2937] to-[#0F2027] px-6 py-6 text-white border-b border-gray-800">
        <button
          onClick={() => onNavigate('alert')}
          className="flex items-center gap-2 mb-4 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Volver a Alerta</span>
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl mb-1">GUÍA CONTEXTUAL</h1>
            <p className="text-gray-400 text-sm">Paso a paso para verificar</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Progreso</span>
            <span className="text-sm text-white">{completedSteps.length} de {steps.length}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-[#D62828] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-6">
        {/* Platform Info */}
        <div className="bg-[#1A2937] rounded-xl p-5 mb-6 shadow-sm border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Plataforma detectada</p>
                <p className="text-lg text-white">Instagram</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Tiempo estimado</p>
              <p className="text-lg text-white">~4 min</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          {steps.map((step) => {
            const isCompleted = completedSteps.includes(step.number);
            return (
              <div
                key={step.number}
                className={`rounded-xl p-5 shadow-sm border-2 transition-all ${
                  isCompleted
                    ? 'border-green-500 bg-green-500 bg-opacity-10'
                    : 'border-gray-800 bg-[#1A2937] hover:border-gray-700'
                }`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${isCompleted ? 'bg-green-500' : step.color} rounded-full flex items-center justify-center text-white shadow-md transition-all`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full">
                        Paso {step.number}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {step.estimatedTime}
                      </span>
                    </div>
                    <h3 className={`mb-2 ${isCompleted ? 'text-green-300' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-3 ${
                      isCompleted ? 'text-green-200' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                    <button
                      onClick={() => toggleStep(step.number)}
                      className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                        isCompleted
                          ? 'bg-emerald-600/20 text-emerald-100 hover:bg-emerald-600/30 border border-emerald-400/35'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isCompleted ? 'Desmarcar' : 'Marcar como Completado'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Tips */}
        <div className="bg-blue-500 bg-opacity-20 rounded-xl p-5 mb-6 border border-blue-500 border-opacity-30">
          <p className="text-sm text-blue-100 mb-3">💡 Consejos de seguridad</p>
          <ul className="text-sm text-blue-200 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>Mantén la calma y conversa con tu hijo/a sin juzgar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>Toma capturas de pantalla como evidencia si es necesario</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>Si encuentras algo preocupante, contacta a las autoridades locales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>No elimines mensajes antes de documentar la evidencia</span>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="bg-purple-500 bg-opacity-20 rounded-xl p-5 mb-6 border border-purple-500 border-opacity-30">
          <p className="text-sm text-purple-100 mb-3">📚 Recursos adicionales</p>
          <div className="space-y-2">
            <button className="w-full text-left text-sm text-purple-200 hover:text-purple-100 transition-colors">
              → Guía de conversación con adolescentes
            </button>
            <button className="w-full text-left text-sm text-purple-200 hover:text-purple-100 transition-colors">
              → Línea de ayuda nacional (800-AYUDA)
            </button>
            <button className="w-full text-left text-sm text-purple-200 hover:text-purple-100 transition-colors">
              → Cómo denunciar contenido en Instagram
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-6">
          <button
            onClick={() => onNavigate('home')}
            disabled={completedSteps.length < steps.length}
            className={`w-full rounded-xl p-4 transition-colors shadow-md flex items-center justify-center gap-2 ${
              completedSteps.length === steps.length
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            Marcar como Revisada
          </button>
          {completedSteps.length < steps.length && (
            <p className="text-xs text-center text-gray-500">
              Completa todos los pasos para marcar como revisada
            </p>
          )}
          <button
            onClick={() => onNavigate('alert')}
            className="w-full bg-transparent border-2 border-gray-700 text-white rounded-xl p-4 hover:bg-[#1A2937] transition-colors"
          >
            Volver a Alerta
          </button>
        </div>
      </div>
    </div>
  );
}
