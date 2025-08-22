import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Sparkles, Loader2 } from 'lucide-react';

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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-900 border border-white/12 p-6 text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold text-white"
                    >
                      AI Search Results
                    </Dialog.Title>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    onClick={onClose}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Query Display */}
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-white/8">
                  <p className="text-sm text-gray-400 mb-1">Your question:</p>
                  <p className="text-white font-medium">{query}</p>
                </div>

                {/* Content */}
                <div className="max-h-96 overflow-y-auto">
                  {isLoading && (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
                      <span className="ml-2 text-gray-400">Thinking...</span>
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 font-medium">Error</p>
                      <p className="text-red-300 text-sm mt-1">{error}</p>
                    </div>
                  )}

                  {result && !isLoading && (
                    <div className="prose prose-invert max-w-none">
                      <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {result}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {result && !isLoading && (
                  <div className="mt-6 pt-4 border-t border-white/8">
                    <p className="text-xs text-gray-500 text-center">
                      AI-powered search results • Powered by ARMChain
                    </p>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
