import type { ListNode } from "../common/classes";
import { buildLinkedList, printLinkedList } from "../common/utils";

function recur(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const newHead = recur(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

function loop(head: ListNode | null): ListNode | null {
  let cur: ListNode | null = head,
    prev: ListNode | null = null;
  while (cur) {
    const next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

const input = [1, 2, 3, 4];
const res1 = recur(buildLinkedList(input));
const res2 = loop(buildLinkedList(input));
printLinkedList(res1);
printLinkedList(res2);
