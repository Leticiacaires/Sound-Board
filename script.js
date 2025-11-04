// Lista com os nomes dos sons disponíveis
const sounds = ['Applause', 'Boo', 'Gasp', 'Tada', 'Victory', 'Wrong']

// Criação dinâmica dos botões com acessibilidade
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    // Adiciona rótulo de acessibilidade
    btn.setAttribute('aria-label', `Tocar som de ${sound}`)

    btn.addEventListener('click', () => {
        stopSongs()
        const soundElement = document.getElementById(sound)
        if (soundElement) {
            soundElement.play()
        } else {
            console.warn(`Som '${sound}' não encontrado!`)
        }
    })

    document.getElementById('buttons').appendChild(btn)
})

// Pausa todos os sons
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        if (song) {
            song.pause()
            song.currentTime = 0
        }
    })
}

