document.getElementById('englishBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Subscribe to the channel';
    document.getElementById('text').textContent = 'Go to Telegram';
    document.documentElement.lang = 'en';
});

document.getElementById('output').addEventListener('click', function() {
    document.getElementById('heading').textContent = 'Подпишись на канал';
    document.documentElement.lang = 'ru';
});
