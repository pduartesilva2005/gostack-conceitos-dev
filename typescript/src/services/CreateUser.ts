type TechObject = {
  title: string;
  experience: number;
};

type CreateUserData = {
  name?: string;
  email: string;
  password: string;
  techs: string[] | TechObject[];
};

export function createUser({ name, email, password, techs }: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs
  };

  return user;
}
