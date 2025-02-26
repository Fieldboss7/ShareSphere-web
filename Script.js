function sharePost() {
    const content = document.getElementById('postContent').value;
    const platforms = Array.from(document.querySelectorAll('.checkbox:checked')).map(cb => cb.name);
    const message = document.getElementById('message');
    if (!content || platforms.length === 0) {
        message.style.color = '#D32F2F';
        message.textContent = 'Please enter content and select at least one platform.';
        return;
    }
    message.style.color = '#FFC107';
    message.textContent = `Sharing to ${platforms.join(', ')}...`;
    setTimeout(() => {
        message.style.color = '#FFC107';
        message.textContent = 'Post shared successfully!';
        document.getElementById('postContent').value = '';
        document.querySelectorAll('.checkbox').forEach(cb => cb.checked = false);
    }, 1000);
}
