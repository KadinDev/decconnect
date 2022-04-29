export const POSTS = [
    {
        id: '1',
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
    },
    {
        id: '2',
        titleContent: 'Como criar uma função no Python Sensacional',
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
    },
    {
        id: '3',
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
    }
]