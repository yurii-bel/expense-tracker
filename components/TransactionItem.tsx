import { Transaction } from "@/types/Transaction";
import { AddCommas } from "@/lib/utils";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>{AddCommas(Math.abs(transaction.amount))}</span>
    </li>
  );
};

export default TransactionItem;
