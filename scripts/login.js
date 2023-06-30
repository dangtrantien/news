'use strict';

// Chọn elements
const inputUserName = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');

const submitBtn = document.getElementById('btn-submit');

// Data khởi đầu
const KEY = 'USER_ARRAY';
const CURRENT_USER_KEY = 'currentUser';
const userArr = JSON.parse(getFromStorage(KEY));

// Event Listener
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // Lấy data nhập vào từ form
  const data = {
    username: inputUserName.value,
    password: inputPassword.value,
  };

  // Kiểm tra form hợp lệ
  // Không có trường nào bị bỏ trống
  if (!data.username || !data.password) {
    alert('Please fill all the line!');
    // Username không tồn tại
  } else if (!userArr.find((user) => user.username === data.username)) {
    alert('Wrong Username!');
    // Sai Password
  } else if (
    !userArr.find((user) => {
      if (user.username === data.username)
        return user.password === data.password;
    })
  ) {
    alert('Wrong Password!');
  } else {
    // Khởi tạo currentUser
    const currentUser = userArr.filter(
      (user) => user.username === data.username
    );

    // Lưu currentUser vào localStorage
    saveToStorage(CURRENT_USER_KEY, JSON.stringify(currentUser));

    // Chuyển trang đến màn hình Home
    window.location.href = '../index.html';
  }
});
