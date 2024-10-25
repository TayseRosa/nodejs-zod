<p align="center">
  <img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-logo.png" width="160">
</p>
<h1 align="center"> Projeto NodeJS - Zod </h1>

<p align="center">Este projeto foi desenvolvido para praticar e consolidar os conhecimentos em Node.js, utilizando o zod.</p>

<br>
🚀 Desenvolvedora:
<a href="https://www.tayserosa.com">
Tayse Rosa
</a>
<br>
🟡 Status do projeto: Em andamento

---


## 🛠️ Funcionalidades
<ul>
    <li>Configuração do servidor do zero com Node.js</li>
    <li>Criação de rotas no express para atender diferentes endpoints</li>
    <li>Implementação de middlewares para tratamento de erros e validação</li>
    <li>Salvar os dados em arquivos txt</li>    
</ul>

## 🚀 Tecnologias Utilizadas
<ul>
    <li>Node.js para a criação do servidor</li>
    <li>Zod</li>
</ul>

## 🚀 Configuração inicial do projeto
<p>Para configurar o projeto, basta seguir o passo abaixo:</p>

```
npm init
npm i express helmet
npm i -D @types/node tsx typescript
npm i zod
npm run zod
```
Testes de zod:
No arquivo zod.ts:
```
import z from 'zod'

const schema = z.object({
    name:z.string().min(2),
    email:z.string().email(),
    age: z.number().min(18).max(120),
    staus:z.boolean(),
})

//Cria um type.
type User = z.infer<typeof schema>

let data = {
    name:'Tayse Rosa',
    email:'tayse@email.com',
    age:10
}

const result = schema.safeParse(data)
console.log(result)

```

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


## 📫 Contribuindo para Projeto

Para contribuir com Projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


<a href="https://www.tayserosa.com">
<p align="center">Feito com 💜 por Tayse Rosa</p>
</a>