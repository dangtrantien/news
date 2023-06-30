'use strict';

// Chọn elements
const loginModal = document.getElementById('login-modal');
const mainContent = document.getElementById('main-content');
const welcomeMessage = document.getElementById('welcome-message');

const logoutBtn = document.getElementById('btn-logout');

// Data khởi đầu
const CURRENT_USER_KEY = 'currentUser';
const currentUser = JSON.parse(getFromStorage(CURRENT_USER_KEY));

// Hiển thị giao diện tương ứng khi user đăng nhập hay không
if (currentUser[0]?.firstName) {
  loginModal.classList.add('hide');
  mainContent.classList.remove('hide');

  welcomeMessage.textContent = `Welcome ${currentUser[0].firstName}`;
} else {
  loginModal.classList.remove('hide');
  mainContent.classList.add('hide');
}

logoutBtn.addEventListener('click', function () {
  removeFromStorage(CURRENT_USER_KEY);

  // Chuyển trang đến màn hình Login
  window.location.href = 'pages/login.html';
});
