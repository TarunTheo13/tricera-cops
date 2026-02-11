import { useEffect, useRef, useState, useCallback } from 'react';
import './TypewriterContent.css';

const TypewriterContent = ({ children, speed = 25 }) => {
  const containerRef = useRef(null);
  const textNodesRef = useRef([]);
  const timerRef = useRef(null);
  const cursorRef = useRef(null);
  const [isTyping, setIsTyping] = useState(true);

  const skipToEnd = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    textNodesRef.current.forEach(({ node, fullText }) => {
      node.textContent = fullText;
    });
    if (cursorRef.current && cursorRef.current.parentNode) {
      cursorRef.current.remove();
    }
    setIsTyping(false);
  }, []);

  const handleClick = useCallback((e) => {
    // Don't skip when clicking interactive elements (buttons, links)
    if (
      e.target.tagName === 'BUTTON' ||
      e.target.tagName === 'A' ||
      e.target.closest('button') ||
      e.target.closest('a')
    ) {
      return;
    }
    if (isTyping) {
      skipToEnd();
    }
  }, [isTyping, skipToEnd]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setIsTyping(true);

    // Use requestAnimationFrame to ensure DOM is painted before we walk it
    const frameId = requestAnimationFrame(() => {
      const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      const textNodes = [];
      let walkerNode;
      while ((walkerNode = walker.nextNode())) {
        if (walkerNode.textContent.trim().length > 0) {
          textNodes.push({
            node: walkerNode,
            fullText: walkerNode.textContent,
          });
          walkerNode.textContent = '';
        }
      }

      textNodesRef.current = textNodes;

      if (textNodes.length === 0) {
        setIsTyping(false);
        return;
      }

      // Create blinking cursor element
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      cursor.textContent = '|';
      cursorRef.current = cursor;

      // Place cursor at the start
      const firstNode = textNodes[0].node;
      if (firstNode.parentNode) {
        firstNode.parentNode.insertBefore(cursor, firstNode.nextSibling);
      }

      let nodeIndex = 0;
      let charIndex = 0;

      timerRef.current = setInterval(() => {
        if (nodeIndex >= textNodes.length) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          if (cursor.parentNode) cursor.remove();
          setIsTyping(false);
          return;
        }

        const current = textNodes[nodeIndex];
        charIndex++;
        current.node.textContent = current.fullText.substring(0, charIndex);

        // Move cursor to follow the typing position
        if (current.node.parentNode) {
          current.node.parentNode.insertBefore(cursor, current.node.nextSibling);
        }

        if (charIndex >= current.fullText.length) {
          nodeIndex++;
          charIndex = 0;
        }
      }, speed);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (cursorRef.current && cursorRef.current.parentNode) {
        cursorRef.current.remove();
      }
      // Restore all text on unmount
      textNodesRef.current.forEach(({ node, fullText }) => {
        try {
          node.textContent = fullText;
        } catch (e) {
          // Node may no longer be in DOM
        }
      });
    };
  }, [speed]); // Only re-run when speed changes; children are read from DOM on mount

  return (
    <div
      ref={containerRef}
      className="typewriter-content"
      onClick={handleClick}
      style={isTyping ? { cursor: 'pointer' } : undefined}
      title={isTyping ? 'Click to skip' : undefined}
    >
      {children}
    </div>
  );
};

export default TypewriterContent;
