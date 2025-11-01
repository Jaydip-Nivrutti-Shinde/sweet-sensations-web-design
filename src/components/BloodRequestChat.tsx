import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useBloodChat } from '@/hooks/useBloodChat';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Send, X, MessageCircle, User } from 'lucide-react';

interface BloodRequestChatProps {
  requestId: string;
  donorId?: string;
  onClose: () => void;
}

const BloodRequestChat = ({ requestId, donorId, onClose }: BloodRequestChatProps) => {
  const { user } = useAuth();
  const { messages, loading, sendMessage, markAsRead } = useBloodChat(requestId);
  const [messageText, setMessageText] = useState('');
  const [sending, setSending] = useState(false);
  const [receiverId, setReceiverId] = useState<string | null>(null);
  const [requestInfo, setRequestInfo] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchRequestInfo();
  }, [requestId, user, donorId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    // Mark messages as read
    const unreadIds = messages
      .filter(m => !m.is_read && m.receiver_id === user?.id)
      .map(m => m.id);
    
    if (unreadIds.length > 0) {
      markAsRead(unreadIds);
    }
  }, [messages, user, markAsRead]);

  const fetchRequestInfo = async () => {
    if (!user) return;

    try {
      // Get request details
      const { data: request, error: reqError } = await supabase
        .from('blood_requests' as any)
        .select('*')
        .eq('id', requestId)
        .single();

      if (reqError) throw reqError;
      setRequestInfo(request);

      // Determine the other party
      if ((request as any).requester_id === user.id) {
        // Current user is requester, get donor ID
        if (donorId) {
          setReceiverId(donorId);
        } else {
          // Find accepted donor
          const { data: donorReq } = await supabase
            .from('blood_donor_requests' as any)
            .select('donor_id')
            .eq('request_id', requestId)
            .eq('status', 'accepted')
            .maybeSingle();
          
          if (donorReq && (donorReq as any).donor_id) {
            setReceiverId((donorReq as any).donor_id);
          }
        }
      } else {
        // Current user is donor, receiver is requester
        setReceiverId((request as any).requester_id);
      }
    } catch (error) {
      console.error('Error fetching request info:', error);
    }
  };

  const handleSend = async () => {
    if (!messageText.trim() || !user || !receiverId) return;

    setSending(true);
    await sendMessage(receiverId, messageText);
    setMessageText('');
    setSending(false);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              Chat - Blood Request
              {requestInfo && (requestInfo as any).blood_group && (
                <span className="text-sm font-normal text-gray-600">
                  ({(requestInfo as any).blood_group})
                </span>
              )}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-3 mb-4 min-h-[300px] max-h-[400px] border rounded-lg p-4 bg-gray-50">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-sm text-gray-500">Loading messages...</p>
            </div>
          ) : !receiverId ? (
            <div className="text-center py-8 text-gray-500">
              <User className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No conversation participant found</p>
              <p className="text-sm mt-1">Please accept the request first</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No messages yet</p>
              <p className="text-sm mt-1">Start the conversation to coordinate donation</p>
            </div>
          ) : (
            messages.map((message) => {
              const isOwn = message.sender_id === user?.id;
              return (
                <div
                  key={message.id}
                  className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 shadow-sm ${
                      isOwn
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-900 border'
                    }`}
                  >
                    <p className="text-xs font-medium mb-1 opacity-75">
                      {isOwn ? 'You' : message.sender_name}
                    </p>
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                      {new Date(message.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex gap-2 pt-2">
          <Input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={receiverId ? "Type your message..." : "Accept request to start chatting"}
            disabled={sending || !receiverId}
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            disabled={sending || !messageText.trim() || !receiverId}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {sending ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BloodRequestChat;

