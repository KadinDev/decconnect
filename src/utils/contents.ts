export const USER_PUBLICATE_HOME = [
    {
        id: '1',
        avatar: 'https://www.github.com/kadindev.png',
        name: 'Ricardo Alves',
        level: 'https://images.emojiterra.com/openmoji/v13.1/512px/1f3c6.png',
        about: 'Mobile Developer',
        titleContent: 'Gerando APK em Expo',
        content: `Para gerar o apk, é muito simples com o react native, se liga só!
        Pre-requisito:
        react-native version > 0.57

        Passo 1
        Na raiz do seu projeto, rode o seguinte comando no seu terminal:
        react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

        Passo 2
        Acesse a pasta Android:
        cd android
        
        Passo 3
        Agora dentro da sua pasta Android, execute o comando:
        ./gradlew assembleDebug

        E pronto! Seu apk será gerado no caminho:

        seuProjeto/android/app/build/outputs/apk/debug/app-debug.apk
        `,
        likes: 40,
    },

    {
        id: '2',
        avatar: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2006/04/formacao_1600x1200-quais-sao-as-caracteristicas-de-uma-mulher-de-valo.jpg',
        name: 'Jacqueline Gomes',
        level: 'https://images.emojiterra.com/openmoji/v13.1/512px/1f3c6.png',
        about: 'Python Developer',
        titleContent: 'Como criar uma função no Python',
        content: `def hello(meu_nome):
        print('Olá',meu_nome)

        Essa função, de nome hello, tem como objetivo imprimir o nome que lhe é passado por parâmetro (também chamado de argumento). A palavra reservada def, na primeira linha, explicita a definição da função naquele ponto. Em seguida, entre parênteses, temos o parâmetro meu_nome. Ainda na mesma linha, observe a utilização dos dois pontos (:), que indicam que o código identado nas linhas abaixo faz parte da função que está sendo criada. Aqui, é importante ressaltar que, para respeitar a sintaxe da linguagem, a linha 2 está avançada em relação à linha 1.

        Para executar a função, de forma semelhante ao que ocorre em outras linguagens, devemos simplesmente chamar seu nome e passar os parâmetros esperados entre parênteses, conforme o código a seguir.

        >>> hello('Fabio')
        Olá Fabio
        >>> meu_nome
        'Fabio'
        Caso seja necessário, também é possível definir funções com nenhum ou vários argumentos, como no código abaixo:

        def hello(meu_nome,idade):
        print('Olá',meu_nome,'\nSua idade é:',idade)
        Agora, ao invocar essa função, também é necessário informar o segundo parâmetro, que representa a idade que será impressa após o nome:

        >>> hello('Fabio',28)
        Olá Fabio
        Sua idade é: 28
        Assim como podem receber valores de entrada, as funções também podem produzir valores de saída, provenientes de determinadas operações. Nos exemplos anteriores, apenas imprimimos um valor com a função print, sem retornar explicitamente um resultado. Já na Listagem 1, temos uma função que faz o cálculo do salário e retorna o valor a ser pago conforme o número de horas trabalhadas.

        def calcular_pagamento(qtd_horas, valor_hora):
        horas = float(qtd_horas)
        taxa = float(valor_hora)
        if horas <= 40:
            salario=horas*taxa
        else:
            h_excd = horas - 40
            salario = 40*taxa+(h_excd*(1.5*taxa))
        return salario
        `,
        likes: 28,
    },

    {
        id: '3',
        avatar: 'https://st2.depositphotos.com/1003697/8476/i/600/depositphotos_84761634-stock-photo-startup-business-software-developer-working.jpg',
        name: 'Fred Avelino',
        level: 'https://images.emojiterra.com/openmoji/v13.1/512px/1f3c6.png',
        about: 'Back-end Developer',
        titleContent: 'Rotas do Express - Node JS',
        content: `
        const express = require('express')
        const app = express()
        const port = 3000
        
        app.get('/', function (req, res) {
        res.send('Hello World!');
        });
        
        app.listen(port, () => {
        console.log("Exemplo app node rodando no endereço http://localhost:$'{port}'}")
        });

        `,
        likes: 1204540,
    }
];



export const connections = [
    {
        id: '1',
        name: 'Ricardo Alves',
        about: 'Mobile Developer',
        avatar: 'https://www.github.com/kadindev.png'
    },
    {
        id: '2',
        name: 'Fábio Castro da Silva Torres',
        about: 'React Js / Node JS',
        avatar: 'https://st2.depositphotos.com/1743476/11581/i/600/depositphotos_115812486-stock-photo-pride-man-smiling.jpg'
    },
    {
        id: '3',
        name: 'Sulamita Alves',
        about: 'Design',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2578.jpg?w=2000'
    },
    {
        id: '4',
        name: 'Fernanda Silva',
        about: 'Front End Developer',
        avatar: 'https://thumbs.dreamstime.com/b/mulher-nova-bonita-21325858.jpg'
    },
    {
        id: '5',
        name: 'Susy Alves',
        about: 'Mobile Developer',
        avatar: 'https://img.wattpad.com/0c38475998ff740ab4e06c627a000430b32bc788/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4d49347a643156754c6c414e73773d3d2d34342e313438616661653437636338663730363734383837343333303235392e6a7067?s=fit&w=720&h=720'
    },
    {
        id: '6',
        name: 'Paulinha Alves',
        about: 'Back End / Node',
        avatar: 'https://i.pinimg.com/originals/e3/a3/e0/e3a3e07264f6206bffa063f250ad8ee4.jpg'
    },
    {
        id: '7',
        name: 'Adriano Ribeiro',
        about: 'Mobile Developer',
        avatar: 'https://www.sonoticias.com.br/wp-content/uploads/2019/12/12189063_192902174380813_6192279883125431059_n-596x556.jpg'
    },
    {
        id: '8',
        name: 'Ronaldo Tentola',
        about: 'Gamer Developer C++',
        avatar: 'https://1.bp.blogspot.com/-0xjiD4ykbZw/XsHelGIRL5I/AAAAAAAAVjU/Qd9VDdS71pM8pkPJy41RcuPFpvmKv9IMwCNcBGAsYHQ/s1600/selfie%2Bde%2Bhomem%2Bde%2Bbarba%2B15.jpg'
    },
    {
        id: '9',
        name: 'Fernanda Silva',
        about: 'Python Developer',
        avatar: 'https://i.pinimg.com/736x/78/d7/0e/78d70e9439a30310f6117424ceefb6d1.jpg'
    },
    {
        id: '10',
        name: 'RCODEV',
        about: 'Developer MySQL',
        avatar: 'https://clinicaunix.com.br/wp-content/uploads/2019/12/5-pontos-saude-do-homem.jpg'
    },
]