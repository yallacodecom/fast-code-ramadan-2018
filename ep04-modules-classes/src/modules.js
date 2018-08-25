const userCard = {
  name: 'Medhat Dawoud',
  address: 'Amsterdam'
};

export const address = userCard.address;

export function getUserName() {
  return userCard.name;
}

export default userCard;