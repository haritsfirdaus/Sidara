import React, { useState, useEffect, useRef } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'admin', text: 'Halo, ada yang bisa kami bantu?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    setMessages([...messages, { sender: 'user', text: inputMessage }]);
    setInputMessage('');

    // Simulasi balasan admin (dummy)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'admin', text: 'Baik, kami bantu cek ya.' },
      ]);
    }, 1000);
  };

  // Auto scroll ke bawah saat ada pesan baru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-lg mx-auto border rounded-lg shadow bg-white mt-8">
      {/* Header */}
      <div className="bg-primary text-white p-4 font-semibold rounded-t-lg">
        Admin Chat
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
                msg.sender === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t flex gap-2 bg-white rounded-b-lg">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ketik pesan..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:to-primary/90"
        />
        <button
          onClick={handleSendMessage}
          className="bg-primary text-white px-4 rounded-full"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
