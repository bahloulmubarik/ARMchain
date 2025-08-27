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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Documentation Not Found
            </h1>
            <p className="text-gray-600 mb-8">
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
      <div className="flex gap-8 px-6 py-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Last updated: {new Date(content.lastModified).toLocaleDateString()}
              </div>
              <button
                onClick={() => setShowToc(!showToc)}
                className="flex items-center gap-1 hover:text-gray-900 lg:hidden"
              >
                <Hash className="h-4 w-4" />
                Table of Contents
              </button>
            </div>
          </div>

          {/* Mobile TOC */}
          {showToc && (
            <div className="mb-8 rounded-lg border border-gray-300 bg-white shadow-lg p-4 lg:hidden">
              <h3 className="mb-3 font-semibold text-gray-900">Table of Contents</h3>
              <nav className="space-y-1">
                {toc.map((heading, index) => (
                  <a
                    key={index}
                    href={`#${heading.id}`}
                    className={`block hover:text-[#8129FF] transition-colors ${
                      heading.level === 1 ? "font-medium text-gray-900" :
                      heading.level === 2 ? "ml-3 text-gray-700" :
                      "ml-6 text-gray-600"
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
          <div className="prose prose-gray prose-lg max-w-none leading-relaxed text-gray-900">
            <ReactMarkdown
              components={{
                // Custom heading renderer to add IDs for anchor links
                h1: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h1 id={id} className="group relative text-3xl font-bold text-gray-900 mb-6 mt-8"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h1>;
                },
                h2: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h2 id={id} className="group relative text-2xl font-semibold text-gray-900 mb-4 mt-8"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h2>;
                },
                h3: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h3 id={id} className="group relative text-xl font-semibold text-gray-900 mb-3 mt-6"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h3>;
                },
                h4: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h4 id={id} className="group relative text-lg font-medium text-gray-900 mb-3 mt-5"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h4>;
                },
                h5: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h5 id={id} className="group relative text-base font-medium text-gray-900 mb-2 mt-4"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h5>;
                },
                h6: ({ children }: { children?: React.ReactNode }) => {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h6 id={id} className="group relative text-sm font-medium text-gray-900 mb-2 mt-4"><a href={`#${id}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-[#8129FF] no-underline">#</a>{children}</h6>;
                },
                // Style paragraphs
                p: ({ children }: { children?: React.ReactNode }) => (
                  <p className="mb-4 text-gray-800 leading-relaxed">
                    {children}
                  </p>
                ),
                // Style lists
                ul: ({ children }: { children?: React.ReactNode }) => (
                  <ul className="mb-4 list-disc list-inside text-gray-800">
                    {children}
                  </ul>
                ),
                ol: ({ children }: { children?: React.ReactNode }) => (
                  <ol className="mb-4 list-decimal list-inside text-gray-800">
                    {children}
                  </ol>
                ),
                li: ({ children }: { children?: React.ReactNode }) => (
                  <li className="mb-1 text-gray-800">
                    {children}
                  </li>
                ),
                // Style code blocks
                code: ({ inline, className, children }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
                  if (inline) {
                    return (
                      <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-[#8129FF]">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={`${className || ''} block rounded-lg bg-gray-50 p-4 text-sm font-mono border border-gray-200 text-gray-900`}>
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
                  <blockquote className="border-l-4 border-[#8129FF] bg-gray-50 py-2 pl-4 pr-2 italic text-gray-800">
                    {children}
                  </blockquote>
                ),
                // Style tables
                table: ({ children }: { children?: React.ReactNode }) => (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }: { children?: React.ReactNode }) => (
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold text-gray-900">
                    {children}
                  </th>
                ),
                td: ({ children }: { children?: React.ReactNode }) => (
                  <td className="border border-gray-300 px-4 py-2 text-gray-900">
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
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="rounded-lg border border-gray-300 bg-white shadow-lg p-6">
                <h3 className="mb-4 font-bold text-[#8129FF] text-lg">Table of Contents</h3>
                <nav className="space-y-2 max-h-96 overflow-y-auto">
                  {toc.map((heading, index) => (
                    <a
                      key={index}
                      href={`#${heading.id}`}
                      className={`block hover:text-[#8129FF] transition-colors ${
                        heading.level === 1 ? "font-semibold text-gray-900" :
                        heading.level === 2 ? "ml-4 text-gray-700" :
                        "ml-8 text-gray-600"
                      }`}
                      style={{ fontSize: Math.max(15 - heading.level, 13) + 'px' }}
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
