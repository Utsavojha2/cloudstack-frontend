import { ResponsiveParameter } from 'react-photo-album';

export const feedItems = [
  {
    id: 1,
    coverPostUri: 'https://i.redd.it/nde28wocm1a51.jpg',
    likes: 12,
    comments: 3,
    user: {
      id: 1299,
      name: 'John Doe',
      photoUri:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      emailAddress: 'john.doe@gmail.com',
      birthDate: '1999-12-21',
    },
  },
  {
    id: 8,
    coverPostUri: 'https://source.unsplash.com/VWcPlbHglYc',
    likes: 100,
    comments: 199,
    user: {
      id: 183923782343211,
      name: 'Elizabeth Olsen',
      photoUri:
        'https://biographia.com/wp-content/uploads/2021/11/Elizabeth-Olsen-in-blue-full-sleeve-HD-1-820x1024.jpg',
      emailAddress: 'elizabeth@gmail.com',
      birthDate: '1995-03-21',
    },
  },
  {
    id: 2,
    coverPostUri: 'https://source.unsplash.com/e6FMMambeO4',
    likes: 15,
    comments: 31,
    user: {
      id: 1223,
      name: 'Brock Lesnar',
      photoUri:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      emailAddress: 'brock.lesnar@gmail.com',
      birthDate: '1992-12-21',
    },
  },
  {
    id: 3,
    coverPostUri: 'https://source.unsplash.com/klCiPmzUw0Y',
    likes: 25,
    comments: 1,
    user: {
      id: 1223434,
      name: 'Roman Reigns',
      photoUri:
        'https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      emailAddress: 'brock.lesnar@gmail.com',
      birthDate: '1996-10-21',
    },
  },
  {
    id: 4,
    coverPostUri: 'https://source.unsplash.com/O0N9MF--hK4',
    likes: 5,
    comments: 10,
    user: {
      id: 128923434,
      name: 'Salman Khan',
      photoUri: null,
      emailAddress: 'salman@gmail.com',
      birthDate: '1989-12-21',
    },
  },
  {
    id: 5,
    coverPostUri: 'https://source.unsplash.com/0ESjL-Nw22Y',
    likes: 51,
    comments: 0,
    user: {
      id: 128923778434,
      name: 'Ravi Bopara',
      photoUri:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      emailAddress: 'ravi.bopara@gmail.com',
      birthDate: '1979-11-21',
    },
  },
  {
    id: 6,
    coverPostUri: 'https://source.unsplash.com/KTVn62x6fFw',
    likes: 21,
    comments: 10,
    user: {
      id: 1289237784348300,
      name: 'Sujan Thapa',
      photoUri:
        'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      emailAddress: 'saujan.thapa@gmail.com',
      birthDate: '1984-05-21',
    },
  },
  {
    id: 7,
    coverPostUri: 'https://source.unsplash.com/VSeVhmW4_JQ',
    likes: 9,
    comments: 99,
    user: {
      id: 12892377463211,
      name: 'Kareena Kaif',
      photoUri:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      emailAddress: 'kareena@gmail.com',
      birthDate: '1988-05-21',
    },
  },
  {
    id: 9,
    coverPostUri:
      'https://deadline.com/wp-content/uploads/2021/01/MEGA549838_094-e1610494005770.jpg',
    likes: 59,
    comments: 44,
    user: {
      id: 1289239023211,
      name: 'Chris Evans',
      photoUri:
        'https://helios-i.mashable.com/imagery/articles/07EYhaHUGB6ozD3GtOXk3N3/hero-image.fill.size_1200x1200.v1654795267.png',
      emailAddress: 'chris@gmail.com',
      birthDate: '1978-01-11',
    },
  },
];

export const gridSettings: Record<string, ResponsiveParameter<number>> = {
  columns: 3,
  padding: 12,
  spacing: 25,
  targetRowHeight: 200,
  width: 100,
};
