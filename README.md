<h1 align="center">Welcome to GitExplorer-back-end 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/Falkaniere/gitExplorer#readme)

---

## Get started 

For GitExplorer to work in development, you need to follow the steps below

---

To install **Chocolatey** run in a PowerShell run the command below

---

To install PosgreSQL click [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads), selected the version 12.1

* UserDB: **postgres**
* UserPassword: **docker**
* Port: 5433
* Locale: Default

Create a database with name : **gitexplorer** on pgAdmin.

---

To install **Chocolatey** run in a PowerShell run the command below

~~~sh
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
~~~

Finished, close the PowerShell adn run the following commands on prompt like **administrator**

~~~sh
choco install git
~~~

~~~sh
choco install nodejs
~~~

~~~sh
choco install yarn 
~~~

---

To clone and install all dependences, run the command below

~~~sh
git clone https://github.com/Falkaniere/gitExplorer.git

cd gitExplorer

yarn install

yarn migration migrate:latest --env connection

yarn dev

~~~

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Falkaniere/gitExplorer/issues).

## Show your support

Give a ⭐️ if this project helped you!
