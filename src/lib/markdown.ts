// Markdown content loader utility
export interface DocContent {
  title: string;
  content: string;
  lastModified: string;
}

// Load markdown content via fetch from the public directory
export async function loadMarkdownContent(docId: string): Promise<DocContent | null> {
  try {
    // Fetch markdown content from the docs directory
    const response = await fetch(`/docs/${docId}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${docId}: ${response.statusText}`);
    }

    const content = await response.text();

    // Extract title from markdown (first # heading)
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : formatTitle(docId);

    return {
      title,
      content,
      lastModified: new Date().toISOString(), // In real implementation, get from file stats
    };
  } catch (error) {
    console.error(`Failed to load markdown for ${docId}:`, error);
    return null;
  }
}

function formatTitle(docId: string): string {
  return docId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to extract table of contents from markdown
export function extractTableOfContents(content: string) {
  const headings: Array<{ level: number; text: string; id: string }> = [];
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

    headings.push({ level, text, id });
  }

  return headings;
}

// Helper function to add anchor links to headings
export function addAnchorLinks(content: string): string {
  return content.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, title) => {
    const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return `${hashes} ${title} {#${id}}`;
  });
}
