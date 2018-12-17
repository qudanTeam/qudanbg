import * as bcrypt from 'bcrypt';

const genSalt = async (saltRounds = 10) => {
  return bcrypt.genSalt(saltRounds);
};

const bcryptHash = async (plainText = '') => {
  const salt = await genSalt(10);
  return bcrypt.hash(plainText, salt);
};

const bcryptCompare = async (plainText = '', hash = '') => {
  return bcrypt.compare(plainText, hash);
};

export default {
  parsedPageFromParams(params: { page: number, pageSize: number }) {
    const { page = 1, pageSize = 15 } = params;

    let offset = (page - 1) * pageSize;
    if (offset < 0) {
      offset = 0;
    }
    
    params.page = Number(page);
    params.pageSize = Number(pageSize);
    
    return {
      offset: Number(offset),
      limit: Number(pageSize),
      page: Number(page),
      pageSize: Number(pageSize),
    };
  },

  bcryptHash,
  bcryptCompare,
}