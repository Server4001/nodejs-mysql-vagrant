# Nodejs-mysql-vagrant

### A vagrant environment with a Node.js Express project.

### Setup

* `vagrant up`
* Add the following to your local `/etc/hosts` file:
    * `10.20.0.92 nodejs.mycompany.local`

### Important paths

* Application log files (nginx and supervisord): `/var/log/www`
* RabbitMQ log files: `/var/log/rabbitmq`
* MySQL log files: `/var/log/mysql`
* MongoDB log files: `/var/log/mongodb`

### Important credentials

* MySQL root user creds:
    * Username: `root`
    * Password: `password`
* MySQL read-only user creds:
    * Username: `readonly`
    * Password: `readonly123`
* MySQL express app user creds:
    * Username: `express`
    * Password: `express123`
* RabbitMQ creds:
    * Username: `guest`
    * Password: `guest`

### Important URLs

* RabbitMQ admin: `http://10.20.0.92:15672`
