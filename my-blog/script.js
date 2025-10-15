const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const postTitle = this.closest('.blog-post').querySelector('.post-title').textContent;
        alert(`《${postTitle}》的全文内容...（此处可扩展为加载真实文章内容）`);
    });
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        e.preventDefault();
    });
});