# Install Google Chrome Extension: 
    JSON Viewer

# Install VSCode: TypeScript Importer
    Ayuda a import clases con tan solo escribier el nombre Server me importa la clase
    import Server from "./server/server";

# Install paquete de definicion express y body-parser de NodeJS para Typescript
# Paquete que tengan archivos de definicion para TypeScript empiezan con @types
    $ npm i @types/express --save-dev   # Instalando para desarrollo con --save-dev 
    $ npm i @types/body-parser --save-dev 

# Install MySQL
    $ npm i --save mysql
    $ npm i --save mysqljs/mysql
    $ npm i @types/mysql --save-dev

    ## Doc
        https://github.com/mysqljs/mysql

# Instalar copiar archivos a rutas
    $ npm i copyfiles --save-dev
    $ npm run html  # Define in package.json "scripts": {"html: "copyfiles --up 1 src/public/.*html dist"}

    $ npm i copyfiles
    $ copyfiles src/public/.*html ./dist            # Copia en ./dist/src/public/*.html
    $ copyfiles --up 1 src/public/*.html ./dist     # Copia en ./dist/public/*.html     Obvia la primera carpeta ./src

# Install Typescript
    $ sudo npm i -g typescript   

# Version
    $ tsc --v

# Crear archivo de configuracionde TypeScript
    $ tsc --init

# Compile
    $ tsc                   # Todo el proyecto, se necesita haber creado el archivo tsconfig.json con $ tsc --init
    $ tsc -w                # Compile in watch mode
    $ tsc helloworld.ts     # Un archivo en particular

# Ejecutar
    $ npm run build
    $ curl http://localhost:3000
