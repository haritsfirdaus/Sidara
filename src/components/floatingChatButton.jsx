import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircleMore } from 'lucide-react'; // Icon Chat (gunakan lucide-react atau bisa FontAwesome)

const FloatingChatButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/chat')}
      className="fixed bottom-6 right-6 bg-primary text-silver rounded-full shadow-lg p-4 hover:bg-primary/95 transition z-50 ring-1 ring-silver"
      aria-label="Chat Admin"
    >
      <MessageCircleMore size={24} />
    </button>
  );
};

export default FloatingChatButton;
