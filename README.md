# Exemplo de Calendário com Formulário no Dialog do Primereact

Esse APP é apenas um demostrativo de como fazer um calendário, assim que o usuário selecionar um evento irá abrir um Modal e dentro um formulário.
Inicialmente apenas com dois campos: nome, e a data inicial do evento. Caso o usuário informe uma data diferente da seleção feita no fullcalendar, e clicar em submit
o APP irá modificar o evento respeitando a data modificada no campo Data/Hora, e assim que o Dialog se fechar a visualização no fullcalendar será jogada para o local inserido anteriormente. Caso o usuário feche o modal o evento é removido.

Não há interação com banco de dados, apenas para visualização de componentes react, utilizando o fullCalendar e primereact no Dialog

o APP é responsivoqweqweqwe

## Estrutura do APP

Dados sobre o APP:

### `URL http://localhost:8081`

Caso queira mudar basta apenas editar o arquivo .env

## Deploy Vercel APP

https://apangel-e8mwhkory-marlondemelo1.vercel.app/