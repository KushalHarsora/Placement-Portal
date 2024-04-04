const Validation = (values) => {

    let error = "";
    const emailPattern = RegExp('+@somaiya.edu');

    if(values == "") {
        error = "Email should not be empty";
    } else if (!emailPattern.test(values)) {
        error = "Enter Valid Email";
    } else {
        error = "";
    }

    return error;
}

export default Validation;
