export const ERROR = {
  COMMON_SYSTEM_ERROR: {
    CODE: 'sys00001',
    MESSAGE:
      'An error has arisen from the system. Please try again later or contact us for a fix.',
  },

  // user
  USER_NOT_FOUND: {
    CODE: 'us00001',
    MESSAGE: 'User not found, disabled or locked',
  },
  USER_HAD_BLOCKED: {
    CODE: 'us00001',
    MESSAGE: 'User had blocked',
  },
  USERNAME_OR_PASSWORD_INCORRECT: {
    CODE: 'us00002',
    MESSAGE: 'Username or password is incorrect',
  },
  EMAIL_ALREADY_EXIST: {
    CODE: 'us00001',
    MESSAGE: 'Email already exist',
  },
  USERNAME_ALREADY_EXIST: {
    CODE: 'us00001',
    MESSAGE: 'User id already exist',
  },
  DONT_PERMISSION_ACCESS: {
    CODE: 'us00002',
    MESSAGE: 'You dont have permission to access',
  },
  DONT_PERMISSION_DELETE: {
    CODE: 'us00002',
    MESSAGE: 'You dont have permission to delete',
  },
  NOT_TRY_LOGOUT_FROM_EARTH: {
    CODE: 'us00002',
    MESSAGE: 'Not try logout from earth!!!',
  },

  // friend
  FRIEND_REQ_EXIST: {
    CODE: 'us00001',
    MESSAGE: 'Friend request already exist',
  },
  ALREADY_FRIEND: {
    CODE: 'us00001',
    MESSAGE: 'Already friend',
  },
  FRIEND_REQ_NOT_FOUND: {
    CODE: 'us00001',
    MESSAGE: 'Friend request not found',
  },
  NOT_FRIEND: {
    CODE: 'us00001',
    MESSAGE: 'Not friend',
  },
  INVALID_REQ: {
    CODE: 'us00001',
    MESSAGE: 'Invalid request',
  },
};
