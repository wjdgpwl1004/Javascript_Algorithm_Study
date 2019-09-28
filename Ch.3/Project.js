/*
* 콘솔 기반 미니 프로젝트
* 도서 관리 프로그램
* */

/*
* 필요기능
* 1. 현재 도서 목록 출력
*   - 리스트 기반으로 저장
* 2. 고객 목록 출력
*   - 리스트 기반으로 저장
* 3. 고객 가입
*   - 고객 가입은 고객명만 입력받는다.
* 4. 도서대여
* 5. 도서반납
* 6. 대여 기록 출력
*
* */

function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 리스트 요소를 저장할 빈 배열 초기화
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
    this.length = length;
}

function append(element){
    this.dataStore[this.listSize++] = element;
}

function find(element){
    var length = this.dataSource.length;
    for(var i=0; i<length; i++){
        if(this.dataSource[i]===element){
            return i;
        }
    }
    return -1;
}

function remove(element){
    var index = this.find(element);
    if(index>-1){
        this.dataSource.splice(index, 1);
        this.listSize--;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toStirng(){
    return this.dataSource;
}

function insert(element, after){
    var insertPos = this.find(after);
    if(insertPos > -1){
        this.dataSource.spice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear(){
    delete this.dataSource;
    this.dataSource.length = 0;
    this.listSize = this.pos=0;
}

function contains(element){
    var length = this.dataSource.length;
    for(var i=0; i<length; i++){
        if(this.dataSource[i]===element){
            return true;
        }
    }
    return false;
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}

function prev(){
    if(this.pos > 0){
        this.pos--;
    }
}

function next(){
    if(this.pos<this.listSize-1){
        this.pos++;
    }
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataSource[this.pos];
}

function displayList(list){
    for(list.front(); list.currPos()<list.length(); list.next()){
        if(list.getElement() instanceof RentalRecord){
            console.log(`${list.getElement()['name']}, ${list.getElement()['book']}`);
        }else{
            console.log(list.getElement());
        }
    }
}


/*
* 필요기능
* 1. 현재 도서 목록 출력
*   - 리스트 기반으로 저장
* 2. 고객 목록 출력
*   - 리스트 기반으로 저장
* 3. 고객 가입
*   - 고객 가입은 고객명만 입력받는다.
* 4. 도서대여
* 5. 도서반납
* 6. 대여 기록 출력
*
* */

// 도서목록 초기값
var books = ['book1', 'book2', 'book3', 'book4', 'book5'];

// 도서목록 리스트로 변환
var bookList = new List();
books.forEach(book => {
    bookList.append(book);
});



// 고객 목록 초기값
var customers = new List();



// 대여기록
function RentalRecord(name, book){
    this.name = name;
    this.book = book;
}

var rentalRecords = new List();


/*1.현재 도서 목록 출력*/
displayList(bookList);

/*2.고객목록출력*/
displayList(customers);

/* 대여기록 출력 */
displayList(rentalRecords);

/* 고객 가입 */
customers.append('고객1');
customers.append('고객2');
customers.append('고객3');
customers.append('고객4');

/* 도서 대여 */
function rentalBook(name, book) {
    rentalRecords.append(new RentalRecord(name, book));
    bookList.remove(book);
}

/* 도서 반납 */
function returnbook(book) {
    bookList.append(book);
}