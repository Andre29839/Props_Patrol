export const isLogin = state => state.auth.isLogin;

export const selectAuthData = state => state.auth.userData;

export const selectAuthDataBalance = state => state.auth.userData.balance;

export const selectAuthIsLoadingStatus = state => state.auth.isLoading;

export const selectAuthErrorStatus = state => state.auth.error;
