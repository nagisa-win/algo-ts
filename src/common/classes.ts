export class ListNode {
    val: number | string;
    next: ListNode | null;
    constructor(val?: number | string, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export class Stack {
    private _stack: any[] = [];
    constructor() {
        this._stack = [];
    }
    push(val: any) {
        this._stack.push(val);
    }
    pop() {
        return this._stack.pop();
    }
    peek() {
        return this._stack[this._stack.length - 1];
    }
    get empty() {
        return this._stack.length === 0;
    }
    get size() {
        return this._stack.length;
    }
    clear() {
        this._stack = [];
    }
    toString() {
        console.log(this._stack);
    }
}

export class Queue {
    private _queue: any[] = [];
    constructor() {
        this._queue = [];
    }
    enqueue(val: any) {
        this._queue.push(val);
    }
    dequeue() {
        return this._queue.shift();
    }
    get empty() {
        return this._queue.length === 0;
    }
    get size() {
        return this._queue.length;
    }
    toString() {
        console.log(this._queue);
    }
}
