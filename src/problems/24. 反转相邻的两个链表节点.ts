import { ListNode } from "../common/classes";
import { buildLinkedList, printLinkedList } from "../common/utils";

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  while (prev && prev.next && prev.next.next) {
    const node1 = prev.next;
    const node2 = node1.next!;
    node1.next = node2.next;
    node2.next = node1;
    prev.next = node2;
    prev = node1;
  }
  return dummy.next;
}

const input = [1,2,3,4,5];
const list = buildLinkedList(input);
printLinkedList(list);
const output = swapPairs(list);
printLinkedList(output);
