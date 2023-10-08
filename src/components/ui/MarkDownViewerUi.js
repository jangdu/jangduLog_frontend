import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MarkdownViewerUi({ content }) {
  return (
    <ReactMarkdown
      children={content}
      className="prose my-4 overflow-auto text-lg text-left sm:px-8"
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold mt-8 my-4 ">{children}</h1>
        ),
        h2: ({ children }) => (
          <h1 className="text-3xl font-bold mt-8 my-4">{children}</h1>
        ),
        h3: ({ children }) => (
          <h1 className="text-2xl font-bold mt-8 my-4">{children}</h1>
        ),
        h4: ({ children }) => (
          <h1 className="text-xl font-bold mt-8 my-4">{children}</h1>
        ),
        ul: ({ children }) => <ul>{children}</ul>,
        li: ({ children }) => (
          <li className="my-2 list-item list-disc ms-8">{children}</li>
        ),
        p: ({ children }) => <p className="mb-2 max-w-full">{children}</p>,
        br: <div className="my-8"></div>,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            // <div className="mockup-code bg-stone">
            <SyntaxHighlighter
              language={match[1]}
              PreTag="pre"
              {...props}
              style={vscDarkPlus}
              className="rounded-md scroll"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={'text-slate-500 font-semibold scroll'} {...props}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <img
            className="w-full object-cover my-4 rounded-md"
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    ></ReactMarkdown>
  );
}
