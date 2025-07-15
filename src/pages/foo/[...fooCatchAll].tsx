export default function FooCatchAll({
  fooCatchAll,
}: { fooCatchAll: string[] }) {
  return <div>FooCatchAll: /foo/{fooCatchAll.join("/")}</div>;
}
