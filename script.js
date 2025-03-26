document.addEventListener("DOMContentLoaded", function() {
    const departureSelect = document.getElementById("departure");
    const arrivalSelect = document.getElementById("arrival");
    const exchangeBtn = document.querySelector(".exchange");
    const searchBtn = document.getElementById("search-btn");

    // 交換出發站與抵達站
    exchangeBtn.addEventListener("click", function() {
        let temp = departureSelect.value;
        departureSelect.value = arrivalSelect.value;
        arrivalSelect.value = temp;
    });

    // 查詢按鈕點擊事件
    searchBtn.addEventListener("click", function() {
        const departure = departureSelect.value;
        const arrival = arrivalSelect.value;
        const departureDate = document.getElementById("departure-date").value;
        const returnDate = document.getElementById("return-date").value;
        const adultTickets = document.getElementById("adult-ticket").value;
        
        if (!departure || !arrival || !departureDate || adultTickets < 1) {
            alert("請選擇出發站、抵達站、出發日期，並至少購買一張全票。");
            return;
        }
        
        alert(`查詢成功！\n出發站: ${departure}\n抵達站: ${arrival}\n出發日期: ${departureDate}\n回程日期: ${returnDate || '無'}\n全票數量: ${adultTickets}`);
    });
});

// 生成導航步驟的 HTML
function generateStepNav(currentStep) {
    const steps = [
        { number: 1, text: "查詢車次" },
        { number: 2, text: "選擇車次" },
        { number: 3, text: "取票資訊" },
        { number: 4, text: "完成訂位" },
        { number: 5, text: "繳款完成" }
    ];

    let html = `
        <div class="step-nav">
            <div class="step-list">
    `;

    steps.forEach((step, index) => {
        const isActive = step.number === currentStep;
        const isCompleted = step.number < currentStep;
        
        html += `
            <div class="step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
                <div class="step-number">${step.number}</div>
                <div class="step-text">${step.text}</div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    return html;
}

// 使用範例：
// document.getElementById('stepNavContainer').innerHTML = generateStepNav(1); // 顯示步驟1
// document.getElementById('stepNavContainer').innerHTML = generateStepNav(2); // 顯示步驟2
// 以此類推...