import React from "react";
const FormInput = props => {
  const testLocalError = (localError, names, text, form, err) => {
    console.log(form);
    if (localError) {
      props.setForm({ ...form, [names]: { ...form[names], err: err } });
    } else {
      props.setForm({ ...form, [names]: { title: text, err: undefined } });
    }
  };
  const validation = (text, names, form) => {
    let localError = false;
    const numbers = "1234567890";
    const anyChar = "!@#$%^&*()_+";
    const validEmail = ["@gmail.com", "@mail.ru", "@i.ua"];
    switch (names) {
      case "name":
        text.split("").forEach(char => {
          numbers
            .concat(anyChar)
            .split("")
            .forEach(number => {
              if (char === number) localError = true;
            });
        });
        testLocalError(
          localError,
          names,
          text,
          props.form,
          "Problems with Name"
        );
        break;
      case "email":
        let emailError = 0;
        validEmail.forEach(email => {
          if (text.substr(text.lastIndexOf("@")) === email) emailError++;
          if (emailError === 0 && text !== "") localError = true;
        });

        return testLocalError(
          localError,
          names,
          text,
          props.form,
          "Problems with Email"
        );

      case "title":
        return testLocalError(
          localError,
          names,
          text,
          props.form,
          "Problems with Title"
        );
      case "comment":
        return testLocalError(
          localError,
          names,
          text,
          props.form,
          "Problems with Comment"
        );
      default:
        return undefined;
    }
  };
  return (
    <>
      <input
        onChange={e => validation(e.currentTarget.value, e.currentTarget.name)}
        name={props.name}
        type="text"
        placeholder={props.placeholder}
      />
    </>
  );
};

export { FormInput };
