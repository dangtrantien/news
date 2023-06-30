'use strict';

// Lưu data dưới LocalStorage
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

// Lấy data trong LocalStorage
function getFromStorage(key) {
  return localStorage.getItem(key) ?? '[]';
}

// Xóa data trong LocalStorage
function removeFromStorage(key) {
  return localStorage.removeItem(key);
}

// Chuyển JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password
  );

  return user;
}
