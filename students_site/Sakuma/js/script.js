/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// URLから検索キーワード取得
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
}

document.addEventListener('DOMContentLoaded', function () {
    const keyword = getQueryParam('q');
    const resultArea = document.getElementById('searchResults');

    if (!keyword) {
        resultArea.innerHTML = '検索キーワードが指定されていません。<br> 1~2つのキーワードを検索することでお探しのページが見つかる場合があります。<br>当サイトの検索エンジン上2つのキーワードまでの検索が可能となっております。<br>キーワードをスペースで区切って検索してください。';
        return;
    }
  // 2つまでのキーワードに分割
    const keywords = keyword.trim().split(/\s+/).slice(0, 2);

    const pages = [
        { title: "講師紹介", url: "講師紹介.html", text: "講師のプロフィールや経歴を紹介しています。" },
        { title: "基礎力強化コース", url: "基礎力強化コース.html", text: "基礎学力を伸ばすコースです。算数・数学・理科など。特徴「わかる楽しさ」を重視し、苦手意識を克服。学校成績の向上もサポート。少人数制授業1クラス6名程度で、主要5教科の基礎を徹底指導。反転授業事前に動画で予習し、授業では問題演習と質疑応答に集中。学習習慣サポート週1回のコーチングで、勉強計画の立て方や時間管理を指導。定期テスト対策学校の進度に合わせた問題集や予想問題を提供。授業時間週1～2回×120分定員1クラス6～8名料金例月額25,000円～※上記は授業の一例となっております。希望するコースや学科によって詳細は異なります。" },
        { title: "受験対策コース", url: "受験対策コース.html", text: "受験に向けた特別カリキュラム。特徴志望校ごとの過去問対策や傾向分析を徹底。AI活用で学習時間を最適化しています。個別指導生徒の学力と志望校の入試傾向に基づく1対1指導（例：数学の苦手単元克服、英語長文読解）AI学習指導AIが弱点を分析し、カスタム問題を提供。進捗は習字レポートで保護者と共有します。模試分析月1回の模試で実力を測定し、偏差値や合格可能性をフィードバックします。面接・小論文対策推薦入試や総合型選抜向けに、模擬面接や小論文を指導し、サポートします。授業指導週2回×90分（個別指導＋オンライン自習サポート）定員1講師あたり生徒5名まで料金例月額40,000円～" },
        { title: "未来デザインコース", url: "未来デザインコース.html", text: "将来の夢や進路を考えるコース。受験勉強の「その先」を意識させ、モチベーションを向上。大学や社会とのつながりを提供します。職業体験やゲスト講演（例：エンジニア、医療従事者）で視野を広げていきます。未来トーク週1回、大学生メンターと1対1で進路や目標について対話をします。例：SDGsをテーマに課題解決プランを立案し、プレゼン。総合型選抜や海外進学向けに、活動実績を整理。授業時間週1回×60分（ワークショップ）＋月1回のメンタリング定員1クラス10名（ワークショップ）、メンタリングは1対1料金例月額15,000円～※上記は授業の一例となっております。希望するコースや学科によって詳細は異なります。" },
        { title: "合格実績", url: "合格実績.html", text: "過去の合格者や進学先の一覧。高校入試県立トップ校県立西高校12名市立北高校6名県立中堅校県立東高校10名県立南高校8名私立高校（特進コースなど）学園高校（特進コース）5名学園南高校（進学コース）4名合格率志望校合格率97%（第一志望90%）大学入試国公立大学経済学部4名工学部2名文学部4名教育学部3名私立大学政治経済学部2名商学部6名法学部5名理工学部6名総合型選抜・推薦入試教育学部（総合型）2名情報コミュニケーション学部（推薦）3名合格率志望校合格率92%（第一志望85%）その他実績資格試験英検2級22名数学検定9名漢字検定2級4名進路支援海外大学進学2名ワークショップ参加者全生徒の80%が「進路の方向性が明確になった」と回答生徒コメントStudent commentRさん佐藤先生の英語指導で長文がスラスラ読めるように！AIの問題分析で弱点を克服して合格することができました。模試のフィードバックが本番の自信につながり、夢の獣医師に一歩近づくことができました。Tさん田中先生の授業がパズルみたいで楽しかった！基礎力強化コースで勉強の習慣がつき、公立高校に合格することができました。AIツールで効率よく学習ができました。先生のユーモアで勉強が好きになりました！Nさん林先生のコーチングで勉強計画が立てられるようになった。受験対策コースの面接指導で自信がつき、学園高校に合格！先生の励ましで国語の点が20点アップしました。夢の第一歩！Mさん岡本先生の理科授業で実験が楽しく、理工学部に興味が出ました!基礎力強化コースで基礎を固め、私立大学に合格。AIツールで苦手な数学も克服。エンジニアの夢に近づけました。Fさん高橋先生の英語プレゼン指導で総合型選抜を突破！未来デザインコースで進路がクリアになり、国際大学に合格。先生の対話で海外留学の夢が現実的になりました。Sさん田中先生の数学指導で応用問題が解けるようになりました！受験対策コースのAI分析で効率よく勉強でき、国公立大学に合格。山本先生の未来トークで経済の夢が固まりました。" },
        { title: "FAQ", url: "faq.html", text: "よくある質問と回答を掲載しています。" },
        { title: "ホーム", url: "index.html", text: "ひかりのあしあとのトップページです。" },
        { title:"林美咲", url:"講師紹介_林美咲.html", text:"林 美咲生年月日1990年5月15日担当コース基礎力強化コース経歴大学文学部卒業元公立中学校教員（国語・社会、8年経験）ひかりのあしあと基礎力強化コースにて学習習慣指導に注力。メッセージ勉強が苦手でも大丈夫！小さな一歩から一緒に始めよう。国語や社会を楽しんで、テストの点アップを目指します。キミの頑張りをたくさん褒めるから、自信がつくよ。一緒に勉強の楽しさを見つけよう。" },
        { title:"田中健太", url:"講師紹介_田中健太.html", text:"田中 健太生年月日1998年9月12日担当コース受験対策コース経歴大学工学部卒業大学院で数学教育を研究。ひかりのあしあと受験対策コースにて高校入試・大学入試の数学を担当。オンライン学習ツールの開発にも携わる。メッセージ数学はパズルだ！溶けた時のワクワクを一緒に味わおう。難しい問題もシンプルに解説するよ。AIツールで効率的に学んで、志望校合格を掴もう！気軽に質問してね、キミの「なぜ？」が大好きだ！。" },
        { title:"山本直樹", url:"講師紹介_山本直樹.html", text:"山本 直樹生年月日1989年2月7日担当コース未来デザインコース（未来トーク、プロジェクト学習）経歴大学経済学部卒業ベンチャー企業 元人事担当ひかりのあしあと未来デザインコースにて進路の方向性を見つける対話を重視。SDGs関連のプロジェクトを指導。メッセージキミのやりたいことは何か、じっくり話そう！やりたいことを見つける対話を通じて、未来の可能性を広げよう。一緒にSDGsの課題に挑戦したり、夢の第一歩を踏み出そうよ！" },
        { title:"佐藤彩花", url:"講師紹介_佐藤彩花.html", text:"佐藤 彩花生年月日1992年4月1日担当コース受験対策コース経歴大学教育学部卒業元大手予備校講師（5年経験）教員免許（高校英語）保有ひかりのあしあと受験対策コースにて大学受験の英語と国語を専門とし、偏差値40台から難関校合格者を多数輩出。メッセージキミの夢の第一歩、志望校合格を一緒に目指そう！英語や国語のコツを教えるよ。AIで弱点をバッチリ克服して、自信をもって本番に挑もう！どんな小さな質問も大歓迎。明るく楽しく、キミのペースで進むよ！！" },
        { title:"高橋玲奈", url:"講師紹介_高橋玲奈.html", text:"高橋 玲奈生年月日1998年3月5日担当コース未来デザインコース（キャリアワークショップ、英語プレゼン指導、海外進学サポート）経歴国際大学教養学部卒業海外プロジェクトに従事ひかりのあしあと未来デザインコースにてキャリア教育と英語プレゼンを得意とした指導を行っているメッセージキミの夢は何？ワークショップで一緒に探そう！英語やプレゼンで世界に羽ばたく力を育てよう。" },
        { title:"岡本悠斗", url:"講師紹介_岡本悠斗.html", text:"岡本 悠斗生年月日1995年7月30日担当コース基礎力強化コース経歴大学理学部卒業その後教材社で理科・数学の基礎教材を開発。ひかりのあしあと基礎力強化コースにて趣味の科学実験を授業に取り入れ、生徒の好奇心を刺激。メッセージ理科は実験、数学は冒険！楽しく学んで「わかった！」を増やそう。キミの好奇心を応援するよ。テストも怖くなくなるから、気軽に質問してね！一緒に基礎を固めて、未来の夢に近づこう！" },
        { title:"村田修一", url:"講師紹介_村田修一.html", text:"村田修一"},

    ];

    // どちらかのキーワードがタイトルまたは説明文に含まれるページを抽出
    const results = pages.filter(page =>
        keywords.some(kw =>
            page.title.toLowerCase().includes(kw.toLowerCase()) ||
            page.text.toLowerCase().includes(kw.toLowerCase())
        )
    );

    if (results.length === 0) {
        resultArea.innerHTML =`申し訳ありませんがお探しのページは見つかりませんでした。<br>
            1~2つのキーワードを検索することでお探しのページが見つかる場合があります。<br>
        当サイトの検索エンジン上2つのキーワードまでの検索が可能となっております。<br>
        キーワードをスペースで区切って検索してください。`;
    } else {
        const ul = document.createElement('ul');
        results.forEach(page => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = page.url;
            a.textContent = page.title;
            li.appendChild(a);

      let desc = page.text;
        let snippet = '';
        keywords.forEach(kw => {
            if (kw) {
                const idx = desc.toLowerCase().indexOf(kw.toLowerCase());
                if (idx !== -1) {
                    const start = Math.max(0, idx - 20);
                    const end = Math.min(desc.length, idx + kw.length + 20);
                    let part = desc.substring(start, end);
                    // ハイライト
                    part = part.replace(
                        new RegExp(`(${kw})`, 'gi'),
                        '<mark>$1</mark>'
                    );
                    snippet += (snippet ? '<br>' : '') + '... ' + part + ' ...';
                }
            }
        });
        // キーワードが見つからなかった場合は冒頭40文字
        if (!snippet) {
            snippet = desc.substring(0, 40) + (desc.length > 40 ? '...' : '');
        }
        li.innerHTML += '<br><span style="font-size:90%;color:#555;">' + snippet + '</span>';
        ul.appendChild(li);
    });
    resultArea.innerHTML = `<b>「${keywords.join(' ')}」の検索結果 (${results.length}件):</b>`;
    resultArea.appendChild(ul);
}});


    const counterKey = 'visitor-counter-demo';
    let count = localStorage.getItem(counterKey);
    if (!count) count = 1;
    else count = parseInt(count) + 1;
    localStorage.setItem(counterKey, count);

document.addEventListener('DOMContentLoaded', function () {
    const counterDiv = document.getElementById('visitor-counter');
    if (counterDiv) {
        counterDiv.innerHTML = `おめでとうございます！<br>あなたは${count}番目の訪問者です！`;
    }
});
    // localStorage.setItem('visitor-counter-demo', 0);
    //リセットのやつ↑

