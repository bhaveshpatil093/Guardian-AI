
import { useState, useRef, useEffect } from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatMessage, { ChatMessageProps } from './ChatMessage';
import ChatInput from './ChatInput';
import { useToast } from '@/hooks/use-toast';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      role: 'assistant',
      content: 'Hi there! I\'m Guardian AI. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: ChatMessageProps = {
      role: 'user',
      content,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Simulate API call to AI service
      setTimeout(() => {
        // Mock AI response based on keywords
        let response = "I'm here to help you. Could you provide more details about your situation?";
        
        const lowerContent = content.toLowerCase();
        if (lowerContent.includes('emergency')) {
          response = "If you're in immediate danger, please call emergency services at 911. You can also use our emergency resources section for more help.";
        } else if (lowerContent.includes('help') || lowerContent.includes('support')) {
          response = "Guardian AI provides various support resources. You can access them in the Resources section of our app. Would you like specific information about available support services?";
        } else if (lowerContent.includes('bully') || lowerContent.includes('bullying')) {
          response = "Bullying is never okay. If you're experiencing bullying, try to talk to a trusted adult like a parent, teacher, or school counselor. Our Resources section has specific information about dealing with bullying.";
        } else if (lowerContent.includes('scared') || lowerContent.includes('afraid')) {
          response = "I understand you might be feeling scared. Remember that your feelings are valid. Is there a trusted adult you can talk to about what's happening? If you need immediate help, please use the emergency button.";
        }
        
        const assistantMessage: ChatMessageProps = {
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 rounded-full p-4 shadow-lg bg-guardian-blue hover:bg-guardian-blue/90 transition-all ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
        size="icon"
      >
        <Bot className="h-5 w-5" />
      </Button>

      {/* Chat window */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full max-w-sm md:right-8 md:bottom-8 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-card dark:bg-card/90 backdrop-blur-sm border border-border rounded-t-lg md:rounded-lg shadow-lg flex flex-col h-[500px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-guardian-blue text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-medium">Guardian AI Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="flex flex-col">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  content={message.content}
                  role={message.role}
                  timestamp={message.timestamp}
                />
              ))}
              {isLoading && (
                <div className="flex gap-1 px-4 py-3 text-sm text-muted-foreground w-24 bg-muted/30 rounded-lg">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>•</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>•</span>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t">
            <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
