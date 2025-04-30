

document.addEventListener('DOMContentLoaded', () => {
        var password = "penguin"; // ここに設定したいパスワードを入力
        var userInput = prompt("パスワードを入力してください:");
    
        if (userInput !== password) {
            alert("アクセスできません");
            window.location.href = "https://google.com"; // 閲覧を拒否して別ページへリダイレクト
        }

    const filterButtons = document.querySelectorAll('.filter-button');
    const studentItems = document.querySelectorAll('.student-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedClass = button.dataset.class;

            // アクティブなボタンのスタイルを更新
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            studentItems.forEach(item => {
                if (selectedClass === 'all' || item.classList.contains(selectedClass)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});


