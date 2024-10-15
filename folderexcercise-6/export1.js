export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  retirement > 0
    ? console.log(`${firstName} retires in ${retirement} years`)
    : console.log(`${firstName} is already retired.`);
};
