import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Check, X, MessageCircle, Loader2 } from 'lucide-react';
import BloodRequestChat from './BloodRequestChat';

interface BloodRequestActionsProps {
  requestId: string;
  requesterId: string;
  bloodGroup: string;
  unitsRequired: number;
}

const BloodRequestActions = ({ requestId, requesterId, bloodGroup, unitsRequired }: BloodRequestActionsProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [donorRequest, setDonorRequest] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Check if user has already responded to this request
  useState(() => {
    if (user && requestId) {
      checkExistingRequest();
    }
  });

  const checkExistingRequest = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('blood_donor_requests' as any)
      .select('*')
      .eq('request_id', requestId)
      .eq('donor_id', user.id)
      .maybeSingle();

    if (!error && data) {
      setDonorRequest(data);
    }
  };

  const handleAccept = async () => {
    if (!user || user.id === requesterId) return;

    setLoading(true);
    try {
      // Create donor request entry
      const { data, error } = await supabase
        .from('blood_donor_requests' as any)
        .insert({
          request_id: requestId,
          donor_id: user.id,
          status: 'accepted',
          donor_response_at: new Date().toISOString(),
        } as any)
        .select()
        .single();

      if (error) throw error;

      setDonorRequest(data);
      toast({
        title: 'Request Accepted',
        description: 'You can now chat with the requester to coordinate the donation.',
      });
      setShowConfirm(false);
      
      // Open chat immediately
      setTimeout(() => setShowChat(true), 500);
    } catch (error: any) {
      console.error('Error accepting request:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to accept request',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    if (!user || user.id === requesterId) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('blood_donor_requests' as any)
        .insert({
          request_id: requestId,
          donor_id: user.id,
          status: 'rejected',
          donor_response_at: new Date().toISOString(),
        } as any);

      if (error) throw error;

      toast({
        title: 'Request Declined',
        description: 'You have declined this blood request.',
      });
      setShowConfirm(false);
    } catch (error: any) {
      console.error('Error rejecting request:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to decline request',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Don't show actions for own requests
  if (user?.id === requesterId) {
    return null;
  }

  // Show different UI based on donor request status
  if (donorRequest) {
    if (donorRequest.status === 'accepted') {
      return (
        <>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => setShowChat(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Open Chat
            </Button>
          </div>
          {showChat && (
            <BloodRequestChat
              requestId={requestId}
              donorId={user?.id || ''}
              onClose={() => setShowChat(false)}
            />
          )}
        </>
      );
    } else if (donorRequest.status === 'rejected') {
      return (
        <div className="text-sm text-gray-500">
          You declined this request
        </div>
      );
    }
    return null;
  }

  // Show Accept/Decline buttons for new requests
  return (
    <>
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => setShowConfirm(true)}
          className="bg-green-600 hover:bg-green-700"
          disabled={loading}
        >
          <Check className="h-4 w-4 mr-1" />
          Accept Request
        </Button>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Blood Donation</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Are you willing to donate <strong>{bloodGroup}</strong> blood?
              This request needs <strong>{unitsRequired} unit(s)</strong>.
            </p>
            <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded">
              After accepting, you'll be able to chat with the requester to coordinate the donation details.
            </p>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowConfirm(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleReject}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <X className="h-4 w-4 mr-1" />
                    Decline
                  </>
                )}
              </Button>
              <Button
                onClick={handleAccept}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Accept & Chat
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BloodRequestActions;
