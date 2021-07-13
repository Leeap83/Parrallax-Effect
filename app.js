const textDisplay = document.getElementById('text')
const phrases = ['Hello, my name is Lee.', 'I am a Full Stack Web Developer.', 'I love to code.']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {
        // if its not deleting and j is smaller or equal to first phrase length then we keep pushing
        // letters to the current empty phrase one at a time
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }
        //if it is deleting and j is samller than the first phrases length delete a letter
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }
        // when first array is deleted it moves on to next array and so on.
        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            //when all arrays have typed out and deleted 
            if (i == phrases.length) {
                i = 0
            }
        }
    }
    //Add speed up effect using math random to get a random speed between 50 and 80
    const spedUp = Math.random() * (80 - 50) + 50
    //Normal Speed using math random between 200 & 300 milliseconds
    const normalSpeed = Math.random() * (300 - 200) + 200
    // create a conditional statement that at end of word linger for 2000 milliseconds
    // Delete at spedUp otherwise normal speed
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()