document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search'); // 取得 URL 中的搜尋字詞

    if (searchTerm) {
        // 讓搜尋字詞高亮顯示的函數
        function highlightSearchTerm(term) {
            const regex = new RegExp('(' + term + ')', 'gi'); // 忽略大小寫的正則表達式
            const posts = document.querySelectorAll('#Article_MainText, #Article_SubText, #Article_Subtitle'); // 尋找所有文章內容

            posts.forEach(post => {
                post.innerHTML = post.innerHTML.replace(regex, function(match) {
                    return `<span class="highlight">${match}</span>`;
                });
            });
        }

        // 呼叫高亮顯示搜尋字詞的函數
        highlightSearchTerm(searchTerm);
    }

    window.onload = function () {
        // 刪除 URL 中的 search 參數
        const url = new URL(window.location.href);
        url.searchParams.delete('search');
        window.history.replaceState({}, document.title, url.toString());
        if (url.searchParams.has('error')) {
            url.searchParams.delete('error'); // 刪除 'error' 參數
            window.history.replaceState({}, document.title, url.toString()); // 更新 URL
        }
    };
    
    
});
