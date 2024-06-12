import PostBody from "@/ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody post={
        {
          id: '1',
          title: '10 Truques do NPM - Você conhece todos?',
          description: '',
          picture:
            'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/04/23151507/TRUQUES-NPM.png',
          slug: '',
          content: (
            <>
              <p>
                Olá Web Developers! Se você trabalha com
                JavaScript, provavelmente já teve que usar o
                NPM. Mas normalmente as pessoas usam essa
                ferramenta apenas para baixar bibliotecas ou
                frameworks. Vamos ver alguns truques que podemos
                fazer com o NPM.
              </p>
              <h3>
                1 - Crie ferramentas executadas diretamente da
                linha de comando
              </h3>
              <p>
                Com o NPM nós podemos criar ferramentas
                executadas diretamente do terminal inteiramente
                com JavaScript. Já tivemos um post aqui
                ensinando como fazer isso, que você pode
                conferir neste link.
              </p>
            </>
          ),
        }
      } />
    </>
  )
}