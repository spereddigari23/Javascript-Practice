class Node{
    constructor(value){
        this.value = value;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0; 
    }
    add(data){
        var node = new Node(data);
        var curr;
        if (this.head == null){
            this.head = node;
        }else{
            curr = this.head;
            while (curr.next!=null){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }
    printList(){
        var curr = this.head;
        while(curr!=null){
            console.log(curr.value);
            curr = curr.next;
        }
    }
    removeLast(){
        var curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        var ret = curr.next;
        curr.next = null;
        self.size--;
        return ret;
    }
    indexOf(value){
        var curr = this.head;
        var idx = 0;
        while (curr.value != value){
            idx++;
            curr = curr.next;
        }
        if (curr.value != value){
            return -1;
        }
        return idx;
    }
    sizeOfList(){
        console.log(this.size);
    }
}