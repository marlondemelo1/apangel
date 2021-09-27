# Calendário utilizando um Dialog para cadastro dos eventos 

Esse APP é apenas um demonstrativo de como fazer um calendário com um Dialog e dentro deste um form de cadastro.

Inicialmente apenas com dois campos: nome, e a data inicial do evento. 

Caso o usuário informe uma data diferente da seleção feita no fullCalendar, e clicar em submit
o APP irá modificar o evento respeitando a data modificada no campo Data/Hora, e assim que o Dialog se fechar a visualização no fullcalendar será jogada para o local informado. Caso o usuário feche o dialog o evento é removido e caso também clicar em cima é removido.

Não há interação com banco de dados, apenas para visualização de componentes react, utilizando o fullCalendar e primereact no Dialog

o APP é responsivo

## Tecnologias Utilizadas

1. React usando npx create-react-app
2. fullCalendar - https://fullcalendar.io/
3. PrimeReact   - https://www.primefaces.org/

## Estrutura do APP

Dados sobre o APP:

### `URL http://localhost:8081`

Caso queira mudar basta apenas editar o arquivo .env

## Deploy Vercel APP

https://apangel-e8mwhkory-marlondemelo1.vercel.app/