// Generic Binary Search Tree (TypeScript)
// - TreeNode<T>
// - BinarySearchTree<T> with insert, contains, find, traversals
// Usage example at bottom (commented)

export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;
  private comparator: (a: T, b: T) => number;

  constructor(comparator?: (a: T, b: T) => number) {
    this.comparator =
      comparator ?? ((a: any, b: any) => (a < b ? -1 : a > b ? 1 : 0));
  }

  insert(value: T): void {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let cur = this.root;
    while (true) {
      const cmp = this.comparator(value, cur.value);
      if (cmp === 0) {
        // duplicate: place to the right by convention
        if (!cur.right) {
          cur.right = node;
          return;
        }
        cur = cur.right;
      } else if (cmp < 0) {
        if (!cur.left) {
          cur.left = node;
          return;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = node;
          return;
        }
        cur = cur.right;
      }
    }
  }

  contains(value: T): boolean {
    return this.find(value) !== null;
  }

  find(value: T): TreeNode<T> | null {
    let cur = this.root;
    while (cur) {
      const cmp = this.comparator(value, cur.value);
      if (cmp === 0) return cur;
      cur = cmp < 0 ? cur.left : cur.right;
    }
    return null;
  }

  // Depth-first traversals
  inOrder(): T[] {
    const out: T[] = [];
    const dfs = (n: TreeNode<T> | null) => {
      if (!n) return;
      dfs(n.left);
      out.push(n.value);
      dfs(n.right);
    };
    dfs(this.root);
    return out;
  }

  preOrder(): T[] {
    const out: T[] = [];
    const dfs = (n: TreeNode<T> | null) => {
      if (!n) return;
      out.push(n.value);
      dfs(n.left);
      dfs(n.right);
    };
    dfs(this.root);
    return out;
  }

  postOrder(): T[] {
    const out: T[] = [];
    const dfs = (n: TreeNode<T> | null) => {
      if (!n) return;
      dfs(n.left);
      dfs(n.right);
      out.push(n.value);
    };
    dfs(this.root);
    return out;
  }

  // Breadth-first traversal (level order)
  breadthFirst(): T[] {
    const out: T[] = [];
    if (!this.root) return out;
    const q: Array<TreeNode<T>> = [this.root];
    while (q.length) {
      const n = q.shift()!;
      out.push(n.value);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    return out;
  }

  size(): number {
    return this.inOrder().length;
  }

  height(): number {
    const h = (n: TreeNode<T> | null): number => {
      if (!n) return 0;
      return 1 + Math.max(h(n.left), h(n.right));
    };
    return h(this.root);
  }
}

/*
Example usage:

import { BinarySearchTree } from '@/lib/binaryTree';

const t = new BinarySearchTree<number>();
t.insert(10);
t.insert(5);
t.insert(15);
t.insert(7);

console.log('inOrder:', t.inOrder()); // [5,7,10,15]
console.log('contains 7?', t.contains(7)); // true
console.log('height:', t.height());

You can provide a custom comparator for complex types:
const comp = (a: {key:number}, b:{key:number}) => a.key - b.key;
const tree = new BinarySearchTree<{key:number}>(comp);
*/
