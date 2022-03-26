import Link from "../src/components/Link";

export default function page404() {
  return (
    <div>
      <h1>Você buscou uma página inexistente</h1>
      <Link href="/" passHref>
        Ir Para Home Page
      </Link>
    </div>
  );
}
