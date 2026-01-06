'use client';

import { useState } from 'react';
import { Calendar, Clock, CheckCircle, User } from 'lucide-react';

export default function AgendamentoDemo() {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const dates = ['Hoje', 'Amanhã', 'Quarta-feira'];
    const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

    return (
        <div className="max-w-md mx-auto my-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-blue-600 p-6 text-white">
                <h1 className="text-2xl font-bold">Agendamento Online</h1>
                <p className="opacity-90">Clínica Exemplo Saúde</p>
            </div>

            <div className="p-6">
                {step === 1 && (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-blue-600" /> Escolha o dia
                            </h2>
                            <div className="grid grid-cols-3 gap-2">
                                {dates.map((date) => (
                                    <button
                                        key={date}
                                        onClick={() => setSelectedDate(date)}
                                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${selectedDate === date
                                                ? 'bg-blue-50 border-blue-500 text-blue-700'
                                                : 'border-gray-200 hover:border-blue-300'
                                            }`}
                                    >
                                        {date}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedDate && (
                            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-blue-600" /> Escolha o horário
                                </h2>
                                <div className="grid grid-cols-3 gap-2">
                                    {times.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${selectedTime === time
                                                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                                                    : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            disabled={!selectedDate || !selectedTime}
                            onClick={() => setStep(2)}
                            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                        >
                            Continuar
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
                        <div>
                            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <User className="h-5 w-5 text-blue-600" /> Seus dados
                            </h2>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Nome completo"
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="WhatsApp"
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                            <p><strong>Resumo:</strong></p>
                            <p>Consulta em {selectedDate} às {selectedTime}</p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Voltar
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="text-center py-8 animate-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Agendado!</h2>
                        <p className="text-gray-600 mb-6">
                            Você receberá uma confirmação no seu WhatsApp em instantes.
                        </p>
                        <button
                            onClick={() => {
                                setStep(1);
                                setSelectedDate(null);
                                setSelectedTime(null);
                            }}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Fazer novo agendamento
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
