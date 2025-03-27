var clicks = 1;
var cardBacks = [1, 2, 3, 4, 5];
var canflip = true;
var killscroll = null;
var is_falling = false;
var is_transitioning = false;
var is_playing = false;
var showing_del = false;
var showing_edit = false;
var click_del_SU = 0;
window.addEventListener('load', () => {
    AOS.refresh();
});

/*
const tabId = Date.now().toString();  // Unique ID for this tab
const activeTabsKey = "activeTabs";   // Key to track active tabs

// Mark this tab as active
function markTabAsActive() {
    const activeTabs = JSON.parse(localStorage.getItem(activeTabsKey) || "{}");
    activeTabs[tabId] = Date.now(); // Add current tab with a timestamp
    localStorage.setItem(activeTabsKey, JSON.stringify(activeTabs));
}

// Remove this tab from the active list
function removeTab() {
    const activeTabs = JSON.parse(localStorage.getItem(activeTabsKey) || "{}");
    delete activeTabs[tabId];
    localStorage.setItem(activeTabsKey, JSON.stringify(activeTabs));
}

// Check if all tabs are closed
function isLastTabClosed() {
    const activeTabs = JSON.parse(localStorage.getItem(activeTabsKey) || "{}");
    return Object.keys(activeTabs).length === 0;
}

// Logout the user if all tabs are closed
function logoutIfAllTabsClosed() {
    if (isLastTabClosed()) {
        // Send logout request to the server using sendBeacon (ideal for background requests)
        navigator.sendBeacon("logout.php");
    }
}

// Add the tab to the active list when the page is loaded
window.addEventListener("load", function() {
    markTabAsActive();
});

// Listen for visibility change to detect when the tab becomes inactive or active
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        removeTab(); // Tab is being hidden (focus is lost)
    } else {
        markTabAsActive(); // Tab is becoming visible (focus is regained)
    }
});

// Detect when the tab is about to be unloaded (like being closed or refreshed)
window.addEventListener("beforeunload", function() {
    removeTab();  // Remove this tab from active tabs list
    logoutIfAllTabsClosed();  // If it's the last tab, log out
});

*/
/*
window.addEventListener('unload', function () {
    // 向伺服器發送請求，通知銷毀 Session
    navigator.sendBeacon('logout.php');
});*/

//console.log(sessionStorage.getItem('reloaded'));

if (sessionStorage.getItem('reloaded') != null) {
    //console.log('page was reloaded');
} else {
    //console.log("page was closed");
    fetch('logout.php', {
        method: 'POST', // Use POST for sensitive actions like logout
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Content type
        },
      
    })
    .then(response => {
        if (response.ok) {
           // console.log('Logged out successfully');
            window.location.replace("http://localhost/midterm(ver8.0)/index.php");   //check this to be the correct url
        } else {
           // console.log('Logout failed');
        }
    })
    .catch(error => {
        console.error('Error during logout:', error);
    });

    
}


sessionStorage.setItem('reloaded', 'yes');



document.addEventListener('DOMContentLoaded', function () {
   
    
    //updateFavsUI();
    AOS.init({
        once: true,
        offset: 120, // Adjust the offset to trigger earlier
        duration: 600 // Adjust duration for smoother animations
    });

    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search'); // 取得 URL 中的搜尋字詞
    //loading();
    //flip_coin();
    //setInterval(flip_coin, 800);

    // document.getElementById("Menumodal").addEventListener('click', function(event) {
    //     const rectangles = document.querySelectorAll('.rectangle');
    //     rectangles.forEach(rect => {
    //         if(rect.style.display == "flex"){
    //             rect.style.display = "none";
    //         }
    //     });
    // });

    // // 防止點擊 rectangle 自身觸發關閉
    // const rectangles = document.querySelectorAll('.rectangle');
    // rectangles.forEach(rect => {
    //     rect.addEventListener('click', function(event) {
    //         event.stopPropagation();
    //     });
    // });
    
    
   
   
    const saved_theme = sessionStorage.getItem("current_theme");
    let default_theme;
    const now = new Date();
    if (now.getMonth() + 1 >= 6 && now.getMonth() + 1 <= 8) {
        default_theme = "summer";
    } else if (now.getMonth() + 1 >= 9 && now.getMonth() + 1 <= 11) {
        default_theme = "autumn";
    } else if (now.getMonth() + 1 >= 3 && now.getMonth() + 1 <= 5) {
        default_theme = "spring";
    } else {
        default_theme = "winter";
    }
    var current_theme = saved_theme || default_theme;
    const themes = document.getElementById("theme_select");
    window.addEventListener('resize', function(){
        var glow = document.getElementById("glow"); 
        
        updateGlow(glow, current_theme);
    });
    themes.value = current_theme;
    


    function themechange(theme) {
        var imgElement_btn = document.getElementById("btn-image");
        var Bannerimg = document.getElementById("banner_img");
        var photo_display = document.getElementsByClassName("enlarge");
        var leaf_1 = document.getElementById("leaf_top_1");
        var leaf_2 = document.getElementById("leaf_top_2");
        var footer = document.getElementById("endimg");
        var falling_1 = document.getElementById("maple_1");
        var falling_2 = document.getElementById("maple_2");
        var border = document.getElementById("bodys");
        var top_sep = document.getElementById("top_sep");
        var bottom_sep = document.getElementById("bottom_sep");
        var diamonds = document.getElementsByClassName("dia");
        var square = document.getElementsByClassName("square");
        var bridge = document.getElementById("bridge");
        var card_front = document.getElementsByClassName("card-front");
        var profile = document.getElementsByClassName("profiles");
        var title_circle = document.getElementById("title_circle");
        var pTextChildren = document.querySelectorAll('#pText *');
        var footer_effect = document.getElementById("effect");
        var foot = document.getElementById("footer");
        var glow = document.getElementById("glow");
        var button_circle = document.getElementsByClassName("button_circle");
        var button = document.getElementsByClassName("button");
        //var summer_footer = document.getElementById("summer_footer");
        //var power = document.getElementById("powered");
        var modal_drop = document.getElementsByClassName("backdrop");
        var create_title = document.getElementById("Create");
        var su_del = document.getElementById("su_del");
        var Su_ta = document.getElementById("Su_ta");
        switch (theme) {
            case "winter":
                if(su_del){
                    su_del.classList.add("btn_winter");
                    su_del.classList.remove("btn_summer");
                    su_del.classList.remove("btn_autumn");
                    su_del.classList.remove("btn_spring");
                    su_del.classList.add("btn_light");
                    su_del.classList.remove("btn_dark");
                }
                if(Su_ta){
                    Su_ta.classList.add("winter_back");
                    Su_ta.classList.remove("autumn_back");
                    Su_ta.classList.remove("summer_back");
                    Su_ta.classList.remove("spring_back");
                }
                if (falling_1.classList.contains("maple")) {
                    falling_1.classList.remove("maple");
                }
                if (falling_2.classList.contains("maple1")) {
                    falling_2.classList.remove("maple1");
                }
                if (!falling_1.classList.contains("snowball_left")) {
                    falling_1.classList.add("snowball_left");
                }
                if (!falling_2.classList.contains("snowball_right")) {
                    falling_2.classList.add("snowball_right");
                }
                leaf_1.src = "ref/cristmas_top.png";
                leaf_2.src = "ref/cristmas_top.png";
                updatePseudoElementImages("ref/cristmas.svg", "ref/cristmas_bot.svg");
                footer.style.maxHeight = "400px";
                footer.src = "ref/bird_winter_feast.svg";
                foot.style.height = "350px";
                falling_1.innerHTML = "<img src=" + '"ref/ginger_man.svg"' + " width=" + '"60px"' + " height=" + '"60px">';
                falling_2.innerHTML = "<img src=" + '"ref/cookies_2.svg"' + " width=" + '"60px"' + " height=" + '"60px">';
                document.documentElement.classList.remove("autumn_back");
                document.documentElement.classList.remove("spring_back");
                document.documentElement.classList.remove("summer_back");
                document.documentElement.classList.add("winter_back");
                for(let i =0;i<modal_drop.length;i++){
                    modal_drop[i].classList.add("winter_back");
                    modal_drop[i].classList.remove("autumn_back");
                    modal_drop[i].classList.remove("summer_back");
                    modal_drop[i].classList.remove("spring_back");
                }
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
                create_title.classList.add("contact_winter");
                create_title.classList.remove("contact_spring");
                create_title.classList.remove("contact_autumn");
                create_title.classList.remove("contact_summer");
                border.classList.remove("border_autumn");
                border.classList.remove("border_summer");
                border.classList.remove("border_spring");
                border.classList.add("border_winter");
                top_sep.classList.remove("sep_autumn");
                top_sep.classList.remove("sep_spring");
                top_sep.classList.remove("sep_summer");
                top_sep.classList.add("sep_winter");
                bottom_sep.classList.remove("sep_autumn");
                bottom_sep.classList.remove("sep_summer");
                bottom_sep.classList.remove("sep_spring");
                bottom_sep.classList.add("sep_winter");
                document.querySelector('.search').classList.add('search_winter');
                document.querySelector('.search-bar').classList.add('search_winter');
                document.querySelector('.search-btn').classList.add('search_winter');
                document.querySelector('.search').classList.remove('search_spring');
                document.querySelector('.search-bar').classList.remove('search_spring');
                document.querySelector('.search-btn').classList.remove('search_spring');
                document.querySelector('.search').classList.remove('search_summer');
                document.querySelector('.search-bar').classList.remove('search_summer');
                document.querySelector('.search-btn').classList.remove('search_summer');
                document.querySelector('.search').classList.remove('search_autumn');
                document.querySelector('.search-bar').classList.remove('search_autumn');
                document.querySelector('.search-btn').classList.remove('search_autumn');
                imgElement_btn.src= 'ref/winter_magnifier.png';
                Bannerimg.src= 'ref/web_banner_winter.png';
                if (searchTerm) {
                    // 函數用來轉義正規表達式特殊字元
                    function escapeRegExp(string) {
                        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 將特殊字元加上反斜線轉義
                    }
                    // 讓搜尋字詞高亮顯示的函數
                    function highlightSearchTerm(term) {
                        const escapedTerm = escapeRegExp(term); // 轉義搜尋字詞
                        const regex = new RegExp('(' + escapedTerm + ')', 'gi'); // 忽略大小寫的正則表達式
                        const posts = document.querySelectorAll('#Article_MainText, #Article_SubText, #Article_Subtitle'); // 尋找所有文章內容

                        posts.forEach(post => {
                            const childNodes = Array.from(post.childNodes); // 獲取所有子節點
                
                            childNodes.forEach(node => {
                                // 僅處理文字節點，避免干擾已有的 HTML 結構
                                if (node.nodeType === Node.TEXT_NODE) {
                                    const text = node.textContent;
                                    if (regex.test(text)) {
                                        const highlightedHTML = text.replace(regex, '<span class="highlight">$1</span>');
                                        const tempElement = document.createElement('div');
                                        tempElement.innerHTML = highlightedHTML;
                
                                        // 將新生成的節點插入 DOM
                                        while (tempElement.firstChild) {
                                            post.insertBefore(tempElement.firstChild, node);
                                        }
                
                                        // 刪除原始文字節點
                                        post.removeChild(node);
                                    }
                                }
                            });
                        });
                    }
                    // 呼叫高亮顯示搜尋字詞的函數
                    highlightSearchTerm(searchTerm);
                    document.querySelector('.highlight').classList.add('highlight_winter');
                    document.querySelector('.highlight').classList.remove('highlight_spring');
                    document.querySelector('.highlight').classList.remove('highlight_summer');
                    document.querySelector('.highlight').classList.remove('highlight_autumn');
                }
                for (let i = 0; i < diamonds.length; i++) {
                    diamonds[i].classList.remove("dia_autumn");
                    diamonds[i].classList.remove("dia_spring");
                    diamonds[i].classList.remove("dia_summer");
                    diamonds[i].classList.add("dia_winter");
                }
                for (let i = 0; i < photo_display.length; i++) {
                    photo_display[i].classList.remove("photo_fall");
                    photo_display[i].classList.remove("photo_summer");
                    photo_display[i].classList.remove("photo_spring");
                    photo_display[i].classList.add("photo_winter");
                }
                for (let j = 0; j < square.length; j++) {
                    square[j].classList.remove("dia_autumn");
                    square[j].classList.remove("dia_summer");
                    square[j].classList.remove("dia_spring");
                    square[j].classList.add("dia_winter");
                }
                bridge.classList.remove("dia_autumn");
                bridge.classList.remove("dia_spring");
                bridge.classList.remove("dia_summer");
                bridge.classList.add("dia_winter");
                for (let k = 0; k < card_front.length; k++) {
                    card_front[k].classList.remove("card-front-summer");
                    card_front[k].classList.remove("card-front-spring");
                    card_front[k].classList.remove("card-front-autumn");
                    card_front[k].classList.add("card-front-winter");
                }
                for (let h = 0; h < profile.length; h++) {
                    profile[h].classList.remove("profile_autumn");
                    profile[h].classList.remove("profile_summer");
                    profile[h].classList.remove("profile_spring");
                    profile[h].classList.add("profile_winter");
                }
                title_circle.classList.remove("title_circle_autumn");
                title_circle.classList.remove("title_circle_summer");
                title_circle.classList.remove("title_circle_spring");
                title_circle.classList.add("title_circle_winter");
                pTextChildren.forEach((element) => {
                    element.classList.remove("top_border_summer");
                    element.classList.remove("top_border_autumn");
                    element.classList.remove("top_border_spring");
                    element.classList.add("top_border_winter");
                });
                footer_effect.style.display = "none";
                updateGlow(glow, "winter");
                
                
                for(let g = 0;g<button_circle.length;g++){
                    button_circle[g].classList.remove("circle_autumn");
                    button_circle[g].classList.remove("circle_summer");
                    button_circle[g].classList.add("circle_winter");
                    button_circle[g].classList.remove("circle_spring");
                }
                for(let u = 0;u<button.length;u++){
                    button[u].classList.remove("btn_autumn");
                    button[u].classList.remove("btn_summer");
                    button[u].classList.add("btn_winter");
                    button[u].classList.remove("btn_spring");
                    button[u].classList.remove("btn_dark");
                    button[u].classList.add("btn_light");
                }
                //summer_footer.style.display= "none";
                break;
            case "spring":
                if(Su_ta){
                    Su_ta.classList.remove("winter_back");
                    Su_ta.classList.remove("autumn_back");
                    Su_ta.classList.remove("summer_back");
                    Su_ta.classList.add("spring_back");
                }
                if(su_del){
                    su_del.classList.remove("btn_winter");
                    su_del.classList.remove("btn_summer");
                    su_del.classList.remove("btn_autumn");
                    su_del.classList.add("btn_spring");
                    su_del.classList.remove("btn_light");
                    su_del.classList.add("btn_dark");
                }
                if (falling_1.classList.contains("snowball_left")) {
                    falling_1.classList.remove("snowball_left");
                }
                if (falling_2.classList.contains("snowball_right")) {
                    falling_2.classList.remove("snowball_right");
                }
                if (!falling_1.classList.contains("maple")) {
                    falling_1.classList.add("maple");
                }
                if (!falling_2.classList.contains("maple1")) {
                    falling_2.classList.add("maple1");
                }
                leaf_1.src = "ref/spring_top.png";
                leaf_2.src = "ref/spring_top.png";
                updatePseudoElementImages("ref/spring_branch_flower.svg", "ref/spring_branch_flower.svg");
                footer.style.maxHeight = "400px";
                footer.src = "ref/bird_spring_small.svg";
                foot.style.height= "250px";
                falling_1.innerHTML = "<img src=" + '"ref/sakura_petal.svg"' + " width=" + '"50px"' + " height=" + '"50px">';
                falling_2.innerHTML = "<img src=" + '"ref/sakura_petal.svg"' + " width=" + '"50px"' + " height=" + '"50px">';
                document.documentElement.classList.remove("winter_back");
                document.documentElement.classList.remove("autumn_back");
                document.documentElement.classList.remove("summer_back");
                document.documentElement.classList.add("spring_back");
                create_title.classList.remove("contact_winter");
                create_title.classList.add("contact_spring");
                create_title.classList.remove("contact_autumn");
                create_title.classList.remove("contact_summer");
                for(let i =0;i<modal_drop.length;i++){
                    modal_drop[i].classList.remove("winter_back");
                    modal_drop[i].classList.remove("autumn_back");
                    modal_drop[i].classList.remove("summer_back");
                    modal_drop[i].classList.add("spring_back");
                }
                document.documentElement.classList.add("light");
                document.documentElement.classList.remove("dark");
                border.classList.remove("border_autumn");
                border.classList.remove("border_summer");
                border.classList.remove("border_winter");
                border.classList.add("border_spring");
                top_sep.classList.remove("sep_autumn");
                top_sep.classList.remove("sep_winter");
                top_sep.classList.remove("sep_summer");
                top_sep.classList.add("sep_spring");
                bottom_sep.classList.remove("sep_autumn");
                bottom_sep.classList.remove("sep_summer");
                bottom_sep.classList.remove("sep_winter");
                bottom_sep.classList.add("sep_spring");
                document.querySelector('.search').classList.remove('search_winter');
                document.querySelector('.search-bar').classList.remove('search_winter');
                document.querySelector('.search-btn').classList.remove('search_winter');
                document.querySelector('.search').classList.add('search_spring');
                document.querySelector('.search-bar').classList.add('search_spring');
                document.querySelector('.search-btn').classList.add('search_spring');
                document.querySelector('.search').classList.remove('search_summer');
                document.querySelector('.search-bar').classList.remove('search_summer');
                document.querySelector('.search-btn').classList.remove('search_summer');
                document.querySelector('.search').classList.remove('search_autumn');
                document.querySelector('.search-bar').classList.remove('search_autumn');
                document.querySelector('.search-btn').classList.remove('search_autumn');
                imgElement_btn.src= 'ref/spring_magnifier.png';
                Bannerimg.src= 'ref/web_banner_spring.png';
                if (searchTerm) {
                    // 函數用來轉義正規表達式特殊字元
                    function escapeRegExp(string) {
                        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 將特殊字元加上反斜線轉義
                    }
                    // 讓搜尋字詞高亮顯示的函數
                    function highlightSearchTerm(term) {
                        const escapedTerm = escapeRegExp(term); // 轉義搜尋字詞
                        const regex = new RegExp('(' + escapedTerm + ')', 'gi'); // 忽略大小寫的正則表達式
                        const posts = document.querySelectorAll('#Article_MainText, #Article_SubText, #Article_Subtitle'); // 尋找所有文章內容

                        posts.forEach(post => {
                            const childNodes = Array.from(post.childNodes); // 獲取所有子節點
                
                            childNodes.forEach(node => {
                                // 僅處理文字節點，避免干擾已有的 HTML 結構
                                if (node.nodeType === Node.TEXT_NODE) {
                                    const text = node.textContent;
                                    if (regex.test(text)) {
                                        const highlightedHTML = text.replace(regex, '<span class="highlight">$1</span>');
                                        const tempElement = document.createElement('div');
                                        tempElement.innerHTML = highlightedHTML;
                
                                        // 將新生成的節點插入 DOM
                                        while (tempElement.firstChild) {
                                            post.insertBefore(tempElement.firstChild, node);
                                        }
                
                                        // 刪除原始文字節點
                                        post.removeChild(node);
                                    }
                                }
                            });
                        });
                        
                    }
                    // 呼叫高亮顯示搜尋字詞的函數
                    highlightSearchTerm(searchTerm);
                    document.querySelector('.highlight').classList.remove('highlight_winter');
                    document.querySelector('.highlight').classList.add('highlight_spring');
                    document.querySelector('.highlight').classList.remove('highlight_summer');
                    document.querySelector('.highlight').classList.remove('highlight_autumn');
                }
                for (let i = 0; i < diamonds.length; i++) {
                    diamonds[i].classList.remove("dia_autumn");
                    diamonds[i].classList.remove("dia_winter");
                    diamonds[i].classList.remove("dia_summer");
                    diamonds[i].classList.add("dia_spring");
                }
                for (let i = 0; i < photo_display.length; i++) {
                    photo_display[i].classList.remove("photo_fall");
                    photo_display[i].classList.remove("photo_summer");
                    photo_display[i].classList.add("photo_spring");
                    photo_display[i].classList.remove("photo_winter");
                }
                for (let j = 0; j < square.length; j++) {
                    square[j].classList.remove("dia_autumn");
                    square[j].classList.remove("dia_summer");
                    square[j].classList.remove("dia_winter");
                    square[j].classList.add("dia_spring");
                }
                bridge.classList.remove("dia_autumn");
                bridge.classList.remove("dia_summer");
                bridge.classList.remove("dia_winter");
                bridge.classList.add("dia_spring");
                for (let k = 0; k < card_front.length; k++) {
                    card_front[k].classList.remove("card-front-summer");
                    card_front[k].classList.remove("card-front-winter");
                    card_front[k].classList.remove("card-front-autumn");
                    card_front[k].classList.add("card-front-spring");
                }
                for (let h = 0; h < profile.length; h++) {
                    profile[h].classList.remove("profile_autumn");
                    profile[h].classList.remove("profile_summer");
                    profile[h].classList.remove("profile_winter");
                    profile[h].classList.add("profile_spring");
                }
                title_circle.classList.remove("title_circle_autumn");
                title_circle.classList.remove("title_circle_summer");
                title_circle.classList.remove("title_circle_winter");
                title_circle.classList.add("title_circle_spring");
                pTextChildren.forEach((element) => {
                    element.classList.remove("top_border_summer");
                    element.classList.remove("top_border_autumn");
                    element.classList.remove("top_border_winter");
                    element.classList.add("top_border_spring");
                });
                footer_effect.style.display = "none";
                updateGlow(glow,"spring");
                for(let g = 0;g<button_circle.length;g++){
                    button_circle[g].classList.remove("circle_autumn");
                    button_circle[g].classList.remove("circle_summer");
                    button_circle[g].classList.remove("circle_winter");
                    button_circle[g].classList.add("circle_spring");
                }
                for(let u = 0;u<button.length;u++){
                    button[u].classList.remove("btn_autumn");
                    button[u].classList.remove("btn_summer");
                    button[u].classList.remove("btn_winter");
                    button[u].classList.add("btn_spring");
                    button[u].classList.add("btn_dark");
                    button[u].classList.remove("btn_light");
                }
                //summer_footer.style.display= "none";
                break;
            case "summer":
                if(Su_ta){
                    Su_ta.classList.remove("winter_back");
                    Su_ta.classList.remove("autumn_back");
                    Su_ta.classList.add("summer_back");
                    Su_ta.classList.remove("spring_back");
                }
                if(su_del){
                    su_del.classList.remove("btn_winter");
                    su_del.classList.add("btn_summer");
                    su_del.classList.remove("btn_autumn");
                    su_del.classList.remove("btn_spring");
                    su_del.classList.remove("btn_light");
                    su_del.classList.add("btn_dark");
                }
                if (falling_1.classList.contains("maple")) {
                    falling_1.classList.remove("maple");
                }
                if (falling_2.classList.contains("maple1")) {
                    falling_2.classList.remove("maple1");
                }
                if (!falling_1.classList.contains("snowball_left")) {
                    falling_1.classList.add("snowball_left");
                }
                if (!falling_2.classList.contains("snowball_right")) {
                    falling_2.classList.add("snowball_right");
                }
                leaf_1.src = "ref/palm_tree_crop.png";
                leaf_2.src = "ref/palm_tree_crop.png";
                updatePseudoElementImages("ref/palm_small.svg", "ref/palm_small.svg")
                footer.style.maxHeight = "400px";
                footer.src = "ref/summer_bird_footer_2.svg";
                falling_1.innerHTML = "<img src=" + '"ref/watermelon.svg"' + " width=" + '"70px"' + " height=" + '"90px">';
                falling_2.innerHTML = "<img src=" + '"ref/beach_ball.svg"' + " width=" + '"70px"' + " height=" + '"90px">';
                document.documentElement.classList.remove("winter_back");
                document.documentElement.classList.remove("spring_back");
                document.documentElement.classList.remove("autumn_back");
                document.documentElement.classList.add("summer_back");
                create_title.classList.remove("contact_winter");
                create_title.classList.remove("contact_spring");
                create_title.classList.remove("contact_autumn");
                create_title.classList.add("contact_summer");
                for(let i =0;i<modal_drop.length;i++){
                    modal_drop[i].classList.remove("winter_back");
                    modal_drop[i].classList.remove("autumn_back");
                    modal_drop[i].classList.add("summer_back");
                    modal_drop[i].classList.remove("spring_back");
                }
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
                //power.style.marginBottom = "300px";
                border.classList.remove("border_autumn");
                border.classList.remove("border_winter");
                border.classList.remove("border_spring");
                border.classList.add("border_summer");
                top_sep.classList.remove("sep_autumn");
                top_sep.classList.remove("sep_winter");
                top_sep.classList.remove("sep_spring");
                top_sep.classList.add("sep_summer");
                bottom_sep.classList.remove("sep_autumn");
                bottom_sep.classList.remove("sep_spring");
                bottom_sep.classList.remove("sep_winter");
                bottom_sep.classList.add("sep_summer");
                document.querySelector('.search').classList.remove('search_winter');
                document.querySelector('.search-bar').classList.remove('search_winter');
                document.querySelector('.search-btn').classList.remove('search_winter');
                document.querySelector('.search').classList.remove('search_spring');
                document.querySelector('.search-bar').classList.remove('search_spring');
                document.querySelector('.search-btn').classList.remove('search_spring');
                document.querySelector('.search').classList.add('search_summer');
                document.querySelector('.search-bar').classList.add('search_summer');
                document.querySelector('.search-btn').classList.add('search_summer');
                document.querySelector('.search').classList.remove('search_autumn');
                document.querySelector('.search-bar').classList.remove('search_autumn');
                document.querySelector('.search-btn').classList.remove('search_autumn');
                imgElement_btn.src= 'ref/summer_magnifier.png';
                Bannerimg.src= 'ref/web_banner_summer.png';
                if (searchTerm) {
                    // 函數用來轉義正規表達式特殊字元
                    function escapeRegExp(string) {
                        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 將特殊字元加上反斜線轉義
                    }
                    // 讓搜尋字詞高亮顯示的函數
                    function highlightSearchTerm(term) {
                        const escapedTerm = escapeRegExp(term); // 轉義搜尋字詞
                        const regex = new RegExp('(' + escapedTerm + ')', 'gi'); // 忽略大小寫的正則表達式
                        const posts = document.querySelectorAll('#Article_MainText, #Article_SubText, #Article_Subtitle'); // 尋找所有文章內容

                        posts.forEach(post => {
                            const childNodes = Array.from(post.childNodes); // 獲取所有子節點
                
                            childNodes.forEach(node => {
                                // 僅處理文字節點，避免干擾已有的 HTML 結構
                                if (node.nodeType === Node.TEXT_NODE) {
                                    const text = node.textContent;
                                    if (regex.test(text)) {
                                        const highlightedHTML = text.replace(regex, '<span class="highlight">$1</span>');
                                        const tempElement = document.createElement('div');
                                        tempElement.innerHTML = highlightedHTML;
                
                                        // 將新生成的節點插入 DOM
                                        while (tempElement.firstChild) {
                                            post.insertBefore(tempElement.firstChild, node);
                                        }
                
                                        // 刪除原始文字節點
                                        post.removeChild(node);
                                    }
                                }
                            });
                        });
                        
                    }
                    // 呼叫高亮顯示搜尋字詞的函數
                    highlightSearchTerm(searchTerm);
                    document.querySelector('.highlight').classList.remove('highlight_winter');
                    document.querySelector('.highlight').classList.remove('highlight_spring');
                    document.querySelector('.highlight').classList.add('highlight_summer');
                    document.querySelector('.highlight').classList.remove('highlight_autumn');
                }
                for (let i = 0; i < diamonds.length; i++) {
                    diamonds[i].classList.remove("dia_autumn");
                    diamonds[i].classList.remove("dia_winter");
                    diamonds[i].classList.remove("dia_spring");
                    diamonds[i].classList.add("dia_summer");
                }
                for (let i = 0; i < photo_display.length; i++) {
                    photo_display[i].classList.remove("photo_fall");
                    photo_display[i].classList.add("photo_summer");
                    photo_display[i].classList.remove("photo_spring");
                    photo_display[i].classList.remove("photo_winter");
                }
                for (let j = 0; j < square.length; j++) {
                    square[j].classList.remove("dia_autumn");
                    square[j].classList.remove("dia_winter");
                    square[j].classList.remove("dia_spring");
                    square[j].classList.add("dia_summer");
                }
                bridge.classList.remove("dia_autumn");
                bridge.classList.remove("dia_spring");
                bridge.classList.remove("dia_winter");
                bridge.classList.add("dia_summer");
                for (let k = 0; k < card_front.length; k++) {
                    card_front[k].classList.remove("card-front-winter");
                    card_front[k].classList.remove("card-front-spring");
                    card_front[k].classList.remove("card-front-autumn");
                    card_front[k].classList.add("card-front-summer");
                }
                for (let h = 0; h < profile.length; h++) {
                    profile[h].classList.remove("profile_autumn");
                    profile[h].classList.remove("profile_winter");
                    profile[h].classList.remove("profile_spring");
                    profile[h].classList.add("profile_summer");
                }
                title_circle.classList.remove("title_circle_autumn");
                title_circle.classList.remove("title_circle_winter");
                title_circle.classList.remove("title_circle_spring");
                title_circle.classList.add("title_circle_summer");
                pTextChildren.forEach((element) => {
                    element.classList.remove("top_border_winter");
                    element.classList.remove("top_border_autumn");
                    element.classList.remove("top_border_spring");
                    element.classList.add("top_border_summer");
                });
                footer_effect.style.display = "none";
                glow.style.display = "none";
                for(let g = 0;g<button_circle.length;g++){
                    button_circle[g].classList.remove("circle_autumn");
                    button_circle[g].classList.add("circle_summer");
                    button_circle[g].classList.remove("circle_winter");
                    button_circle[g].classList.remove("circle_spring");
                }
                for(let u = 0;u<button.length;u++){
                    button[u].classList.remove("btn_autumn");
                    button[u].classList.add("btn_summer");
                    button[u].classList.remove("btn_winter");
                    button[u].classList.remove("btn_spring");
                    button[u].classList.add("btn_dark");
                    button[u].classList.remove("btn_light");
                }
                //summer_footer.style.display= "block";
                break;
            case "autumn":
                if(Su_ta){
                    Su_ta.classList.remove("winter_back");
                    Su_ta.classList.add("autumn_back");
                    Su_ta.classList.remove("summer_back");
                    Su_ta.classList.remove("spring_back");
                }
                if(su_del){
                    su_del.classList.remove("btn_winter");
                    su_del.classList.remove("btn_summer");
                    su_del.classList.add("btn_autumn");
                    su_del.classList.remove("btn_spring");
                    su_del.classList.add("btn_light");
                    su_del.classList.remove("btn_dark");
                }
                if (falling_1.classList.contains("snowball_left")) {
                    falling_1.classList.remove("snowball_left");
                }
                if (falling_2.classList.contains("snowball_right")) {
                    falling_2.classList.remove("snowball_right");
                }
                if (!falling_1.classList.contains("maple")) {
                    falling_1.classList.add("maple");
                }
                if (!falling_2.classList.contains("maple1")) {
                    falling_2.classList.add("maple1");
                }
                leaf_1.src = "ref/leaf_top.png";
                leaf_2.src = "ref/leaf_top.png";
                updatePseudoElementImages("ref/borderbranch2.svg", "ref/borderbranch2.svg")
                footer.style.maxHeight = "250px";
                footer.src = "ref/bird_fall_feast.svg";
                foot.style.height = "150px";
                falling_1.innerHTML =
                    `
                    <div class="playground">
                        <div class="maple-leaf">
                        <div class="top trapezium"></div>
                        <div class="mid">
                        <div class="left trapezium"></div>
                        <div class="center"></div>
                        <div class="right trapezium"></div>
                        </div>
                        <div class="branch"></div>
                        </div>
                    </div>
                `;
                falling_2.innerHTML =
                    `
                    <div class="playground">
                        <div class="maple-leaf">
                        <div class="top trapezium"></div>
                        <div class="mid">
                        <div class="left trapezium"></div>
                        <div class="center"></div>
                        <div class="right trapezium"></div>
                        </div>
                        <div class="branch"></div>
                        </div>
                    </div>
                `;
                document.documentElement.classList.remove("winter_back");
                document.documentElement.classList.remove("spring_back");
                document.documentElement.classList.remove("summer_back");
                document.documentElement.classList.add("autumn_back");
                for(let i =0;i<modal_drop.length;i++){
                    modal_drop[i].classList.remove("winter_back");
                    modal_drop[i].classList.add("autumn_back");
                    modal_drop[i].classList.remove("summer_back");
                    modal_drop[i].classList.remove("spring_back");
                }
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
                create_title.classList.remove("contact_winter");
                create_title.classList.remove("contact_spring");
                create_title.classList.add("contact_autumn");
                create_title.classList.remove("contact_summer");
                border.classList.remove("border_winter");
                border.classList.remove("border_summer");
                border.classList.remove("border_spring");
                border.classList.add("border_autumn");
                top_sep.classList.remove("sep_spring");
                top_sep.classList.remove("sep_winter");
                top_sep.classList.remove("sep_summer");
                top_sep.classList.add("sep_autumn");
                bottom_sep.classList.remove("sep_spring");
                bottom_sep.classList.remove("sep_summer");
                bottom_sep.classList.remove("sep_winter");
                bottom_sep.classList.add("sep_autumn");
                document.querySelector('.search').classList.remove('search_winter');
                document.querySelector('.search-bar').classList.remove('search_winter');
                document.querySelector('.search-btn').classList.remove('search_winter');
                document.querySelector('.search').classList.remove('search_spring');
                document.querySelector('.search-bar').classList.remove('search_spring');
                document.querySelector('.search-btn').classList.remove('search_spring');
                document.querySelector('.search').classList.remove('search_summer');
                document.querySelector('.search-bar').classList.remove('search_summer');
                document.querySelector('.search-btn').classList.remove('search_summer');
                document.querySelector('.search').classList.add('search_autumn');
                document.querySelector('.search-bar').classList.add('search_autumn');
                document.querySelector('.search-btn').classList.add('search_autumn');
                imgElement_btn.src= 'ref/autumn_magnifier.png';
                Bannerimg.src= 'ref/web_banner_autumn.png';
                if (searchTerm) {
                    // 函數用來轉義正規表達式特殊字元
                    function escapeRegExp(string) {
                        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 將特殊字元加上反斜線轉義
                    }
                    // 讓搜尋字詞高亮顯示的函數
                    function highlightSearchTerm(term) {
                        const escapedTerm = escapeRegExp(term); // 轉義搜尋字詞
                        const regex = new RegExp('(' + escapedTerm + ')', 'gi'); // 忽略大小寫的正則表達式
                        const posts = document.querySelectorAll('#Article_MainText, #Article_SubText, #Article_Subtitle'); // 尋找所有文章內容

                        posts.forEach(post => {
                            const childNodes = Array.from(post.childNodes); // 獲取所有子節點
                
                            childNodes.forEach(node => {
                                // 僅處理文字節點，避免干擾已有的 HTML 結構
                                if (node.nodeType === Node.TEXT_NODE) {
                                    const text = node.textContent;
                                    if (regex.test(text)) {
                                        const highlightedHTML = text.replace(regex, '<span class="highlight">$1</span>');
                                        const tempElement = document.createElement('div');
                                        tempElement.innerHTML = highlightedHTML;
                
                                        // 將新生成的節點插入 DOM
                                        while (tempElement.firstChild) {
                                            post.insertBefore(tempElement.firstChild, node);
                                        }
                
                                        // 刪除原始文字節點
                                        post.removeChild(node);
                                    }
                                }
                            });
                        });
                    }
                    // 呼叫高亮顯示搜尋字詞的函數
                    highlightSearchTerm(searchTerm);
                    document.querySelector('.highlight').classList.remove('highlight_winter');
                    document.querySelector('.highlight').classList.remove('highlight_spring');
                    document.querySelector('.highlight').classList.remove('highlight_summer');
                    document.querySelector('.highlight').classList.add('highlight_autumn');

                }
                for (let i = 0; i < diamonds.length; i++) {
                    diamonds[i].classList.remove("dia_spring");
                    diamonds[i].classList.remove("dia_winter");
                    diamonds[i].classList.remove("dia_summer");
                    diamonds[i].classList.add("dia_autumn");
                }
                for (let i = 0; i < photo_display.length; i++) {
                    photo_display[i].classList.add("photo_fall");
                    photo_display[i].classList.remove("photo_summer");
                    photo_display[i].classList.remove("photo_spring");
                    photo_display[i].classList.remove("photo_winter");
                }
                for (let j = 0; j < square.length; j++) {
                    square[j].classList.remove("dia_winter");
                    square[j].classList.remove("dia_summer");
                    square[j].classList.remove("dia_spring");
                    square[j].classList.add("dia_autumn");
                }
                bridge.classList.remove("dia_spring");
                bridge.classList.remove("dia_summer");
                bridge.classList.remove("dia_winter");
                bridge.classList.add("dia_autumn");
                for (let k = 0; k < card_front.length; k++) {
                    card_front[k].classList.remove("card-front-summer");
                    card_front[k].classList.remove("card-front-spring");
                    card_front[k].classList.remove("card-front-winter");
                    card_front[k].classList.add("card-front-autumn");
                }
                for (let h = 0; h < profile.length; h++) {
                    profile[h].classList.remove("profile_winter");
                    profile[h].classList.remove("profile_summer");
                    profile[h].classList.remove("profile_spring");
                    profile[h].classList.add("profile_autumn");
                }
                title_circle.classList.remove("title_circle_winter");
                title_circle.classList.remove("title_circle_summer");
                title_circle.classList.remove("title_circle_spring");
                title_circle.classList.add("title_circle_autumn");
                pTextChildren.forEach((element) => {
                    element.classList.remove("top_border_summer");
                    element.classList.remove("top_border_winter");
                    element.classList.remove("top_border_spring");
                    element.classList.add("top_border_autumn");
                });
                for(let g = 0;g<button_circle.length;g++){
                    button_circle[g].classList.add("circle_autumn");
                    button_circle[g].classList.remove("circle_summer");
                    button_circle[g].classList.remove("circle_winter");
                    button_circle[g].classList.remove("circle_spring");
                }
                for(let u = 0;u<button.length;u++){
                    button[u].classList.add("btn_autumn");
                    button[u].classList.remove("btn_summer");
                    button[u].classList.remove("btn_winter");
                    button[u].classList.remove("btn_spring");
                    button[u].classList.remove("btn_dark");
                    button[u].classList.add("btn_light");
                }
                footer_effect.style.display = "block";
                glow.style.display = "none";
                //summer_footer.style.display= "none";
                break;
        }
    }


    /*function updatePseudoElementImages(newImageUrl_top, newImageUrl_bottom) {
        
        for (const sheet of document.styleSheets) {
            try {
               
                for (const rule of sheet.cssRules) {
                    
                    if (rule.selectorText === ".article::before") {
                        rule.style.backgroundImage = `url('${newImageUrl_top}')`;
                    }
                    
                    if (rule.selectorText === ".article::after") {
                        rule.style.backgroundImage = `url('${newImageUrl_bottom}')`;
                    }
                }
            } catch (e) {
                
                console.error(e);
            }
        }
    }*/
    function updatePseudoElementImages(newImageUrl_top, newImageUrl_bottom) {
        for (const sheet of document.styleSheets) {
            try {
               
                if (!sheet.href || sheet.href.startsWith(window.location.origin)) {
                    for (const rule of sheet.cssRules) {
                        if (rule.selectorText === ".article::before") {
                            rule.style.backgroundImage = `url('${newImageUrl_top}')`;
                        }
                        if (rule.selectorText === ".article::after") {
                            rule.style.backgroundImage = `url('${newImageUrl_bottom}')`;
                        }
                    }
                }
            } catch (e) {
                console.error("Unable to access stylesheet:", e);
            }
        }
    }

    

    themes.addEventListener("change", function () {
        const selected_theme = this.value;
        current_theme = this.value;
        themechange(selected_theme);
        bird_pos(selected_theme);
        sessionStorage.setItem("current_theme", selected_theme);
    });
    
    themechange(current_theme);

    bird_pos(current_theme);

    
    var modal = document.getElementsByClassName("modal");
    var Bannerimg = document.getElementById("banner_img");
    var modalImg = document.getElementById("img-modal");
    //var cards = document.querySelectorAll('.card');
    //var menuButton = document.getElementsByClassName("showmenu");
    var content_images = document.getElementsByClassName("enlarge");
    /*
    for(let i=0;i<menuButton.length;i++){
        menuButton[i].onclick = showMenu;
    }
        */
    $(".showmenu").click(showMenu);
    var stick = document.getElementById("stick");
    var end = document.getElementById("endpoint").offsetTop;
    var articles = document.getElementsByClassName("article");

    function bird_pos(theme) {
        var birds = document.getElementsByClassName("bird");
        var articles = document.getElementsByClassName("article");
        //console.log(current_theme);
        for (let b = 0; b < birds.length; b++) {
            const articleWidth = articles[b].offsetWidth;
            const articleHeight = articles[b].offsetHeight;

            if (current_theme == "winter") {
                birds[b].style.backgroundImage = "url('ref/christmas_bird.png')";
            } else if (current_theme == "summer") {
                birds[b].style.backgroundImage = "url('ref/summer_bird.png')";
            } else if (current_theme == "spring") {
                birds[b].style.backgroundImage = "url('ref/spring_bird.png')";
            } else {
                birds[b].style.backgroundImage = "url('ref/fall_bird.png')";
            }

            birds[b].style.right = (articleWidth * 0.5 - screen.width * 0.25) + "px";
            if (theme == "summer") {
                birds[b].style.top = (articleHeight * 0.1 - 230) + "px";
            } else {
                birds[b].style.top = (articleHeight * 0.1 - 200) + "px";
            }


        }

    }

    $(".showFav").click(openSaves);

    function openSaves(){
        $.ajax({
            url: "checkSession.php", // Endpoint to check the session
            method: "GET",
            dataType: "json",
            success: function(response) {
                if (response.error) {
                    showPopup("error", "Login to see suggestions") 
                } else {
                    var SaveModal = document.getElementById("Saves");
                    SaveModal.style.display = "block";
                    document.documentElement.classList.add("modal-open");
                }
            },
            error: function(xhr, status, error) {
                console.error("An error occurred: ", error);
            }
        });
        
    }
    const photoInput = document.getElementById("photoInput");
    const customLabel = document.querySelector(".custom-file-label");
    const editImageInput = document.getElementById("edit_image");
    const editLabel = document.querySelector(".edit-file-label");
    photoInput.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
    customLabel.textContent = this.files[0].name;
    } else {
    customLabel.textContent = "Choose File";
    }
    });

    editImageInput.addEventListener("change", function () {
        if (this.files && this.files.length > 0) {
        editLabel.textContent = this.files[0].name;
        } else {
        editLabel.textContent = "Choose File";
        }
        });



    // 簡昱安施工中

    window.likeBlog = function likeBlog(blogId) {
        // 發送 AJAX 請求
        fetch('like_blog.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `blog_id=${blogId}&commend=${0}` // 傳遞 blog_id 給後端
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // 更新對應的按讚數量
                document.getElementById(`likes-${blogId}`).textContent = data.likes;
                if(data.action === 'liked'){
                    document.getElementById(`heart-${blogId}`).classList.add('heart-red');
                }else{
                    document.getElementById(`heart-${blogId}`).classList.remove('heart-red');
                }


            } else {
                showPopup("error", data.message);
            }
        })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    }

    //在進入頁面時，自動更新按讚數量
    fetch('like_blog.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `commend=${1}` 
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(blog =>{
            const like_counter = document.getElementById(`likes-${blog.id}`);
            like_counter.textContent = blog.likes;
        });
    });

    // document.querySelectorAll(".like-button").forEach(function(element){
    //     element.addEventListener('click', function(event){
    //         element.classList.add('heart-red');
    //     })
    // });

    //讀取愛心是否點擊並切換愛心顏色
    fetch('like_colorchange.php')
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const likedBlogs = data.liked_blogs;

            // 將已按讚的愛心設為紅色
            likedBlogs.forEach(blogId => {
                const heart = document.getElementById(`heart-${blogId}`);
                if (heart) {
                    heart.classList.add('heart-red');
                }
            });
        } else {
            //console.log(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    document.getElementById("sidebar-blogpost").addEventListener('click',function(event){
        document.querySelector("#blogs").scrollIntoView({
            behavior: 'smooth' // 平滑滾動
        });
    });

    document.querySelectorAll(".login-js").forEach(function(element){
        element.addEventListener('click', function(event){
            event.preventDefault();
            window.location.href = "login.php";
        });
    });

    document.querySelectorAll(".logout-js").forEach(function(element){
        element.addEventListener('click', function(event){
            event.preventDefault();
            window.location.href = "logout.php";
        });
    });

    // document.getElementById("login").addEventListener('click', function(event) {
    //     event.preventDefault(); // 防止默認行為
    //     window.location.href = "login.php"; // 導向新的網址
    // });
        
    document.getElementById("others").addEventListener('click', function(event) {
        var sidebar = document.getElementById("sidebar");
        sidebar.style.display = "flex";

    });

    document.getElementById("sidebar-close").addEventListener('click', function(event) {
        var sidebar = document.getElementById("sidebar");
        sidebar.style.display = "none";
        
    });
    
    /*
    $(".save").click(function () {
        const id = $(this).attr('id'); 
        saves(id); 
    });
    //uses local storage to store saved
    function saves(id) {
        var blog_id = "text" + id.substring(11);
        var blog = $(`#${blog_id} #Article_Title`).text();
        var savedBlogs = JSON.parse(localStorage.getItem("favs")) || [];
        if (!savedBlogs.some(blog => blog.id === blog_id)) {
            savedBlogs.push({ id: blog_id, title: blog });
            localStorage.setItem("favs", JSON.stringify(savedBlogs));
            addToFavsUI(blog_id, blog);
        } else {
            alert("This blog is already Saved!");
        }
    }
    //add saves to modal
    function addToFavsUI(blog_id, blog_title) {
        var list = document.getElementById("favs");
        var newC = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#" + blog_id;
        link.innerText = blog_title;
        var delSave = document.createElement("button");
        delSave.classList.add("closeSav");
        delSave.innerText = "Remove";
        delSave.onclick = function(){
            removeFav(blog_id);
        };
        newC.appendChild(link);
        newC.appendChild(delSave);
        newC.classList.add("closeSaves");
        list.appendChild(newC);
        newC.onclick = closesave;
    }
    //delete saves
    function removeFav(blog_id) {
        var savedBlogs = JSON.parse(localStorage.getItem("favs")) || [];
        savedBlogs = savedBlogs.filter(blog => blog.id !== blog_id);
        localStorage.setItem("favs", JSON.stringify(savedBlogs));
        updateFavsUI();
    }
    //update saves
    function updateFavsUI() {
        var list = document.getElementById("favs");
        list.innerHTML = ""; 
        var savedBlogs = JSON.parse(localStorage.getItem("favs")) || [];
        savedBlogs.forEach(blog => {
            addToFavsUI(blog.id, blog.title);
        });
    }*/
       
        document.getElementById('su_add_form').addEventListener('submit', async function (event) {

            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
    
            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                });
                const result = await response.json();
                //console.log(response.ok);
               ;
                if (response.ok) {
                    showPopup("Success", "comment added successfully!");
                } else {
                    showPopup("Error", result.message || "An error occurred.");
                }
            } catch (error) {
                console.error("Fetch error:", error);
                showPopup("Error", "Unable to submit the form. Please try again later.");
            }
        });




        document.getElementById('showFav').addEventListener('click', function (e) {
            e.preventDefault(); 
            
            fetch('readSav.php')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    
                    document.getElementById('favs').innerHTML = data;
                    
                   
                    document.getElementById('Saves').style.display = 'block';
                    var newC = document.getElementsByClassName("Savs");
                    for(let i =0;i<newC.length;i++){
                        newC[i].onclick = closesave;
                    }


                    document.querySelectorAll(".delSav").forEach(form => {
                        form.addEventListener('submit', async function (e) {
                            e.preventDefault(); 
                            
                            const formData = new FormData(this);
                 
                            try {
                                const response = await fetch(form.action, {
                                    method: "POST",
                                    body: formData,
                                });
                                const result = await response.json();
                
                                if (response.ok && result.success) {
                                    showPopup("Success", "Blog Deleted successfully!");
                                } else {
                                    showPopup("Error", result.message || "An error occurred.");
                                }
                            } catch (error) {
                                console.error("Fetch error:", error);
                                showPopup("Error", "Unable to submit the form. Please try again later.");
                            }
                            
                        });
                    })
                    

                })
                .catch(error => console.error('Error fetching Saved data:', error));
                
        });
        
   

        document.querySelectorAll('.saveForm').forEach(form => {
            form.addEventListener('submit', async function (e) {
                e.preventDefault();
                const formData = new FormData(this);
        
                try {
                    const response = await fetch(this.action, {
                        method: "POST",
                        body: formData,
                    });
                    const result = await response.json();
        
                    if (response.ok && result.success) {
                        showPopup("Success", "Blog Saved successfully!");
                    } else {
                        showPopup("Error", result.message || "An error occurred.");
                    }
                } catch (error) {
                    console.error("Fetch error:", error);
                    showPopup("Error", "Unable to submit the form. Please try again later.");
                }
            });
        });
        

        
        
   

        


    //close modal
    function closesave(){
        //console.log("closed");
        var SaveModal = document.getElementById("Saves");
        SaveModal.style.display = "none";
        document.documentElement.classList.remove("modal-open");
    }


    for (let i = 0; i < articles.length; i++) {
        articles[i].onmouseenter = entered;

    }
    $(window).on('scroll', function () {
        if(window.innerWidth >= 1200 || (window.innerWidth < 1100 && window.innerWidth > 700)){

        
        var fall_1 = document.getElementById("maple_1");
        var fall_2 = document.getElementById("maple_2");
        if (is_falling === false) {
            is_falling = true;
            if (fall_1.classList.contains("maple") && fall_2.classList.contains("maple1")) {
                $('.maple').removeClass("hidden");
                $('.maple1').removeClass("hidden");
            } else {
                $('.snowball_left').removeClass("hidden");
                $('.snowball_right').removeClass("hidden");
            }

            clearTimeout(killscroll);
            killscroll = setTimeout(function () {
                if (fall_1.classList.contains("maple") && fall_2.classList.contains("maple1")) {
                    $(".maple").addClass("fall");
                    $('.maple1').addClass("fall_2");
                } else {
                    /*if(current_theme === "summer"){
                        $('.snowball_left').removeClass("fall");
                        $('.snowball_right').removeClass("fall");
                        $('.snowball_left').addClass("fall_no_spin");
                        $('.snowball_right').addClass("fall_no_spin");
                    }*/

                    $('.snowball_left').addClass("fall");
                    $('.snowball_right').addClass("fall_2");

                }

                setTimeout(function () {
                    if (fall_1.classList.contains("maple") && fall_2.classList.contains("maple1")) {
                        $('.maple').addClass("hidden");
                        $('.maple1').addClass("hidden");
                    } else {
                        $('.snowball_left').addClass("hidden");
                        $('.snowball_right').addClass("hidden");
                    }
                    is_falling = false;
                }, 2000);
            }, 1000);
            if (fall_1.classList.contains("maple") && fall_2.classList.contains("maple1")) {
                $('.maple').removeClass("fall");
                $('.maple1').removeClass("fall_2");
            } else {
                /*if(current_theme === "summer"){
                    $('.snowball_left').removeClass("fall_no_spin");
                    $('.snowball_right').removeClass("fall_no_spin");
                }else{
                    $('.snowball_left').removeClass("fall");
                    $('.snowball_right').removeClass("fall");
                }*/
                $('.snowball_left').removeClass("fall");
                $('.snowball_right').removeClass("fall_2");
            }

        }
    }

    });



    /*
    function getTime(){
        let now = new Date();
        let Min = now.getMinutes();
        let H = now.getHours();
        let D = now.getDate();
        let M = now.getMonth();
        let Y = now.getFullYear();
        let cycle = "A.M.";
        let displayHour = "";
        let displayMin = "";
        if(H >= 12){
            cycle = "P.M.";
            displayHour = String(H - 12);
            if(H === 12){
                displayHour = 12;
            }
        }
        if (H === 0) {
            displayHour = 12;
        }
        if(H<10){
            displayHour = "0" + String(H);
        }
        if(Min<10){
            displayMin = "0" + String(Min);
        }else{
            displayMin = String(Min);
        }
        console.log(displayMin);
        document.getElementById("time").textContent = Y + "/" + String(M+1) + "/" + D + "  " + displayHour + ":" + displayMin + " " + cycle;
    }
    getTime();
    setInterval(getTime, 5000);
    */
    $("#addButton").click(addForms)
    function addForms() {
        var addmodal = document.getElementById("AddForm");
        addmodal.style.display = "block";
        document.documentElement.classList.add("modal-open");
    }

    var animLi = document.getElementsByClassName("rectangle");
    for (let i = 0; i < animLi.length; i++) {
        let Menu_id = animLi[i].id;
        animLi[i].onclick = (function (i) {
            return function () {
                var Menumodal = document.getElementById("Menumodal");
                Menumodal.style.display = "none";
                document.documentElement.classList.remove("modal-open");

                var targetElement = document.getElementById("article_" + Menu_id);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            };
        })(i);

    }

    $("#DelButton").click(showDel);

    function showDel() {
        var del_btns = document.getElementsByClassName("del");
        if (showing_del == false) {
            showing_del = true;
            for (let i = 0; i < del_btns.length; i++) {
                del_btns[i].style.display = "block";
            }
            var del_option = document.getElementById("DelButton");
            del_option.innerHTML = "Cancel";
        } else {
            showing_del = false;
            for (let i = 0; i < del_btns.length; i++) {
                del_btns[i].style.display = "none";
            }
            var del_option = document.getElementById("DelButton");
            del_option.innerHTML = "Delete";
        }

    }

    var dels = document.getElementsByClassName("del");

    for (let i = 0; i < dels.length; i++) {
        let D_id = dels[i].id;
        dels[i].onclick = (function (id) {
            return function () {
                set_and_open(id);
            };
        })(D_id);
    }


    function set_and_open(id) {
        var del_Confirms = document.getElementById("Del_confirm");
        let id_index = String(id).replace("del_", "");
        del_Confirms.setAttribute("data-id", "delete_" + String(id_index));
        var delmodal = document.getElementById("DelForm");
        delmodal.style.display = "block";
        document.documentElement.classList.add("modal-open");
    }

    $("#Cancel").click(function () {
        stop("DelForm");
    });
    function stop(ID) {
        var to_close = document.getElementById(ID);
        to_close.style.display = "none";
        document.documentElement.classList.remove("modal-open");
    }
    $("#CancelEdit").click(function () {
        stop("EditForm");
    });

    document.getElementById('DelForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const delConfirmButton = form.querySelector('#Del_confirm');
        const dataId = delConfirmButton.getAttribute('data-id');
        if (dataId) {
            formData.append(dataId, dataId);
        }
        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (response.ok && result.success) {
                showPopup("Success", "Blog deleted successfully!");
            } else {
                showPopup("Error", result.message || "An error occurred.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            showPopup("Error", "Unable to submit the form. Please try again later.");
        }
    });

    $("#EditButton").click(OpenEditOption);

    function OpenEditOption() {

        var edit = document.getElementsByClassName("edit");
        var edit_ops = document.getElementById("EditButton");
        if (showing_edit === false) {
            showing_edit = true;
            for (let i = 0; i < edit.length; i++) {
                edit[i].style.display = "block";
            }
            edit_ops.innerHTML = "Cancel";
        } else {
            showing_edit = false;
            for (let i = 0; i < edit.length; i++) {
                edit[i].style.display = "none";
            }
            edit_ops.innerHTML = "Edit";
        }

    }

    var edit_btn = document.getElementsByClassName("edit");
    for (let i = 0; i < edit_btn.length; i++) {
        let E_id = edit_btn[i].id;
        edit_btn[i].onclick = (function (E_id) {
            return function () {
                set_and_edit(E_id);
            }
        })(E_id);
    }

    function set_and_edit(ID) {
        var edit_Confirms = document.getElementById("edit_confirm");
        edit_Confirms.setAttribute("data-id", String(ID));
        var editmodal = document.getElementById("EditForm");
        let id_index = String(ID).replace("edit_", "");
        var prev_text = document.getElementById("article_" + id_index);
        if (prev_text && editmodal) {
            var prev_Title = prev_text.querySelector("#Article_Title")?.textContent || "";
            var prev_Subtitle = prev_text.querySelector("#Article_Subtitle")?.textContent || "";
            var prev_Text = prev_text.querySelector("#Article_MainText")?.textContent || "";
            var prev_Subtext = prev_text.querySelector("#Article_SubText")?.textContent || "";
            var prev_filepath = prev_text.querySelector("#Article_Img_" + id_index)?.src || "";
            editmodal.querySelector("#edit_title").value = prev_Title;
            editmodal.querySelector("#edit_subtitle").value = prev_Subtitle;
            editmodal.querySelector("#edit_text").value = prev_Text;
            editmodal.querySelector("#edit_subtext").value = prev_Subtext;
            var imagePreview = editmodal.querySelector("#current_image_preview");
            if (imagePreview) {
                imagePreview.src = prev_filepath;
            }
        } else {
            console.error("Error: Could not find previous text or edit modal.");
        }

        editmodal.style.display = "block";
        document.documentElement.classList.add("modal-open");
    }





    document.getElementById("EditForm").addEventListener("submit", async function (event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const edit_confirm = document.getElementById("edit_confirm");
        const edit_id = edit_confirm.getAttribute("data-id");
        if (edit_id) {
            formData.append(edit_id, edit_id);
        }
        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (response.ok && result.success) {
                showPopup("Success", "Blog Edited successfully!");
            } else {
                showPopup("Error", result.message || "An error occurred.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            showPopup("Error", "Unable to submit the form. Please try again later.");
        }
    });


    document.getElementById("edit_image").addEventListener("change", function () {
        var imagePreview = document.getElementById("current_image_preview");
        var fileInput = document.getElementById("edit_image");

        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                imagePreview.src = e.target.result;
            };


            reader.readAsDataURL(fileInput.files[0]);
        }
    });


    const textarea = document.getElementsByClassName("MainTextInput");
    const error = document.getElementsByClassName("maxMainerror");
    const maxRows = 10;
    const maxCharPerLine = 65;

    for (let i = 0; i < textarea.length; i++) {
        textarea[i].addEventListener("input", () => {
            let lines = textarea[i].value.split("\n"); 
            let newLines = [];
            
            for (let line of lines) {
                
                if (line.length <= maxCharPerLine) {
                    newLines.push(line);
                    continue;
                }
    
                
                while (line.length > maxCharPerLine) {
                    newLines.push(line.slice(0, maxCharPerLine));
                    line = line.slice(maxCharPerLine);
                }
                if (line.length > 0) {
                    newLines.push(line); 
                }
            }
    
          
            if (newLines.length > maxRows) {
                error[i].style.display = "block";
                newLines = newLines.slice(0, maxRows);
            } else {
                error[i].style.display = "none";
            }
    
    
            textarea[i].value = newLines.join("\n");
        });
    }
    
    
const textareaSub = document.getElementsByClassName("SubTextInput");
const Suberror = document.getElementsByClassName("maxerror");
const maxSubRows = 5;

for (let i = 0; i < textareaSub.length; i++) {
    textareaSub[i].addEventListener("input", () => {
        let Sublines = textareaSub[i].value.split("\n"); // Split by user-entered line breaks
        let newSublines = [];

        for (let line of Sublines) {
            // Preserve empty lines or user-entered breaks
            if (line.length === 0) {
                newSublines.push(""); 
                continue;
            }

            // Handle wrapping for lines exceeding maxCharPerLine
            while (line.length > maxCharPerLine) {
                newSublines.push(line.slice(0, maxCharPerLine)); // Add a chunk
                line = line.slice(maxCharPerLine); // Keep the rest
            }

            // Push the remaining part of the line
            newSublines.push(line);
        }

        // Enforce maxSubRows limit
        if (newSublines.length > maxSubRows) {
            Suberror[i].style.display = "block";
            newSublines = newSublines.slice(0, maxSubRows); // Truncate to max rows
        } else {
            Suberror[i].style.display = "none";
        }

        // Update the textarea value with the processed lines
        textareaSub[i].value = newSublines.join("\n");
    });
}




    window.addEventListener("scroll", () => {
        if (window.scrollY >= end - stick.offsetHeight) {
            stick.style.position = "absolute";
            stick.style.top = `${end - stick.offsetHeight + 55}px`;
        } else if (window.scrollY > 0) {
            stick.style.position = "fixed";
            stick.style.top = "55px";
        } else {
            stick.style.position = "absolute";
            stick.style.top = "55px";
        }
    });

    document.getElementById('addform').addEventListener('submit', async function (event) {

        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (response.ok && result.success) {
                showPopup("Success", "Blog added successfully!");
            } else {
                showPopup("Error", result.message || "An error occurred.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            showPopup("Error", "Unable to submit the form. Please try again later.");
        }
    });

    function showPopup(title, mes) {
        const noticeblock = document.getElementById("noticeForm");
        const notice = document.getElementById('popupSpace');
        notice.innerHTML = `
          <h3>${title}</h3>
          <p>${mes}</p>
      `;
        noticeblock.style.display = 'block';
        document.documentElement.classList.add("modal-open");
    }
    $("#Result").click(closepopup);
    function closepopup() {
        const notice = document.getElementById('noticeForm');
        notice.style.display = 'none';
        document.documentElement.classList.remove("modal-open");
        location.reload();
    }



    /*
        [...cards].forEach((card) => {
            card.addEventListener('click', function () {
    
                var back = card.querySelector('.card__face--back');
                var ra = cardBacks;
                var randArr = shuffleArray(ra);
                if (back.innerText == "") {
                    var num = randArr.shift();
                    var newEle = document.createElement("a")
                    newEle.href = "#" + num;
                    newEle.innerHTML = num;
                    back.appendChild(newEle);
                    newEle.onclick = function () {
                        canflip = true;
                    }
                }
    
    
                if (!card.classList.contains('is-flipped') && canflip) {
                    card.classList.toggle('is-flipped');
                    canflip = false;
                }
    
    
            });
        });*/

    /*
    $("#logo").on("click",float);
    */
    $(".image").each(function () {
        let id = $(this).attr("id"); 
        //console.log(id); 
        $(this).click(function(){
            showImg(id);
        })
    });
    const logo = document.getElementById("logo");
    const bridge = document.getElementById("bridge");
    logo.addEventListener("mouseenter", () => {
        const logoWidth = logo.offsetWidth + 30;
        bridge.style.width = `${logoWidth}px`;
    });

    logo.addEventListener("mouseleave", () => {
        bridge.style.width = "0px";
    });

    Bannerimg.onclick = function () {
        modal_images(Bannerimg.src, "wide");
    }
    $("#Result").click(closepopup);
    for (let i = 0; i < content_images.length; i++) {
        content_images[i].onclick = function () {
            let imageId = content_images[i].id;
           // console.log(imageId);
            resizeimg(imageId);
        };
    }

    function modal_images(im, type) {
        modal[0].style.display = "block";
        modalImg.src = im;

        if (type == "slim") {
            modalImg.className = "modal-img-slim";
        } else if (type == "wide") {
            modalImg.className = "modal-img";
        }
        document.documentElement.classList.add("modal-open");
    }

    var exit = document.getElementsByClassName("close");
    for (let i = 0; i < exit.length; i++) {
        exit[i].onclick = function () {

            modal[i].style.display = "none";
            document.documentElement.classList.remove("modal-open");
        }
    }
    /*
    exit.onclick = function(){
        modal[0].style.display = "none";
        document.documentElement.classList.remove("modal-open");
        
    }*/
    $("#contact").click(function () {
        bring("Contact");
    })

    $("blogs").click(function () {
        bring("article_1");
    })

    $(".suggestion").each(function(index, element) {
        const id = $(this).attr("id"); // Get the id of each suggestion element
        
        // Attach click event handler to each element
        $(this).click(function() {
            // Perform AJAX check when a suggestion button is clicked
            $.ajax({
                url: "checkSession.php", // Endpoint to check the session
                method: "GET",
                dataType: "json",
                success: function(response) {
                    if (response.error) {
                        showPopup("error", "Login to see suggestions") // Display the error message
                    } else {
                        showSuggest(id, current_theme); // Call the function if session is valid
                    }
                },
                error: function(xhr, status, error) {
                    console.error("An error occurred: ", error);
                }
            });
        });
    });
    $("#su_area").on("input", function () {
        if ($(this).val().length === 10) {
            $(".maxSuerror").css({
                "display":"block"
            });
        }else{
            $(".maxSuerror").css({
                "display":"none"
            });
        }
    });


    $("#su_del").click(show_del_su);


    var find_btn = document.getElementsByClassName("find");
    var topic = document.getElementsByClassName("title");
    for (let i = 0; i < find_btn.length; i++) {
        find_btn[i].href = "https://en.wikipedia.org/wiki/" + String(topic[i].innerText);
    }
    var img_btn = document.getElementsByClassName("image");

    for (let i = 0; i < find_btn.length; i++) {
        img_btn[i].onclick = function () {
            modal_images(content_images[i].src, "slim");
        }
    }
});

function showSuggest(id, theme){
    var sugg = document.getElementById("Suggests");
   // console.log(id);
    const query_id = id.substring(5);
    const post_id = "su_add_" + query_id;
   // console.log(query_id);
    var b_bar = document.getElementById("add_part");
    var existingButton = b_bar.querySelector(".post");
    if (existingButton) {
        b_bar.removeChild(existingButton);
    }
    var post_btn = document.createElement("button");
        post_btn.setAttribute("class", "post");
        post_btn.setAttribute("id", post_id);
        post_btn.setAttribute("data-id", query_id);
        post_btn.innerText = "Post";
        b_bar.appendChild(post_btn);
        updatepoststyle(theme);
        //console.log(post_id);
        $("#" + post_id).click(function(){
        const buttonId = this.getAttribute('data-id');
        document.getElementById('blog_ids').value = buttonId;
        show_add_su();
    });
    
    sugg.style.display = "block";
    document.documentElement.classList.add("modal-open");
    $.post("suggest.php", 
        {"id": query_id}, 
        function(data) {
            //console.log("Response data:", data); // Debugging response
            
            $('#u_su').empty();
    
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(function(suggestion) {

                    let listItem = `<li class="su" id="su_${suggestion.id}">${suggestion.suggestion} - ${suggestion.user_name}
                        <button class="su_delete" id="su_del_${suggestion.id}">✘</button>
                    </li>`;
                    $('#u_su').append(listItem);
                    $(".su_delete").click(function() {
                        del_sug(suggestion.id);
                    });
                });
            } else {
                $('#u_su').append('<li>No suggestions</li>');
            }
        },
        "json"  
    ).fail(function(xhr, status, error) {
        console.error("Request failed:", status, error); // Debugging failed requests
        console.error("Response text:", xhr.responseText); // Debugging response body
    });
    
};
function show_del_su(){
    click_del_SU= click_del_SU + 1;
    $(".su_delete").each(function(index, element) {
        if(click_del_SU % 2 != 0){
            this.style.display = "inline";
        }else{
            this.style.display = "none";
        }
        
        
    });
}

function show_add_su(){
    var su_form = document.getElementById("su_form");
    su_form.style.display = "block";
    document.documentElement.classList.add("modal-open");
}

function del_sug(del_id){
    //console.log("ll");
    $.post("suggest_del.php",{"id":del_id},function(data){
        showPopup(data.status, data.message);
    },"json");
}




function bring(location) {
    var target = document.getElementById(location);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}


function showMenu() {
    var menuModal = document.getElementById("Menumodal");
    menuModal.style.display = "flex";
    document.documentElement.classList.add("modal-open");
}
function float() {
    if (is_playing == false) {
        is_playing = true;
        $(".object").addClass("show");
        $(".object").addClass("travel");
        setTimeout(function () {
            $(".object").removeClass("show");
            $(".object").removeClass("travel");
            is_playing = false;
        }, 3000);
    }

}


/*
function shuffleArray(array) {
    var i = array.length;
    var j = 0;
    var temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}
*/
/*
function enlargeimg(){
    img = document.getElementById("img1");
    img.style.transform= "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
}

function resetSize(){
    img = document.getElementById("img1");
    img.style.transform= "scale(1)";
    img.style.transition = "transform 0.25s ease";
}
*/
/*
function resizeimg(id){
    clicks = clicks + 1;
    text_id = "text" + String(id.substring(11));
    article_id = "article" + String(id.substring(11));
    console.log(article_id);
    if(clicks %2 == 0 && clicks != 0){
        arti = document.getElementById(article_id);
        img = document.getElementById(id);
        img.style.width = "120%";
        img.style.height = "auto";
        arti.style.height = (img.offsetHeight + 300) + "px"; // Match article to image
       // img.style.transition = "width 0.5s ease, height 0.5s ease";
        te = document.getElementById(text_id);
        te.style.visibility = "hidden";
        te.style.display = "none";
    }
    else{
        arti = document.getElementById(article_id);
        img = document.getElementById(id);
        img.style.width = "100%";
        img.style.width = "450px";
        img.style.height = "650px";
        arti.style.height = (img.offsetHeight-100) + "px"; // Match article to image
        //img.style.transition = "width 0.5s ease, height 0.5s ease";
        te = document.getElementById(text_id);
        te.style.visibility = "visible";
        te.style.display = "block"
    }
    
}*/
function resizeimg(id) {
    clicks = clicks + 1;
    text_id = "text" + String(id.substring(11));
    article_id = "article" + String(id.substring(11));
    hand_id = "hand" + String(id.substring(11));
    chef_id = "chef" + String(id.substring(11));
    hat_id = "hat" + String(id.substring(11));

    const arti = document.getElementById(article_id);
    const img = document.getElementById(id);
    const te = document.getElementById(text_id);
    const hand = document.getElementById(hand_id);
    const chef = document.getElementById(chef_id);
    const hat = document.getElementById(hat_id);
    // Store the original height in a data attribute if not already stored
    if (!arti.dataset.originalHeight) {
        arti.dataset.originalHeight = arti.offsetHeight; // Save the original height
    }

    if (clicks % 2 == 0 && clicks != 0) {
        img.style.width = "120%";
        img.style.height = "auto";
        arti.style.height = (img.offsetHeight + 300) + "px"; // Match article to image
        te.style.visibility = "hidden";
        te.style.display = "none";
        hand.style.display = "none";
        img.style.paddingBottom = "60px";
        chef.style.backgroundImage = 'url("ref/chef_done.svg")';
        hat.style.display = "none";
        hidePseudoElementPos(clicks);
    } else {
        img.style.width = "500px";
        img.style.height = "700px";
        arti.style.height = arti.dataset.originalHeight + "px"; // Reset to original height
        te.style.visibility = "visible";
        te.style.display = "block";
        hand.style.display = "block";
        img.style.paddingBottom = "50px";
        chef.style.backgroundImage = 'url("ref/chef__said.svg")';
        hat.style.display = "block";
        hidePseudoElementPos(clicks);
    }
}


function loading() {
    document.documentElement.classList.add("modal-open");
    var loading = document.getElementById("loader");
    loading.classList.add("fade");
    setTimeout(function () {
        loading.classList.add("hidden");
        loading.style.zIndex = "-2000";
        document.documentElement.classList.remove("modal-open");
    }, 3000);
}

function flip_coin() {
    var coin = document.getElementById("coin-inner");
    if (coin.classList.contains("is_flipped_2")) {
        coin.classList.remove("is_flipped_2");
        coin.classList.add("is_flipped");
    } else {
        coin.classList.add("is_flipped_2");
        coin.classList.remove("is_flipped");
    }
}

function birdfly() {

    var birds = document.getElementsByClassName("bird");
    for (let i = 0; i < birds.length; i++) {
        birds[i].classList.add("fly");
    }
}

function entered() {

    var articles = document.getElementsByClassName("article");
    var birds = document.getElementsByClassName("bird");
    for (let i = 0; i < birds.length; i++) {
        if (birds[i].classList.contains("fly")) {
            birds[i].classList.remove("fly");
        }

    }

    for (let i = 0; i < articles.length; i++) {
        articles[i].onmouseleave = birdfly;
    }


}

function fall() {
    var maple = document.getElementsByClassName("maple");
    for (let i = 0; i < maple.length; i++) {
        maple[i].classList.add("fall")
    }
}


function updateGlow(GlowDiv, theme){
    if(window.innerWidth > 850 && theme != "summer"){
        GlowDiv.style.display = "block";
        if(theme == "winter"){
            GlowDiv.style.top = "13vw";
           
        }else{
            GlowDiv.style.top = "4vw";
           
        }
        //PowerText.style.marginBottom = "230px";
    }else{
        GlowDiv.style.display = "none";
        //PowerText.style.marginBottom = "20px";
    }
}

function hidePseudoElementPos(clicks) {
    for (const sheet of document.styleSheets) {
        try {
           
            if (!sheet.href || sheet.href.startsWith(window.location.origin)) {
                for (const rule of sheet.cssRules) {
                    
                    if (rule.selectorText === ".article::after") {
                        if(clicks%2==0){
                            rule.style.display = "none";
                        }else{
                            rule.style.display = "block";
                        }
                        
                        
                    }
                }
            }
        } catch (e) {
            console.error("Unable to access stylesheet:", e);
        }
    }
}


function showPopup(title, mes) {
    const noticeblock = document.getElementById("noticeForm");
    const notice = document.getElementById('popupSpace');
    notice.innerHTML = `
      <h3>${title}</h3>
      <p>${mes}</p>
  `;
    noticeblock.style.display = 'block';
    document.documentElement.classList.add("modal-open");
}

function closepopup() {
    const notice = document.getElementById('noticeForm');
    notice.style.display = 'none';
    document.documentElement.classList.remove("modal-open");
    location.reload();
}

function updatepoststyle(theme){
    var post = document.getElementsByClassName("post");
    if(post.length > 0 && post){
        if(theme == "winter"){
            post[0].classList.add("btn_winter");
            post[0].classList.remove("btn_summer");
            post[0].classList.remove("btn_autumn");
            post[0].classList.remove("btn_spring");
            post[0].classList.add("btn_light");
            post[0].classList.remove("btn_dark");
        }
        else if(theme == "summer"){
            post[0].classList.remove("btn_winter");
            post[0].classList.add("btn_summer");
            post[0].classList.remove("btn_autumn");
            post[0].classList.remove("btn_spring");
            post[0].classList.remove("btn_light");
            post[0].classList.add("btn_dark");
        }
        else if(theme == "spring"){
            post[0].classList.remove("btn_winter");
            post[0].classList.remove("btn_summer");
            post[0].classList.remove("btn_autumn");
            post[0].classList.add("btn_spring");
            post[0].classList.remove("btn_light");
            post[0].classList.add("btn_dark");
        }
        else{
            post[0].classList.remove("btn_winter");
            post[0].classList.remove("btn_summer");
            post[0].classList.add("btn_autumn");
            post[0].classList.remove("btn_spring");
            post[0].classList.add("btn_light");
            post[0].classList.remove("btn_dark");
        }
       
    }
}

function showImg(id) {
    const img_id = id.substring(13);
    //console.log(img_id);

   
    $("#fullscreen-loader").show();

    
    $.post("getimage.php", { "id": img_id }, function (data) {
        if (data && data.file_path) {
            
            $("#img-modal").attr("src", data.file_path);

            
            var img_modal = document.getElementById("Bannermodal");
            img_modal.style.display = "block";
            document.documentElement.classList.add("modal-open");
        } else {
            console.error("Error: Invalid response from server.");
        }
    }, "json").fail(function () {
        console.error("Error: Failed to retrieve image.");
    }).always(function () {
       
        $("#fullscreen-loader").hide();
    });
}
