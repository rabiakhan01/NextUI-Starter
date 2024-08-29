import { useEffect, useRef, useState } from 'react';


function App() {

  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null); // Reference to the media stream

  useEffect(() => {
    // Cleanup function to stop recording and release resources
    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleStartRecording = async () => {
    try {
      // Request access to the microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream; // Store the stream reference

      // Create a new MediaRecorder instance
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);

      // Collect audio data
      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      // Handle the end of the recording
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        audioChunksRef.current = [];
      };
    } catch (err) {
      console.error("Error accessing the microphone:", err);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      // Stop all tracks of the media stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null; // Clear the stream reference
      }
    }
  };

  return (
    <div className='w-full h-lvh flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <button className='bg-lime-400 p-2 rounded' onClick={isRecording ? handleStopRecording : handleStartRecording}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>

        {audioUrl && (
          <div>
            <p>Recorded Audio:</p>
            <audio controls src={audioUrl} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App;
