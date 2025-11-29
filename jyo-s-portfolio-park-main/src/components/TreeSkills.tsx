import React, { useMemo, useState } from 'react';
import { BinarySearchTree, TreeNode } from '@/lib/binaryTree';

// Component that models the project's skills in a Binary Search Tree
// and renders traversal outputs and an SVG node-and-edge visualization.

const ALL_SKILLS: string[] = [
  // Data Science & ML
  'Python', 'R', 'SQL', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Matplotlib', 'Seaborn',
  // Software Engineering
  'C++', 'Java', 'JavaScript', 'TypeScript', 'Haskell', 'Node.js', 'Express', 'REST APIs',
  // Full-Stack & Frontend
  'React', 'React Native', 'HTML', 'CSS',
  // Tools & Platforms
  'Git/GitHub', 'Google Colab', 'Notion', 'Docker', 'Linux', 'PostgreSQL', 'Firebase', 'Conda', 'SLURM', 'VS Code', 'Figma',
  // Core Strengths
  'Machine Learning', 'Full-Stack Development', 'Computer Vision', 'HPC Workflows',
];

function computeLayout(root: TreeNode<string> | null) {
  // give each node an x position by in-order index and y by depth
  const positions = new Map<TreeNode<string>, { x: number; y: number }>();
  let index = 0;
  let maxDepth = 0;

  function assign(node: TreeNode<string> | null, depth = 0) {
    if (!node) return;
    assign(node.left, depth + 1);
    positions.set(node, { x: index++, y: depth });
    maxDepth = Math.max(maxDepth, depth);
    assign(node.right, depth + 1);
  }

  assign(root, 0);
  return { positions, count: index, maxDepth };
}

export default function TreeSkills() {
  // build tree once
  const tree = useMemo(() => {
    const t = new BinarySearchTree<string>((a, b) => a.localeCompare(b));
    // Insert in given order (you can change ordering to affect shape)
    ALL_SKILLS.forEach((s) => t.insert(s));
    return t;
  }, []);

  const [hovered, setHovered] = useState<TreeNode<string> | null>(null);

  const layout = useMemo(() => computeLayout(tree.root), [tree.root]);
  const { positions, count, maxDepth } = layout;

  // Larger spacing for clear visualization
  const xGap = 120;
  const yGap = 90;
  const padding = 40;
  const nodeRadius = 20;
  const labelFontSize = 12;
  const width = Math.max(800, count * xGap + padding * 2);
  const height = Math.max(300, (maxDepth + 1) * yGap + padding * 2);

  return (
    <section className="mt-8">
      <div className="w-full mx-auto bg-background/5 p-4 rounded-2xl border border-primary/8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-primary">Skills — Tree View</h3>
        </div>

        <div className="bg-background p-2 rounded overflow-auto">
          <svg width="100%" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* edges */}
            {[...positions.keys()].map((node, i) => {
              const pos = positions.get(node)!;
              const cx = padding + pos.x * xGap + xGap / 2;
              const cy = padding + pos.y * yGap + nodeRadius + 4;
              const lines: React.ReactNode[] = [];
              if (node.left && positions.has(node.left)) {
                const p = positions.get(node.left)!;
                const lx = padding + p.x * xGap + xGap / 2;
                const ly = padding + p.y * yGap + nodeRadius + 4;
                lines.push(<line key={`l-${i}-L`} x1={cx} y1={cy} x2={lx} y2={ly} stroke="#CBD5E1" strokeWidth={2} />);
              }
              if (node.right && positions.has(node.right)) {
                const p = positions.get(node.right)!;
                const rx = padding + p.x * xGap + xGap / 2;
                const ry = padding + p.y * yGap + nodeRadius + 4;
                lines.push(<line key={`l-${i}-R`} x1={cx} y1={cy} x2={rx} y2={ry} stroke="#CBD5E1" strokeWidth={2} />);
              }
              return lines;
            })}

            {/* nodes */}
            {[...positions.keys()].map((node, i) => {
              const pos = positions.get(node)!;
              const cx = padding + pos.x * xGap + xGap / 2;
              const cy = padding + pos.y * yGap + nodeRadius + 4;
              const isHovered = hovered === node;
              return (
                <g key={`n-${i}`} onMouseEnter={() => setHovered(node)} onMouseLeave={() => setHovered(null)} style={{ cursor: 'pointer' }}>
                  <circle cx={cx} cy={cy} r={nodeRadius} fill={isHovered ? '#0EA5A9' : '#fff'} stroke="#0f172a" strokeWidth={1.5} />
                  <text x={cx} y={cy + nodeRadius + labelFontSize} textAnchor="middle" fontSize={labelFontSize} fill="#0f172a">
                    {node.value}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hover label */}
          {hovered && (
            <div className="mt-3 text-sm text-primary">
              <strong>Node:</strong> {hovered.value}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
