const removeTrailingZeros = (n) => {
    let firstNonZeroDigitIndex = -1;

    for(let i = 0; i < n.length; i++) {
        if(n[i] != "0") {
            firstNonZeroDigitIndex = i;
            break;
        }
    }

    if(firstNonZeroDigitIndex === -1) {
        return "0";
    }

    const formattedNumber = n.slice(firstNonZeroDigitIndex);

    return formattedNumber;
};

export default removeTrailingZeros;