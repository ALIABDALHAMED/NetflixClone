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
        
        const videoSource = document.getElementById('video-source');
        const showTrailer = document.getElementById('show-trailer');
        
        if (video) {
            videoSource.src = decodeURIComponent(video);
            showTrailer.load();
        } else {
            const videoContainer = document.querySelector('.video-container');
            videoContainer.innerHTML = '<p class="no-video-message">Trailer not available</p>';
        }
}); 