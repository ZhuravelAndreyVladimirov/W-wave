const elementTop = document.querySelector('.js-choice-1');
const elementLeft = document.querySelector('.js-choice-2');

const choicesTop = new Choices(elementTop, {
    searchEnabled: false,
    itemSelectText: '',
 
});

const choicesLeft = new Choices(elementLeft, {
    searchEnabled: false,
    itemSelectText: '',
})

