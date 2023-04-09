if (navigator.userAgent.toLowerCase().includes('micromessenger')) {
    const title = document.title
    const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        document.title = intersectionRatio ? '' : title
    })
    observer.observe(document.querySelector('body header h1')!)
}

for (const card of document.querySelectorAll('div.NetEaseCloudMusicCard') as NodeListOf<HTMLDivElement>) {
    const audio = card.querySelector('audio') as HTMLAudioElement
    const icon = card.querySelector('div.icon') as HTMLDivElement
    card.addEventListener('click', () => {
        audio.paused ? audio.play() : audio.pause()
    })
    audio.addEventListener('canplay', () => (card.style.display = 'flex'))
    audio.addEventListener('play', () => (icon.style.display = 'block'))
    audio.addEventListener('pause', () => (icon.style.display = 'none'))
    audio.addEventListener('error', () => (audio.src = audio.src))
}
