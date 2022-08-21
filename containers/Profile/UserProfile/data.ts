import faker from '@faker-js/faker';

interface IEmploymentInfo {
  id: string;
  positionName: string;
  companyName: string;
  startDate: Date;
  endDate: Date | null;
  isCurrentlyEmployedHere?: boolean;
}

export const employmentData = new Array(5)
  .fill(null)
  .map((_, i): IEmploymentInfo => {
    if (i === 0) {
      return {
        id: faker.git.commitSha(),
        positionName: faker.commerce.product() + 'Head',
        companyName: faker.company.companyName(),
        startDate: faker.date.past(1),
        endDate: null,
        isCurrentlyEmployedHere: true,
      };
    }
    return {
      id: faker.git.commitSha(),
      positionName: faker.commerce.product() + 'Head',
      companyName: faker.company.companyName(),
      startDate: faker.date.past(10),
      endDate: faker.date.past(1),
    };
  });

export const profileTabs = ['Published', 'Unpublished', 'Drafted', 'Photos'];

export const postData = new Array(5).fill(null).map(() => {
  return {
    id: faker.datatype.uuid(),
    content: faker.internet.emoji() + faker.random.words(50),
    postImage: new Array(3).fill(null).map(() => ({
      [faker.datatype.uuid()]: {
        'w-480': faker.image.image(480),
        'w-640': faker.image.image(640),
        'w-1080': faker.image.image(1080),
      },
    })),
    postedBy: {
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      name: faker.internet.userName(),
      emailAddress: faker.internet.email(),
    },
    likes: faker.datatype.number(),
    comments: new Array(faker.datatype.number(8)).fill(null).map(() => ({
      id: faker.datatype.uuid(),
      commentedBy: {
        id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        name: faker.internet.userName(),
      },
      comment: faker.random.words(20),
    })),
    postedAt: faker.date.past().toISOString(),
  };
});
