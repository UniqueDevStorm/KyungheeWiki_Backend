export interface User {
    name: string;
    email: string;
    password: string;
    salt: string;
    administrator: boolean;
}

export interface Post {
    title: string;
    author: string;
    images: Array<string>;
    subject: string;
}