'use strict';

// Chọn elements
const inputPageSize = document.getElementById('input-page-size');
const inputCategory = document.getElementById('input-category');

const submitBtn = document.getElementById('btn-submit');

// Data khởi đầu
const SETTING_KEY = 'settings';
const settings = JSON.parse(getFromStorage(SETTING_KEY));

// Điều kiện khởi đầu
const init = () => {
  inputPageSize.value = settings.pageSize;
  inputCategory.value = settings.category;
};

init();

// Event Listener
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // Lấy data nhập vào từ form
  const data = {
    pageSize: parseInt(inputPageSize.value),
    category: inputCategory.value,
  };

  // Kiểm tra form hợp lệ
  // Không có trường nào bị bỏ trống
  if (!data.pageSize || !data.category) {
    alert('Please fill all the line!');
  } else {
    alert('Your settings have been save.');

    // Lưu data vào localStorage
    saveToStorage(SETTING_KEY, JSON.stringify(data));
  }
});
