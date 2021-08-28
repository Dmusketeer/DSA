
// JavaScript program to find smallest and largest
// elements in singly linked list.
/* Linked list node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
var head = null;

// Function that returns the largest element
// from the linked list.
function largestElement(head) {

    // Declare a max variable and initialize
    // it with INT_MIN value.
    // INT_MIN is integer type and its value
    // is -32767 or less.
    var max = Number.MIN_VALUE;

    // Check loop while head not equal to NULL
    while (head != null) {

        // If max is less then head->data then
        // assign value of head->data to max
        // otherwise node povar to next node.
        if (max < head.data)
            max = head.data;
        head = head.next;
    }
    return max;
}

// Function that returns smallest element
// from the linked list.
function smallestElement(head) {

    // Declare a min variable and initialize
    // it with INT_MAX value.
    // INT_MAX is integer type and its value
    // is 32767 or greater.
    var min = Number.MAX_VALUE;

    // Check loop while head not equal to NULL
    while (head != null) {

        // If min is greater then head->data then
        // assign value of head->data to min
        // otherwise node povar to next node.
        if (min > head.data)
            min = head.data;

        head = head.next;
    }
    return min;
}

// Function that push the element in linked list.
function push(data) {
    // Allocate dynamic memory for newNode.
    var newNode = new Node();

    // Assign the data into newNode.
    newNode.data = data;

    // newNode->next assign the address of
    // head node.
    newNode.next = (head);

    // newNode become the headNode.
    (head) = newNode;
}

// Display linked list.
function printList(head) {
    while (head != null) {
        document.write(head.data + " -> ");
        head = head.next;
    }
    document.write("NULL");
}

// Driver code

// Start with empty list
// head = new Node();

// Using push() function to construct
// singly linked list
// 17->22->13->14->15
push(15);
push(14);
push(13);
push(22);
push(17);
console.log("Linked list is : <br/>");

// Call printList() function to
// display the linked list.
printList(head);
console.log("<br/>Maximum element in linked list: ");

// Call largestElement() function to get
// largest element in linked list.
console.log(largestElement(head));
console.log("<br/>Minimum element in linked list: ");

// Call smallestElement() function to get
// smallest element in linked list.
console.log(smallestElement(head));