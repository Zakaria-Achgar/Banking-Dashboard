import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const TransactionsTable = () => {
  const transactions = [
    {
      id: 1,
      img: "https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?t=st=1712074465~exp=1712078065~hmac=d69bdf4e340e6b44d05fa5f3d80d76032a3b0d37770d5fb97ab286e3bc53235c&w=740",
      name: "Adam Jones",
      date: "May 28, 2024",
      amount: 305.6,
      type: "deposit",
    },
    {
      id: 2,
      img: "https://img.freepik.com/photos-gratuite/portrait-femme-blonde-souriante_23-2148316635.jpg?t=st=1712074567~exp=1712078167~hmac=72e22f2f1f5bbfe990d582dd59487e0c563c2284921bda355e17e3a2eb81ec6d&w=740",
      name: "Sara Aviv",
      date: "May 28, 2024",
      amount: 2876.0,
      type: "Withdrawal",
    },
    {
      id: 3,
      img: "https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?t=st=1712074465~exp=1712078065~hmac=d69bdf4e340e6b44d05fa5f3d80d76032a3b0d37770d5fb97ab286e3bc53235c&w=740",
      name: "Adam Jones",
      date: "May 28, 2024",
      amount: 936.36,
      type: "deposit",
    },
    {
      id: 4,
      img: "https://img.freepik.com/photos-gratuite/portrait-femme-blonde-souriante_23-2148316635.jpg?t=st=1712074567~exp=1712078167~hmac=72e22f2f1f5bbfe990d582dd59487e0c563c2284921bda355e17e3a2eb81ec6d&w=740",
      name: "Sara Aviv",
      date: "May 28, 2024",
      amount: 4530.0,
      type: "Withdrawal",
    },
  ];

  return (
    <Table>
      <TableCaption className="text-left font-semibold text-2xl mb-3">
        Transactions
      </TableCaption>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              <img
                src={transaction.img}
                alt={transaction.name}
                className="w-12 rounded-full	"
              />
            </TableCell>
            <TableCell className="font-semibold text-lg	">{transaction.name}</TableCell>
            <TableCell className="font-semibold text-lg">{transaction.date}</TableCell>
            <TableCell
              className={`text-right font-semibold text-lg ${
                transaction.type === "deposit"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.type === "deposit" ? "+" : "-"} ${transaction.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
