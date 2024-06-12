import PostBody from "@/ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody post={
        {
          id: '2',
          title: 'Comandos do Git que você precisa conhecer - Parte 1',
          description: '',
          picture:
            'https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/07/29063506/git-1.png',
          slug: '',
          content: (
            <>
              <p>
                Olá Web Developers! Hoje trago aqui comandos
                muito úteis ao se trabalhar com Git que todo
                mundo precisa saber para facilitar o trabalho.
                Nesse primeiro post veremos os comandos para
                repositórios locais. Na Parte 2 desse post
                veremos os comandos para você dominar
                Repositórios Remotos. Se você ainda não trabalha
                com Git, veja nosso post sobre Primeiros passos
                com o Git.
              </p>
              <h3>1 - Iniciando um Repositório</h3>
              <p>
                Todo repositório Git armazena as informações
                dentro de uma pasta oculta chamada “/.git”. Para
                que os arquivos de uma pasta possam ser
                versionados pelo Git, é preciso iniciar o
                repositório. Basta executar o comando abaixo:
              </p>
              <h3>2 - Apagando um repositório</h3>
              <p>
                Há momentos em que não queremos apagar nossos
                arquivos, mas queremos remover as informações
                sobre aquele repositório criado com o $ git init
                (talvez criar um repositório novo com os mesmos
                arquivos). Para isso não usamos o Git. Lembre-se
                que um repositório Git armazena as informações
                dentro de uma pasta oculta chamada /.git. Então
                basta apagar esta pasta oculta que o seu atual
                diretório deixará de ser um repositório.
              </p>
            </>
          ),
        }
      } />
    </>
  )
}