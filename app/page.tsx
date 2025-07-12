'use client';

import { useState } from 'react';
import useVapi from '../hooks/use-vapi';

export default function Home() {
  const { volumeLevel, isSessionActive, conversation, callStatus, toggleCall } = useVapi();
  const [showTranscript, setShowTranscript] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'listening': return 'text-blue-500';
      case 'processing': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'ACTIVE';
      case 'listening': return 'LISTENING';
      case 'processing': return 'PROCESSING';
      case 'error': return 'ERROR';
      default: return 'INACTIVE';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">007</span>
            </div>
            <span className="text-xl font-bold tracking-wider">KYLE007</span>
          </div>
          <div className="text-sm text-gray-400 font-mono">
            CLASSIFIED • HACKATHON INTELLIGENCE
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-white/20">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">007</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 tracking-wider">
              KYLE<span className="text-gray-400">007</span>
            </h1>
            
            <div className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your elite hackathon intelligence agent. Coded to perfection, designed for victory.
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 font-mono">
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${isSessionActive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                <span className={getStatusColor(callStatus)}>{getStatusText(callStatus)}</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div>SECURITY CLEARANCE: HACKATHON</div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div>VOLUME: {Math.round(volumeLevel * 100)}%</div>
            </div>
          </div>

          {/* Mission Brief */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className="text-gray-400">// </span>MISSION BRIEF
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold mb-3 text-white">Pond Online Hackathon</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Get insider details about the Pond Online Hackathon - registration, 
                    timeline, themes, and submission requirements.
                  </p>
                  <a
                    href="https://lu.ma/soz2qohp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                  >
                    <span className="mr-2">🎯</span>
                    REGISTER NOW
                  </a>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold mb-3 text-white">Hackathon Strategy</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Master hackathon tactics - team formation, project planning, 
                    and winning presentation strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Controls */}
          <div className="mb-20">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                <span className="text-gray-400">// </span>VOICE CONTROL
              </h2>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className={`w-4 h-4 rounded-full ${isSessionActive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                  <span className={`text-sm font-mono ${getStatusColor(callStatus)}`}>
                    AGENT STATUS: {getStatusText(callStatus)}
                  </span>
                </div>
                
                <button
                  onClick={toggleCall}
                  className={`w-full py-4 px-8 rounded-lg font-bold text-lg transition-all duration-200 ${
                    isSessionActive 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isSessionActive ? 'END TRANSMISSION' : 'INITIATE CONTACT'}
                </button>
                
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {showTranscript ? 'HIDE' : 'SHOW'} TRANSCRIPT
                  </button>
                  {isSessionActive && (
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 transition-all duration-100"
                          style={{ width: `${volumeLevel * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">AUDIO</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Transcript */}
          {showTranscript && (
            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">
                  <span className="text-gray-400">// </span>TRANSMISSION LOG
                </h2>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 max-h-96 overflow-y-auto">
                  {conversation.length === 0 ? (
                    <p className="text-gray-500 text-center font-mono">
                      NO TRANSMISSIONS RECORDED
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {conversation.map((message, index) => (
                        <div key={index} className="text-left">
                          <div className={`font-mono text-xs mb-1 ${
                            message.role === 'user' ? 'text-blue-400' : 'text-green-400'
                          }`}>
                            {message.role === 'user' ? 'USER' : 'KYLE007'}
                          </div>
                          <div className="text-gray-300 text-sm leading-relaxed">
                            {message.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="text-center">
            <div className="text-xs text-gray-500 font-mono space-y-2">
              <p>CLASSIFIED DOCUMENT • HACKATHON INTELLIGENCE DIVISION</p>
              <p>© 2025 Kyle007 Intelligence • All rights reserved</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
