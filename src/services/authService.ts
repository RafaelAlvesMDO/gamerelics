export const usersMock = [
  {
    id: 1,
    email: "rafael@gmail.com",
    password: "123456",
    name: "Rafael"
  },
];

export function loginMock(email: string, password: string) {
  const user = usersMock.find(
    (u) => u.email === email && u.password === password
  );

  return user || null;
}