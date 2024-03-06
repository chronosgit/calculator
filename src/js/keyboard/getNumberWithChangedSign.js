const getNumberWithChangedSign = (num) => {
    if(num === "0") return "0";

    if(num[0] === "-") {    
        return num.slice(1);
    }

    return `-${num}`;
};

export default getNumberWithChangedSign;