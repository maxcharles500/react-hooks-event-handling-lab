// Code Keypad Component Here


// function handleChange() {
//     console.log('entering password');


    function Keypad() {
   
    function handleChange() {
        return console.log("Entering password...")
    }
    
    return (
        <input 
        onChange= {handleChange}
        type="password" />
    )
}

export default Keypad