export const ssn = value => {

  const sanitize = () => value.replace(/\D+/g, ''); // this RegEx removes non-digit characters such as letters, spaces, punctuation

  const format = (value) => `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;
  const sanitizedInput = sanitize();

  const isValid = () => {

    return sanitizedInput.length === 9;
  };

  return {

    isValid,
    sanitize,

    toString(){
      return format(sanitizedInput)
    }
  };
};



// Why does this work?
export const result = calculate(1,2);

function calculate(x, y) {
  return x + y;
}
