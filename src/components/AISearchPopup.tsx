import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Sparkles, Loader2, Send } from 'lucide-react';
import { useTRPCClient } from "~/trpc/react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AISearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  result: string | null;
  isLoading: boolean;
  error: string | null;
}

export function AISearchPopup({
  isOpen,
  onClose,
  query,
  result,
  isLoading,
  error
}: AISearchPopupProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const trpcClient = useTRPCClient();

  // Initialize conversation with the initial query and result
  React.useEffect(() => {
    if (query && result && messages.length === 0) {
      const initialMessages: Message[] = [
        {
          id: '1',
          text: query,
          isUser: true,
          timestamp: new Date()
        },
        {
          id: '2',
          text: result,
          isUser: false,
          timestamp: new Date()
        }
      ];
      setMessages(initialMessages);
    }
  }, [query, result]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      const response = await trpcClient.aiSearch.mutate({ query: newMessage.trim() });

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.result,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl h-[600px] transform overflow-hidden rounded-2xl bg-gray-900 border border-white/12 text-left align-middle shadow-xl transition-all flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/8 bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <Dialog.Title as="h3" className="text-lg font-semibold text-white">
                        ARMchain Assistant
                      </Dialog.Title>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-400">Online</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    onClick={onClose}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                      {message.isUser ? (
                        <div className="max-w-[80%] bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-2xl rounded-br-md">
                          <p className="text-sm">{message.text}</p>
                        </div>
                      ) : (
                        <div className="flex gap-3 max-w-[90%]">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">AI</span>
                          </div>
                          <div className="bg-gray-800/70 text-gray-100 p-4 rounded-2xl rounded-bl-md">
                            <div className="prose prose-invert prose-sm max-w-none">
                              <div className="text-gray-100 leading-relaxed whitespace-pre-wrap text-sm">
                                {message.text}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Loading state for new messages */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[90%]">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div className="bg-gray-800/70 text-gray-100 p-4 rounded-2xl rounded-bl-md">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                            <span className="text-sm text-gray-400">Thinking...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Show initial loading state if first message is loading */}
                  {isLoading && messages.length === 0 && (
                    <>
                      <div className="flex justify-end">
                        <div className="max-w-[80%] bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-2xl rounded-br-md">
                          <p className="text-sm">{query}</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="flex gap-3 max-w-[90%]">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">AI</span>
                          </div>
                          <div className="bg-gray-800/70 text-gray-100 p-4 rounded-2xl rounded-bl-md">
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                              <span className="text-sm text-gray-400">Thinking...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-white/8 bg-gray-800/30">
                  <form onSubmit={handleSendMessage} className="flex gap-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Ask anything about ARMchain..."
                      className="flex-1 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm"
                      disabled={isTyping}
                    />
                    <button
                      type="submit"
                      disabled={isTyping || !newMessage.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-gray-500">Powered by ARMchain AI</span>
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
