// 1. 给所有“阅读全文”按钮添加点击事件
const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 获取当前文章的标题
        const postTitle = this.closest('.blog-post').querySelector('.post-title').textContent;
        // 弹窗显示“全文”（实际项目可替换为跳转到文章详情页）
        alert(`《${postTitle}》的全文内容...（此处可扩展为加载真实文章内容）`);
    });
});

// 2. 导航栏：根据当前页面高亮（示例：默认首页高亮，实际可结合URL判断）
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // 先移除所有链接的active类
        navLinks.forEach(l => l.classList.remove('active'));
        // 给当前点击的链接添加active类
        this.classList.add('active');
        e.preventDefault(); // 阻止默认跳转（实际项目可删除，让链接正常跳转）
    });
});