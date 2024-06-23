
function handleArrayChange(arr, setArr, index, newValue) {
    const newArr = arr.map((v, i) => {
        if (i === index) {
            return newValue;
        } else {
            return v;
        }
    });
    setArr(newArr);
} export default handleArrayChange;