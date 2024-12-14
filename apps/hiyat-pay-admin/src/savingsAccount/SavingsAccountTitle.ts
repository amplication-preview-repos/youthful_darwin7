import { SavingsAccount as TSavingsAccount } from "../api/savingsAccount/SavingsAccount";

export const SAVINGSACCOUNT_TITLE_FIELD = "user";

export const SavingsAccountTitle = (record: TSavingsAccount): string => {
  return record.user?.toString() || String(record.id);
};
