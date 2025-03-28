/**
 * 生成導航步驟的 HTML
 * @param {number} currentStep - 當前步驟的數字（1-5）
 * @returns {string} 生成的導航 HTML
 */
function generateStepNav(currentStep) {
    // 定義所有步驟的配置
    const steps = [
        { number: 1, text: "查詢車次" },
        { number: 2, text: "選擇車次" },
        { number: 3, text: "取票資訊" },
        { number: 4, text: "完成訂位" },
        { number: 5, text: "繳款完成" }
    ];

    // 開始構建 HTML
    let html = `
        <!--<div class="thsr-step-nav"> -->
            <div class="thsr-step-list">
    `;

    // 遍歷所有步驟，根據當前步驟設置對應的狀態
    steps.forEach((step, index) => {
        const isActive = step.number === currentStep;
        const isCompleted = step.number < currentStep;
        
        html += `
            <div class="thsr-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
                <div class="thsr-step-number">${step.number}</div>
                <div class="thsr-step-text">${step.text}</div>
            </div>
        `;
    });

    // 完成 HTML 構建
    html += `
            </div>
        <!--</div>-->
    `;

    return html;
}

// 使用範例：
// document.getElementById('stepNavContainer').innerHTML = generateStepNav(1); // 顯示步驟1
// document.getElementById('stepNavContainer').innerHTML = generateStepNav(2); // 顯示步驟2
// 以此類推...