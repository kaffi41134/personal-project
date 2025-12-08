//AOS動畫
AOS.init({
    duration: 1200,
    disable: 'mobile'
});

// banner輪播
$(function () {
    $(".banner-building").slick({
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
});

// Product-page click事件 
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-toggle');
    const contentGroups = document.querySelectorAll('.product-group');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            buttons.forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');

            const targetId = event.currentTarget.getAttribute('data-target');

            contentGroups.forEach(group => {
                group.classList.remove('active-content');
                if (group.id === targetId) {
                    group.classList.add('active-content');
                }
            });
        });
    });
});

// Q&A Accordion
$(function () {
    $(".faq-item a.wrap").on("click", function (e) {
        e.preventDefault();
        const $currentAnswer = $(this).parent().find(".answer");
        const $currentIcon = $(this).find(".fa-angle-down");
        $(".faq-item .answer").not($currentAnswer).slideUp();
        $(".faq-item .fa-angle-down").not($currentIcon).removeClass("rotate-icon");
        $currentAnswer.slideToggle();
        $currentIcon.toggleClass("rotate-icon");
    });
});

// reviews-avatar click事件
const reviewesData = {
    "imgs/avatar_1.jpg": {
        rating: 5,
        author: "Simon 和他的法國鬥牛犬Coco",
        quote: "「Coco總是沒來由地吠叫，搞得我們全家都很困擾。檢測報告指出她對某些食物有輕微過敏，且荷爾蒙波動較大。調整了飲食並搭配報告建議的益生菌後，她明顯平靜許多！🎉 不只是基因，這份報告解開了她情緒背後的謎團。現在家裡終於安靜了！🙏」"
    },
    "imgs/avatar_2.jpg": {
        rating: 5,
        author: "Julia 和她的布偶貓Momo",
        quote: "「我們家Momo換季就狂抓癢、掉毛嚴重，一直以為是單純的濕氣問題。報告顯示她對雞肉和玉米有高度不耐受性！換成鮭魚底的飼料後，僅僅兩週，毛髮就恢復了光澤，也不再夜半抓醒我們。🔬 投資寵物基因檢測，比看一堆皮膚科更有效率！」"
    },
    "imgs/avatar_3.jpg": {
        rating: 5,
        author: "Henry 和他的流浪犬Max",
        quote: "「從收容所領養Max，只知道牠是大型犬。檢測結果出乎意料，牠竟然有牧羊犬和拉布拉多的血統，難怪精力這麼旺盛！我們立刻根據報告建議，增加了飛盤和追逐遊戲的訓練，牠的破壞行為減少了80%！牠開心，我也開心。🥰」"
    },
    "imgs/avatar_4.jpg": {
        rating: 5,
        author: "Vivian 和她的雪納瑞Lucky",
        quote: "「知道雪納瑞容易有胰臟炎，我們一直很緊張。檢測報告提前預警了Lucky對特定心臟藥物的代謝速度較慢。這讓我們能與獸醫討論，避開風險藥物，並即時調整預防性照護。🩺 擁有這份指南，感覺就像為Lucky買了份長期的健康保險。」"
    },
    "imgs/avatar_5.jpg": {
        rating: 5,
        author: "David 和他的兩隻黃金獵犬",
        quote: "「我們家兩隻黃金獵犬，一隻性格外向，一隻膽小內向。基因檢測確認了牠們遺傳性疾病的風險，尤其是骨癌。因為提早知道，我們在日常活動中開始限制高強度跳躍，並增加了富含軟骨素的食物。🦴 報告讓我們能對症下藥，給牠們最個體化的照顧。」"
    },
    "imgs/avatar_6.jpg": {
        rating: 5,
        author: "Mandy 和她的柯基Pudding",
        quote: "「Pudding永遠在與體重戰鬥！報告顯示牠有較高的脂肪儲存傾向，而且對碳水化合物特別敏感。我們完全遵循報告調整了蛋白質和纖維比例後，牠在三個月內健康地減輕了1公斤！🏆 現在我們不用再猜測什麼對牠最好，科學數據就是最好的證明。」"
    }
}
$(function () {
    function updateFeedbackCard(data) {
        $(".feedback-card .author").text(data.author);
        $(".feedback-card .quote").text(data.quote);

        const $ratingContainer = $(".feedback-card .rating");
        $ratingContainer.empty();

        const starIndices = [0, 1, 2, 3, 4];

        $.each(starIndices, function (index, i) {
            let starClass;
            if (i < data.rating) {
                starClass = "fa-solid";
            } else {
                starClass = "fa-regular";
            }
            $ratingContainer.append(`<i class="${starClass} fa-star fa-lg"></i>`);
        });
    }

    //clicl事件--交換主要與次要 avatar 圖片
    $(".sub-avatar").on("click", function () {
        const $this = $(this);
        const clickedSrc = $this.attr("src");
        const mainSrc = $("#main-avatar").attr("src");

        $("#main-avatar").attr("src", clickedSrc);
        $this.attr("src", mainSrc);

        // 如果 reviewesData 有對應的資料，更新 feedback card
        //確保 clickedSrc 存在 && 確保在reviewesData中，存在一個以clickedSrc為key的屬性
        if (clickedSrc && reviewesData[clickedSrc]) {
            updateFeedbackCard(reviewesData[clickedSrc]);
        }
    });
});

// 登入註冊表單切換
const { createApp, ref } = Vue;
createApp({
    setup() {
        const toggleLogTab = ref(true);
        return {
            toggleLogTab,
        }
    }
}).mount('#login-form')

// 快速諮詢對話框事件綁定   
document.addEventListener('DOMContentLoaded', () => {
    const consultingLink = document.querySelector('.quick-consult');
    const consultingModal = document.getElementById('consultingModal');
    const consultingClose = document.querySelector('.consulting-modal-close');
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatMessages = document.getElementById('chatMessages');

    consultingLink.addEventListener('click', (e) => {
        e.preventDefault();
        consultingModal.classList.add('active');
        consultingLink.classList.add('hidden');
        chatInput.focus();
    });

    consultingClose.addEventListener('click', () => {
        consultingModal.classList.remove('active');
        consultingLink.classList.remove('hidden');
    });

    consultingModal.addEventListener('click', (e) => {
        if (e.target === consultingModal) {
            consultingModal.classList.remove('active');
            consultingLink.classList.remove('hidden');
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user';
        userMessageDiv.innerHTML = `
                    <div class="chat-avatar"><i class="fa-solid fa-user"></i></div>
                    <div class="chat-bubble">${message}</div>
                `;
        chatMessages.append(userMessageDiv);

        chatInput.value = '';

        //滾動條的位置 (scrollTop)，強制設定為所有內容的總高度 (scrollHeight)
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const aiMessageDiv = document.createElement('div');
            aiMessageDiv.className = 'chat-message ai';

            const aiResponses = [
                '感謝您的提問！我們的基因檢測服務涵蓋330多個犬種和150多個貓種。',
                '基因檢測結果通常在寄出後2-6週內提供。',
                '我們的檢測準確度達到99.9%，由ISO認證實驗室進行。',
                '您可以透過口腔頰拭子在家進行採樣，完全無痛。',
                '如需更詳細的資訊，歡迎聯絡我們的客服團隊！',
            ];

            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

            aiMessageDiv.innerHTML = `
                        <div class="chat-avatar"><img src="./imgs/justlogo-removebg-preview.png" alt="寵愛基因頭像"></div>
                        <div class="chat-bubble">${randomResponse}</div>
                    `;
            chatMessages.append(aiMessageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 800);
    }

    chatSendBtn.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });
});
