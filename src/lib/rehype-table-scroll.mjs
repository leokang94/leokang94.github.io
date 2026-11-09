/**
 * Wraps every <table> in <div class="table-scroll"> so wide tables scroll
 * horizontally without forcing `display: block` on the table itself (which
 * drops table semantics in some screen readers).
 */
export default function rehypeTableScroll() {
  /** @param {import('hast').Root | import('hast').Element} node */
  const walk = (node) => {
    node.children.forEach((child, i) => {
      if (child.type !== 'element') return;
      if (child.tagName === 'table') {
        node.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'] },
          children: [child],
        };
        return;
      }
      walk(child);
    });
  };
  return walk;
}
