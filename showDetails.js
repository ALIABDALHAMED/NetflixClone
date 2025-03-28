document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const genre = urlParams.get('genre');
    const year = urlParams.get('year');
    const poster = urlParams.get('poster');
    const video = urlParams.get('video');

    document.getElementById('show-title').textContent = decodeURIComponent(title);
    document.getElementById('show-genre').textContent = decodeURIComponent(genre);
    document.getElementById('show-year').textContent = year;
    document.getElementById('show-poster').src = decodeURIComponent(poster);
    document.getElementById('video-source').src = decodeURIComponent(video);
    document.getElementById('show-trailer').load();
    document.title = `Netflix - ${decodeURIComponent(title)}`;

    document.getElementById('show-plot').textContent = 
        `This is a placeholder description for ${decodeURIComponent(title)}`;
}); 