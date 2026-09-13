import React from 'react';

/**
 * 4-petal floral / quatrefoil bullet icon matching kleanfix branding
 */
export function FloralBulletIcon({ className = 'w-4 h-4 text-primary-dark inline-block' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(12,12)">
        {/* Top Petal */}
        <path d="M0,0 C-1,-3 -3.2,-4.5 -3.2,-7 C-3.2,-9.2 -1.8,-10.5 0,-10.5 C1.8,-10.5 3.2,-9.2 3.2,-7 C3.2,-4.5 1,-3 0,0 Z" />
        {/* Right Petal */}
        <path d="M0,0 C3,-1 4.5,-3.2 7,-3.2 C9.2,-3.2 10.5,-1.8 10.5,0 C10.5,1.8 9.2,3.2 7,3.2 C4.5,3.2 3,1 0,0 Z" />
        {/* Bottom Petal */}
        <path d="M0,0 C1,3 3.2,4.5 3.2,7 C3.2,9.2 1.8,10.5 0,10.5 C-1.8,10.5 -3.2,9.2 -3.2,7 C-3.2,4.5 -1,3 0,0 Z" />
        {/* Left Petal */}
        <path d="M0,0 C-3,1 -4.5,3.2 -7,3.2 C-9.2,3.2 -10.5,1.8 -10.5,0 C-10.5,-1.8 -9.2,-3.2 -7,-3.2 C-4.5,-3.2 -3,-1 0,0 Z" />
        {/* Center Joint */}
        <circle cx="0" cy="0" r="1.5" />
      </g>
    </svg>
  );
}

/**
 * Parses inline markdown: bold (***, **), italic (*), links [text](url), floral symbols (✤)
 */
function parseInline(text) {
  if (!text) return null;

  // Split by bold-italic (***text***), bold (**text**), italic (*text*), links, and floral bullet (✤)
  const tokens = [];
  const regex = /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|[✤✣✥❖\u2724\u2723\u2725\u2756])/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', content: text.substring(lastIndex, match.index) });
    }
    const tokenStr = match[0];
    if (tokenStr.startsWith('***') && tokenStr.endsWith('***')) {
      tokens.push({ type: 'bold-italic', content: tokenStr.slice(3, -3) });
    } else if (tokenStr.startsWith('**') && tokenStr.endsWith('**')) {
      tokens.push({ type: 'bold', content: tokenStr.slice(2, -2) });
    } else if (tokenStr.startsWith('*') && tokenStr.endsWith('*')) {
      tokens.push({ type: 'italic', content: tokenStr.slice(1, -1) });
    } else if (tokenStr.startsWith('[') && tokenStr.includes('](')) {
      const linkMatch = tokenStr.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        tokens.push({ type: 'link', text: linkMatch[1], href: linkMatch[2] });
      } else {
        tokens.push({ type: 'text', content: tokenStr });
      }
    } else if (/^[✤✣✥❖\u2724\u2723\u2725\u2756]$/.test(tokenStr)) {
      tokens.push({ type: 'floral-bullet' });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', content: text.substring(lastIndex) });
  }

  return tokens.map((token, idx) => {
    switch (token.type) {
      case 'bold-italic':
        return (
          <strong key={idx} className="font-bold italic text-primary-dark">
            {token.content}
          </strong>
        );
      case 'bold':
        return (
          <strong key={idx} className="font-bold text-primary-dark">
            {token.content}
          </strong>
        );
      case 'italic':
        return (
          <em key={idx} className="italic font-medium text-primary-dark">
            {token.content}
          </em>
        );
      case 'link':
        return (
          <a
            key={idx}
            href={token.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-dark underline font-medium hover:text-secondary transition-colors"
          >
            {token.text}
          </a>
        );
      case 'floral-bullet':
        return (
          <span key={idx} className="inline-flex items-center align-middle mx-1" aria-hidden="true">
            <FloralBulletIcon className="w-4 h-4 text-primary-dark" />
          </span>
        );
      default:
        return <React.Fragment key={idx}>{token.content}</React.Fragment>;
    }
  });
}

/**
 * Checks if string has HTML block tags
 */
function isHtml(content) {
  return /<(p|h[1-6]|ul|ol|li|div|blockquote)[^>]*>/i.test(content);
}

export default function BlogContentRenderer({ content, className = '' }) {
  if (!content) return null;

  // If content contains full HTML markup, render safely with Tailwind typography styles
  if (isHtml(content)) {
    return (
      <div
        className={`blog-content-body text-primary-dark text-[20px] font-medium [&_*]:text-primary-dark [&_strong]:font-bold [&_b]:font-bold [&_p]:text-[20px] [&_p]:font-medium [&_li]:text-[20px] [&_li]:font-medium leading-relaxed ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Parse structured Markdown blocks
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let currentList = null;

  const flushList = () => {
    if (currentList) {
      blocks.push(currentList);
      currentList = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushList();
      continue;
    }

    // Checkmark list item (e.g. ✓ Item or ✔ Item)
    if (/^[✓✔\u2713]\s*/.test(line)) {
      if (!currentList || currentList.type !== 'checkmark-list') {
        flushList();
        currentList = { type: 'checkmark-list', items: [] };
      }
      currentList.items.push(line.replace(/^[✓✔\u2713]\s*/, ''));
      continue;
    }

    // Floral / Quatrefoil bullet item (e.g. ✤ Item, ✣ Item, ✥ Item, ❖ Item)
    if (/^[✤✣✥❖\u2724\u2723\u2725\u2756]\s*/.test(line)) {
      if (!currentList || currentList.type !== 'floral-list') {
        flushList();
        currentList = { type: 'floral-list', items: [] };
      }
      currentList.items.push(line.replace(/^[✤✣✥❖\u2724\u2723\u2725\u2756]\s*/, ''));
      continue;
    }

    // Standard bullet list item (- item, * item, • item)
    if (/^[-*•]\s+/.test(line)) {
      if (!currentList || currentList.type !== 'bullet-list') {
        flushList();
        currentList = { type: 'bullet-list', items: [] };
      }
      currentList.items.push(line.replace(/^[-*•]\s+/, ''));
      continue;
    }

    // Heading 3 or 2 (### Heading or ## Heading)
    if (line.startsWith('### ') || line.startsWith('## ')) {
      flushList();
      const level = line.startsWith('### ') ? 3 : 2;
      const text = line.replace(/^#{2,3}\s+/, '');
      blocks.push({ type: `h${level}`, text });
      continue;
    }

    // Blockquote (> Quote)
    if (line.startsWith('> ')) {
      flushList();
      blocks.push({ type: 'blockquote', text: line.replace(/^>\s*/, '') });
      continue;
    }

    // Normal paragraph
    flushList();
    blocks.push({ type: 'paragraph', text: line });
  }

  flushList();

  return (
    <div className={`blog-content-body text-primary-dark text-[20px] font-medium space-y-4 md:space-y-6 ${className}`}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
          case 'h3':
            return (
              <h3
                key={index}
                className="text-xl md:text-2xl lg:text-[26px] font-bold text-primary-dark tracking-tight mt-8 md:mt-10 mb-2 md:mb-3 leading-snug"
              >
                {parseInline(block.text)}
              </h3>
            );

          case 'checkmark-list':
            return (
              <ul key={index} className="space-y-2.5 my-5 pl-1 text-primary-dark text-[20px] font-medium">
                {block.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-[20px] text-primary-dark font-medium leading-relaxed"
                  >
                    <span className="text-primary-dark font-bold text-[20px] flex-shrink-0 select-none">
                      ✓
                    </span>
                    <span>{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'floral-list':
            return (
              <ul key={index} className="space-y-2.5 my-5 pl-1 text-primary-dark text-[20px] font-medium">
                {block.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-[20px] text-primary-dark font-medium leading-relaxed"
                  >
                    <span className="flex-shrink-0 pt-1.5 text-primary-dark select-none" aria-hidden="true">
                      <FloralBulletIcon className="w-4 h-4 text-primary-dark" />
                    </span>
                    <span>{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'bullet-list':
            return (
              <ul key={index} className="list-disc list-inside space-y-2 my-5 pl-2 text-primary-dark text-[20px] font-medium">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[20px] text-primary-dark font-medium leading-relaxed">
                    <span>{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'blockquote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-primary-dark pl-4 py-2 my-6 italic text-[20px] text-primary-dark font-medium bg-blue-50/40 rounded-r-lg"
              >
                {parseInline(block.text)}
              </blockquote>
            );

          case 'paragraph':
          default:
            return (
              <p
                key={index}
                className="text-[20px] text-primary-dark font-medium leading-relaxed"
              >
                {parseInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}
