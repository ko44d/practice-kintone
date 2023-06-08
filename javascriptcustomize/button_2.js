
(() => {
    'use strict';

    kintone.events.on('app.record.detail.show', (event) => {
        const myIndexButton = document.createElement('button');
        myIndexButton.id = 'my_index_button';
        myIndexButton.innerText = 'メニュー部ボタン';
        myIndexButton.onclick = () => {
            window.alert('メニュー部');
        };
        kintone.app.record.getHeaderMenuSpaceElement().appendChild(myIndexButton);

        // 任意のスペースフィールドにボタンを設置
        const mySpaceFieldButtonOne = document.createElement('button');
        mySpaceFieldButtonOne.id = 'my_space_field_button_one';
        mySpaceFieldButtonOne.innerText = 'スペースボタン';
        mySpaceFieldButtonOne.onclick = () => {
            window.alert('スペースフィールド');
        };
        kintone.app.record.getSpaceElement('my_space_field_1').appendChild(mySpaceFieldButtonOne);

        const mySpaceFieldButtonTwo = document.createElement('button');
        mySpaceFieldButtonTwo.id = 'my_space_field_button_two';
        mySpaceFieldButtonTwo.innerText = 'スペースボタン';
        mySpaceFieldButtonTwo.onclick = () => {
            window.alert('スペースフィールド');
        };
        kintone.app.record.getSpaceElement('my_space_field_2').appendChild(mySpaceFieldButtonTwo);
    });
})();
