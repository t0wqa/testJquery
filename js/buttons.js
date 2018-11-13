let state = {
    sequences: [
        [1, 2, 3],
        [2, 3, 1],
        [3, 1, 2]
    ],

    currentSequence: 0
}

let buttons = state.sequences[state.currentSequence].map((el) => {
    return createButton(el)
})

function nextSequence() {
    state.currentSequence = state.currentSequence === 2 ? 0 : state.currentSequence + 1;
    console.log(state.currentSequence);
    render(state.sequences[state.currentSequence].map((el) => {
        return createButton(el)
    }))
}

function createButton(el) {
    return $(`<button style="display: block;" onclick="nextSequence()">${el}</button>`)
}

function render(content) {
    console.log(content)
    $('#root').empty()

    content.forEach((el) => {
        $('#root').append(el)
    })
}

render(buttons)