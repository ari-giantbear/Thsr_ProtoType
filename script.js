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