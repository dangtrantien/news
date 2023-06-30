'use strict';

// Chọn elements
const inputFirstName = document.getElementById('input-firstname');
const inputLastName = document.getElementById('input-lastname');
const inputUserName = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const inputConfirmPassword = document.getElementById('input-password-confirm');

const submitBtn = document.getElementById('btn-submit');

// Data khởi đầu
const KEY = 'USER_ARRAY';
const userArr = JSON.parse(getFromStorage(KEY));

// Event Listener
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // Lấy data nhập vào từ form
  const data = {
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
    username: inputUserName.value,
    password: inputPassword.value,
    confirmPassword: inputConfirmPassword.value,
  };

  // Kiểm tra form hợp lệ
  // Không có trường nào bị bỏ trống
  if (
    !data.firstName ||
    !data.lastName ||
    !data.username ||
    !data.password ||
    !data.confirmPassword
  ) {
    alert('Please fill all the line!');
    // Username không trùng với Username của các người dùng trước đó
  } else if (userArr.find((user) => user.username === data.username)) {
    alert('Username already exist. Please choose another one.');
    // Password và Confirm Password phải giống nhau
  } else if (data.password !== data.confirmPassword) {
    alert('Password and Confirm Password are not correct!');
    // Password phải có nhiều hơn 8 ký tự
  } else if (data.password.length <= 8) {
    alert('Password must be alest 9 characters');
  } else {
    // Khởi tạo user mới và thêm vào mảng
    userArr.push(data);

    // Lưu mảng vào localStorage
    saveToStorage(KEY, JSON.stringify(userArr));

    // Chuyển trang đến màn hình login
    window.location.href = 'login.html';
  }
});
