import { useEffect, useRef, useState, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

const useVapi = () => {
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [conversation, setConversation] = useState<{ role: string, text: string }[]>([]);
  const [callStatus, setCallStatus] = useState('inactive');
  const vapiRef = useRef<any>(null);

  const initializeVapi = useCallback(() => {
    if (!vapiRef.current && publicKey) {
      const vapiInstance = new Vapi(publicKey);
      vapiRef.current = vapiInstance;

      vapiInstance.on('call-start', () => {
        setIsSessionActive(true);
        setCallStatus('active');
        console.log('Kyle007 call started');
      });

      vapiInstance.on('call-end', () => {
        setIsSessionActive(false);
        setCallStatus('inactive');
        setConversation([]); // Reset conversation on call end
        console.log('Kyle007 call ended');
      });

      vapiInstance.on('volume-level', (volume: number) => {
        setVolumeLevel(volume);
      });

      vapiInstance.on('message', (message: any) => {
        if (message.type === 'transcript' && message.transcriptType === 'final') {
          setConversation((prev) => [
            ...prev,
            { role: message.role, text: message.transcript },
          ]);
        }
      });

      vapiInstance.on('speech-start', () => {
        setCallStatus('listening');
      });

      vapiInstance.on('speech-end', () => {
        setCallStatus('processing');
      });

      vapiInstance.on('error', (e: Error) => {
        console.error('Kyle007 error:', e);
        setCallStatus('error');
      });
    }
  }, []);

  useEffect(() => {
    initializeVapi();

    // Cleanup function to end call and dispose Vapi instance
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
        vapiRef.current = null;
      }
    };
  }, [initializeVapi]);

  const toggleCall = async () => {
    try {
      if (isSessionActive) {
        await vapiRef.current.stop();
      } else {
        if (assistantId) {
          await vapiRef.current.start(assistantId);
        } else {
          console.error('Assistant ID not found');
        }
      }
    } catch (err) {
      console.error('Error toggling Kyle007 session:', err);
      setCallStatus('error');
    }
  };

  return { 
    volumeLevel, 
    isSessionActive, 
    conversation, 
    callStatus, 
    toggleCall 
  };
};

export default useVapi; 