import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Матеша Максим — лендинг + Яндекс.Директ под ключ в Минске" },
      {
        name: "description",
        content:
          "Связка «продающий лендинг + Яндекс.Директ» под ключ. Конверсия 18.4%, заявка от 25 BYN, договор и гарантия окупаемости.",
      },
      { property: "og:title", content: "Матеша Максим — лендинг + Яндекс.Директ под ключ" },
      {
        property: "og:description",
        content:
          "Связка «сайт + реклама» как одна система: конверсия 18.4%, заявка от 25 BYN, гарантия окупаемости по договору.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="Редизайн сайта Матеша Максим"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
