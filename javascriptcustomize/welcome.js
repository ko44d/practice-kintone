(() => {
    'use strict';
    kintone.events.on('app.record.index.show', (event) => {
        alert('レコード一覧イベント');
    });

    kintone.events.on('app.record.detail.show', (event) => {
        alert('レコード表示イベント');
    });

    kintone.events.on('app.record.create.show', (event) => {
        alert('レコード追加イベント');
    });

    kintone.events.on('app.record.edit.show', (event) => {
        alert('レコード編集イベント');
    });

    kintone.events.on('app.report.show', (event) => {
        alert('グラフ表示イベント');
    });
})();
