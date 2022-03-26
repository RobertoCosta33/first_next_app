import FAQScreen from '../src/screens/FAQScreen/FAQscreen';

export default FAQScreen;

export async function getStaticProps(context) {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((repostaDoServidor) => {
      return repostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      faq,
    }, // will be passed to the page component as props
  };
}

// export default function Faq({ faq }) {
//   console.log(faq);
//   // const [faq, setFaq] = useState([]);
//   // setFaq(dataFaq);
//   // useEffect(() => {}, []);

//   return (
//     <div>
//        <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//       <Link href="/" passHref>
//         Ir Para Home Page
//       </Link>
//       <ul>
//         {faq.map(({ question, answer, index }) => {
//           return (
//             <li key={index}>
//               <article>
//                 <h2>{question}</h2>
//                 <p>{answer}</p>
//               </article>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
