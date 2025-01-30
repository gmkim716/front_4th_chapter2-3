export interface Comment {
  id: number;
  user: User;
  body: string;
  likes: number;
}

export interface Tag {
  url: string;
  slug: string;
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  address: Address;
  phone: string;
  company: Company;
  age: number;
  image: string;
}

export interface Author {
  image: string;
  username: string;
}

export interface Company {
  name: string;
  title: string;
}

export interface Address {
  address: string;
  state: string;
  city: string;
}
