import type { ListNode } from "../common/classes";
import { buildLinkedList, printLinkedList, runner } from "../common/utils";

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
    let slow = head,
        fast = head.next;
    while (fast && fast.next) {
        if (slow === fast) return true;
        slow = slow.next!;
        fast = fast.next.next;
    }
    return false;
}

const input1 = [1, 2, 3, 4, 5];
const input2 = [1, 2, 3, 4, 5, 6, 4];
runner(hasCycle, buildLinkedList(input2));
