// 全域變數，用於追蹤當前的對話框元素
let currentDialog = null;

// 全域的關閉函數
function closeDialog() {
    if (currentDialog && currentDialog.parentNode) {
        document.body.removeChild(currentDialog);
        currentDialog = null;
    }
}

function showDialog(options = {}) {
    // 預設值設定
    const defaults = {
        caption: '提示',
        message: '',
        buttons: [
            {
                text: '確定',
                type: 'primary',
                onClick: () => closeDialog()
            }
        ],
        closeOnMaskClick: true
    };

    // 合併選項
    const settings = { ...defaults, ...options };

    // 創建遮罩層
    const mask = document.createElement('div');
    mask.className = 'dialog-mask';
    mask.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;

    // 創建對話框
    const dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.cssText = `
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        width: 90%;
        max-width: 400px;
        padding: 20px;
        position: relative;
    `;

    // 創建標題
    const caption = document.createElement('div');
    caption.className = 'dialog-caption';
    caption.style.cssText = `
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    `;
    caption.textContent = settings.caption;

    // 創建訊息
    const message = document.createElement('div');
    message.className = 'dialog-message';
    message.style.cssText = `
        margin-bottom: 20px;
        color: #666;
        line-height: 1.5;
    `;
    message.textContent = settings.message;

    // 創建按鈕容器
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'dialog-buttons';
    buttonContainer.style.cssText = `
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    `;

    // 創建按鈕
    settings.buttons.forEach(buttonConfig => {
        const button = document.createElement('button');
        button.textContent = buttonConfig.text;
        button.style.cssText = `
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
        `;

        // 設定按鈕樣式
        switch (buttonConfig.type) {
            case 'primary':
                button.style.cssText += `
                    background-color: #f37021;
                    color: white;
                `;
                break;
            case 'secondary':
                button.style.cssText += `
                    background-color: #666;
                    color: white;
                `;
                break;
            case 'danger':
                button.style.cssText += `
                    background-color: #dc3545;
                    color: white;
                `;
                break;
            default:
                button.style.cssText += `
                    background-color: #e9ecef;
                    color: #333;
                `;
        }

        // 添加懸停效果
        button.onmouseover = () => {
            button.style.opacity = '0.8';
        };
        button.onmouseout = () => {
            button.style.opacity = '1';
        };

        // 綁定點擊事件
        button.onclick = buttonConfig.onClick;
        buttonContainer.appendChild(button);
    });

    // 組裝對話框
    dialog.appendChild(caption);
    dialog.appendChild(message);
    dialog.appendChild(buttonContainer);
    mask.appendChild(dialog);

    // 如果已經有對話框，先關閉它
    if (currentDialog) {
        closeDialog();
    }

    // 設定當前對話框
    currentDialog = mask;

    // 添加到頁面
    document.body.appendChild(mask);

    // 點擊遮罩層關閉
    if (settings.closeOnMaskClick) {
        mask.addEventListener('click', (e) => {
            if (e.target === mask) {
                closeDialog();
            }
        });
    }
}

// 使用範例：
/*
showDialog({
    caption: '資料輸入錯誤',
    message: '資料輸入錯誤，請重新嘗試！',
    buttons: [
        {
            text: '確定',
            type: 'primary',
            onClick: () => {
                console.log('點擊確定');
                closeDialog();
            }
        },
        {
            text: '取消',
            type: 'secondary',
            onClick: () => closeDialog()
        }
    ],
    closeOnMaskClick: true
});
*/ 