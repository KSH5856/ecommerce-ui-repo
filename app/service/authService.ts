export const loginService = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const req = {
    email: username,
    password: password,
  };

  const loginUrl = `${process.env.NEXT_PUBLIC_API_HOST}/auth/login`;

  const response = await fetch(loginUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(req),
  }).then((res) => res.json());

  if (!response.error) {
    const token = response.response;

    document.cookie = `token=${token};`;
  }
  
  return response;
};
