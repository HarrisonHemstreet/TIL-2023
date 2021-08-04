# 30 July 2021
TIL:
1. bash functions cannot have hyphens in their function names

# 31 July 2021
TODO:
1. learn how to use the MySQL database. Learn how to hook up MySQL locally to a 
database
2. check if there's anything else that I need to do to prep
3. work on PHP codewars exercises

TIL:

# 1 August 2021
TODO:
1. Prep for work tomorrow
2. Maybe learn more about PHPUnit
3. Get to bed EARLY so I can be first one into work tomorrow!

TIL:
1. Kinda learned how to install composer/php unit...?

# 2 August 2021
Questions:
1. [ link ](https://github.com/rocksolidinternet/rsis-source/wiki/Remote-Dev-Setup#rems) 
do I need to login to this s3 bucket or get added to the employees.json?
2. Do we just use the PHP Debug extension or do we use also use the XDebugger?
3. Where should the launch.json file be located?

# 3 August 2021
TODO:
1. Finish getting my environment set up
2. Make some serious progress (hopefully finish) my first task at Rock Solid today!

TIL:
1. in php this opperator, known as the elvis opperator:
```php
:?
```
2. is essentially a ternary opperator. In this case though, If the left side of 
the opperator is truthy, then the left side is returned, otherwise the right side 
gets returned

Setup notes:
Webship login: username: webship@rocksolidinternet.com password: p@ssword
0. change the config-dev.cfg line 13 maybe, to this: webpackHmrDevUrl = http://dev19.rsis.io.
IMPORTANT: ONLY ONLY ONLY clone down from github using ssh!!! Otherwise, permissions might be bad. If permissions are still bad, then make sure to exit your current terminal and restart appropriate processes.
1. Make sure that php xdebug is already installed before doing anything stupid by
running 
```bash
php -v
```
-or-
```
php -i
```
if you run php -i, then you're going to want to go to xdebug.com (or whatever the
website is) and then paste the output into the wizard (xdebug.com/wizard). The 
output from the wizard should tell you if you need to install the xdebuger.
2. live site for [ rems ](https://nexday.rocksolidinternet.com/). Go there and then
hit forgot password. Enter in 'tst' for the first field, then hhemstreet into the 
username and enter. Go to your email, you should get a reset. Then copy that table 
from the live db into the dev db. Both should have the same encrypted password 
which means I should be able to use the same unencrypted password I used on the 
live site.
3. I need to remember these two queries:
* select * from globalrems.serverconfig;
^^ this one is for knowing which db belongs to which url
* select * from globalrems.dbconfig;
4. How to make a new user on rems:
1. go onto the production site for [ nexday rems ](https://nexday.rocksolidinternet.com/html/) 
2. then hit "forgot user"
3. enter in tst for the id, then hhemstreet for the username and hit send email
4. Log onto the mysql database. Connect to the prod db using these creds: 
hostname: db300.cluster-c3pmu3iwvhxe.us-east-1.rds.amazonaws.com
port: 3306
username: harrison.hemstreet
password: found within the dev config file found here: ~/rsis-source/server/config-dev.cfg
(should be connected to the prod db now)
then use a query like this to find my user I just made:
```sql
select * from nxdrems.user where email like '%harrison.hemstreet%';
```
after connecting to the dev db, input this query into the dev db:
```sql
-- select * from nxdrems.user;
-- insert into nxdrems.user
-- (displayname, customerid, password, email, adminlevel, forcechangepw, moddate, username, id, lastchanged, phone, fax, iscollector, logindisabled, auditdate, isMigrated, isEncrypted, customerid_old, isLocked)
-- VALUES
-- ('Harrison Hemstreet', 'TST', '$2y$10$wdMtdDTcCStpzGy0Smb7J.o5SmCAsEreBwvQXWUzw74iU2DFdIpjC', 'harrison.hemstreet@rocksolidinternet.com', '0.5', NULL, NULL, 'hhemstreet', '9994890', NULL, NULL, NULL, '0', '0', '2021-08-03 16:35:09', '1', '1', '', '0');
```
CONNECT TO THE DEV DB:
1. go here: /home/harrisonh/rsis-docker/webserver-dev-remote
2. copy whatever this value is (the value is here, but maybe different in the
actual file down the road): globalremsReadonlyHost = db300-test-ro.rsis.io 
3. the db300-test-ro.rsis.io should be the host name for the dev db
4. everything else is the same as the prod db 
TODO:

Notes:
1. directories to go to:
server, jssrc, rems, webship, common, 
2. in common, we ahve a classes dir, with a file database manager. When we first did our
flash, we had a client directory with all the flash in there. Years ago, we had webship and
rems inside of client. Each of those had clients in them. When we went to our html
version, we put it into jssrc. Jssrc has the most of the front end code. 
the new webship is someitmes refered to as ec or e-commerce

rems/html/index.php

server/common.classes/appserver.php reads the configdb and configserver sql calls

php tools:
smarty (template langauge), slim, pairdb (no mysql calls in code.), 

we use the auto loader, appserver.php line 28 on, that block.

customer.php line 216, class DatabaseManager. Never get's required or anything. PHP knows how to find that class and gets it. Trhought the autoloader.

bootstrap.php the includes directory gets auto implemented into each file bc of this file.

first place you want to go to look at backend code for rems is rems/app/actions.

mgmt in the url refers to (go to rems/html/mgmt/index.php) this file. Then look at exactly whtat it goingon.
New place to put services and functionality is: Factory (server/common/rsis inside ehre, we are putting the majority of our new code here. If we could pause time, we would reorganize all our functioning code in there.)
this services dir is essentially comparable to our microservices. Inside of the services, we need to put a slash in front of things. its bc we are using namespaces. Name spaces tells the code which directory we are in. Often matches the directory structure.
Having the slash in front just means that this thing is outsdie of the current namespace. That's all it means. This thing will at times be picked up by the autoloader

Anything we put into core we want to keep super clean and not related to anything specific. general tools.
addservice.php line 9 block. basiclaly a reequire.

ASK:
What are some keywords I should google in order to learn more about namespaces and autoloaders.
check out the __ functions. they start with __. Usually __constructur and stuff like that.
go to php, english, auloading classses , on the website. Magic methods!

**Questions:**
1. What does AC_FL_Runcontent mean?     rpt_overallranking.html line 63
2. 

support@rocksolidinternet.com
