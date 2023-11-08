# password-generator

## Descrição
 trata-se de um sistema básico de criação de senhas em javascript.



## Funcionamento 1.0
Os usuários podem personalizar o comprimento da senha gerada usando um controle de entrada do tipo 'range'.
 Por padrão, o valor mínimo é definido como 0, enquanto o valor máximo é configurado como 25. Esses valores podem ser facilmente ajustados no código do sistema,
 proporcionando flexibilidade na criação de senhas sob medida.

![Funcionamento](https://github.com/antoniocCarvalho/password-generator/blob/main/imgs/telaHtml.png)

## Funcionamento 1.1
Após o usuario realizar o click no botão "Generate" vai ser iniciar a função getPassword(), 

![Funcionamento1.1](https://github.com/antoniocCarvalho/password-generator/blob/main/imgs/getPassword.png)

- Neste ponto, observe a variável 'chars', que contém todos os caracteres usados na criação da senha. Você pode personalizar essa variável conforme desejado, permitindo a modificação direta dos caracteres usados no processo de geração de senha.
  
- Este código JavaScript cria uma senha aleatória com base no valor de passwordLength. Ele usa um loop para escolher caracteres aleatórios da string chars e constrói a senha. Em seguida, exibe a senha gerada em um campo de entrada HTML com o ID "password". A quantidade de caracteres na senha é controlada por passwordLength.

## Publicação
[https://github.com/antoniocCarvalho/password-generator]

## Última atualização 08/11/23
