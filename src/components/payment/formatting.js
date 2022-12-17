export const formattingCartNumber = (value) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(" ")
  );
};

export const formattingCartDate = (value) => {
  const regex = /^(\d{0,2})(\d{0,2})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2) =>
    [$1, $2].filter((group) => !!group).join("/")
  );
};

export const formattingCartCVV = (value) => {
  const regex = /^(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1) =>
    [$1].filter((group) => !!group).join("")
  );
};
