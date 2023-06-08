
(() => {
    'use strict';
    kintone.events.on('app.record.index.show', (event) => {
        if (document.getElementById('my_index_button') !== null) {
            return;
        }
        const myIndexButton = document.createElement('button');
        myIndexButton.id = 'my_index_button';
        myIndexButton.innerText = '一覧のボタン';
        myIndexButton.onclick = () => {
            const myHeaderSpace = kintone.app.getHeaderSpaceElement();
            // 文字列要素
            const myListHeaderDiv = document.createElement('div');
            myListHeaderDiv.style.width = '100%';
            myListHeaderDiv.style.height = '100%';
            myListHeaderDiv.style.textAlign = 'center';
            myListHeaderDiv.style.fontSize = '30px';
            myListHeaderDiv.style.fontWeight = 'bold';
            myListHeaderDiv.style.backgroundColor = '#ffd78c';
            myListHeaderDiv.innerText = 'テストテストテスト';

            // メニューの下側の空白部分に文字列を表示
            myHeaderSpace.innerText = ''; // ← 増殖を防ぐため一旦明示的に空文字をセット
            myHeaderSpace.appendChild(myListHeaderDiv);
        };

        kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
    });
})();
