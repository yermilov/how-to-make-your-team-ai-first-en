import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CodeBlockProps } from '../types/slides';

// Custom terminal theme matching our design tokens
const terminalTheme: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: '#e2e8f0',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-code)',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 'var(--line-height-relaxed)',
    tabSize: 2,
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#e2e8f0',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--font-size-code)',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 'var(--line-height-relaxed)',
    tabSize: 2,
    hyphens: 'none',
    padding: '1rem',
    margin: 0,
    overflow: 'auto',
    background: 'transparent',
  },
  // Comments
  comment: { color: '#6e7681', fontStyle: 'italic' },
  prolog: { color: '#6e7681' },
  doctype: { color: '#6e7681' },
  cdata: { color: '#6e7681' },
  // Punctuation
  punctuation: { color: '#8b949e' },
  // Namespace
  namespace: { opacity: 0.7 },
  // Properties, tags, booleans, numbers, constants, symbols
  property: { color: '#7ee787' },
  tag: { color: '#7ee787' },
  boolean: { color: '#f0883e' },
  number: { color: '#f0883e' },
  constant: { color: '#f0883e' },
  symbol: { color: '#f0883e' },
  deleted: { color: '#ff7b72' },
  // Selectors, strings, chars, builtins, inserted, regex, attr-value
  selector: { color: '#a5d6ff' },
  string: { color: '#a5d6ff' },
  char: { color: '#a5d6ff' },
  builtin: { color: '#79c0ff' },
  inserted: { color: '#7ee787' },
  regex: { color: '#a5d6ff' },
  'attr-value': { color: '#a5d6ff' },
  // Operators, entities, URLs, CSS strings, style strings
  operator: { color: '#79c0ff' },
  entity: { color: '#f0883e', cursor: 'help' },
  url: { color: '#a5d6ff' },
  '.language-css .token.string': { color: '#a5d6ff' },
  '.style .token.string': { color: '#a5d6ff' },
  // At-rules, attributes, functions
  'atrule': { color: '#d2a8ff' },
  'attr-name': { color: '#79c0ff' },
  function: { color: '#d2a8ff' },
  'class-name': { color: '#ffa657' },
  // Keywords
  keyword: { color: '#ff7b72' },
  // Important, bold
  important: { color: '#ff7b72', fontWeight: 'bold' },
  bold: { fontWeight: 'bold' },
  // Italic
  italic: { fontStyle: 'italic' },
  // Variable
  variable: { color: '#ffa657' },
};

export function CodeBlock({
  code,
  language = 'typescript',
  showLineNumbers = false,
  filename,
}: CodeBlockProps) {
  return (
    <div className="code-block">
      {filename && (
        <div className="code-block-header">
          <div className="code-block-dots">
            <span className="code-block-dot code-block-dot--red" />
            <span className="code-block-dot code-block-dot--yellow" />
            <span className="code-block-dot code-block-dot--green" />
          </div>
          <span className="code-block-filename">{filename}</span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={terminalTheme}
        showLineNumbers={showLineNumbers}
        wrapLines
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'var(--font-mono)',
          },
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
