// script.js

document.addEventListener('DOMContentLoaded', () => {

    const password = "penguin"; // 設定したいパスワード
    const overlay = document.getElementById('overlay');
    const passwordPopup = document.getElementById('password-popup');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const messageElement = document.getElementById('message');
    // siteContent はパスワード保護の対象要素に合わせて適宜修正してください
    // 例: <div id="site-content"> で全体を囲むなど
    // ここでは仮に、ヘッダーとメインコンテンツを対象とします
    const siteContent = document.querySelectorAll('header, main'); // ポップアップとオーバーレイ以外の主要コンテンツ

    const isAuthenticated = sessionStorage.getItem('isAuthenticated');

    // サイトコンテンツを初期状態で隠すための関数
    // CSSで隠す場合はこの関数は不要になります
    function hideSiteContentInitially() {
         // CSSで body.content-hidden main { display: none; } のように指定し
         // body に content-hidden クラスを付ける方が望ましいですが、
         // 現在のJSの approach に合わせて、一時的に inline style で hide します
         siteContent.forEach(element => element.style.display = 'none');
    }

    // サイトコンテンツを表示する関数
    function showSiteContent() {
         // hideSiteContentInitially で付けた inline style を削除して、CSSのレイアウトを有効にする
         siteContent.forEach(element => element.style.display = '');
         // もし初期非表示をクラスで行っている場合は、ここでそのクラスを削除
         // document.body.classList.remove('content-hidden');
    }


    // 認証済みであれば、ポップアップを表示せずコンテンツを表示
    if (isAuthenticated === 'true') {
        overlay.style.display = 'none';
        passwordPopup.style.display = 'none';
        showSiteContent(); // コンテンツを表示
        // 認証済みでページを開いた場合もフィルターの初期状態（全て表示）を適用
        // 遅延させないと要素が表示される前にフィルターが走る可能性があるので注意
         requestAnimationFrame(() => { // 要素が表示されてから実行
            document.querySelector('.filter-button[data-class="all"]').click();
        });
        // return; // 処理を終了
    } else {
         // 認証されていない場合はポップアップを表示しコンテンツを非表示
         overlay.style.display = 'block';
         passwordPopup.style.display = 'block';
         hideSiteContentInitially(); // コンテンツを非表示
    }


    passwordSubmit.addEventListener('click', () => {
        validatePassword();
    });

    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            validatePassword();
        }
    });

    function validatePassword() {
        const userInput = passwordInput.value;

        if (userInput === password) {
            // パスワードが一致したら、認証状態を sessionStorage に保存
            sessionStorage.setItem('isAuthenticated', 'true');
            // ポップアップとオーバーレイを非表示にする
            overlay.style.display = 'none';
            passwordPopup.style.display = 'none';
            // サイトのコンテンツを表示する (CSSレイアウトが有効になるように)
            showSiteContent();
             requestAnimationFrame(() => { // 要素が表示されてから実行
                // 認証成功後、自動的に「全て」フィルターを適用して要素を配置
                document.querySelector('.filter-button[data-class="all"]').click();
             });

        } else {
            messageElement.textContent = "パスワードが間違っています";
            passwordInput.value = ''; // 入力欄をクリア
        }
    }


    const filterButtons = document.querySelectorAll('.filter-button');
    const studentItems = document.querySelectorAll('.student-item');

    // ページロード時に認証済みでない場合、フィルターが動く前にアイテムを全て非表示にしておく
    // これは hideSiteContentInitially() とセットで行うか、CSSで初期状態を管理する方が良い
    if (isAuthenticated !== 'true') {
         studentItems.forEach(item => item.classList.add('hidden'));
    }


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedClass = button.dataset.class;

            // アクティブなボタンのスタイルを更新
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            studentItems.forEach(item => {
                // ここで style.display を操作せず、クラスを付け外しする
                if (selectedClass === 'all' || item.classList.contains(selectedClass)) {
                    // 表示する場合: hidden クラスを削除
                    item.classList.remove('hidden');
                } else {
                    // 非表示にする場合: hidden クラスを追加
                    item.classList.add('hidden');
                }
            });
        });
    });

    // DOMContentLoaded 時点で認証済みでない場合、
    // 初期状態として全てのアイテムを非表示にする（CSSで隠す場合は不要）
    // もし上記で hideSiteContentInitially() + 全てhidden が行われないなら必要
    // if (isAuthenticated !== 'true') {
    //      studentItems.forEach(item => item.classList.add('hidden'));
    // }


}); // End DOMContentLoaded