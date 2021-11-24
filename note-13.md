# JAVASCRIPT (JS)

## Hello world

- Tạo file, liên kết js với html
- Viết 1 dòng code
- Chạy code

## Các khái niệm cơ bản

### Biến, kiểu dữ liệu

Trong C++:

    int x; // x là biến, có kiểu là số nguyên
    x = 1; // Gán số 1 vào x (x lưu số 1)

Khái niệm:

- Biến = variable
- Giá trị = value
- Kiểu dữ liệu = data type

Câu hỏi quan trọng:

1. Ý nghĩa của biến?
2. Ý nghĩa của kiểu dữ liệu?

> - Khai báo biến: Dùng từ khóa let hoặc var => Không khai báo kiểu dữ liệu tường minh.
> - Kiểu dữ liệu của biến sẽ tự động được xác định dựa vào giá trị mà nó đang lưu.
> - Vì giá trị của biến thay đổi được thành nhiều dạng khác nhau, nên kiểu dữ liệu của biến cũng có thể thay đổi.
> - Muốn xem kiểu dữ liệu của biến: dùng typeof

#### Các kiểu dữ liệu trong JS

1. Number: 1, 4.9, NaN (Not a Number), 3e9
2. String: "abc", 'abc', "", " "
3. Boolean: true, false
4. Undefined: undefined
5. Object: {key: value, ...}
6. Function:

Định nghĩa hàm:

    function tên_hàm(ts1, ts2, ...) {
        lệnh
        ...
        return giá_trị/biến/biểu_thức;
    }

Gọi hàm:

    tên_hàm(a, b, ...);
    x = tênhàm(a, b, ...);

#### Bài tập:

1. Cho phép nhập vào 2 số. Hãy tính tổng 2 số đó.

   Gợi ý: `let x = prompt("Nhập vào số thứ nhất:");`

2. Cho phép nhập họ và nhập tên. Hãy in ra tên đầy đủ.

#### Tìm hiểu:

1. Sự khác nhau giữa let và var?
