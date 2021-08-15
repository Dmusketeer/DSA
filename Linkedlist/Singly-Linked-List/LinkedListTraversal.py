# A simple Python program for traversal of a linked list
# Node class
class Node:
     # Function to initialise the node object
    def __init__(self,data):
        self.data = data  # Assign data
        self.next = None  # Initialize next as null


# Linked List class contains a Node object
class LinkedList:
    # Function to initialize head with 0 
    def __init__(self):
        self.head=None
    # This function prints contents of linked list
    # starting from head
    def printLinkedListEle(self):
        temp=self.head
        while(temp):
            print(temp.data)
            temp=temp.next

# Code execution starts here
if __name__=='__main__':
 # Start with the empty list
    llist=LinkedList()
    llist.head=Node(10)
    second=Node(30)
    third=Node(90)
    llist.head.next = second  # Link first node with second
    second.next = third  # Link second node with the third node

    llist.printLinkedListEle()

