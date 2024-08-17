import { ResponsiveParameter } from 'react-photo-album';

export const feedItems = [
  {
    id: '1',
    coverPostUri: 'https://i.redd.it/nde28wocm1a51.jpg',
    likes: 12,
    comments: 3,
    user: {
      id: '1299',
      name: 'John Doe',
    },
    content: 'Hello, world',
  },
  {
    id: '9',
    coverPostUri:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 100,
    comments: 199,
    user: {
      id: '183923782343211',
      name: 'Elizabeth Olsen',
    },
    content: 'Hi, world',
  },
  {
    id: '2',
    coverPostUri:
      'https://images.unsplash.com/photo-1587473555771-96aef0d968cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 15,
    comments: 31,
    user: {
      id: '1223',
      name: 'Brock Lesnar',
    },
    content:
      'Hi how is everybody doing Hi how is everybody doing  Hi how is everybody doing Hi how is everybody doing',
  },
  {
    id: '3',
    coverPostUri:
      'https://images.unsplash.com/photo-1619963225112-a3cba72baeca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 25,
    comments: 1,
    user: {
      id: '1223434',
      name: 'Roman Reigns',
    },
    content: 'Morning America',
  },
  {
    id: '4',
    coverPostUri:
      'https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 5,
    comments: 10,
    user: {
      id: '128923434',
      name: 'Salman Khan',
    },
    content: 'Fierce Australians',
  },
  {
    id: '5',
    coverPostUri:
      'https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 51,
    comments: 0,
    user: {
      id: '128923778434',
      name: 'Ravi Bopara',
    },
    content: 'Stokesy champion',
  },
  {
    id: '6',
    coverPostUri:
      'https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 21,
    comments: 10,
    user: {
      id: '1289237784348300',
      name: 'Sujan Thapa',
    },
    content: 'Bheja Fry',
  },
  {
    id: '7',
    coverPostUri:
      'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 9,
    comments: 99,
    user: {
      id: '12892377463211',
      name: 'Kareena Kaif',
    },
    content: 'Chandu champion',
  },
  {
    id: '19',
    coverPostUri:
      'https://deadline.com/wp-content/uploads/2021/01/MEGA549838_094-e1610494005770.jpg',
    likes: 59,
    comments: 44,
    user: {
      id: '1289239023211',
      name: 'Chris Evans',
    },
    content: 'Captain America',
  },
];

export const gridSettings: Record<string, ResponsiveParameter<number>> = {
  columns: 3,
  padding: 0,
  spacing: 12,
  targetRowHeight: 200,
  width: 100,
};

interface People {
  id: string
  profileImage: string
  name: string
  mutualFollowers?: number // undefined if there are no mutualFollowers
  joinedDate: Date
}

export const people = [
  // Set 1
  {
    id: 1,
    profileImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Alice Smith',
    mutualFollowers: 2, // Optional: Add mutual followers count if needed
    joinedDate: new Date('2023-12-01'), // Example joined date
  },
  {
    id: 2,
    profileImage:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Bob Johnson',
    joinedDate: new Date('2024-02-15'),
  },
  {
    id: 3,
    profileImage:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Charlie Williams',
    mutualFollowers: 5,
    joinedDate: new Date('2021-04-12'),
  },
  {
    id: 4,
    profileImage:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Diana Miller',
    joinedDate: new Date('2023-11-05'),
  },
  {
    id: 5,
    profileImage:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Ethan Brown',
    joinedDate: new Date('2024-06-12'),
  },
  {
    id: 6,
    profileImage:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Fiona Garcia',
    mutualFollowers: 1,
    joinedDate: new Date('2020-01-12'),
  },
  {
    id: 7,
    profileImage:
      'https://plus.unsplash.com/premium_photo-1682724602143-a77d75d273b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Gabriel Davis',
    joinedDate: new Date('2024-03-20'),
  },
  {
    id: 8,
    profileImage:
      'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Hannah Wilson',
    joinedDate: new Date('2014-10-12'),
  },
  {
    id: 9,
    profileImage:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Isaac Moore',
    mutualFollowers: 3,
    joinedDate: new Date('2022-08-22'),
  },
  {
    id: 10,
    profileImage:
      'https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Jessica Lopez',
    joinedDate: new Date('2024-04-12'),
  },
  {
    id: 11,
    profileImage:
      'hhttps://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    name: 'Kevin Thomas',
    joinedDate: new Date('2021-09-19'),
  },
];
