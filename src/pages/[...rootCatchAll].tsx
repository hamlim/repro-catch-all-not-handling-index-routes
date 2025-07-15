export default function RootCatchAll({
  rootCatchAll,
}: { rootCatchAll: string[] }) {
  return <div>RootCatchAll: /{rootCatchAll.join("/")}</div>;
}
