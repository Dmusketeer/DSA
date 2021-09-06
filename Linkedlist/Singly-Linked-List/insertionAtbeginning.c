// Program to insert a Node at the beginning of the Linked List
#include <stdio.h>
#include <stdlib.h>

// creating the Node with data and pointer

struct Node
{
    int data;
    struct Node *next;
} * head;

void createList(int n);
void insert_at_beginning(int data);
void displayList();

int main()
{
    int n, data;
    printf("\nEnter the total number of nodes: ");
    scanf("%d", &n);
    createList(n);
    printf("\nThe List is \n");
    displayList();
    printf("\nEnter data to insert at beginning of the list: ");
    scanf("%d", &data);
    insert_at_beginning(data);
    printf("\n\nThe List is \n");
    displayList();
    return 0;
}

/* A function to create a linked list with the specified number of nodes */

void createList(int n)
{
    struct Node *newNode, *temp;
    int data, i;
    head = (struct Node *)malloc(sizeof(struct Node));

    // When the list is empty
    if (head == NULL)
    {
        printf("Unable to allocate memory.");
    }
    else
    {
        printf("\nEnter the data of Node 1: ");
        scanf("%d", &data);
        head->data = data;
        head->next = NULL;
        temp = head;
        for (i = 2; i <= n; i++)
        {
            newNode = (struct Node *)malloc(sizeof(struct Node));
            if (newNode == NULL)
            {
                printf("Unable to allocate memory.");
                break;
            }
            else
            {
                printf("\nEnter the data of Node %d: ", i);
                scanf("%d", &data);
                newNode->data = data;
                newNode->next = NULL;
                temp->next = newNode;
                temp = temp->next;
            }
        }
    }
}
/* Function for inserting data at the beginning of the list */

void insert_at_beginning(int data_value)
{
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node)); // Allocating memory to the Node
    temp->data = data_value;                                        // Assigning the given data to the newNode
    temp->next = head;                                              //newNode is added
    head = temp;                                                    //newNode is made as the head Node
}

void displayList()
{
    struct Node *temp;
    if (head == NULL)
    {
        printf("List is empty.");
    }
    else
    {
        temp = head;
        while (temp != NULL)
        {
            printf("%d\t", temp->data);
            temp = temp->next;
        }
        printf("\n");
    }
}