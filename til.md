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

# 4 August 2021
TODO:
1. Get next task on Jira done!
2. Double check that my task from yesterday is good enough and gets past QA
TIL:

SYSTEM NOTES:
1. customerid = 8 characters. first 3 correspond to the customer, then the last 
8 correspond to the agent
2. incoice number = customerid + Y + M + day
V - year, H - Month, - 31 day

the year is on a base 26 system (alphabet). Starts at the year 2000

we skip the letter I on the month, but not the year.
the month is simmilar, but base 12 (A - M)
so, VH31 would = august 31 2021

Search Airbills chart
1st charge customer cost, 2nd charge franchise/agent cost, 3rd carrier cost on the charges column

rate sheet for airbills M = margin, F = franchise, C = carier

subcarrier is a first class object. Subcarrier is a thing that most of our clients use. Concetp that is front and center in our system. Subcarriers are very important. In our db, we added subcarriers years ago. Whoever added them, they did not add a table.

postimportoperation() should be the function that sets the price of the subcarrier. 
server/common/Ruis/Services/Buisness/CarrierEdiimporters/DHLEcommerceEDIimportservice.php

SELECT * FROM carriers; that's how you know which carrier id belongs to who

when using the Factory class or function (whatever it is), you need to make sure that you
are using a lowercase letter with the first letter of whatever class you're trying to
run. Weird little tip but big

subcarrier is the way we configure different rates in our system.
subcarriers are made by us, and gives us a way to have a different set of carrier costs.
subcarriers are made due to the needs of our customers.


this same thing can be acheived with our franchises, but having a subcarrier can 
be nice and convienient.


# 5 August 2021
TODO:
1. Start on RS-8146
2. Finish RS-8140 ASAP when they finish what they want it to look like
TIL:
1. php- unset() used for removing only one value from php array
2. php- array_values() is used at times after unset() in order to rebase the 
array positions since unset totally gets rid of indexes as well as the index's value.
3. ussaccountno = the column name for the customerIds within the customer table

# 9 August 2021
TODO:
1. Finish both hanging tasks, RS-8146 and the one with the other settings reorder 
option thing
2. Take on new task from Karl that Tom will eventually assign me.

TIL:
1. the ratings or Rater directory in the code base is notriously an example of 
tacticle programming instead of strategically programming. Thats what Karl told me 
today.

buildash: How to impersonate someone and use their site to test a build:
1. go [ here ](http://clients-list.tools.rocksolidinternet.com/)
2. impersonate someone who is an admin
3. in the url, after 'ec', change it to 'ec_[ commit NUMBER ]' (commit number is
found in the column of the most recent push in buildash).

# 10 August 2021
TODO:
1. Make significant progress on my tasks today
2. Get my rings resized
3. Get sized for a tux

TIL:
1. my password for ssh harrisonh@dev.rsis.io is harrisonhemstreet

# 11 August 2021
TODO:
1. Make even more progress on my tasks today (RS-7847, RS-8150) 
2. Finish RS-8140, apply changes suggested by Chris M
3. Work on getting my mattress to NOT come tomorrow or today
4. Create a cron job that automatically makes a github contribution daily.

TIL:
1. elirems is the name for England's rems database
2. How to make a new system setting for a customer:
i. open up rems, look on the top nav bar
ii. click on 'ADMIN', select, "system settings"
iii. click "Add New System Setting"
iv. in the window, you will see "Name", look for a system setting within the code,
maybe even in WebshipBootstrapEndpoint.php specifically, and copy and paste this 
name into the "Name" field directly.
v. set the value to be whatever the value should be, same with Admin level, and
the description and allow override.
vi. THEN hit confirm
vii. After, double tap on the new row you just made.
viii. Look at the bottom of the popup under "Manage Overrides".
viv. enter the data you need to, then hit confirm!
x. Should be done now!!!!!!!!!

MySQL script for creating new users for (hopefully) any rems db
```sql
-- use nxdrems;
-- select * from user where email = 'harrison.hemstreet@rocksolidinternet.com';
-- 'Harrison Hemstreet', 'TST', '$2y$10$wdMtdDTcCStpzGy0Smb7J.o5SmCAsEreBwvQXWUzw74iU2DFdIpjC', 'harrison.hemstreet@rocksolidinternet.com', '0.5', NULL, NULL, 'hhemstreet', '9994890', NULL, NULL, NULL, '0', '0', '2021-08-03 16:35:09', '1', '1', '', '0'
-- use xpsrems;
-- select * from user;
-- insert into user (displayname, customerid, password, email, adminlevel, forcechangepw, moddate, username, id, lastchanged, phone, fax, iscollector, logindisabled, auditdate, isMigrated, isEncrypted, customerid_old, isLocked)
-- values ('Harrison Hemstreet', 'TST', '$2y$10$wdMtdDTcCStpzGy0Smb7J.o5SmCAsEreBwvQXWUzw74iU2DFdIpjC', 'harrison.hemstreet@rocksolidinternet.com', '0.5', NULL, NULL, 'hhemstreet', '9994890', NULL, NULL, NULL, '0', '0', '2021-08-03 16:35:09', '1', '1', '', '0');

-- select * from user where email = 'harrison.hemstreet@rocksolidinternet.com';

use elirems;
-- select * from user;
-- insert into user (displayname, customerid, password, email, adminlevel, forcechangepw, moddate, username, id, lastchanged, phone, fax, iscollector, logindisabled, auditdate, isMigrated, isEncrypted, customerid_old, isLocked)
-- values ('Harrison Hemstreet', 'TST', '$2y$10$wdMtdDTcCStpzGy0Smb7J.o5SmCAsEreBwvQXWUzw74iU2DFdIpjC', 'harrison.hemstreet@rocksolidinternet.com', '0.5', NULL, NULL, 'hhemstreet', '9994890', NULL, NULL, NULL, '0', '0', '2021-08-03 16:35:09', '1', '1', '', '0');

select * from user where email = 'harrison.hemstreet@rocksolidinternet.com';
```
**Notes from today**:
1. It looks like my rems might be broken for some reason... Home page is working 
great, but the rest is having ISSUES!!! Just the white page of death... so instead, 
I'm going to work on the other task, RS-8150 since it is a webship task, and not rems...

Questions to ask:
1. Where can I look at which adminlevels correspond to which amount of security?
A: adminLevel.php line 58
2. Where can I look at which databases correspond to which client?
3. Where do agents go to change settings/permissions for those under them? for
example, my current task is that Michael @ Jusda (Jusda is a franchise of Nexday, 
I believe) is looking to change permissisions for those under him. Is there a gui 
someplace that allows him to change these settings? Or does the agent just go into 
window.settings.navSettings manually?
4. How do the agents divy up the work between themselves and those below them 
(accounting, sale reps, carriers, etc)?

# 12 August 2021
TODO:
1. RS-7478
2. work on what direction Alex gave me for making above and beyond improvements

**Notes from Alex on changing up [ this ](http://rzs.rems.dev19.rsis.io/mgmt/shipmentTransactionLog/)
site:**
1. we really should be looking to add in loading feedback for the user, something 
like a spinning ring or anything to let the user know that the page is not busted, 
but rather just loading. This MIGHT be able to get accomplished using react state
2. Because the MySQL keys are missing from the table, we are getting slow searches.
This might be improved using a quick stort sorting algorithm or maybe adding in MySQL 
keys??? IDK, check it out further.
3. The eyeball on the left hand side, when clicked, opens up a popup window that 
can be a little annoying to use. For example, when I hit `CTL + f`, I should be 
able to search the text for a desired string, but because of the use of a popup 
and not an actual separate window, this is not happening. The desired outcome is 
not here.
4. the heading on the popup needs to get renamed. The current name is a misnomer.


**What I learned from talking to Alex just now:**
1. instead of running Rems with `npm run webpack` or `npx webpack --watch` or
any of that, I should be instead be running `npm run ww`
2. At times, the actual rems site can be up without it seeming like it should be
because of webpack failing durring an `npm run webpack` or whatnot. This is because
the acutal files have been built and are displaying for the most part. This is very
interesting. You will often run across white pages of death when this happens. 
For example, this might be happening if you go to (on rems), Accounts -> Manage 
Customers and click on Account Setup after selecting the agents and customers on
the drop down. If ABSOLUTELY no one is showing up when you do that, then this might be
happening to you.

