(() => {
    'use strict';
    kintone.events.on('app.record.detail.show', (event) => {
        const myMenuButton = document.createElement('button');
        myMenuButton.id = 'my_menu_button';
        myMenuButton.innerText = 'レコード番号取得';
        myMenuButton.onclick = function() {
            window.alert('レコード番号（id）: ' + kintone.app.record.getId());
        };
        kintone.app.record.getHeaderMenuSpaceElement().appendChild(myMenuButton);
    });
})();
