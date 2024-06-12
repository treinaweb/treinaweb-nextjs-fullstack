import { BlogPost } from "@/data/@types/BlogPostInterface";

export default function useIndex() {
  const posts: BlogPost[] = [
    {
      id: '2',
      title: 'Comandos do Git que você precisa conhecer - Parte 1',
      slug: 'comandos-git',
      description:
        'Domine o Git ao conhecer comandos e truques que facilitarão o seu trabalho.',
      picture:
        'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/07/29063506/git-1.png',
    },
    {
      id: '1',
      title: '10 Truques do NPM - Você conhece todos?',
      slug: 'truques-npm',
      description:
        'Conheça simples truques que você pode fazer com o NPM.',
      picture:
        'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/04/23151507/TRUQUES-NPM.png',
    },
  ];
  return { posts };
}