Bibliotecas Usadas:

Express => Lidar com Rotas HTTP.
EJS => Permite incorporar código JavaScript em arquivos HTML
Bodyparser => Ele extrai esses dados recebidos pelo POST e os torna acessíveis no objeto req.body.
Sequelize => Consegue conectar o codigo com o bancos de dados e manipular.
tedious => Necessario para o Sequelize conectar com SQL SERVER
Slugify => Transforma uma string em uma slug

FrameWorks Usados:

BootStrap => Fornece um conjunto de ferramentas e estilos prontos para uso.
Nodemon => Reinicia o servidor sempre que realizar alguma mudança no codigo.


------------------------------------------------------------------------------------------------------------------------
Bibliotecas de acordo com o banco para o sequelize:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2 #Mysql
$ npm install --save mariadb #MariDB
$ npm install --save sqlite3 #Sqkute
$ npm install --save tedious # Microsoft SQL Server     dialect: 'mssql'