
const Style = () => {
    const getErrClass = () => {
        const style = {};
        style.color = {color: '#d9534f'};
        return style;
    }
    const getErrFieldClass = () => {
        const style = {};
        style.color = {border: '1px solid #d9534f'};
        return style;
    }
    return {
        getErrClass: getErrClass,
        getErrFieldClass: getErrFieldClass
    }
}

module.exports = Style;