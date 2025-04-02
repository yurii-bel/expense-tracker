import { Transaction } from "@/types/Transaction";
import { AddCommas } from "@/lib/utils";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${AddCommas(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};

export default TransactionItem;
