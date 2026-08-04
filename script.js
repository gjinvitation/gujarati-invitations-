// ફોર્મમાં લખો ત્યારે કાર્ડ પર લખાણ ઓટોમેટિક બદલાય તે માટેનો કોડ
const inputs = {
    'inp-snehi': 'text-snehi',
    'inp-parents': 'text-parents',
    'inp-child': 'text-child',
    'inp-mother': 'text-mother',
    'inp-date-time': 'text-date-time',
    'inp-lunch-date': 'text-lunch-date',
    'inp-hosts': 'text-hosts',
    'inp-address': 'text-address'
};

Object.keys(inputs).forEach(inputId => {
    const inputElement = document.getElementById(inputId);
    const targetId = inputs[inputId];
    const targetElement = document.getElementById(targetId);

    if (inputElement && targetElement) {
        inputElement.addEventListener('input', function() {
            targetElement.innerHTML = this.value.replace(/\n/g, '<br>');
        });
    }
});
