export const selectTransactionsSummary = state => state.transactions.summary;
export const selectCategoriesSummaryName = state =>
  state.transactions.summary.categoriesSummary.name;
export const selectTransactionsCategories = state =>
  state.transactions.categories;
export const selectAllTransactions = state => state.transactions.transactions;

export const selectTransactionsIsLoadingStatus = state =>
  state.transactions.isLoading;
export const selectTransactionsErrorStatus = state => state.transactions.error;
