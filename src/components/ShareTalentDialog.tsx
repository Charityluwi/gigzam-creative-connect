
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share, Copy, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareTalentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  talentName: string;
  talentId: string;
  talentCategory: string;
}

const ShareTalentDialog = ({ isOpen, onClose, talentName, talentId, talentCategory }: ShareTalentDialogProps) => {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = `${window.location.origin}/talent/${talentId}`;
  const shareTitle = `Check out ${talentName}, ${talentCategory} on GigZam`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareViaEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`I thought you might be interested in ${talentName}. Check them out here: ${shareUrl}`)}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share profile</DialogTitle>
          <DialogDescription>
            Share {talentName}'s profile with others
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <div className="grid flex-1 gap-2">
            <Input
              value={shareUrl}
              readOnly
              className="w-full"
            />
          </div>
          <Button size="sm" type="submit" onClick={copyToClipboard} className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center space-x-4 py-4">
          <Button onClick={shareOnFacebook} variant="outline" size="icon" className="rounded-full">
            <Facebook className="h-5 w-5 text-blue-600" />
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button onClick={shareOnTwitter} variant="outline" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5 text-blue-400" />
            <span className="sr-only">Share on Twitter</span>
          </Button>
          <Button onClick={shareOnLinkedIn} variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5 text-blue-700" />
            <span className="sr-only">Share on LinkedIn</span>
          </Button>
          <Button onClick={shareViaEmail} variant="outline" size="icon" className="rounded-full">
            <Mail className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Share via Email</span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareTalentDialog;
