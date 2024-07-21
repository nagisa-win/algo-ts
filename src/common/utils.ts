import { ListNode } from "./classes";

export function findInArray(array: Array<any>, key: any): any {
    return array.find((i) => i === key);
}

export function runner(fn: Function, args: any, expect: any = undefined) {
    console.time("runner");
    const ret = fn.call(self, args);
    console.timeEnd("runner");
    if (expect !== undefined) {
        console.log(`[${ret === expect}]`, ret);
    } else {
        console.log(ret);
    }
}

export function buildLinkedList(
    array: Array<string | number>
): ListNode | null {
    const map = new Map<string, ListNode>();

    if (!array || !array.length) {
        return null;
    }
    const head = new ListNode(array[0]);
    map.set(array[0].toString(), head);
    let current = head;
    for (let i = 1; i < array.length; i++) {
        if (map.has(array[i].toString())) {
            current.next = map.get(array[i].toString())!;
            break;
        }
        current.next = new ListNode(array[i]);
        current = current.next;
        map.set(array[i].toString(), current);
    }
    return head;
}

export function printLinkedList(head: ListNode | null, cycled = false): void {
    const set = new Set<string | number>();

    if (!head) {
        return;
    }
    let current = head;
    const res = [];
    while (current) {
        if (cycled && set.has(current.val)) {
            res.push(`-> ${current.val}`);
            break;
        }
        res.push(current.val);
        set.add(current.val);
        if (current.next) {
            current = current.next;
        } else {
            break;
        }
    }
    console.log(res);
}
