
import { cn } from '@/lib/utils';
import { useAnimatedMount } from '@/utils/animations';

export type MessageRole = 'user' | 'assistant';

export interface ChatMessageProps {
  content: string;
  role: MessageRole;
  timestamp: Date;
}

const ChatMessage = ({ content, role, timestamp }: ChatMessageProps) => {
  const mounted = useAnimatedMount(100);
  
  return (
    <div 
      className={cn(
        "mb-3 transition-all duration-300 ease-in-out",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        role === 'assistant' ? "mr-12" : "ml-12"
      )}
    >
      <div
        className={cn(
          "px-4 py-3 rounded-2xl max-w-full",
          role === 'assistant' 
            ? "bg-guardian-blue text-white rounded-tl-sm" 
            : "bg-muted dark:bg-muted/30 rounded-tr-sm ml-auto"
        )}
      >
        <p className="whitespace-pre-wrap break-words">
          {content}
        </p>
      </div>
      <div className={cn(
        "text-xs text-muted-foreground mt-1",
        role === 'assistant' ? "text-left" : "text-right"
      )}>
        {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default ChatMessage;
