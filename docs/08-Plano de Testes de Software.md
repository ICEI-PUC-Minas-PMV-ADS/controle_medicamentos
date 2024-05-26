# Plano de Testes de Software

| ID | Nome do Teste | Descrição | Passos | Resultado Esperado |
| --- | --- | --- | --- | --- |
| RF-001 | Cadastro de usuário - Campos Obrigatórios Ausentes | Verifique se uma mensagem de erro é exibida quando os campos obrigatórios não são preenchidos durante o registro de um novo usuário. | 1. Acesse a página de cadastro de usuários.<br>2. Deixar um ou mais campos obrigatórios em branco.<br>3. Tente confirmar o registro.<br>4. Verifique se uma mensagem de erro é exibida, os campos obrigatórios precisam ser preenchidos. | Uma mensagem de erro é exibida fornecendo os campos obrigatórios que precisam ser preenchidos. |
| RF-001 | Login com Nome de Usuário ou senha incorreta | Verifique se o sistema impede o login com um nome de usuário ou senha incorreta. | 1. Abra um aplicativo.<br>2. Insira um nome de usuário inválido.<br>3. Insira uma senha válida.<br>4. Clique no botão de login.<br>5. Verifique se o sistema exibe uma mensagem de erro indicando que o nome de usuário ou senha estão incorretos. | O sistema impede o login e exibe uma mensagem de erro indicando que o nome de usuário e senha estão incorretos. |
| RNF-001 | Navegação entre páginas incompletas | Verifique se a aplicação acessa todos os atalhos de navegação entre páginas. | 1. Abra um aplicativo.<br>2. Insira um nome de usuário e senha válidos.<br>3. Verifique se todos os ícones de interação entre páginas estão funcionais | A aplicação funcionou todos os botões de navegação. |

