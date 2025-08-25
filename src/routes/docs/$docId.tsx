import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { DocsLayout } from "../../components/DocsLayout";
import { loadMarkdownContent, extractTableOfContents, type DocContent } from "../../lib/markdown";
import { Clock, Hash } from "lucide-react";

export const Route = createFileRoute("/docs/$docId")({
  component: DocPage,
  loader: async ({ params }) => {
    const { docId } = params;
    const content = await loadMarkdownContent(docId);
    return { content, docId };
  },
});

function DocPage() {
  const { content, docId } = Route.useLoaderData();
  const [showToc, setShowToc] = useState(false);

  if (!content) {
    return (
      <DocsLayout>
        <div className="flex flex-col items-center justify-center py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Documentation Not Found
            </h1>
            <p className="text-gray-400 mb-8">
              The documentation page you're looking for doesn't exist.
            </p>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#8129FF] to-[#A25CFE] px-6 py-3 text-white font-medium transition-transform hover:scale-105"
            >
              Back to Documentation
            </a>
          </div>
        </div>
      </DocsLayout>
    );
  }

  const toc = extractTableOfContents(content.content);

  return (
    <DocsLayout title={content.title}>
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-8 border-b border-gray-800 pb-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              {content.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Last updated: {new Date(content.lastModified).toLocaleDateString()}
              </div>
              <button
                onClick={() => setShowToc(!showToc)}
                className="flex items-center gap-1 hover:text-gray-300 lg:hidden"
              >
                <Hash className="h-4 w-4" />
                Table of Contents
              </button>
            </div>
          </div>

          {/* Mobile TOC */}
          {showToc && (
            <div className="mb-8 rounded-lg border border-gray-700 bg-gray-800/50 p-4 lg:hidden">
              <h3 className="mb-3 font-semibold text-white">Table of Contents</h3>
              <nav className="space-y-1">
                {toc.map((heading, index) => (
                  <a
                    key={index}
                    href={`#${heading.id}`}
                    className={`block hover:text-white transition-colors ${
                      heading.level === 1 ? "font-medium text-gray-300" :
                      heading.level === 2 ? "ml-3 text-gray-400" :
                      "ml-6 text-gray-500"
                    }`}
                    style={{ fontSize: Math.max(14 - heading.level, 12) + 'px' }}
                    onClick={() => setShowToc(false)}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Markdown Content */}
          <div className="prose prose-invert prose-purple max-w-none">
            <ReactMarkdown
              components={{
                // Custom heading renderer to add IDs for anchor links
                h1: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h1 id={id} className="group relative"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h1>;
                },
                h2: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h2 id={id} className="group relative"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h2>;
                },
                h3: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h3 id={id} className="group relative"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h3>;
                },
                h4: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h4 id={id} className="group relative"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h4>;
                },
                h5: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h5 id={id} className="group relative"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h5>;
                },
                h6: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h6 id={id} className="group relative"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h6>;
                },
                // Style code blocks
                code: ({ inline, className, children }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
                  if (inline) {
                    return (
                      <code className="rounded bg-gray-800 px-1.5 py-0.5 text-sm font-mono text-[#A25CFE]">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={`${className || ''} block rounded-lg bg-gray-900 p-4 text-sm font-mono`}>
                      {children}
                    </code>
                  );
                },
                // Style links
                a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
                  <a
                    href={href}
                    className="text-[#A25CFE] underline decoration-[#A25CFE]/30 underline-offset-2 transition-colors hover:decoration-[#A25CFE]"
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {children}
                  </a>
                ),
                // Style blockquotes
                blockquote: ({ children }: { children?: React.ReactNode }) => (
                  <blockquote className="border-l-4 border-[#8129FF] bg-gray-800/30 py-2 pl-4 pr-2 italic">
                    {children}
                  </blockquote>
                ),
                // Style tables
                table: ({ children }: { children?: React.ReactNode }) => (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-700">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }: { children?: React.ReactNode }) => (
                  <th className="border border-gray-700 bg-gray-800 px-4 py-2 text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }: { children?: React.ReactNode }) => (
                  <td className="border border-gray-700 px-4 py-2">
                    {children}
                  </td>
                ),
              } as Components}
            >
              {content.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Desktop Table of Contents */}
        {toc.length > 0 && (
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                <h3 className="mb-3 font-semibold text-white">Table of Contents</h3>
                <nav className="space-y-1 max-h-96 overflow-y-auto">
                  {toc.map((heading, index) => (
                    <a
                      key={index}
                      href={`#${heading.id}`}
                      className={`block hover:text-white transition-colors ${
                        heading.level === 1 ? "font-medium text-gray-300" :
                        heading.level === 2 ? "ml-3 text-gray-400" :
                        "ml-6 text-gray-500"
                      }`}
                      style={{ fontSize: Math.max(14 - heading.level, 12) + 'px' }}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </DocsLayout>
  );
}
