export const greeting = 'Hello World';

export const characterAt = greeting.charAt(4);

export const greetingArray = greeting.split('');

export const begins = (str, char) => {return greeting.startsWith(char)};

export const beginsInsensitive = (str, char) => str[0].toLowerCase() === char.toLowerCase();