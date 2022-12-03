export const isEmailValidation = (email) =>
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const isPasswordValidation = (password) =>
  password.trim().toLowerCase().length >= 8;

export const isNameValidation = (name) => name.trim().toLowerCase().length >= 5;
