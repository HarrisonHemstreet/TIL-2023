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
IMPORTANT: ONLY ONLY ONLY clone down from github using ssh!!! Otherwise, permissions 
might be bad. If permissions are still bad, then make sure to exit your current 
terminal and restart appropriate processes.
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
happening to you. OR (and this is the big one that got me), if you are making changes
within the code, but ARE NOT seeings changes, then good chances are, you're in this
situation.

3. the type col needs to be looked at! Look at where we are inserting data, what 
the default is, and what we are putting into the db
4. a shipment can contain an http message and also a message where bookings shipment
5. a complete record that should happens between two parties
6. look [ here ](https://imgur.com/a/u58f6CQ) for what a manifest should look like 
and [ here ](https://imgur.com/mTJTJAL) for what a shipment should look like (I think haha)

1. the unit tests need to be updated in buildash -- also a new and good project
2. we need to improve on the process of running unit tests on each dev's dev server.

# 13 August 2021
Notes from Karl on BuildDash, fixing the unit tests and how we mock dbs:
1. created a test db
2. it doesn't live on live

3. tests break on dev environtmnet bc the dbs we are using are different
4. when we change the main db schema, we need to change them on tests too

# Honeymoon: 2021 August 2021 - 25 August 2021

# 26 August 2021
Todo:
1. work on RS-8117
2. work on RS-8185

**RS-8117:**
1. on BFS-REMS, go to invoicing, then under "Invoice Editing Tools", hit "Search 
Airbills".
2. screw around with the filters until I'm able to see the fields I want to change.
3. the fields I want to change are: Chg 1 Type??? (I think)...
4. I might even just be changing EVERY Chg [ number ] Type...

from the task itself:
*Dev Notes*
- Update system to export the surcharge name and include the surcharge code in the same cell.
- Add a system setting to manage this
-- Name "includeSurchargeCodeInFlatView"

TIL:
1. we have videos that act as tutorials within Webship

# 27 August 2021
TODO:
1. RS-8182 custom invoice - basically just chaning one line in what looks like 
the receipt! Gonna try to get this done right now!
2. RS-8117 update search airbills export - follow notes above from yesterday
3. maybe continue to get more rustlings practice in

TIL:
1. I learned how rustlings works today

# 27 August 2021

# 30 August 2021
TODO:
1. write up my schedule before stand up
2. work on both RS-8182 and RS-8117
3. I REALLY need to make significant progress on these today before this week gets
away from me...

TIL:
1. inorder to see changes in REMS, we need to do a hard reload
2. if the invoice on the HTML side is not showing some detail I need, then odds 
are, the value is a 0, bc any values who's values are equal to 0 default to not 
shown.

RS-8117 notes:
* I might be needing to create a new query. maybe something that loops through 
the db table "extracharges" and makes both the id column and the description 
column one column
* I'm really needing to combine these two things together
* I really don't know if what I need to do here is all that possible, but hey 
we will see!

# 31 August 2021
TODO:
1. RS-8117 - I GOTTA FIGURE THIS BOI OUT!!!!!!!!
2. if I have time, work on other tasks
3. maybe get tested for Covid :(

TIL:
1. the Factory in server/common/Rsis/Factory.php is a great way to access services


# 1 September 2021
TODO:
1. ALMOST done with RS-8117. Hopefully finish before stand up!
2. start in on RS-8195 hopefully today!!!!

TIL:

# 02 September 2021
code I want to save:
```javascript
        const rowData = this.props.airbillList.airbills.map((row) => {
            let newRow = Object.assign({}, row);
            for (let i = 0; i < 8; i++) {
                if (newRow[`charge${i}description`]) {
                    newRow[`charge${i}description`] += ` (${newRow[`charge${i}type`]})`;
                }
            }
            return newRow;
        });
```
# 03 September 2021

TODO:
* work on my next task after it gets assigned to me
* if I don't get assigned another task, then just work on Rustlings

TIL:
* We are no longer implementing new Material UI. Instead we are keeping the old
material ui, but using Bootstrap for the new cases where we would be using
material-ui.

sql query to save:
use bfsrems;
select * from systemsetting WHERE name = "includeSurchargeCodeInFlatView";
insert into systemsetting (id,name,value,backend_type,description,editadminlevel,allowOverride) values (
	NULL,
    'includeSurchargeCodeInFlatView',
    '1',
    'text',
    'add the charge type to the end of the Chg Type field so that both the charge type and charge description display',
    1.0,
    0);

insert into systemsetting (
							id,
                            name,
                            value,
                            backend_type,
                            description,
                            editadminlevel,
                            allowOverride
						)
                        values
                        (
                        NULL,
                        'includeSurchargeCodeInFlatView',
                        '1',
                        'text',
                        'add the charge type to the end of the Chg Type field so that both the charge type and charge description display',
                        1.0,
                        0
                        )


# 04 September 2021

# 05 September 2021

# 06 September 2021

# 07 September 2021

TODO:
1. talk to Karl about the current task I'm on and ask if he still wants me to do
it despite us already having the functionality on the page.
2. take care of any new tasks

TIL:

**RS-8193:**
* sounds like I just need to add a new FedEx surcharge (Residential Ground - 273) 
I need to add this surcharge to all systems. I also need to update FedEx quoter 
to quote 273 instead of 022 when the service is ground. I also need to go back 
through all the past records touched by the Standard Template Importer and run them 
back through again, and assign each to the correct service type.

What I need to do:
1. Add new FedEx surcharge to all systems
2. Update FedEx quoter
3. Run past records through again with new settings, which will update some records
to the new surcharge code when appropriate

Dev Notes (from Jira task):
*Dev Notes*
- Update the FedEx Standard Template
- When the surcharge name in the file is "Residential" check the service type 
in column "L" and if the service is "Home Delivery" set the surcharge to be 276 
instead of 022.
- We believe right now the code just assigns anything set to "Residential" to 
"022" but we need to break it out for Home Delivery.

Plan of attack:
1. add the new surcharge to the extracharges database
2. then change up fedexquoter.php
3. Add the conditional logic before the CSV is made. There HAS to be a location 
within the code where the CSV file is being created from a database call. I need
to find that query and then add some conditional logic to it (or change what logic 
is there) in order to produce a query that actually gets the data we want

# 8 September 2021
TODO:
1. relate current understanding to Karl on RS-8193
2. Make significant progress on RS-8193

TIL:

### RS-8193
1. Create a new Surcharge for Residential Ground within every database's extracharges
table.
2. Update Fedex Quoter to quote 273 instead of 022 when the service is Ground
3. Update Fedex Standard Template Importer to check the service type in order to
assign the correct surcharge code

-------> what I've found so far...
* fedexstandardedi.php line 311 contains a check for FedEx Ground Residential, 273
already...

**Questions:**
1. How I think this whole thing is working currently:
* a sql query builds an Invoice file in CSV format
* the CSV file gets uploaded by the user using REMS' Import AWB Files using the
FedEx Standard Template template (which is a set of rules specific to this situation
that dictates how the data is uploaded)
* Logic within the Import AWB Files is defaulting to assinging the surcharge code
of 022 instead of 276 when FedEx Home Delivery Residential is read
2. Why is the data made from the CSV file being manually uploaded by the user back
into the system through Import AWB Files?
3. Where is the sql query that builds the CSV in question?
4. How do I look at the output from Import AWB Files?

the file is an edi file. This file is generated from fedex who gives it to our clients
our clients then import it into their systems

airbills and invoices are created based off of this file. which is an edi file.

each airbill that comes throug, extracharges will be associated wiht that airbill

go to search airbills and choose import date and carrier as my filters, should be able to test it like that.

we have a broadcast query on server 301 to make global changes safer. Karl will show me.
DBever may be used to insert a global change into everyone's extracharges table.

Fedex Quoter:
really easy, just go to the ship tab and put one through using fedex ground and 
check if the total for the fedex ground residential charge is correct. Don't even 
need to put the order through all the way

we are making the charge for fedex ground residential be $4.80

INTERESTING:
the surcharge codes are already in the database under extracharges... that being
said though, the defaultcharge maybe wrong...

queries to save:
```sql
-- use ehubrems;
-- -- select * from ehubrems.user;
-- -- select * from ehubrems.user;
-- insert into nxdrems.user
-- (displayname, customerid, password, email, adminlevel, forcechangepw, moddate, username, id, lastchanged, phone, fax, iscollector, logindisabled, auditdate, isMigrated, isEncrypted, customerid_old, isLocked)
-- VALUES
-- ('Harrison Hemstreet', 'TST', '$2y$10$wdMtdDTcCStpzGy0Smb7J.o5SmCAsEreBwvQXWUzw74iU2DFdIpjC', 'harrison.hemstreet@rocksolidinternet.com', '0.5', NULL, NULL, 'hhemstreet', '9994890', NULL, NULL, NULL, '0', '0', '2021-08-03 16:35:09', '1', '1', '', '0');
-- -- select * from ehubrems.user where displayname = 'Harrison Hemstreet';

use xpsrems;
update extracharges set defaultcharge = 4.80 where description = "Residential Delivery (Ground)";
-- select * from extracharges where id = 273;
--
-- insert
-- (
	-- id,
    -- description,
    -- moddate,
--     type,
--     perValue,
--     carrier,
--     defaultcharge,
--     minimum,
--     maximum,
--     quoteable,
--     excludeFromRDI,
--     auditdate,
--     fuelPart,
--     basePart,
--     disabled,
--     isTax
--     )
-- 		values (
-- 			   ResG,
-- 			   FedEx new Residential Ground shipment,
--             2021-09-07 20:47:32,
--             fixed,
--             0,
--             52,
--             defaultcharge,
--             0.00,
--             0.00,
--             1,
--             0,
--             2021-09-07 20:47:32,
--             1,
--             0,
--             0,
--             0)
```

TIL:
1. save these commands for looking at PHP errors. Kind of like looking at the cake 
logs at Younique

```php
tail -n 200 ~/logs/php5/error_log
```
```php
tail ~/tmp/logService.log
```

Final thoughts from today:
I learned a lot today! I'll try to recap everything I learned tomorrow. I'm tired
now and going to go home now.

# 9 September 2021
TODO:
* lots of stuff to do today.
* catch up on Chris's comments on RS-9183
* RS-8220
* Fix unit tests for RS-8193
* RS-8221

* buy new wifi router * think about how to keep the wifi router safe
* secure new mattress

TIL:
1. WebshipUserService.php
2. clientViews.jsx
these two files are criticle in adding new clients

HOW TO ADD A NEW FRANCHISE: RS-8220



# 10 September 2021
TODO:
RS-8213

TIL:
[Bootstrap Component Examples!!!!!!!](http://nexday.rems.dev19.rsis.io/mgmt/b/componentExamples)

# 13 September 2021
TODO:
* RS-8213
* figure out how to make db queries from either React or PHP and how to store that
data in order to pass it back and forth between React and PHP

TIL:

**RS-8213**
The test button mirrors most of the functionality within the message after you hit 
"Update" on the page 'Update Rate Sheets'. At the end of the process of hitting 
the Update button, a message will pop up saying something like, "You have updated 
0 of 0 rate sheets". (or however many rate sheets got updated). The test button 
will mirror that functionality, without the need to waste time if 0 of 0 rate 
sheets are updated. We want to know that something will happen to begin with.

*things to plan*
I need to really be thinking about how many queries I will need:
1. query how many rate sheets will be affected (Test button)
2. I will also need a query for the main table. Should be pretty easy though, just
a select * from statement
3. Insert statement from the Date picker (last button on the right). This will
execute the cron job through putting it on a table, and then displaying the cron
on the table. The table will be read and executed by AWS... maybe...

**Questions for Tom**:
1. Who is effected by the Update Rate Sheet page? Client vs Agent vs User?
2. Where are the current rate sheets that are active on the user I am currently 
signed into as?

Look at TestJob.php to see how we make cron jobs. This folder may be where I put
my cronjob file

# 14 September 2021
TODO:
TIL:

RS-8213:
the flow for getting the rate sheet for a customer:
1. know which customer we are currently using
2. know which settings the user is using from rate sheets
    * create an array of settings that are currently being applied to the customer
3. In order to know which setting belongs to what rate sheet, we go in the db
    * --> select code from shipmenttypes where description = "[name of setting]"
    * use the code here: --> select costBasis from customerCostBasis where costBasis = [value from last query]
4. 

Questions for Karl:
1. are the base rate sheet updates customer specific or are they system wide?
2. Where is the table that contains the current customer (or just the system
if the base rates apply to the whole system) and the customer's current systems/
current systems affected by base rate sheets?
3. Should the shipmenttypes table 'code' column have every single costBasis entry
for both the customer table and the customerCostBasis table?
4. Is the costBasis column more so for determining how much the markup will be?
or is the costBasis column also for determining which rate sheet is being used?
5. Which column within customer table are we going off of for costBasis? there
seem to be a LOT of them that look similar. What are they all for?


1. get the customerId
2. get the costBasis where the current customer id matches the customerId within 
customerCostBasis
3. get the description where the costBasis matches the code within shipmenttypes
4. get the rate sheet title where the description matches the description of the 
rate sheet within whatever table that is

the problem with this approach is that not every costBasis code is located within the shipmenttypes table

now I'm thinking that we should FIRST get the customerId however we do, then go 
to customerCostBasis, and match up the customerId with all the corresponding costBasis 
values, store them, then go to shipmenttypes, and make a new array for the description,
matching the costBasis from customerCostBasis to the code column in shipmenttypes,
we will then store the descriptions for each in an array. We will then jump over
to where ever the rate sheets are stored, and use the newest array to match up which
rate sheets we are using from there.


```pseudo code
customerIdString = customerId
costBasisArr = array()
description = array() // the description column in shipmenttypes
rateSheetNames = array()
for i = 0; i < customerCostBasis.length; i++
    if customerIdString = customerId // this referes to if the current customer's id matches to any number within the customerId column within the customerCostBasis table, then return true
        costBasisArr.push(customerCostBasis[i])
if customerCostBasis.costBais = shipmenttypes.code
    description.push(description)
if shipmenttype.description = sometable.description
    rateSheetNames.push(sometable.ratesheetname)
```
the test button will be telling us how many customers AND setting are being updated

1. the entire system

it really does sound like we are just working with a couple of tables. 
```sql
SELECT * FROM customer;
SELECT * FROM customerCostBasis WHERE costBasisType = 'pprcostbasis' AND 
    customerId = 'TST00002';
SELECT * FROM shipmenttypes WHERE carrier_id ='90';

SELECT * FROM shipmenttypes WHERE CODE = 'INT';
```
the drop down orders really don't matter on the front end in terms of knowing which
to display first, because it really doesn't matter. how the drop downs work is that
they say, "take the sheet from the first drop down and for all the services that
use this rate sheet, we are going to change the sheet to the one in the second 
drop down"

If I think about the inputs and outputs of this, I think that what's clear is that
there will be a query, really using the output from the drop down (a rate sheet)
to look up which services need to change. 
1. query both the customer table and the customerCostBasis tables, looking for what the 

what I'm thinking now is that based on these CLEAN queries, I'll be getting back
as output from the dropdown two rate sheets, the one we are changing, and the one
we are changing to. let toChange = the rate sheet we are changing, let changeTo = 
the rate sheet we are changing to.

select costBasisType from customerCostBasis where costBasis = '%toChange'
select customer from 

*essentially use this query and just the first 3 letters of each to make another
query later on BOTH the customerCostBasis tables and the customer tables*
```sql
    select distinct costBasisType from customerCostBasis where 
        costBasis like '%2021 Platinum Plus%';
```

with this then, what will be a success full db change? Where are all the locations
within the db that I need to change?

*use this query to know how many %costBasis fields there are within the customer
table*
```sql
show columns from customer like '%costbasis';
```

so essentially, what I can do is take the fisrt query directly above, and run that.
if nothing comes back then I'll move onto the customer database by searching through
the whole thing looking for something sort of in this way:

```sql
select * from customer where carrieriedcostbasis like 'D00';
select * from customer where carrierindcostbasis like 'D00';
select * from customer where ceicostbasis like 'D00';
select * from customer where ceocostbasis like 'D00';
select * from customer where exlcostbasis like 'D00';
select * from customer where exp9to17costbasis like 'D00';
select * from customer where expcostbasis like 'D00';
select * from customer where felcostbasis like 'D00';
select * from customer where fgh0to5costbasis like 'D00';
select * from customer where fgh11to30costbasis like 'D00';
select * from customer where fgh31to75costbasis like 'D00';
select * from customer where fgh6to10costbasis like 'D00';
select * from customer where fgh76pluscostbasis like 'D00';
select * from customer where fgp0to5costbasis like 'D00';
select * from customer where fgp11to30costbasis like 'D00';
select * from customer where fgp31to75costbasis like 'D00';
select * from customer where fgp6to10costbasis like 'D00';
select * from customer where fgp76pluscostbasis like 'D00';
select * from customer where gds0to5costbasis like 'D00';
select * from customer where gds11to30costbasis like 'D00';
select * from customer where gds31to75costbasis like 'D00';
select * from customer where gds6to10costbasis like 'D00';
select * from customer where gds76pluscostbasis like 'D00';
select * from customer where gdscostbasis like 'D00';
select * from customer where iedcostbasis like 'D00';
select * from customer where ielcostbasis like 'D00';
select * from customer where iescostbasis like 'D00';
select * from customer where indcostbasis like 'D00';
select * from customer where inlcostbasis like 'D00';
select * from customer where intcostbasis like 'D00';
select * from customer where ltl0to200costbasis like 'D00';
select * from customer where ltl1501to2500costbasis like 'D00';
select * from customer where ltl201to500costbasis like 'D00';
select * from customer where ltl2501to5000costbasis like 'D00';
select * from customer where ltl5001to7500costbasis like 'D00';
select * from customer where ltl501to800costbasis like 'D00';
select * from customer where ltl7501pluscostbasis like 'D00';
select * from customer where ltl801to1500costbasis like 'D00';
select * from customer where nalcostbasis like 'D00';
select * from customer where nascostbasis like 'D00';
select * from customer where sdlcostbasis like 'D00';
select * from customer where sds9to17costbasis like 'D00';
select * from customer where sdscostbasis like 'D00';
select * from customer where ugh0to10costbasis like 'D00';
select * from customer where ugh11to30costbasis like 'D00';
select * from customer where ugh31to50costbasis like 'D00';
select * from customer where ugh151pluscostbasis like 'D00';
select * from customer where ugh51to150costbasis like 'D00';
select * from customer where ugr0to10costbasis like 'D00';
select * from customer where ugr11to30costbasis like 'D00';
select * from customer where ugr151pluscostbasis like 'D00';
select * from customer where ugr31to50costbasis like 'D00';
select * from customer where ugr51to150costbasis like 'D00';
select * from customer where wfcostbasis like 'D00';
```

**THINGS TO BE CLEAR ON:**
* customerCostBasis - costBasis = RATE SHEET NAME!

* customer - [ANY 3 LETTERS]costbasis = RATE SHEET NAME, the 3 letters correlates
to shipmenttypes - code which correlates to the description, reaveling the service
* customerCostBasis - costBasisType, first 3 letters = shipmenttypes - code, which
correlates to the description, reaveling the service


**In order to go from ratesheet name to knowing which service is associated with
said rate sheet**
1. 

How do we know when to update the table's values? Which table are we updating?
A: I think that shipmenttypes is a dumping ground for the new Rate Sheet Importer/creator.
we can use shipmenttypes to read/ to know whih setting we are dealing with, but otherwise, 
I believe it is kinda useless to us right now as far as updating the correct info
goes.

-------------------------

ALL I'M DOING IS A SIMPLE RENAME OF THE SERVICES' RATE SHEET!!!!!!!!!!!!!

1. loop through the old rate sheet, check which services are affected/used with
this rate sheet. Make an array of all services being used
2. loop through the new rate sheet, check which services are affected/used with 
this rate sheet. Make an array of all services being used
3. We only want the services that are being used by both. For the services being
used by both, I will be looping through each customerId, checking to see if they
use the service being updated. If they do, then we will just be updating the costBasis
value from within the customerCostBasis table


we should have an output from the dropdowns be the actual services. We then should
be able to then collect that output into an array, and run that array against
all the entries in shipmenttypes, comparing to the descriptions of the affected
services.

we can compare the array of services affected through a query like this:
```sql
select code from shipmenttypes where description = 'USPS Large Flat Rate Box APO/FPO';
```
the 3 letter code should be the only thing outputting from each query with that.
we then run the array, each index, through a simple function that makes each index
lowercase and appends 'costbasis' onto it.

then with the rate sheet name, we will run this query:
```sql
select distinct customerId from customerCostBasis where costBasis = 'D00';
```
this will output all the customerIds that are using the current rate sheet.

what we have so far:
* a list of customers using the Current Rate Sheet
* a list of services that need changing due to the new rate sheet

```sql
update customerCostBasis set costBasis = [NEW RATE SHEET]
	where
		customerId = [CURRENT CUSTOMER BEING LOOPED THROUGH] and
        costBasis = [CURRENT RATE SHEET] and
        costBasisType = [CURRENT SERVICE BEING LOOPED THROUGH];
```

# 15 September 2021
TODO:
* RS-8213
TIL:

RS-8213:

I think what I really want is an array of array. One array for each customer
comprising of all the services we need to change for said customer

Today I was able to make progress, but not enough progress for my liking. I really
need to kick it in gear more than ever tomorrow...

Tomorrow it's my goal to get the Test button done.

# 16 September 2021
RS-8213:
basically, i need to get the array for all the costbasis fields from the customer
table, put them into an array, and only take the ones also mentioned from the services
query Karl sent me.

notes for tomorrow!:
continue the method I am working on. Make a way to check against the columns we know for sure are real and viable before going through with the rest of the code so we can prevent interuptions in the queries.

# 20 September 2021
TODO:
RS-8213:
FRONT END AND BACK END ARE DONE!!!!!!!
Now I just need to work on the table portion of it with creating a cron job and
displaying the data, and we should be home free!
Cron Job needs to get done!
How to test:
1. make a script in dev scripts to test on the test server. We need to run this
on the test server since cron jobs specifically only run on the live servers.
using the test db should work well
2. cd into the docker container to look at the logs. var/www/builds/build0001 and
that is the base directory for all the code. Just go from there and get into the
right directory for my code, then just run 'php [File Name]'

TIL:
1. 

# 21 September 2021
TODO:
* GO SHOOTING WITH THE GANG!
* RS-8213:
* invokeService turns out to be the wrong function to use for this task, bc it's
too old (legacy code). So instead, we need to convert all this over to use RemsAjax


# 22 September 2021
TODO:
TIL:

I was too busy today with RS-8213 to to my usual TIL

# 23 September 2021
TODO:
TIL:

I just need to get my RS-8213 done!!!!!

# 24 September 2021
TODO:
1. Actually finish RS-8213!!!!!!!!!!!!!!  I DID IT!!!!!!!!!!!!!!!!!!!!!
2. work on next tasks
TIL:
1. If I am adding a new page under the path /mgmt/b/[filename], then what I first
need to do is make a file, and name it something appropriate for what I am working
on. then we will take that name and plug it into this:
```bash
npx webpack --watch --filter="[ file name ]"
```
we will then go to the propper URL path. Forexample, Nexday's would be something
like this: http://nexday.rems.dev19.rsis.io/mgmt/b/updateRateSheets

# 27 September 2021
TODO:
1. RS-8236
TIL:

RS-8236:
startDate=2021-08-28&
endDate=2021-09-27&
startTime=&
endTime=&
orderErrorFilter=1&
returnLabelFilter=&
deliveredShipmentFilter=&
voidedShipmentFilter=&
shipmentStatusFilter=&
carrierFilter=fedex&
orderBatchIdFilter=&
manifestId=

startDate=2021-08-28&
endDate=2021-09-27&
startTime=&
endTime=&
orderErrorFilter=&
returnLabelFilter=&
deliveredShipmentFilter=&
voidedShipmentFilter=&
shipmentStatusFilter=&
carrierFilter=&
orderBatchIdFilter=&
manifestId=

# 28 September 2021
TODO:
1. RS-8213 - finish up, add spinner
2. RS-8221

TIL:
1. 106 - 129, quote AHG, greater than that, quote LPR, if both are present quote LPR

RS-8186:
* I need to make it so that the money is applied to each charge in order of when
I click on them.
* basically, this is a problem with how we are handling the an array.

* I need to store an array of which row was clicked in which order.
* I then need to have that array shrink and grow when items are clicked and unclicked.
* After that, I need to make sure that I am applying the corrent amount of money
to it.

# 30 September 2021


TODO:
RS-8272

TIL:

default memory in the config is 314 meg
just find the location of the commission report and change that

how to run a build from BuildDash:
1. like this: [ here ](https://rkt.rocksolidinternet.com/build_50496/html/)
2. just replace that number with the build number. so it's (build*underscore like in the above link*[build number from build dash])

If I want to find which files are getting hit, one way is to go to firefox or google
chrome's dev tools. I go to the network tab and run the button or whatver. the endpoint
should then be exposed. Once that happens, I should be able to find the appropriate files.

HOW TO RELEASE NEW CODE!!!!!!!
0. make sure in the webship-rems slack channel that I'm okay to release
1. merge in the code through GitHub like how I usually do
2. go to builddash and make sure it's building
3. move each task INDIVIDUALLY ONE AT A TIME into the Ready For Release section.
4. When the build finishes on BuildDash, copy the build number.
5. click on the link button for the build. click on Webship and Rest API BOTH if
this is Webship specific, OR the Rems button if its for Rems, or all three if this
build has both Webship and Rems specific code.
6. THEN type in "now" to confirm if we want it to go out now, or later if we want
it to go out later.
7. Then click on Link Build button
8. go back to Jira, drag the task from Ready for Release into Released ONLY DO THIS
ONE AT A TIME
9. Click on the link/button above where it says, 'Release...'. It will open up a
window that includes fields for the Version Name, Release Date, and Description.
10. for REMS, in the version name, write, 'Rems - [build number]'
11. for Webship, in the version name, write 'Webship - [build number]'
12. hit release BUT ONLY IF THERE IS ONLY ONE TASK IN THE 'Released' COLUMN!!!
NO MORE NO LESS!
13. let everyone know in the slack channel that we are ready to release!

# 01 October 2021
TODO:
1. 

# 06 October 2021
TODO:
1. RS-7410
TIL:
1. I learned how to connect to the mysql db from the terminal!!!!!!!!!!!
```bash
mysql -u harrison.hemstreet -p93055511e9da2768 -h db300-test-ro.rsis.io
```
If I want to connect to the prod db then all I need to do is switch out the -h
value for the prod db host name

RS-7410:
1. if the dim length, width and height are not present within the imported airbill,
then check the "shipment_quote" table and grab the length, width and height. Then
multiply the numbers together and divide by the dim divisor.
if the new number is greater than the weight of the airbill in question, then make
that pournd amount equal to equal to equal to equal to the dolor amount or the weight.
The individual should be charged on that now.
let dimDims = shipment_quote.quotedWidth * shipment_quote.quotedHeight * shipment_quote.quotedLength
if shipment_quote.quotedWeight < (dimDims/dimDivisor)
then use dimDims/dimDivsor

$row[28, 29, 30, 31]
Dim Length, Dim Width, Dim Height, Dim Divisor


How to setup xDebugger!!!!!!!!!!
(these steps are for when you are going through the Remote Dev Setup Process and
you get stuck on one of the steps for upping your docker container bc xDebugger is
not working)
1. go to xdebug.ini within rsis-docker/webserver-dev
2. execute both files in the scriptes folder within rsis-docker starting with build.js
3. also make sure that the "port" word is removed from rsis-docker/webserver-dev-20/Dockerfile
lines 68 and 69 should look like this:
```dockerfile
ADD xdebug.ini /etc/php/7.4/apache2/conf.d/90-xdebug-port.ini
ADD xdebug.ini /etc/php/7.4/cli/conf.d/90-xdebug-port.ini
```

# 7 October 2021
TODO:
TIL:

RS-7410:
1. if I am getting a -1 on the airbill table when I am looking up an airbill number,
there's a good chance it's because the system does not know which user the airbill
belongs to. There are systems in place that will eventually assign a user to this
airbill
2. In order to test this, I must first make a shipment on Webship, then take pieces
of that data and plug it into one of the rows from Tom's CSV he sent me. I will
need to do this so that I am replicating the issue as close as possible.

# 08 October 2021
TODO:
1. RS-7410
2. RS-8279
TIL:
If I am working on a task that involves emailing. In order to test it, I should
be able to switch out a variable with my email.

# 11 October 2021
TODO:
1. RS-7577
TIL:
1. I've noticed, while working on RS-7577 that I have seen this bug in different
forms several other times before. It looks like it is an array sequence error.
maybe I should start keeping track of what kind of bugs i run into.
2. When changing the URL for a website, I need to change it in AppInfoService.php
AND I need to get someone with prod db access to change the URL somewhere in globalrems

# 12 October 2021
TODO:
1. RS-7410
2. RS-7577
* I can now start working on these bc Karl merged in his Jusda stuff which gives
us a brand new UPS edi importer
TIL:

HOW TO CHANGE A FRANCHISE's WEBSHIP URL!!!
* Also, need to change one file in there too
* Change these two tables:
* db isarems. table is hsettings. There is a setting that saves your webship URL.
* globalrems serverConfig
- alias = url

How to run tests locally:
1. point your local to the builddash db
2. you do this by updating your server/config-dev.sample.cfg
```
; devs need to configure this one
[mysql]
; globalremsUsername = user.name
; globalremsPassword = somepass
phpunitremsUsername = phpunit
phpunitremsPassword = 5bwqdGtVL8rBjZuG
phpunitremsHost = 10.3.200.195
phpunitremsReadonlyHost = 10.3.200.195
```
then run this:
```
docker exec -it harrisonh ./run-tests.sh
```

# 13 October 2021
Third time in one month that the hot water has gone out. This is beyond messed up.
The second time was over the weekend. Friday, Saturday and Sunday we were out of
hot water. This is so freaking messed up.

TODO:
1. Call Amber at Union Square's office and complain. Try to get rent reduced.

* 1st quotes all the pieces together
* 2nd way quotes each piece separately
* this issue either happens in the quoter or in the functions that call the quoter
* both in UPS and FedEx quoters
* whether or not the piece(s) are international could be one of those dividing
lines as to how the order is quoted

# 18 October 2021

TODO:
TIL:

AWS Login: 842137980019

# 21 October 2021
TODO:
* RS-8303
* RS-8316
- if I want to look at XML like in this task, I need to use the command from above
to look at the logService. Just search through here until you find the part that
tails the log service
TIL:

# 22 October 2021
TODO:
TIL:

# 25 October 2021
TODO:
TIL:

# 27 October 2021
TODO:
TIL:

# 28 October 2021
TODO:
TIL:

# 29 October 2021
TODO:
TIL:

# 01 November 2021

1. add the else
2. remove ifs
3. change to not shipper
4. break out the division and division code

# 02 November 2021

TIL:
1. nice command for deleting multiple branches: `git branch -d `git branch --list '3.2.*'``
TODO:

# 03 November 2021

if the cahrges are int he test database butnot the live databse then those are culprets

# 04 November 2021
TODO:
TIL:

line 211, paymentMethodsStab.jsx

# 05 November 2021

# 06 November 2021

# 07 November 2021

# 08 November 2021
TODO:
TIL:

# 09 November 2021

# 09 November 2021
TODO:
TIL:
* If you want to know which columns are what/ ups edi column definitions for ups,
then look at the file called UPS_Billing_Data_Header.csv within the Documents -> csvs
directory.

# 10 November 2021

# 11 November 2021

# 12 November 2021


# 15 November 2021

whenever something like 'API.post' comes up connected to a string, for example,
look at assign-rates.php roughly on line 687.
`API.post('/settings/assign-rates/savesheets', {...`
this function actually comes from one of the first api iterations for accessing
async functions from the code base. One way to find what the function is doing
is to copy that string within the API.post function call, and then follow it.
For example, after following the string from the snippet above, I was led to
essentially a pass through function in server/rems/resources/settings.php line 304.
The pass through function takes us to server/common/systems/Airbill.php to another
function (THE ACTUAL FUNCTION FINALLY) within
server/common/Systems/Airbill/ManageCostBasis.php line 129

# 16 November 2021
TODO:
TIL:
RS-8330
we need for the query:
* carrier
* Tier?
* list rate sheet
We want to login to a system, choose a list rate sheet, choose a carrier, and
choose a Tier(?) and take that info and put that info into a query

# 17 November 2021

# 18 November 2021

		        $q0 = "SELECT id FROM tier_rate WHERE 1=1";

		        foreach ($where as $field => $value) {

		        	$q0 .= " AND $field = " . $this->db->e($value);

		        }



                $id = $this->db->getOne($q0);



                if ($id) {



                    $q1 = "UPDATE tier_rate SET listSheetId = ? WHERE 1=1";

                    foreach ($where as $field => $value) {

                        $q1 .= " AND $field = " . $this->db->e($value);

                    }



                    $sth1 = $this->db->prepare($q1);



                    $listSheetId = array($data['listSheetId']);



                    if(!$this->db->execute($sth1, $listSheetId)) {

                        $failed = true;

                    }



                } else {



			        // assignment does not exist yet, create it

			        foreach ($data as $key => $val) {

			        	if (!in_array($key, array('serviceTypeCode', 'tierId', 'carrierId', 'subcarrierId', 'effectiveDate', 'carrierSheetId', 'franchiseSheetId', 'listSheetId'))) {

			        		unset($data[$key]);

			        	}

			        }



			        $data['dateCreated'] = 'NOW()';



			        try {

                        $result = $this->db->autoInsert('tier_rate', $data);



                        if ($this->db->isError($result)) {

                            throw $this->RateSheet->getException($result->getMessage());

                        }

                    } catch (\Exception $e) {

                        throw $this->RateSheet->getException("Error inserting tier_rate record: " . $e->getMessage());

                    }



                }



                // $q2 = "SELECT * FROM tier_rate WHERE 1=1";

                // foreach ($where as $field => $value) {

                //     $q2 .= " AND $field = " . $this->db->e($value);

                // }



                // $sth2 = $this->db->prepare($q2);





# 18 November 2021

# 19 November 2021

# 22 November 2021
TODO:
TIL:
* I learned that sql when using the `ORDER BY` clause will place stings in order
by lexicographically smallest. In english, that means this:
```
A way of sorting strings, similar to alphabetical order but generalized to all kinds of characters.

When comparing two strings, s and t, we compare each pair of characters with equal indices (s[i] and t[i]), starting with i = 0:

if s[i] < t[i] or if s[i] is undefined, then we conclude that s < t,
if s[i] > t[i] or if t[i] is undefined, then we conclude that s > t,
if s[i] = t[i] then we repeat the process by comparing s[i + 1] to t[i + 1].
If the two strings have equal length and s[i] = t[i] for every character, then we conclude that s = t

Examples:

"snow" > "snoring" because the first string contains a greater character at index i = 2
"cat" < "caterpillar" because the first string is undefined at index i = 3
```
* Learned the above from Code Signal database arcade problem 'mostExpensive' #7

# 23 November 2021

# 24 November 2021

# 29 November 2021
TODO:
TIL:
* If you want to find a customer that uses a specific carrier, then use this query:
`select * from webshipstats where carrier = '9' and customerid not like 'TST00002' limit 10;`
you should be able to find the customer by changing out '9' with whatever the id
is for carrier


# 30 November 2021

TIL:
there is a setting for if a system is splitting up the `___0to5costbasis` and others
of that nature. For example fgh0to5costbasis. Some systems will only rely upon one
to cover them all. For example, in bfsrems, it's split up with fgh0to5costbasis
and fgh6to10costbasis and so on, but in rktrems, we are only using the one fghcostbasis
to cover them all. The setting for this is called

RS-adsf look into adding or chanigng a setting that would disable breakouts

# 01 December 2021

# 02 December 2021
TODO:
TIL:

# 03 December 2021

# 04 December 2021

# 05 December 2021

# 06 December 2021
TODO:
TIL:
* if I want to find the a customer that uses a particular carrier, then all I need
to do is run a query like this: `select * from webshipstats where carrier = '52' limit 10;`
then just look at the customerid and use that customer. that customer should have
the carrier I'm looking for.

# 07 December 2021

1. query to update existing
2. one to get existing
3. loop through and figure out which ones need to be inserted
4. one mass insert to do the rest that don't exist

give tom a component to choose subcarriers

fetch all rows
make a key, just a string, service type code, tierid, and the subcarrierid with a separateor, double collon or dash
make a complete list of everything that needs to get updated
loop through the data set from the database

RS-8424: Mass Set List Rates Not Working
* I have it all done for handling one subcarrier
* we really want to allow this tool to work for more than one subcarrier
* so we are making a new tool. This new tool will organize subcarriers by carrier.
That way when we change list ratees on the Manager Tiers tool, we will NOT be choosing
a subcarrier, but rather a carrier. Then all subcarriers under that carrier's list
rates will change.

# 08 December 2021
TODO:
TIL:

# 09 December 2021
TODO:
TIL:
* when making a new page in rems, all you need to do is add the new React page
to jssrc/rems/src. Make sure you also restart webpack. The way webpack works is
that webpack will scan the directory for all files it needs to load. If you add
a new React page after loading webpack, webpack will not be able to see it. So
reload if you want to actually be able to see your page. If you want to add the
page to the drop down menu within the Rems app itself, you just add an entry into
the menu table. follow everything as is. Odds are, the endpoint you will be using
for any new tables will be '../mgmt/b/[ name of React file ]'. Also, the placement
of the new React page depends on what the parentId value is. Make the parentId value
equal to the page you want your new page to appear next to


# 10 December 2021
TIL:
TODO:
# 11 December 2021

# 12 December 2021

# 13 December 2021

# 14 December 2021
TIL:
TODO:

RS-8430:
tables notes:
subcarriers
* id
* name
* active

subcarriers-carriers link table
* id
* carrierId
* subcarrierId

carriers
* id
* ...

really when we would be clicking on a subcarrier, we need to not only fetch that
but also, fetch the other stuff too...

maybe we change the load function to actually create a temp table... something like
`SELECT s.id, s.name, s.active FROM subcarriers s,`

KEEP THIS:
```javascript
                        {
                            carriers.length > 0 ? (carriers.map(res => {
                                return (
                                    <div className="form-check d-flex p-4" key={res.id}>
                                        <input className="form-check-input" type="checkbox" value="false" id={res.name} defaultChecked={false} onChange={() => { handleOnChangeCarrierCheckBox(res.id) }}/>
                                        <label className="form-check-label" htmlFor={res.name}>
                                            {res.readableName}
                                        </label>
                                    </div>
                                );
                            }))
                                :
                                (
                                    <div>
                                        <h5>CARRIERS NOT FOUND</h5>
                                    </div>
                                )
                        }

                        {/* map through the list of used carriers and make a check box for each */}
```

# 15 December 2021

# 16 December 2021
TODO:
1. RSIS-8345
2. the whole RS-8430/RS-8424 saga
3. get RS-8430 merged ASAP after Karl approves it
TIL:

# 17 December 2021

# 21 December 2021
* remove last comma in create-subcarrier-table.sql
* change from 'subcarriers' to 'subcarrier' on RS-8430
* on spacevim, make sure I change the cursor to a blinking line when in insert mode
* on spacevim, make sure I change ESC to 'jj'
* on spacevim, maybe try out Harpoon plugin

/*
    menu insertion for adding the Manage Subcarriers tool
*/
$dbService->query("INSERT INTO menu (name, level, displaycode, adminlevel, moddate, priority, parentid, hide, isapplication) VALUES ('Manage Subcarriers', 1, '../mgmt/b/manageSubcarriers', 1, NOW(), 0, 117, n, 0)");

# 22 December 2021
TODO:
* merge all tasks leading to RS-8424
TIL:
* 

# 23 December 2021
TODO:
TIL:
* if you want to increase the cash on a webship account, then go to the Prepay Limit tool
and increase the balance there

# 24 December 2021

# 25 December 2021

# 26 December 2021

# 27 December 2021

# 28 December 2021
TODO:
TIL:

### RS-8483:
**getSubcarriers**
- [ ] where is dimDiscounts.jsx used and how do I reach line 340?
- [ ] the carrierInvoiceSql.php looks fairly hazardous... specifically line 195
- [ ] carrier.php line 749 looks like I might be able to use that line within
subcarrierService.php to decide whether or not to insert two falseish records,
the "No Sub Carriers" option, or the "" (empty) option.
- [ ] test to see if the changes made in server/rems/html/mgmt/index.php all work

**getsetting('subcarriers')**
- [x] warehouse.php how do I reach line 430 and line 482? I have not been able to find the trigger for this file
- [x] accounting_v1.php how do I reach line 138? it does look 
like this is only triggerd one place, within server/rems/html/api/test/testClient.php

# 29 December 2021
TIL:
TODO:

### RS-8483
__Tom's Notes:__
- [x] create filters for subcarriers individually on the manage subcarriers page so that
we can choose to only show subcarriers belonging to a specific carrier

- [x] show only the active subcarriers by default

remove subcarrier drop down on mass set list rates page.
we should be changing each list rate for every carrier, tier, and subcarrier combo

we also want the manage tiers page change to come out later one week after we release
the changes for the Manage Subcarriers page

ISSUES:
- [x] the first change (if it's just an active status change) will yeild an empty list of carriers
- [x] if I load up, then choose 'DHL' on the carrier dropdown, then exit out, then on the main page edit a subcarrier and hit save, then
the page goes blank and I get a 'NO DATA'

# 30 December 2021
TODO:
TIL:

# 31 December 2021

# 01 January 2022
TODO:
TIL:

RS-8483:
* maybe I'll remove the use statements at the top of invoiceobj.php
STORING FOR LATER:
(this portion is taken from warehouse.php. I made changes that should hopefully
 replicate what was happening when getsetting('subcarriers') was being used, but
 with subcarrierService->getSubCarriers(). warehouse.php line 133-147 (should replace master branch's lines 133-144)):
```php
// I think this change is comperable to what it was before
		$subcarriersRaw = $db->getAll("SELECT * FROM subcarrier");
        $subcarriersFiltered = array();
        foreach ($subcarriersRaw as $subcarrier) {
            unset($subcarrier['active']);
            array_push($subcarriersFiltered, $subcarrier['name']);
        }
        foreach ($subcarriersFiltered as $subcarrier) {
            if(isset($subcarriersFiltered[1]) && strlen($subcarriersFiltered[1]) > 0) {
                if(strtolower(substr($subcarriersFiltered[1],0,strlen($search))) == strtolower($search)) {
                    $all[] = Array("val"=>$subcarriersFiltered[1]);
                }
            }
        }
```



# 01 January 2022

# 02 January 2022

# 03 January 2022
TODO:
TIL:

airbill numbers: 50500005VK08, 10600636VK15, 50200004VK19, 50200011VK19, 50200004VK19, 72200036VK19, 72200036VK19

# 04 January 2022

# 05 January 2022

# 06 January 2022
TODO:
* RS-8450 - REMS API Addition

TIL:
**RS-8450**

OTHER:
I really need to focus up. I can no longer play video games in my spare time. I really need to spend every wakeing moment
working on this stuff. I will memorize the content in the React.js questions that I have forked onto my github account.

My Tech Stack:
* Rust
* React
* Next.js
* Node
* TypeScript
* Express.js
* GraphQL
* MySQL
* PostgreSQL
* Docker
* Kubernetes
* GitHub Actions

# 07 January 2022
TODO:
* RS-8450 - REMS API Addition

TIL:
**RS-8450**
* From Chris M:
```
To get the address information you'll need to query the webshipshipment table and unserialize the request 
field using the ArrayFunctionsUtils::printrToArray function. You can probably get the rest of the data 
from that field as well. If you need other info, webshipstats can be joined on the bookNumber field.
```
* Is the serviceTypeCode equivalent to webshipstats' shipcode column?

# 08 January 2022

# 09 January 2022

# 10 January 2022
TODO:
TIL:
question I was planning on asking Chris M. but decided not to...
```
Feel free to wait until monday to respond :slightly_smiling_face:

https://jira.rocksolidinternet.com/browse/RS-8450
Okay so I think we have run into a potential problem....

Like you mentioned above, in order to get the address info, I need to "unserialize the request field using the ArrayFunctionsUtils::printrToArray function". Because I am being asked to create an endpoint that returns up to 1000 shipments, I'll need to run the printrToArray function up to 1000 times. This is probably going to end up being a pretty slow endpoint because of that, since we can't get all the info we need in one SQL statement.

I'm going to continue working on this with the current info I have, but in the meantime, I thought I would ask, do you know of any other way that would be more efficient that would allow us to get the data we need for up to 1000 shipments?

My current approach is decent I think, but I don't know, I thought I would just check to see in case you had any other thoughts! Thanks! :slightly_smiling_face:

https://github.com/rocksolidinternet/rsis-source/pull/9913/files
```

# 11 January 2022
TODO:
TIL:
* If I want to add a page to the REMS REST API docs, then I need to add the markdown file,
and then jump into server/rems/html/restapi/docs/v1/index.html and add an entry
at roughly line 110-120 so that a link can be present for the new page to be added.
in order to be able to see any new pages on here, you must run `mkdocs build` in
order to build the documentation. You must run `mkdocs build` everytime after you
make a change. you also need to add this enpoint to mkdocs.yml and at the bottom
of the mkdocs/v1/docs/index.md file under 'API Endpoints' and mkdocs/v1/index.md

a:3:{i:0;a:3:{s:4:"name";s:5:"Fedex";s:6:"prices";a:17:{i:0;N;i:1;N;i:2;s:0:"";i:3;s:0:"";i:4;N;i:5;s:0:"";i:6;s:0:"";i:7;s:0:"";i:8;s:0:"";i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;}s:8:"supplies";a:18:{i:0;s:22:"Envelope without pouch";i:1;s:28:"Legal Size Reusable Envelope";i:2;s:32:"Small Pak - 10-1/4'' x 12-3/4'' ";i:3;s:27:"Large Pak - 12'' x 15-1/2''";i:4;s:10:"Padded Pak";i:5;s:41:"Small Box - 10-7/8'' x 1-1/2'' x 12-3/8''";i:6;s:42:"Medium Box - 11-1/2'' x 2-3/8'' x 13-1/4''";i:7;s:38:"Large Box - 12-3/8'' x 3'' x 17-1/2'' ";i:8;s:23:"Tube - 6'' x 6'' x 38''";i:9;s:14:"Domestic Pouch";i:10;s:33:"Express US Aribill (wrap version)";i:11;s:25:"Envelope w/built in pouch";i:12;s:49:"Extra Large Box (X1 Cube Shaped) - 50 LBS or Less";i:13;s:56:"Extra Large Box (X2 Rectangular Shaped) - 50 LBS or Less";i:14;s:46:"Direct Thermal Label 425 Per Roll - 4" x 6" (Non Doc Tab)";i:15;s:20:"Laser Label 8.5 x 11";i:16;s:21:"DocTab Thermal Labels 425 Per Roll – 4” x 6”";i:17;s:18:"4" x 8" Label Roll";}}i:1;a:3:{s:4:"name";s:3:"UPS";s:6:"prices";a:16:{i:0;s:0:"";i:1;N;i:2;N;i:3;s:0:"";i:4;s:0:"";i:5;s:0:"";i:6;s:0:"";i:7;N;i:8;s:0:"";i:9;N;i:10;s:0:"";i:11;s:0:"";i:12;s:0:"";i:13;N;i:14;N;i:15;N;}s:8:"supplies";a:15:{i:0;s:16:"Express Envelope";i:1;s:15:"Window Envelope";i:2;s:14:"Legal Envelope";i:3;s:43:"Direct Thermal Label 250 Per Roll - 4" x 8"";i:4;s:46:"Direct Thermal Label 320 Per Roll - 4" x 6.25"";i:5;s:43:"Direct Thermal Label 940 Per Roll - 4" x 6"";i:6;s:54:"Woldship Peel & Stick Label 2 Per Sheet - 8.5" x 5.5" ";i:7;s:39:"Woldship Peel & Stick Label 4 Per Sheet";i:8;s:26:"Express Pak - 16" x 12.75"";i:9;s:18:"Express Padded Pak";i:10;s:35:"Express Box Small - 13" x 11" x 2" ";i:11;s:35:"Express Box Medium - 16" x 11" x 3"";i:12;s:35:"Express Box Large - 18" x 13" x 3" ";i:13;s:11:"Label Pouch";i:14;s:21:"4" x 8" Labels (Roll)";}}i:2;a:3:{s:4:"name";s:3:"DHL";s:6:"prices";a:18:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;N;i:5;N;i:6;N;i:7;N;i:8;N;i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;i:17;N;}s:8:"supplies";a:18:{i:0;s:67:"Easyship Labels - For Thermal Printer (250 labels/roll,4 rolls/box)";i:1;s:71:"EasyShip Labels - For High Capacity Thermal Printer (1,000 labels/roll)";i:2;s:52:"WebShip, CorporateShip Labels - For LaserJet Printer";i:3;s:23:"Plastic Waybill Sleeves";i:4;s:16:"Express Envelope";i:5;s:45:"Express Envelope with plastic waybill sleeves";i:6;s:22:"Express Legal Envelope";i:7;s:51:"Express Legal Envelope with plastic waybill sleeves";i:8;s:18:"Small Padded Pouch";i:9;s:18:"Large Padded Pouch";i:10;s:34:"Standard Flyer (Small Express Pack";i:11;s:32:"Large Flyer (Large Express Pack)";i:12;s:11:"Box #2 Cube";i:13;s:12:"Box #2 Small";i:14;s:13:"Box #2 Medium";i:15;s:12:"Box #3 Large";i:16;s:21:"Box #3 Small Tri-Tube";i:17;s:21:"Box #4 Large Tri-Tube";}}}

OG value: a:3:{i:0;a:3:{s:4:"name";s:5:"Fedex";s:6:"prices";a:17:{i:0;N;i:1;N;i:2;s:0:"";i:3;s:0:"";i:4;N;i:5;s:0:"";i:6;s:0:"";i:7;s:0:"";i:8;s:0:"";i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;}s:8:"supplies";a:18:{i:0;s:22:"Envelope without pouch";i:1;s:28:"Legal Size Reusable Envelope";i:2;s:32:"Small Pak - 10-1/4'' x 12-3/4'' ";i:3;s:27:"Large Pak - 12'' x 15-1/2''";i:4;s:10:"Padded Pak";i:5;s:41:"Small Box - 10-7/8'' x 1-1/2'' x 12-3/8''";i:6;s:42:"Medium Box - 11-1/2'' x 2-3/8'' x 13-1/4''";i:7;s:38:"Large Box - 12-3/8'' x 3'' x 17-1/2'' ";i:8;s:23:"Tube - 6'' x 6'' x 38''";i:9;s:14:"Domestic Pouch";i:10;s:33:"Express US Aribill (wrap version)";i:11;s:25:"Envelope w/built in pouch";i:12;s:49:"Extra Large Box (X1 Cube Shaped) - 50 LBS or Less";i:13;s:56:"Extra Large Box (X2 Rectangular Shaped) - 50 LBS or Less";i:14;s:46:"Direct Thermal Label 320 Per Roll - 4" x 6.25"";i:15;s:20:"Laser Label 8.5 x 11";i:16;s:21:"DocTab Labels #154254";i:17;s:18:"4" x 8" Label Roll";}}i:1;a:3:{s:4:"name";s:3:"UPS";s:6:"prices";a:16:{i:0;s:0:"";i:1;N;i:2;N;i:3;s:0:"";i:4;s:0:"";i:5;s:0:"";i:6;s:0:"";i:7;N;i:8;s:0:"";i:9;N;i:10;s:0:"";i:11;s:0:"";i:12;s:0:"";i:13;N;i:14;N;i:15;N;}s:8:"supplies";a:15:{i:0;s:16:"Express Envelope";i:1;s:15:"Window Envelope";i:2;s:14:"Legal Envelope";i:3;s:43:"Direct Thermal Label 250 Per Roll - 4" x 8"";i:4;s:46:"Direct Thermal Label 320 Per Roll - 4" x 6.25"";i:5;s:43:"Direct Thermal Label 940 Per Roll - 4" x 6"";i:6;s:54:"Woldship Peel & Stick Label 2 Per Sheet - 8.5" x 5.5" ";i:7;s:39:"Woldship Peel & Stick Label 4 Per Sheet";i:8;s:26:"Express Pak - 16" x 12.75"";i:9;s:18:"Express Padded Pak";i:10;s:35:"Express Box Small - 13" x 11" x 2" ";i:11;s:35:"Express Box Medium - 16" x 11" x 3"";i:12;s:35:"Express Box Large - 18" x 13" x 3" ";i:13;s:11:"Label Pouch";i:14;s:21:"4" x 8" Labels (Roll)";}}i:2;a:3:{s:4:"name";s:3:"DHL";s:6:"prices";a:18:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;N;i:5;N;i:6;N;i:7;N;i:8;N;i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;i:17;N;}s:8:"supplies";a:18:{i:0;s:67:"Easyship Labels - For Thermal Printer (250 labels/roll,4 rolls/box)";i:1;s:71:"EasyShip Labels - For High Capacity Thermal Printer (1,000 labels/roll)";i:2;s:52:"WebShip, CorporateShip Labels - For LaserJet Printer";i:3;s:23:"Plastic Waybill Sleeves";i:4;s:16:"Express Envelope";i:5;s:45:"Express Envelope with plastic waybill sleeves";i:6;s:22:"Express Legal Envelope";i:7;s:51:"Express Legal Envelope with plastic waybill sleeves";i:8;s:18:"Small Padded Pouch";i:9;s:18:"Large Padded Pouch";i:10;s:34:"Standard Flyer (Small Express Pack";i:11;s:32:"Large Flyer (Large Express Pack)";i:12;s:11:"Box #2 Cube";i:13;s:12:"Box #2 Small";i:14;s:13:"Box #2 Medium";i:15;s:12:"Box #3 Large";i:16;s:21:"Box #3 Small Tri-Tube";i:17;s:21:"Box #4 Large Tri-Tube";}}}
new value: a:3:{i:0;a:3:{s:4:"name";s:5:"Fedex";s:6:"prices";a:17:{i:0;N;i:1;N;i:2;s:0:"";i:3;s:0:"";i:4;N;i:5;s:0:"";i:6;s:0:"";i:7;s:0:"";i:8;s:0:"";i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;}s:8:"supplies";a:18:{i:0;s:22:"Envelope without pouch";i:1;s:28:"Legal Size Reusable Envelope";i:2;s:32:"Small Pak - 10-1/4'' x 12-3/4'' ";i:3;s:27:"Large Pak - 12'' x 15-1/2''";i:4;s:10:"Padded Pak";i:5;s:41:"Small Box - 10-7/8'' x 1-1/2'' x 12-3/8''";i:6;s:42:"Medium Box - 11-1/2'' x 2-3/8'' x 13-1/4''";i:7;s:38:"Large Box - 12-3/8'' x 3'' x 17-1/2'' ";i:8;s:23:"Tube - 6'' x 6'' x 38''";i:9;s:14:"Domestic Pouch";i:10;s:33:"Express US Aribill (wrap version)";i:11;s:25:"Envelope w/built in pouch";i:12;s:49:"Extra Large Box (X1 Cube Shaped) - 50 LBS or Less";i:13;s:56:"Extra Large Box (X2 Rectangular Shaped) - 50 LBS or Less";i:14;s:46:"Direct Thermal Label 425 Per Roll - 4" x 6" (Non Doc Tab)";i:15;s:20:"Laser Label 8.5 x 11";i:16;s:21:"DocTab Thermal Labels 425 Per Roll – 4” x 6”";i:17;s:18:"4" x 8" Thermal Label Roll – 4” x 8”";}}i:1;a:3:{s:4:"name";s:3:"UPS";s:6:"prices";a:16:{i:0;s:0:"";i:1;N;i:2;N;i:3;s:0:"";i:4;s:0:"";i:5;s:0:"";i:6;s:0:"";i:7;N;i:8;s:0:"";i:9;N;i:10;s:0:"";i:11;s:0:"";i:12;s:0:"";i:13;N;i:14;N;i:15;N;}s:8:"supplies";a:15:{i:0;s:16:"Express Envelope";i:1;s:15:"Window Envelope";i:2;s:14:"Legal Envelope";i:3;s:43:"Direct Thermal Label 250 Per Roll - 4" x 8"";i:4;s:46:"Direct Thermal Label 320 Per Roll - 4" x 6.25" Non Doc Tab For Zebra ZP 450 Printer";i:5;s:43:"Direct Thermal Label 940 Per Roll - 4" x 6" (Note: this will NOT fit Zebra ZP 450 Style Printers)";i:6;s:54:"Woldship Peel & Stick Label 2 Per Sheet - 8.5" x 5.5" ";i:7;s:39:"Woldship Peel & Stick Label 4 Per Sheet";i:8;s:26:"Express Pak - 16" x 12.75"";i:9;s:18:"Express Padded Pak";i:10;s:35:"Express Box Small - 13" x 11" x 2" ";i:11;s:35:"Express Box Medium - 16" x 11" x 3"";i:12;s:35:"Express Box Large - 18" x 13" x 3" ";i:13;s:11:"Label Pouch";i:14;s:21:"4" x 8" Labels (Roll)";}}i:2;a:3:{s:4:"name";s:3:"DHL";s:6:"prices";a:18:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;N;i:5;N;i:6;N;i:7;N;i:8;N;i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;i:17;N;}s:8:"supplies";a:18:{i:0;s:67:"Easyship Labels - For Thermal Printer (250 labels/roll,4 rolls/box)";i:1;s:71:"EasyShip Labels - For High Capacity Thermal Printer (1,000 labels/roll)";i:2;s:52:"WebShip, CorporateShip Labels - For LaserJet Printer";i:3;s:23:"Plastic Waybill Sleeves";i:4;s:16:"Express Envelope";i:5;s:45:"Express Envelope with plastic waybill sleeves";i:6;s:22:"Express Legal Envelope";i:7;s:51:"Express Legal Envelope with plastic waybill sleeves";i:8;s:18:"Small Padded Pouch";i:9;s:18:"Large Padded Pouch";i:10;s:34:"Standard Flyer (Small Express Pack";i:11;s:32:"Large Flyer (Large Express Pack)";i:12;s:11:"Box #2 Cube";i:13;s:12:"Box #2 Small";i:14;s:13:"Box #2 Medium";i:15;s:12:"Box #3 Large";i:16;s:21:"Box #3 Small Tri-Tube";i:17;s:21:"Box #4 Large Tri-Tube";}}}
a:3:{i:0;a:3:{s:4:"name";s:5:"Fedex";s:6:"prices";a:17:{i:0;N;i:1;N;i:2;s:0:"";i:3;s:0:"";i:4;N;i:5;s:0:"";i:6;s:0:"";i:7;s:0:"";i:8;s:0:"";i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;}s:8:"supplies";a:18:{i:0;s:22:"Envelope without pouch";i:1;s:28:"Legal Size Reusable Envelope";i:2;s:32:"Small Pak - 10-1/4'' x 12-3/4'' ";i:3;s:27:"Large Pak - 12'' x 15-1/2''";i:4;s:10:"Padded Pak";i:5;s:41:"Small Box - 10-7/8'' x 1-1/2'' x 12-3/8''";i:6;s:42:"Medium Box - 11-1/2'' x 2-3/8'' x 13-1/4''";i:7;s:38:"Large Box - 12-3/8'' x 3'' x 17-1/2'' ";i:8;s:23:"Tube - 6'' x 6'' x 38''";i:9;s:14:"Domestic Pouch";i:10;s:33:"Express US Aribill (wrap version)";i:11;s:25:"Envelope w/built in pouch";i:12;s:49:"Extra Large Box (X1 Cube Shaped) - 50 LBS or Less";i:13;s:56:"Extra Large Box (X2 Rectangular Shaped) - 50 LBS or Less";i:14;s:46:"Direct Thermal Label 320 Per Roll - 4" x 6.25"";i:15;s:20:"Laser Label 8.5 x 11";i:16;s:21:"DocTab Labels #154254";i:17;s:18:"4" x 8" Label Roll";}}i:1;a:3:{s:4:"name";s:3:"UPS";s:6:"prices";a:16:{i:0;s:0:"";i:1;N;i:2;N;i:3;s:0:"";i:4;s:0:"";i:5;s:0:"";i:6;s:0:"";i:7;N;i:8;s:0:"";i:9;N;i:10;s:0:"";i:11;s:0:"";i:12;s:0:"";i:13;N;i:14;N;i:15;N;}s:8:"supplies";a:15:{i:0;s:16:"Express Envelope";i:1;s:15:"Window Envelope";i:2;s:14:"Legal Envelope";i:3;s:43:"Direct Thermal Label 250 Per Roll - 4" x 8"";i:4;s:46:"Direct Thermal Label 320 Per Roll - 4" x 6.25"";i:5;s:43:"Direct Thermal Label 940 Per Roll - 4" x 6"";i:6;s:54:"Woldship Peel & Stick Label 2 Per Sheet - 8.5" x 5.5" ";i:7;s:39:"Woldship Peel & Stick Label 4 Per Sheet";i:8;s:26:"Express Pak - 16" x 12.75"";i:9;s:18:"Express Padded Pak";i:10;s:35:"Express Box Small - 13" x 11" x 2" ";i:11;s:35:"Express Box Medium - 16" x 11" x 3"";i:12;s:35:"Express Box Large - 18" x 13" x 3" ";i:13;s:11:"Label Pouch";i:14;s:21:"4" x 8" Labels (Roll)";}}i:2;a:3:{s:4:"name";s:3:"DHL";s:6:"prices";a:18:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;N;i:5;N;i:6;N;i:7;N;i:8;N;i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;i:17;N;}s:8:"supplies";a:18:{i:0;s:67:"Easyship Labels - For Thermal Printer (250 labels/roll,4 rolls/box)";i:1;s:71:"EasyShip Labels - For High Capacity Thermal Printer (1,000 labels/roll)";i:2;s:52:"WebShip, CorporateShip Labels - For LaserJet Printer";i:3;s:23:"Plastic Waybill Sleeves";i:4;s:16:"Express Envelope";i:5;s:45:"Express Envelope with plastic waybill sleeves";i:6;s:22:"Express Legal Envelope";i:7;s:51:"Express Legal Envelope with plastic waybill sleeves";i:8;s:18:"Small Padded Pouch";i:9;s:18:"Large Padded Pouch";i:10;s:34:"Standard Flyer (Small Express Pack";i:11;s:32:"Large Flyer (Large Express Pack)";i:12;s:11:"Box #2 Cube";i:13;s:12:"Box #2 Small";i:14;s:13:"Box #2 Medium";i:15;s:12:"Box #3 Large";i:16;s:21:"Box #3 Small Tri-Tube";i:17;s:21:"Box #4 Large Tri-Tube";}}}

# 12 January 2022
OG VALUE:
a:3:{i:0;a:3:{s:4:"name";s:5:"Fedex";s:6:"prices";a:17:{i:0;N;i:1;N;i:2;s:0:"";i:3;s:0:"";i:4;N;i:5;s:0:"";i:6;s:0:"";i:7;s:0:"";i:8;s:0:"";i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;}s:8:"supplies";a:18:{i:0;s:22:"Envelope without pouch";i:1;s:28:"Legal Size Reusable Envelope";i:2;s:32:"Small Pak - 10-1/4'' x 12-3/4'' ";i:3;s:27:"Large Pak - 12'' x 15-1/2''";i:4;s:10:"Padded Pak";i:5;s:41:"Small Box - 10-7/8'' x 1-1/2'' x 12-3/8''";i:6;s:42:"Medium Box - 11-1/2'' x 2-3/8'' x 13-1/4''";i:7;s:38:"Large Box - 12-3/8'' x 3'' x 17-1/2'' ";i:8;s:23:"Tube - 6'' x 6'' x 38''";i:9;s:14:"Domestic Pouch";i:10;s:33:"Express US Aribill (wrap version)";i:11;s:25:"Envelope w/built in pouch";i:12;s:49:"Extra Large Box (X1 Cube Shaped) - 50 LBS or Less";i:13;s:56:"Extra Large Box (X2 Rectangular Shaped) - 50 LBS or Less";i:14;s:46:"Direct Thermal Label 425 Per Roll - 4" x 6" (Non Doc Tab)";i:15;s:20:"Laser Label 8.5 x 11";i:16;s:21:"DocTab Thermal Labels 425 Per Roll – 4” x 6”";i:17;s:18:"4" x 8" Thermal Label Roll – 4” x 8”";}}i:1;a:3:{s:4:"name";s:3:"UPS";s:6:"prices";a:16:{i:0;s:0:"";i:1;N;i:2;N;i:3;s:0:"";i:4;s:0:"";i:5;s:0:"";i:6;s:0:"";i:7;N;i:8;s:0:"";i:9;N;i:10;s:0:"";i:11;s:0:"";i:12;s:0:"";i:13;N;i:14;N;i:15;N;}s:8:"supplies";a:15:{i:0;s:16:"Express Envelope";i:1;s:15:"Window Envelope";i:2;s:14:"Legal Envelope";i:3;s:43:"Direct Thermal Label 250 Per Roll - 4" x 8"";i:4;s:46:"Direct Thermal Label 320 Per Roll - 4" x 6.25" Non Doc Tab For Zebra ZP 450 Printer";i:5;s:43:"Direct Thermal Label 940 Per Roll - 4" x 6" (Note: this will NOT fit Zebra ZP 450 Style Printers)";i:6;s:54:"Woldship Peel & Stick Label 2 Per Sheet - 8.5" x 5.5" ";i:7;s:39:"Woldship Peel & Stick Label 4 Per Sheet";i:8;s:26:"Express Pak - 16" x 12.75"";i:9;s:18:"Express Padded Pak";i:10;s:35:"Express Box Small - 13" x 11" x 2" ";i:11;s:35:"Express Box Medium - 16" x 11" x 3"";i:12;s:35:"Express Box Large - 18" x 13" x 3" ";i:13;s:11:"Label Pouch";i:14;s:21:"4" x 8" Labels (Roll)";}}i:2;a:3:{s:4:"name";s:3:"DHL";s:6:"prices";a:18:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;N;i:5;N;i:6;N;i:7;N;i:8;N;i:9;N;i:10;N;i:11;N;i:12;N;i:13;N;i:14;N;i:15;N;i:16;N;i:17;N;}s:8:"supplies";a:18:{i:0;s:67:"Easyship Labels - For Thermal Printer (250 labels/roll,4 rolls/box)";i:1;s:71:"EasyShip Labels - For High Capacity Thermal Printer (1,000 labels/roll)";i:2;s:52:"WebShip, CorporateShip Labels - For LaserJet Printer";i:3;s:23:"Plastic Waybill Sleeves";i:4;s:16:"Express Envelope";i:5;s:45:"Express Envelope with plastic waybill sleeves";i:6;s:22:"Express Legal Envelope";i:7;s:51:"Express Legal Envelope with plastic waybill sleeves";i:8;s:18:"Small Padded Pouch";i:9;s:18:"Large Padded Pouch";i:10;s:34:"Standard Flyer (Small Express Pack";i:11;s:32:"Large Flyer (Large Express Pack)";i:12;s:11:"Box #2 Cube";i:13;s:12:"Box #2 Small";i:14;s:13:"Box #2 Medium";i:15;s:12:"Box #3 Large";i:16;s:21:"Box #3 Small Tri-Tube";i:17;s:21:"Box #4 Large Tri-Tube";}}}

# 13 January 2022

# 14 January 2022
RS-8450:
* rems rest api keys: found in the systemsetting table under the row 'rest api key'

# 15 January 2022
JAVASCRIPT STUDY:
* global execution context has two phases:
    1. Creation Phase
        i. code is read synchonously
        ii. each variable, function and object is set to undefinied in order to
            create the memory space for everything
        iii. when function invocations are found, they are put into the `execution
             stack` in order to run during the execution phase. The execution stack
             follows the LIFO principle (last in first out; like a stack of plates
             in real life.)
        iv. outer environment is assigned (the execution context that the current
            execution context is nested in unless this is the global execution
            context)
        v. instantiation of `this`
    2. Execution Phase
        i. the execution stack is triggered.
        ii. each time a function is ran, a new exection context is created
        iii. each time execution context is created, the Scope Chain is added to.
             Think of the scope chain as being how the JS engine looks within
             execution contexts for the values of variables when they are 
             refferenced. First the JS engine will look in the current exection
             context, and then the execution context that the previous one was
             nested in, then the previous one, then the previous one etc etc until
             the JS engine lands in the global execution context, (or the window
             object) and then the search ends. Either the variable's value was
             found or `undefined` was returned.
    3. According to MDN docs for JS, there are seven data types (primitives):
        i. string
        ii. number
        iii. bigint
        iv. symbol
        v. boolean
        vi. undefined
        vii. null

        * NOTE: the `typeof` function will return 'function' when used on a function.
        Functions do have primitive types. `function` a type. I have read that a
        function's type is an `object`, but I have not yet confirmed this. The devs
        supposedly chose to make the typeof function return `function` when ran on
        functions in order to allow future devs to check if something was invokeable
        or not...
    4. function statements get hoisted, function expressions do not
        i. function statement:
        ```
        function hello() {
            return 'hello';
        }
        ```
        ii. function expression:
        ```
        var hello = function() {
                return 'hello';
            }
        ```
    5. closures and the 'backpack'
        i. a closure is a function that references data within the function's
        outer layer

        ii. the way this works is that everytime a function is returned, there is
        a hidden value called `[]Scope[]`. This `[]Scope[]` variable is hidden in
        a way that is not accesible via a console.log(). Everything attached to
        this `[]Scope[]` value is called a couple different names. here are few
        of them:
            1. Persistant Lexical Scope Reference (PLSR)
            2. Closed Over Variable Environment
            3. the 'closure' (more cloquial)
            4. or just the `backpack` which is VERY cloquial and should not be used
               in professional environments

# 16 January 2022

# 17 January 2022
JS NOTES:
* Inheritance: one object gets access to the properties and methods of another object
* classical inheritance: like the definition of inheritance. very verbose.
* prototypal inheritance: simple, flexible, extensible, and easy to understand.

* property: a reference to another object
* prototype: all objects have a hidden property called `proto`

Alex's comments:
* add full support for tags, allow tags to be changed from the ship screen
* I don't need to use getStateFromStores, inital state or prop types. I should already have the data in the state
* take the tagdisplay component from batch page instead of quotePanel
* refactor orderList.jsx from line 48 to the end of the component on line 381. just copy and paste some stuff
* we are currently using two different states in here. both the store and the state within the componet itselft
* remove all things that use store mixins

* we are essentially going to be changning our approach on state management from
the old way (orderList.jsx) to the new way (the top of deletedOrders.jsx line 9 - 26)

# 18 January 2022

# 19 January 2022

# 20 January 2022
international oversize 213i. there is a ground varient and an express varient 213gi and 213ge if ground to canada then 213gi

312ide and 312idw

# 21 January 2022

# 22 January 2022

# 24 January 2022

# 25 January 2022
* DEBUGGER STOPS WORKING:
- if the debugger stops working, then just change the port on your launch.json file to a different port, save and then change back

how to call a php function from react in webship:
* server/ec/api/v3/index.php - add a route here


# 26 January 2022

# 27 January 2022

# 28 January 2022

# 31 January 2022

# 01 February 2022

# 02 February 2022

# 03 February 2022

# 04 February 2022

# 05 February 2022

# 06 February 2022

# 07 February 2022

# 08 February 2022
TIL:
* The best way to think of a provider account is essentially as store of information
that customers use to save their api information for interactions between them and
their associated carriers/subcarriers. The information saved will contain things
like API keys, passwords, account numbers, etc... A customer may be pointed towards
their own provider account (signified as 'sepecified' in the `provider_account_selection`
table), or a default proivder account (signified as 'default' in the `provider_account_selection`
table), or a provider account that allows for unique rates (signified as 'byo'
[bring your own] in the `provider_account_selection` table).

Alex Notes:
state should exist at the top (in the store) so that all components have the
ability to handle it.

we will want to release these parts separetly. think about ways I can break this
up and split the PR into multiple PR's so that we can avoid breaking anything in
a big way...

filters and rules share componeents all over the place so we can avoid duplicate code
we pass in the action handler so that we can know what is triggering the change handlers

look at how the batch tab is modeled

we want minimum neccessary input params

designing an interface - philosophy of software engineering

# 09 February 2022

# 10 February 2022

# 11 February 2022

# 12 February 2022

# 13 February 2022

# 14 February 2022

# 15 February 2022

# 16 February 2022

TIL:
Notes on Webship Integrations:
* DO NOT SHIP WHEN USING AN ITEGRATION EVEN ON DEV!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* Each service will either have a listOrdersPaginated function or a listOrders
function because not all services are on listOrdersPaginated.

How to hit the integration service: ie. ShipStationService.php:
1. put break points on the lines you want, specifcally the listOrdersPaginated
function. Each service will either have a listOrdersPaginated function or a listOrders
function because not all services are on listOrdersPaginated.
2. Now run this query:
```sql
select * from es_integration
LEFT JOIN ecommerce_order ON es_integration.id = ecommerce_order.integration_id
WHERE es_integration.type = 'shipstation' AND fulfillment_status = 'pending'
ORDER BY ecommerce_order.import_date DESC
LIMIT 20;
```
this query will return customers who have integrations with orders assoicated with
them. Go and sign in as one of these customers on webship.
3. on webship, click on settings, and then click on `eCommerce Integrations`.
4. scroll all the way down and click on the refresh button. This refresh button
will trigger your listOrdersPaginated function

# 17 February 2022
WHAT I DID TO FIX MY MONITORS ON UBUNTU:
1. uninstall all nvidia drivers and everything
2. uninstall display link drivers
3. make sure I have rebooted after step 1 and 2
4. download the newest display link driver and reboot if neccessary
5. after rebooting, connect the external monitors hardware to the laptop
6. if all monitors do not have something displaying on them, then restart these
steps until they do
7. now go to the bookmarked notes in brave browser under Study->Ubuntu/Linux->Display

# 18 February 2022
RS-8573 (dims quoted incorrectly) notes: 
* go to search airbills, put airbill in the filter and search it
* click on the checkbox show webship quote

* look at quotedWeightType function? but maybe not...

* go to customers baserates for fedex, know which service it is from webship,
look at the service and hit the view button. Then you should see a list of thier
rates. Find the zone, and go down to the pounds, and look at where this is being
quoted on the rate sheet

* we come in and find this airbill that has a difference between the quoted and actual charged airbill weight.
we impersonate the shipment, and confirm that the quoted weight is different. 

# 19 February 2022

# 20 February 2022

# 22 February 2022

1. make new branch, based off of RS-8475
2. do a git fetch
3. git rebase origin/master
4. git reset --soft origin/master
5. then I will have all of my changes in a diff state unstaged
6. make a copy of my orderList.jsx
7. take out from the primary one all of the tag stuff
8. Once it's just the refactor, then do a commit
9. then paste the copy of order List on top of the new order list, then commit
10. anything I have left over, make a new branch, then commit the stuff there and save it, making a PR
11. 1st PR only have the orderlist refactor the read only tag changes

# 23 February 2022
TIL:
* mgmt/b/ is for bootstrap pages
* mgmt/r/ is for marterial ui pages. we are fazing out our use of material ui,
so the eventual goal is to change these pages over to bootstrap

# 23 February 2022

# 24 February 2022

# 25 February 2022

TIL:
* just had a convo with Chris M about RS-8536 and it sounds like the data coming
in upstream is wrong it should always be a 0 and never a 50
* talked to Tom and he said that I can either fix the logo service for Blue Grace
or I can just manually fix the logo

# 26 February 2022

# 27 February 2022

# 28 February 2022
RS-8509, I think that the change I need to make is on Singular.php line 89 for single
payments, and then maybe on line 162 of CustomerPaymentService.php

in order to test the changes, you have to go to the very end of the chain, right
before the endpoint gets hit, which is SoapService.php and put a break point on
line 93. Then inspect the $parameters[1]['AccountHolder'] variable. It should be
the company name and NOT the persons name

note from this task and Chris M's help:
                    // CustomerPaymentService.php line 162 is probably the issue. This is also linked to CustomerSql.php lines 36 & 37
                    // I need to test on something that's not a credit card (test on ACH) which means
                    // I need to add ACH to TST00002 for testing purposes. I was getting sucked down the credit card
                    // rabit hole. Payment.php line 35, the instance there may actually direct eventually to over here
                    // instead of the CreditCard.php file

Systems/Client/Customer.php line 621 appears to handle each invoice one at a time by passing it through
to Payment.php on the process function. This means that the ACH purchases probably still go through to
the Singular.php file.

# 01 March 2022

# 02 March 2022

RS-8509:

**prices presented on Search Airbills:**
```
Ground @Home (FGH) - $9.75 ($8.26) [$8.05]
9.75 customer
8.26 franchise
8.05 carrier
```

BYO - bring your own rates. Used on Webship
selection - rates provided by the franchise. used on Rems

Essentially this issue cropped up because a customer added their own BYO account
before importing a shipment.

The way I found this was by going from LookupBase.php to eventually TierRate.php.
I realized that the subcarrierId was set to 0 which it shouldn't have been, so I 
hard coded a change to 339 (INDUSTRY 38 which is a rate sheet), and the franchise
cost was fixed instantly. After some more inspection, I was led to
FedexAccountService->getFedexAccountForCustomer roughly lines 26 - 46. Here we
see that the BYO account if present is chosen first and then if we don't have
a BYO account, then we fall back upon the selection account.

files examined:
searchAirbills.jsx
invokeService.js
ProviderAccountSql.php
Rater.php
WeightLookup.php
TierRate.php
fedexstandardedi.php
rems/app/classes/airbill.php

databases examined:
SQL:
```
use bfsrems;

# select * from costbasis limit 1;
# SELECT * FROM costbasis WHERE rateSheetId = '9906' and charge = 8.26 ORDER BY nottoexceedweight ASC;
# select * from customerCostBasis where customerId = '22500098' and costBasisType like '%fgh%' order by id desc limit 100;

# select * from airbill where number = "794613285920" limit 100;

# select * from costbasis limit 1;
# select * from customerCostBasis where costBasis like '%M18%' and customerId = '22500098';
# select * from costbasis where rateSheetId = "8937" and zone = '7' and nottoexceedweight = '12' and shiptype = 'FGH';
# select * from costbasis where rateSheetId = "8937" and charge = '8.05';
SELECT
                    carrierSheetId,
                    franchiseSheetId,
                    listSheetId
                FROM
                    tier_rate
                WHERE
                    tierId = 3
                    AND carrierId = 28
                    AND subcarrierId = 339
                    AND serviceTypeCode = "FGH"
                    AND effectiveDate <= "2022-01-26"
                ORDER BY
                    effectiveDate DESC
                LIMIT 100;

# UPDATE provider_account SET subCarrierId = 339 where id = "30153";
# select * from provider_account where id = "30153";
# select * from provider_account_selection where customerId = 22500098;
```


RS-8398:
Setting I'm  working with just adds more info in the right bottom most box of
the printed out invoice. It should be a 'D' and an 'L' with their own prices.
You can also see these numbers when the setting is enabled on the View/Edit Invoices
table on the right under webship

ask Chris M to see the modal. There should be a modal associated with this setting
that allows people to manage if this setting is enabled for franchises customers,
etc.

/b/settings

leveledsettingsservice

we will need to create a global script for all dbs that have something like this:
```
asdfDELETE FROM fransystemsetting WHERE name = 'discount invoices' and `value` = 0;
```

Javascript Notes:
* IIFE - immediatly invoked function expresions:
```
(function() {
        console.log('hi');
    })();
```

# 03 March 2022
RS-8398:
I need to make changes across the code base to this setting like how Chris M
showed me to on CustomerInvoice Service line 410:
* $discountInvoicesIsOff = !$this->leveledSettingService->getSettingValue("discount invoices", $customerId);

customerId = the 8 digit id for one specific customer
franchiseid = the 3 digit id for one specific franchise. a franchise encompasses
many customers

# 04 March 2022
|invoiceobj.php|: View/Edit Invoice|
|CustomerInvoiceService.php| line 411: View/Edit Invoice|
|invoiceledger.php| line 1384: CSV invoice (choose TST on date: 2022-2-11) invoice number: TST00002WB11|
|customer.php| line 3776 and line 4305: just go to edit customer|
|system.php| line 1753: go to edit customer, then Payments tab. Click on the paid invoices on the drop down and then click on one of their id numbers. This should take you to Invoice Viewer|
|cinvoice| line 1900: Just go to view/edit invoice and when you choose to look at a specific invoice, this should be hit|
|statement.php| line 426: email statement from the Payment Tab of Edit Customer|
|customerstatement.php| line 234: email statement from the Payment Tab of Edit Customer|
|airbill.php| line 503: import a fedex standard template edi into nexday|
|customerlist.php| - double check this, but I think that this function is deprecated. I wasn't able to find any way to hit this function |across rems or webship|

# 05 March 2022

# 06 March 2022

# 07 March 2022

RS-8596:
* Search For Cerasis Shipments:
- input: bol number, output: customer id
* Add Partial Payments hsetting to a specific customer:
- input: customer id, output: a success or a fail popup

# 08 March 2022

GOP Notes:
* will be added to a slack channel
* from what I over heard in the meeting before, sounds like we have 9 weeks, but
also maybe up to 6 or 9 months. Not clear...
* IFE (in flight entertainment) systems - we make a product that is not just
entertianmnet but also a travel sight type thang. Kind of like Delta's IFE + 
Kayak.com + Groupon

tec notes:
okta handles logins
node is our server for okta
part b is not going to need login stuff, but we do need to make sure we are talking to part a in order to authenticate
part a, pay for campaign through Zoho. Zoho will let us know they paid, and then
they can go to part b
campaigns will be from draft to publish. draft, in work, publish something like that
* JSON templates
* for an mvp, we will need a session state management. Loaded up the window, what
changes have they made since loading up the window. allow them to revert to those changes
no further than that.

we will store our content in Drupal. Won't put stuff in there until we are ready.

Taking all the data that they were working on, put it in Drupal, then we aprove it.

we have content cutoffs. We may have a cutoff of 14 days before...

get up a next bare bones stuff. we just need some of the top level stuff like routing

global state management. connect next app to server

routes that need to go through

1. global state management
2. bootstrap
3. 

# 09 March 2022

# 10 March 2022

# 10 March 2022

# 11 March 2022

* the invoice is located in the templates folder. Look at the customer id and find
the invoice template being used. I can coppy that one make the changes and name
the invoice as what I need it to be named. I can then go into the settings and
specifically define that the customer should use said invoice template

* server/rems/app/templates

# 11 March 2022

# 12 March 2022

# 13 March 2022

# 14 March 2022

# 15 March 2022
qs:
1. what does the 1053 hsetting do?
2. 


# 15 March 2022

# 16 March 2022

# 17 March 2022

# 18 March 2022

# 19 March 2022

# 20 March 2022
SystemLegacy get and update hsettings
get:
Will only get the setting if I give every last ounce of info, returns only the value column

update:
only updates the value column, not other columns

neither one works for what I want

# 20 March 2022

# 21 March 2022

# 22 March 2022

# 23 March 2022

# 24 March 2022

# 25 March 2022
* add global id to drop down DONE
* when the users adds a setting to the system that was not active previously, add the setitng to the main hsetting drop down
* remove the id column DONE
* just show value field on edit, display existing value DONE
* qualify user input, just check for numbers, else add string DONE
* maybe a bug: if you click on delete H Setting, you get a "Can't display table" when you delete the last one in a table DONE
* add Add H Setting button on page load instead of on search DONE
* error when no h setting is selected, instead make it so that there is an error that says, "HSetting not selected" DONE

# 26 March 2022

GOP:
1. add event stream
2. add ways to interact with the event stream
3. remove all styling not related to vanila css/sass

# 27 March 2022

# 28 March 2022
RS-8624, displayPerWeightUnitSettings.jsx
* Multiplier method- ON OR OFF ONLY (1 or 0)
* ^ AND Set to lb/kb column also works this way
* get rid of the id column
* dont edit the carrier, service type or subcarrier
* make a service type drop down, it may already be made. Make it so that only the service types for said carrier are shown
SELECT id, (SELECT name FROM carriers WHERE epwul.carrier = name) carrier, effectiveDate, enabled, `limit`, perHalfWeightUnit, perWeightUnitOnly, (SELECT description FROM shipmenttypes WHERE code = epwul.serviceType LIMIT 1) as serviceType, subCarrier FROM ecommerce_per_weight_unit_limit epwul

# 29 March 2022
make value box larger on edit page

"<?xml version="1.0" encoding="UTF-8"?>
```xml
<p:DCTRequest xmlns:p="http://www.dhl.com" xmlns:p1="http://www.dhl.com/datatypes" xmlns:p2="http://www.dhl.com/DCTRequestdatatypes" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.dhl.com DCT-req.xsd ">
    <GetQuote>
        <Request>
            <ServiceHeader>
                <MessageTime>2022-03-29T15:15:48.000-07:00</MessageTime>
                <SiteID>RockSolid</SiteID>
                <Password>SD0plNNbhg</Password>
            </ServiceHeader>
        </Request>
        <From>
            <CountryCode>US</CountryCode>
            <Postalcode>84003</Postalcode>
            <City>AMERICAN FORK</City>
        </From>
        <BkgDetails>
            <PaymentCountryCode>US</PaymentCountryCode>
            <Date>2022-03-29</Date>
            <ReadyTime>PT12H00M</ReadyTime>
            <DimensionUnit>IN</DimensionUnit>
            <WeightUnit>LB</WeightUnit>
            <NumberOfPieces>1</NumberOfPieces>
            <Pieces><Piece>
            <PieceID>1</PieceID>
            <PackageTypeCode>BOX</PackageTypeCode>
            <Height>4</Height>
            <Depth>4</Depth>
            <Width>4</Width>
            <Weight>6599</Weight>
            </Piece></Pieces>
            <IsDutiable>Y</IsDutiable>
            <NetworkTypeCode>AL</NetworkTypeCode>
        </BkgDetails>
        <To>
            <CountryCode>FR</CountryCode>
            <"
```

# 30 March 2022

# 31 March 2022

# 01 April 2022

# 02 April 2022
GOP Notes - Component List:
Dashboard:
1. card
2. site staging viewer (nav on left)
3. nav bar on top right - apart of layout component as well
4. logo on top left - apart of layout component as well
5. search bar/filter bar
6. (at the bottom of mock ups) pager (Page 1 of 4)

Edit Page:
1. heading
2. hero + hero's more info section
3. contact info
4. location
5. photo gallery
6. reviews
7. horizonal rule (<hr>) and edit button
8. edit modal

Preview Page:
*keep everything the same as the edit page,
except remove/change components that need it.
This will include changing the save and publish
buttons to say "Keep Editing" and "Publish"*

Site Generator:
1. "Choose your Business"
2. "What kind of a restaurant?"
3. "What is the name of your [ insert name here ] [ insert type of place here ]"
4. Import vidoes/images page
5. "Which theme best reps your services"
6. "While we make the site, add and review your info"
7. "Final touches"

Photo gallery:
1. photo gallery

# 02 April 2022

# 03 April 2022

# 04 April 2022

# 05 April 2022

# 06 April 2022
good comment on reddit I liked:
```
C and C++ are the 2 that come to mind as knowing a systems programming language
helps. Learning from first principles helps as well.

Read Code: The Hidden Language of Computer Hardware and Software

Watch all 41 videos of A Crash Course in Computer Science

Take the CS50: Introduction to Computer Science course.

Take the [Build a Modern Computer from First Principles: From Nand to Tetris (Project-Centered Course)](https://www.coursera.org/learn/build-a-computer
```

# 07 April 2022

what I need to bike to work:
1. bike
to wear:
2. helmet
3. headlight & bike lights blinking
4. phone mount/charging??
5. high viz vest
to maintain:
6. chain lube
transport
7. bike bag
8. bike bag mount

2. 40
3. 70
4. 30
5. 40
6. 15

# 07 April 2022

# 08 April 2022

# 09 April 2022

# 10 April 2022

# 11 April 2022
GOP Notes: 4/11/2022; what I need to get done this week:
1. tutorial
2. search
3. help page


# 12 April 2022

# 13 April 2022

# 14 April 2022

# 15 April 2022

# 16 April 2022

# 17 April 2022

# 18 April 2022

# 19 April 2022
how to change a commit message: `git commit --amend -m "[commit message]"`

# 20 April 2022

# 21 April 2022

# 22 April 2022

# 23 April 2022

# 24 April 2022

# 25 April 2022

# 26 April 2022

# 27 April 2022

# 28 April 2022
Rust:
* variables can either be placed on the stack or the heap. String literals `String::from()`
will be put on the heap. Integers will be put on the stack. If I want to make a
copy of a heap variable, I must use the 'clone()' function. If I want to make a
copy of a stack variable, I do NOT need to use the 'clone()' function.
* also, we don't really have shallow and deep copies of data in rust. it's more
so everything is a shallow copy. Because of this, we call shallow copies 'moves'.
* cannot have more than one mutible ref at a time

# 29 April 2022

# 30 April 2022

# 01 May 2022

# 02 May 2022
change invoice templates in the fransystem setting database

# 03 May 2022
How to add custom invoice template:
```sql
INSERT INTO fransystemsetting (customerid, name, `value`, backend_type, description, editadminlevel, allowOverride)
VALUES (502, "custom invoice template", "invoice-nexday-502.tpl", 'text', 'Custom Customer Invoice Template Name', 1, 0);
```

# 04 May 2022
RS-8525:
I am editing these files (probably):
* ShipmentStore.js (we need to add the checkbox to the request object so we
can keep track if it's been checked, roughly line 87 (could also be another place))
* internationalDHL.php (roughly line 1092, we are checking for the insurance amount.
We should add in a conditional block before this one checking if we have the insurance
checkbox checked)
* ? bookShipmentV2Endpoint.php line 107
* Request_DHL.php (we need to add in the checks for the insurance here, maybe even
disable the junk for the original insurance amount)
* Request.php (maybe look into here)

notes:
follow path of where the request object goes through PHP when someone types in
an insurance value, we need to also capture if the new checkbox is checked
when I do edit and reship, the checkbox should load in as either checked or
unchecked if they want insurance use 'IB' as the accessorial charge in the
extracharges table. hopefully IB is okay bc if we send them one thing, they 
should send us something similar if not the same on the response
in the DHL request we are going to want a new field that caputrues if the checkbox has been checked
the total object will be passed to internationalDHL.php as webshiprequest
bookshipment and quoting
new accessorial type??? add to everyone in the system? Need to look up the surcharge's record
make a condition that checks for the checked box. then send response
$xml->createElementWithValue($specialServices,"SpecialServiceType", "IB");

# 05 May 2022

# 06 May 2022

# 06 May 2022

# 07 May 2022

# 08 May 2022

# 09 May 2022

# 10 May 2022
RS-8525: the issue I was having with the insurance amount can be traced back to
Surcharge.php line 169. We are dividing an empty string by 100

GOP:
Stuff we still need to do:
Edit page:
1. sub heading nav bar
2. promos section (we need to add promos to the JSON if not there already)
3. Hours and into section (final touches)
4. description section
5. gallery section (carosel)
6. map/directions section
7. reviews section
8. edit buttons
9. save & exit button
10. rewind and forward buttons

Dashboard:
1. make sure that when we get many microsites loaded in, the cards flow correctly
2. hook up the nav bar buttons so they work
3. final touches on the site view

# 11 May 2022

# 12 May 2022

# 13 May 2022

# 14 May 2022

# 15 May 2022

# 16 May 2022

# 17 May 2022
Notes from Alex on what makes a good PR:
1. description that helps to understand context. should know exactly what is
going on just with the description
2. testing instructions. I had decent notes. I described the replication notes.
I also used the should word which is good. Basically right test cases (kinda
like in jest) but make them sound like english. Verify that x happens when a,
b, c is present.  but the other way around. 'click on the ship tab and verify
that the tags present'. ALSO, go further. Look through the code and understand
how the code paths have changed. Have at least one instruction for every if
statement. The testing notes should include all the jist and stuff.

# 18 May 2022

# 19 May 2022
docker-compose -f docker-compose-mock.yml down

docker system prune

docker volume prune

docker-compose -f docker-compose-mock.yml up -d

docker-compose -f docker-compose-mock.yml logs -f

In order to run the zoho server locally and not in a docker container, I need to
up the docker container for pg_db and then 

# 21 May 2022

# 22 May 2022

# 23 May 2022

# 24 May 2022

How to make good testing instructions
1. description that helps to understand context. should know exactly what is
going on just with the description
2. testing instructions. I had decent notes. I described the replication notes.
I also used the should word which is good. Basically right test cases (kinda
like in jest) but make them sound like english. Verify that x happens when
a, b c is present.  but the other way around. 'click on the ship tab and verify
that the tags present'. ALSO, go further. Look through the code and understand
how the code paths have changed. Have at least one instruction for every if
statement. The testing notes should include all the jist and stuff.

# 24 May 2022

# 25 May 2022

# 26 May 2022

# 27 May 2022

2 endpoints: 1 to get the label, one to get the printing

# 28 May 2022

# 29 May 2022

# 30 May 2022

# 31 May 2022

# 01 June 2022

# 02 June 2022

# 03 June 2022

# 04 June 2022

# 05 June 2022
1. High Availability Systems

Rust:
If I want to nest for loops, perhaps the best option would be to use `for ... in`.
I tried just using while loops and loops, but they have the issue of finishing out
the entire loop individually instead of having that nested behavior I'm looking for.

now I gotta figure out how to do this problem faster without using nested loops...

# 06 June 2022

... and I figured it out! I needed to use a HashMap (Rust), which is also refered
to as an object in other languages like JavaScript.

notes:
* tail 
* key process indicators
* metrics are ways we use to 
* apache pulsar
* jenkins
* need some set of tools that automatically deploy and take care of cloud infrastructure
* behavior driven testing (like Java's Spock)
* load testing tools, you need to make sure that your services are scaleable

# 06 June 2022

# 07 June 2022
today I need to get done some stuff in regards to finishing this jazz up.
I need to work on RS-8525 and some other stuff like that.

I'm really hoping that I don't need to do this other jazz or anything yaya

# 07 June 2022

# 08 June 2022
1. Matt Walsh seems to have antogonistic intensions. The air of bad intensions
leaves the target of the question "What is a woman?" with a confrontational/suggestive
feeling
2. Mat Walsh said he writes books
3. 

# 09 June 2022

# 10 June 2022
If anyone wants to get a hold of Karthik Rajendran (Descartes IT guy helping
everyone get set up), you can call this number: (877) 786-9339. The AI will ask
you to say who you are trying to contact. Don't bother trying to say his name.
Instead, feed in this extension: 208305. You will then be routed directly to
Karthik's phone.

# 11 June 2022

# 12 June 2022

# 13 June 2022

# 14 June 2022

# 15 June 2022
```
Lowering legal barriers to make it easier for minors to undergo cross-sex medical
interventions without parental consent does not reduce suicide rates—
```
needs proof
```
in fact, it likely leads to higher rates of suicide among young people in states
that adopt these changes.
```
needs proof
```
States should instead adopt parental bills of rights that affirm the fact that
parents have primary responsibility for their children’s education and health,
```
on face value, this sounds like a good idea, but there are possible issues that
will propegate up if given the change, such as an increase in sex-abuse, and an
increase in homophobia/transphobia. This also may increase the neglect that kids
face if more responsability is put upon parents to educate their children. All
of this is heresay though, because no actual 'bill of rights' is proposed. This
is just an idea at this point. An actual draft would need to be provided in order
for it to be considered. I'm not inheritly against a bill of rights for parents,
but the language used does give me pause.
```
and that require school officials and health professionals to receive permission
from parents before administering health services,
```
I see this argument a lot. Several issues appear when something like this is
implemented though, including a refusal from parents for life saving medical
services. Jehovah's Witnesses refuse blood transfusions. However, despite religous
beliefes i belive it is imperitive to save the lives of those kids. This idea is
shown througout HIPA.
```
including medication and “gender-affirming” counseling, to children under 18.
```
What is the definition of 'medication' here? Too broad. "gender-affirming"
counseling has been something proposed by the Right as something that should be
required by law before recieving gender-affirming medical care. I really hope
that at the very least, this article stays philosophically consistent with being
anti-gender-affirming counseling. In any case though, I may be wrong about this,
but I don't believe that parents currently have the right to know what is talked
about between child and counselor unless the child gives permission. I know that
this article is for chainging that, however this separation between child and
parents is for a reason. I believe that parents should NOT be privy to private
conversations between child and counselor because there are things that said
children should have a right to privacy about. If a child's secrets are forced
to be shared with parents, a window of abusive opens up within the home, creating
a deeply unsafe situation between parents and children.

```
States should also tighten the criteria for receiving cross-sex treatments,
including raising the minimum eligibility age.
```
so are we pro-states rights, or are we not? again, it seems that the Right will
take positions that favor the Right's beliefs when it comes to states' rights,
but will call daddy Fed when a state is violating what the Right believes in.
I really hope this author stays consitent in what he believes in...

also, if the point of this article is to save children's lives, then there must
be imperical proof that children who experience trans feelings and go through with
gender-affiriming medical treatments experience suicidal-ideation due to the treatments
themselves, and not the abusive expereinced by family members.

```
KEY TAKEAWAYS
1. U.S. policymakers are seeking to make it easier for minors to access puberty
blockers and cross-sex hormones based on the claim that doing so reduces
suicide risk.
2. Studies finding that “gender-affirming” interventions prevent suicide fail
to show a causal relationship and have been poorly executed.
```
The lack of evidence for a claim is not evidence against said claim. I am however
excited to see their arguments against the current data we have on this subject.
```
3. A superior research design shows that easing access to puberty blockers and
cross-sex hormones by minors without parental consent increases suicide rates.
```
1. they will need to prove that the new research design is more credible
('superior') than the previous one.
2. they will need to prove that NOT access to puberty blockers and cross-sex
hormones by minors without parental consent increases suicide rates, but
increasing access causes suicide rates. I'm sure you can see the problem with
the phrasing of this claim

```
Adolescents who are confused about their gender suffer from an abnormally high
suicide rate (Michelle M. Johns et al., “Transgender Identity and Experiences
of Violence Victimization, Substance Use, Suicide Risk, and Sexual Risk
Behaviors Among High School Students—19 States and Large Urban School Districts,
2017,” Morbidity and Mortality Weekly Report, Vol. 68, No. 3 (January 25, 2019),
pp. 67–71, https://doi.org/10.15585/mmwr.mm6803a3 (accessed May 25, 2022).)
```
Okay, so right here, this guy obviously did not read this study. It's from the
CDC. Right from the get-go, confounding variables such as 'affects of violence
victimization', 'substance' use and 'STDs' need to be accounted for. All of these
variables are hardcore contributers to suicide among anyone who expereinces them.
The study itself does not say that trans kids expereince suicide-ideation ONLY
due to being gender-non-conforming, but because of anterior factors as well.
So using this study in this way, is HUGELY dishonest. Becuase the author is trying
to convey not what the study is trying to convey, but instead what the author
is trying to convey, that 'because trans kids expereince suicide, we should
prevent trans kids from exisiting'.

```
Though research demonstrates that gender confusion generally resolves itself
without medical intervention,2 James M. Cantor, “Transgender and Gender Diverse
Children and Adolescents: Fact-Checking of AAP Policy,” Journal of Sex & Marital
Therapy, Vol. 46, No. 4, 2020), pp. 307–313,
https://www.tandfonline.com/doi/abs/10.1080/0092623X.2019.1698481
(accessed May 25, 2022). Also see Diagnostic and Statistical Manual of Mental
Disorders, Fifth Edition (Arlington, VA: American Psychiatric Association, 2013),
pp. 451–459, and Ryan T. Anderson, When Harry Became Sally: Responding to the
Transgender Moment (New York, NY: Encounter Books, 2018), pp. 93–144.
```
1. the author did not define 'gender confusion', which is highly important in the
context of these studies. BECAUSE gender confusion in this study is defined to
encompas a series of attributes displayed by young kids, including boys playing
with dolls, and girls climbing trees. This is OBVIOUSLY NOT a sign of someone being
trans. Not saying that this article is defining 'gender confusion' like this,
because the article sited sits behind a pay wall, but I am defining 'gender
confusion' like this because that is how I have seen it defined in the past.
2. the author is mis-using another article, NOT a study. You can see it here:
https://www.tandfonline.com/doi/full/10.1080/0092623X.2019.1698481?scroll=top&needAccess=true
Except you CANT! because it's behind a pay-wall. Very tricky in deed. If I can't
read the article, how am I supposed to verify it?
3. The author is treating this like a study, when it is just an article, another
mark of dishonesty.

```
some educators and medical professionals encourage teens, and even pre-teens,
to take puberty blockers or cross-sex hormones so that their secondary sex
characteristics, such as body and facial hair, breast tissue, muscular build,
and fat composition, align more closely with the gender with which they identify.
(3 Society for Evidence Based Gender Medicine, “Our Aim Is to Promote Safe,
Compassionate, Ethical and Evidence-Informed Healthcare for Children,
Adolescents, and Young Adults with Gender Dysphoria,”
https://segm.org/home (accessed May 25, 2022), and Julia E. Richards and R.
Scott Hawley, The Human Genome: A User’s Guide, Third Edition (Cambridge, MA:
Academic Press, 2010), Chapter 8.)
```
1. the author makes a huge claim here that 'some' educators and medical professionals
ENCOURAGE teens to take medical procedures that alter their physical characteristsics.
this has to be proven or it's heresay
2. I could not find the referenced study, but I did look at the referenced website.
here on their studies section: https://segm.org/studies, you can see many
cautionary studies that push individuals considering treatment to have 'informed
consent' and to know exactly what the dangers are. The use of the word 'ENCOURAGE'
feels very misleading because there is an inherit spin taken upon this community.
As if this org is trying to 'get' the youth. Very emotionaly charged diction.

```
While the World Professional Association for Transgender Health (WPATH)
acknowledges that these interventions can have significant complications, it
warns that delaying intervention also has serious risks:

Refusing timely medical interventions for adolescents might prolong gender
dysphoria and contribute to an appearance that could provoke abuse and
stigmatization. As the level of gender-related abuse is strongly associated
with the degree of psychiatric distress during adolescence (Nuttbrock et al., 2010),
withholding puberty suppression and subsequent feminizing or masculinizing
hormone therapy is not a neutral option for adolescents. (Eli Coleman et al.,
“Standards of Care for the Health of Transsexual, Transgender, and Gender
Nonconforming People,” International Journal of Transgenderism, Vol. 13, No. 4
(2012), p. 21, https://www.tandfonline.com/doi/abs/10.1080/15532739.2011.700873
(accessed May 25, 2022).)
```
yes.

```
Other advocates, members of the media, and even White House staff invoke
scientific authority to assert that cross-sex medical interventions reduce the
risk of suicide. Sarah Harte, director for the Washington, DC, branch of an
organization that provides medical intervention and support for youth called
The Dorm, stated with confidence that “[l]aws and systems barring gender-affirming
healthcare will contribute to higher rates of significant mental health problems,
including deaths by suicide.”(5 “The ‘Life-Saving’ Science Behind Gender-Affirming
Care for Youth,” Medical News Today, March 29, 2022,
https://www.medicalnewstoday.com​/articles/the-life-saving-science-behind-gender-affirming-care-for-youth (accessed May 25, 2022).)

The CEO of The Trevor Project, Amit Paley, said, “It’s clear that
gender-affirming care has the potential to reduce rates of depression and
suicide attempts.”(6 Jo Yurcaba, “Hormone Therapy Linked to Lower Suicide Risk
for Trans Youths, Study Finds,” NBC News, December 14, 2021,
https://www.nbcnews.com​/nbc-out/out-health-and-wellness/hormone-therapy-linked-lower-suicide-risk-trans-youths-study-finds-rcna8617
(accessed May 25, 2022).)

In an opinion piece in The Washington Post, University of Virginia Law School
professors Anne Coughlin and Naomi Cahn claimed that cross-sex medication
“has been shown to reduce the risk of depression and suicide for transgender
youth,” and that “banning it creates an excruciating conflict for parents, as
the steps they take to preserve their children’s lives may lead the state to
investigate and punish them.”(7“Texas Is Trampling Parents’ Rights in Its Investigations of Trans Kids,” The Washington Post, April 8, 2022, https://www.washingtonpost.com/outlook​/2022/04/08/texas-transgender-family-law/ (accessed May 25, 2022).)

Even former White House press secretary Jen Psaki referred to such medical
interventions as “medically necessary, lifesaving healthcare for [kids].”8
```

1. the phrase 'invoke scientific authority' invokes a feeling of distrust in
science in general and an attack on scientific authority. This iteself is a
dishonest attack on their positoins. instead of attacking their positions from
a place of logos, the author is using pathos to make a feelings argument, trying
to scare the reader into feeling like the 'scientific authority' is one to be
distrusted just because so far the scientific studies cited in these situations
do not support the author's positions. Another dishonest spin on the subject at
hand.
2. okay so right here we are identifying articles and studies that are in favor
of the opposite argument, that gender-affirming medical intervention DECREASES
harm in trans youth. I expect the author to directly confront the studies/articles
data collection methods in an effort to prove that other studies antagonistic
to the trans movment are more trust worthy than these.
3. I totally understand that Jen Psaki disagrees with the author, however, what
does Jen have anything to do with the medical research? I feel like this is 
narative building which is trying to evoke a feeling of distrust from anyone
and everyone in a position of authority in an effort to attack the Left, instead
of the Left's positions.

```
The danger of adolescents committing suicide if they do not receive these
medical interventions is thought to be so urgent that the Biden Administration
recently issued a statement “confirming the positive impact of gender affirming
care on youth mental health,” while referencing “the evidence behind the positive
effects of gender affirming care.”(9 The White House, “Fact Sheet:
Biden–Harris Administration Advances Equality and Visibility for Transgender
Americans,” March 31, 2022,
https://​www.whitehouse.gov/briefing-room/statements-releases/2022/03/31/fact-sheet-biden-harris-administration-advances-equality-and-visibility-for​-transgender-americans/ (accessed May 25, 2022).)
```
the use of the phrase by the author 'so urgent' and the context surrounding
it evokes a feeling of apathy from the reader. This is a silly rehtorial device
used to bias the reader before what is about to be said, is said. This is
poissoning the well.

```
A number of states have also considered or enacted legislation making it easier
for minors to access cross-sex interventions without their parents’ knowledge
or consent. For example, California recently enacted a new law, AB 1184, to
prevent insurance companies from notifying parents if children on their policies
receive “sensitive services,” which were defined to include “gender affirming care.”
(10 California Legislative Information, Assembly Bill No. 1184 “Medical Information: Confidentiality,” https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml​?bill_id=202120220AB1184 (accessed May 25, 2022); Brandon Richards, “Planned Parenthood Affiliates of California Statement on Passage of AB 1184,” Planned Parenthood Affiliates of California, September 9, 2021, https://www.plannedparenthoodaction.org/planned-parenthood-affiliates-california​/media/planned-parenthood-affiliates-california-statement-passage-ab-11 (accessed May 25, 2022); and Nancy Flory, “California Gov. Newsom Signs Bill into Law that Allows Children to Hide Abortions, Transgender Treatments, from Parents,” The Stream, September 28, 2021, https://stream.org/california​-gov-newsom-signs-bill-into-law-that-allows-children-to-hide-abortions-transgender-treatments-from-parents/ (accessed May 25, 2022).)
```
The context sourounding this statement evokes a feeling that the author is trying
to say that the inverse should be what actually happens. That parents are notified
on every item that their kids recieve while on their insurance. Well, what about
kids who are still on their parents insurace until they turn 26??? Is a 26, or a
25 year old bound to share all priavte information with their parents? This point
from the author is an attempt to make the reader believe that even the younger
children (sub 15 even), are traveling all the way down to the doctor's office,
and asking to get their nuts chopped off. In what world is this happening? This
is another dishonest use of rhetoric.

```
However, young people may also experience significant and irreversible harms
from such medical interventions.
(11 Michael Biggs, “Revisiting the Effect of GnRH Analogue Treatment on Bone Mineral Density in Young Adolescents with Gender Dysphoria,” Journal of Pediatric Endocrinology and Metabolism, Vol. 34, No. 7 (July 1, 2021), pp. 937–939, https://doi.org/10.1515/jpem-2021-0180 (accessed May 25, 2022); Noreen Islam et al., “Is There a Link Between Hormone Use and Diabetes Incidence in Transgender People? Data From the STRONG Cohort,” The Journal of Clinical Endocrinology & Metabolism, Vol. 107, No. 4 (April 1, 2022), pp. e1549–e1557, https://doi.org/10.1210/clinem/dgab832 (accessed May 25, 2022); Shira Baram et al., “Fertility Preservation for Transgender Adolescents and Young Adults: A Systematic Review,” Human Reproduction Update, Vol. 25, No. 6 (November 5, 2019), pp. 694–716, https://doi.org/10.1093/humupd/dmz026 (accessed May 25, 2022); Elie Vandenbussche, “Detransition-Related Needs and Support: A Cross-Sectional Online Survey,” Journal of Homosexuality, April 30, 2021, pp. 1–19, https://doi.org/10.1080​/00918369.2021.1919479 (accessed May 25, 2022); Alison Clayton, “The Gender Affirmative Treatment Model for Youth with Gender Dysphoria: A Medical Advance or Dangerous Medicine?” Archives of Sexual Behavior, Vol. 51, No. 2 (February 1, 2022), pp. 691–698, https://doi.org/10.1007/s10508​-021-02232-0 (accessed May 25, 2022); and Society for Evidence Based Gender Medicine, “Studies,” https://segm.org/studies (accessed May 25, 2022).)
```
1. two statements need to be corroberated by this study: 1. there is 'significant
harm', and 2. there is 'irreversible harm' from gender-affirming procedures
mentioned here, and ONLY the referenced procederues mentioned here. However, the
way that the author says, 'such medical interventions' leads the audience to
believe that the author is saying ALL gender-affirming procedures have irreversible
and significant harms. Another lazy and dishonest rhetorical strategy.
2. after reading this study, one line jumped out at me: "patients ‘understand
the risks of GnRH analogue treatment for bone density (i.e., risks of later
osteoporosis)’" if one understands the risks involved in a situation, why should
the government prevent a decision that would only affect the individual? This
seems sily. It's also AGAIN an anti-Right position to take. The author is implying
that the government should have presendece over what individuals medically do with
themselves. This is authoritarian. I hope that this author staying consistent
in his beliefs.
3. ALSO, after reading this 'study' (which is actually just another article),
it's clear that the claims of irreversible and significant harm is NOT corroberated.
in fact, nothing of the sort is even mentioned. The author of referenced article
himself states that, "Joseph et al.’s recommendations are... to reduce DXA
monitoring which ‘can have significant financial implications for healthcare providers’.
Another is to change the computation of Z-scores; ‘reference ranges may need to
be re-defined for this select patient cohort’. Rather than altering a measure
that provides inconvenient findings, practitioners of puberty suppression must
record fractures as adverse events. One British patient who started GnRHa at age
12 then experienced four broken bones by the age of 16 [10]. This history, if
it were combined with BMD Z-scores below −2, would meet the diagnostic criteria
for paediatric osteoporosis [11]. Whether this case is exceptional is unknown
because clinicians have failed to collect relevant data." Meaning, that the
referenced article is FAR from a complete repudiation of gender-affirming
procedures, this so far is probalbly the most BLATENT lie in the article.


```
This Backgrounder reviews existing research on the relationship between
cross-sex interventions and suicide, and then presents a new empirical
analysis that examines whether easing access by adolescents to these
interventions is likely to result in fewer adolescent suicides.
```
1. empirical is defined as such: "Verifiable or provable by means of
observation or experiment." Because the claim of this article is as such, if
the author does not demonstrate this, then this is a dishonest article and
irresponsibly written and published. And by the way, in order to have an
"empirical analysis" of this topic, research has to be done via a double blind
study on a population large enough to make a statistical difference. This
supposed study also would require participants to assume a level of risk of
suicide, which would immediately disqualify the study due to ethical risks.
So, I'm assuming that said study does not actually exists, but I guess we will
find out...
```
The new analysis presented here finds that the existing literature on this
topic suffers from a series of weaknesses that prevent researchers from being
able to draw credible causal conclusions about a relationship between medical
interventions and suicide.
```
1. great. so if this is the case, then there should be no need to use language
tainted with bias in this article, if all that is being said, is "we need more
research". However, I get the sense that this article is not being used to say
only that, but to instead push against trans rights.

```
Using a superior research design, the new analysis finds that increasing
minors’ access to cross-sex interventions is associated with a significant
increase in the adolescent suicide rate.
```
claims made: 1. the new research design has outputed an analysis that shows a
direct relationship to minors' access to 'cross-sex interventions', and an increase
in adolescent suicide rate.

```
Rather than facilitating access by
minors to these medical interventions without parental consent, states should
be pursuing policies that strengthen parental involvement in these important
decisions with life-long implications for their children.
```
this proposal is going to require evidence as well that increasing parental
involement decreases suicide rates in order for this prescriptive statement to
act as a solution to the previous descriptive statement.

```
The Context
Around 1990, some doctors in the Netherlands began to use drugs designed to
delay the onset of puberty in teenagers who were confused about their gender.
(12 Ibid.)
```
1. again, the author is using biased, emotionally charged language when the term
'confused' is used. If this article is supposed to be taken seriously, then
academic langauge should be used. By setting the context as such before showing
off the supposed evidence is poisoning the well (which is a logical fallacy)

```
Puberty-blocking therapies, such as gonadotropin-releasing hormone analogues,
were meant to prevent children entering puberty from developing the secondary
sex characteristics, such as facial hair for men or breasts for women, if those
features did not align with the gender with which they identified. Puberty
blockers would be followed by the use of sex hormones, such as testosterone,
for girls who identify as male, and estrogen for boys who identify as female,
so that they could develop secondary sex characteristics that were associated
with the sex that they identified with.
(13 Klotz, “The Fractious Evolution of Pediatric Transgender Medicine.”)
```



```
This treatment protocol of puberty blockers followed by cross-sex hormones among
adolescents did not exist in the United States prior to 2007 and was extremely
rare before 2010. Cross-sex hormones were available as a medical intervention
for adolescents before 2010, but their use was extremely limited. Starting in
2010, however, the use of both puberty blockers and cross-sex hormones for
adolescents who identified as transgender rose dramatically and was widely
available by 2015.

Precise data are not available on how often puberty blockers and cross-sex
hormones have been given to teenagers over time in the United States, but it is
possible to track a proxy for these interventions. Google Trends provides data
on the relative frequency that terms have been used for searches since 2004.
A score of 100 in Google Trends indicates the peak frequency for the term.
Before August 2007, Google Trends reports a 0 for the term “puberty blockers,”
meaning that it was searched so infrequently in the U.S. that “there was not
enough data for this term.” The term “puberty blockers” did not average 5, or
one-twentieth of its peak popularity, in any year before 2015.14
Google Trends, “Puberty Blockers,” https://trends.google.com/trends/explore?date=2004-01-01%202020-12-31&geo=US&q=puberty%20blockers (accessed April 20, 2022).
Note: Numbers represent search interest relative to the highest point on the
chart for the given region and time. A value of 100 is the peak popularity for
a term. A value of 50 means that the term is half as popular. A score of 0 means
there was not enough data for this term.

The average of the Google Trends scores for the terms, “puberty blockers,”
“transgender,” “gender identity disorder,” and “gender dysphoria,” yields a
reasonable proxy for how common cross-sex interventions have been over time.
(15 Ibid.; Google Trends, “Transgender,” Google Trends, https://trends.google.com/trends/explore?date=2004-01-01%202020-12-31&geo=US&q=puberty​%20blockers (accessed April 20, 2022); Google Trends, “Gender Identity Disorder,” https://trends.google.com/trends/explore?date=2004-01-01%202020-12-31&geo=US&q=puberty%20blockers (accessed May 20, 2022); and Google Trends, “Gender Dysphoria,” https://trends.google.com/trends​/explore?date=2004-01-01%202020-12-31&geo=US&q=puberty%20blockers (accessed April 20, 2022).)

As shown in Chart 1, these four terms were searched infrequently until about 2015,
when there was a dramatic increase that continued through the end of 2020. This
picture is consistent with anecdotal reports of how the use of puberty blockers
and cross-sex hormones only became widely available in the past several years.
```
1. okay so this is just FLAT OUT SILLY. The surrounding context of the paragraph
enokes a feeling in the audience that being trans is simply a trend that is gaining
popularity. This is again a serious violation of the 'poisoning the well' logical
fallacy. The infered position that the author is taking is that being trans is
NOT a core part of humanity that has been documented for thousands of years, but
instead, a new trend that is dangerous to children that must be stopped. This is
an argument. Not a study. Not a proven fact. The use of Google trends in this
context is used to give more ethos to the argument at hand. By the rules of
google trends, even if just 1 person searched for hormone blockers pre-2015, and
just 5 people searched for it post-2015, a similar graph would be shown. This
is simply a deeply dishonest attempt at convincing the audience of the subliminal
argument being made. Deeply deeply dishonest argement here.

2. The contextual argument being made is that children are searching up these
terms in order to seek out gender-affirming procedures. However, that's NOT even
what Google Trends is saying. All Google Trends is saying is that people are
searching for these terms. How many of these people are googling these terms after
watching Tucker Carlson or Steven Crowder give an anti-trans segment? We DO NOT
KNOW! This is furthering the dishonesty of this article.

3. If I were to go to any college professor of stats or scientific research, and
ask them what their thoughts are on using Google Trends to track application
intrest of gender-affirming procedures, the professor asked would laugh me out of
town. This is hardly a data collection tool. so far, the claim that 'emperical'
data collection being used is absolutely laughable. Even I, who got a C- in
high school stats, knows that this method of data collection is nothing more that
vitally flawed.

```
There is also a lack of precise information on where cross-sex medical
interventions are more readily available to adolescents.
```
1. huh? is this an argument against trans education for addolesence or or is this
pro?
```
A reasonable proxy for that data is to identify the states that have a legal
provision allowing minors to access routine health care without the consent of
their parents or guardian, at least under some circumstances.
```
ahhh so there are SOME circumstances already that prevent kids from getting
gender-affirming procedurs! I wonder if these circumstances will be expounded
upon, or treated as if they do not exist.

```
In states that have those provisions, puberty blockers and cross-sex hormones
should be more easily available to teenagers.
```
I'm assuming that this line is a typo and that the author does not believe this?
Or if the author does beleive this, then that's totally based.

```
The organization SchoolHouse Connection tracks state laws covering the ability
of minors to access medical care without their parents’ consent as part of its
advocacy on behalf of homeless children.
(16 “State Laws on Minor Consent for Routine Medical Care,” SchoolHouse Connection, September 3, 2021, https://schoolhouseconnection.org/state-laws​-on-minor-consent-for-routine-medical-care/ (accessed May 27, 2022).)

SchoolHouse Connection documents that 33 states and the District of Columbia
have some legal provisions that allow minors to obtain routine health care
without parental consent.
(17 Ibid.)

Seventeen states have no such provisions.
```
so the argument here is that homeless youth (who probably don't have parents
that care for them) should NOT recieve medical attention? That's unreasonably
messed up.

```
In states that do have such legal provisions, it is possible for adolescents to
obtain puberty blockers and cross-sex hormones, at least under some circumstances,
as those medical interventions have come into broader use for youth who identify
as transgender.
(18 Ibid.)
```
this actually brings up a great point: Should homeless youth be banned from
gender-affirming procedueres in the same way that non-homeless youth are proposed
to be by the author? I disagree with this. I think that if the government is
going to refuse to take care of these children (which they absolutely should),
then said kids should have the ability to do whatever they want with their bodies,
since the world is now treating them like an adult. If the Right is truly pro-
self dominion, then they will agree with giving homeless children bodily
autonomy as well.

```
In states without such legal provisions, there is no regular process that allows
adolescents to obtain puberty blockers or cross-sex hormones without their
parents’ consent.

The conditions under which minors can access routine health care without parental
consent are extremely limited in some states. For example, in Arizona a minor
must be legally married, or documented as homeless, in order to access routine
health care without parental consent.
(19 “Arizona Revised Statutes Title 44. Trade and Commerce § 44–132. Capacity of Minor to Obtain Hospital, Medical and Surgical Care; Definition,” FindLaw, current as of March 8, 2022, https://codes.findlaw.com/az/title-44-trade-and-commerce/az-rev-st-sect-44-132.html (accessed May 26, 2022).)
```
I know this is an anterior issue, but Arizona really should amend this to allow
health care for all kids no matter what. There are many kids, who on paper have
parents who are repsonsible for them, when in reality, do not recieve the care
they should.

```
In other states, such as Minnesota, minors can obtain routine health care
without parental consent if they live separately from their parents, regardless
of the duration of that separation, and manage their own finances, regardless
of their source of income.
(20 “Minnesota Statutes Health (Ch. 144–159) § 144.341. Living Apart from Parents and Managing Financial Affairs,” FindLaw, current as of January 1, 2018, https://codes.findlaw.com/mn/health-ch-144-159/mn-st-sect-144-341.html (accessed May 26, 2022).)
```
as a result of a hatred of big government that many conservtives share, people
like disenfranchised children are the ones who suffer from a lack of social
programs. If social programs get cut like how many advocate for, who will take
care of those who fall through the holes from the very start of their lives?

```
In other states, such as Alabama, Louisiana, and Oregon, there only appears to
be a minimum age or a required determination by the health care provider that
the minor is mentally competent to obtain health care without parental consent.
(21 “Oregon Revised Statutes Domestic Relations § 109.640,” FindLaw, current as of January 1, 2019, https://codes.findlaw.com/or/title-11-domestic​-relations/or-rev-st-sect-109-640.html (accessed May 26, 2022); “Alabama Code Title 22. Health, Mental Health, and Environmental Control § 22-8-4,” FindLaw, accessed April 14, 2022, https://codes.findlaw.com/al/title-22-health-mental-health-and-environmental-control/al-code-sect-22-8-4.html (accessed May 26, 2022); and “Louisiana Revised Statutes Tit. 40, § 1079.1. Medical Treatment,” FindLaw, current as of January 1, 2019, https://codes​.findlaw.com/la/revised-statutes/la-rev-stat-tit-40-sect-1079-1.html (accessed May 26, 2022).)
```
If being trans is labeled to be a mental health disorder, then insurance companies
like in this instance will be able to discriminate against providing for these
kids, even if they choose to only socailly transition, but need important medical
care. This is a very dangerous situation that people who argue against trans
rights are prepetuating. For the cause of protecting the youth, anti-trans people
are inadvertantly hurting and perhaps killing said youth.

```
There is no obvious geographic, demographic, or partisan pattern to whether
states have these provisions. As seen in Appendix Table 1, states without a
provision are Connecticut, Georgia, Iowa, Kentucky, Michigan, Mississippi,
Nebraska, New Hampshire, New Jersey, New York, North Carolina, Ohio, South Dakota,
Tennessee, Vermont, West Virginia, and Wisconsin. The states with a provision
are similarly diverse and settled on their legal arrangements long ago for
reasons unrelated to the transgender issue.22
```
okay...

```
Prior Research
The effects of puberty blockers and cross-sex hormones as a medical intervention
for adolescents who identify as transgender have never been subjected to a
large-scale randomized controlled trial (RCT), like the kind that is
typically required for approval of new medications.
(23 Claudia Haupt et al., “Antiandrogen or Estradiol Treatment or Both During Hormone Therapy in Transitioning Transgender Women,” Cochrane Database of Systematic Reviews, Vol. 11, No. 11 (November 2020), https://pubmed.ncbi.nlm.nih.gov/33251587/ (accessed May 26, 2022).)
```
here we go! RCTs are going to be also required to prove that gender-affirming
procedures increase suicide rates. Can't wait until I see the study from him that
says that.

```
Puberty blockers and sex hormones had been developed originally for other purposes.
Puberty blockers were originally designed to delay precocious puberty among very
young children who began puberty well before their peers. Sex hormones were
developed primarily to treat people who were unable to produce enough of the
hormones of their biological sex. These were the uses for which these drugs were
originally tested and approved. These drugs have been prescribed for young people
wishing to change their secondary sex characteristics without undergoing testing
and formal approval for these new uses. The lack of any experimental evidence of
the effects of these medical interventions prevents the gold-standard research
one would normally expect in order to isolate the causal effects of these
interventions. (24 Randomization in a randomized controlled trial isolates the exposure variable of interest and eliminates concerns of confounding in a statistical analysis.)
```
I totally agree that an RCT is needed in order to create as hard of proof as
possible for any scientific claim. However, the auther must know that having an
RCT in these circumstances (particulary a study that may or may not increase
suicide rates) is highly unethical. The best we can do is look at people's lives
after said people initiate gender-affirming procedures. That by itself has issues
of population bias though. All in all, there end up being way too many confounding
variables without RCTs. So if this is an admittance from the author on the
neccesity of RCTs in order to prove anything scientifically, then I expect the
author to follow through with that and extend the claim to the rest of this article
- including to all the positions held by the author himself in regards to the
dangers of gender-affirming procedures.

```
The use of puberty blockers and sex hormones to address gender issues is also
relatively recent, with widespread adoption occurring only within the past few
years. (25 Michael Biggs, “Puberty Blockers and Suicidality in Adolescents Suffering from Gender Dysphoria,” Archives of Sexual Behavior, Vol. 49, No. 7 (October 2020), pp. 2227–2229, https://doi.org/10.1007/s10508-020-01743-6 (accessed May 26, 2022), and Klotz, “The Fractious Evolution of Pediatric Transgender Medicine.”)

The fact that randomized experiments were not required for this use of puberty
blockers and sex hormones, and that this novel use of these drugs is relatively
recent, means that only a handful of studies examine their effects, and all
these studies use inferior correlational research designs.
```
1. according to some brief research, it looks like the specific hormone blockers
talked about (GnRH), were introduced in 1983, which means they have been around
for aprox 39 years. That's longer than aids medications have been around. That's
longer than many medications have been around. Using a sneaky temporal proximity
argument is another logical fallacy. Just because something is "relatively new",
or "relatively old", does not inheritly prove anything. The author though, is
attempting to insinuate that temporal proximity has somthing major to do in the
acceptance of medications, which is false.

2. since 1993, LUPRON DEPOT-PED has been aproved for human use.
https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=020263

3. sure, these research designs may be inferior to RTCs, but many of these studies
are as good as we can get without breaking some serious ethics

4. Let's back up for a second: if we were to prove a correlation and causation
between a cetain activity and an increase in suicide due to said activity, how
would we do that? What biostatical instruments and/or methods can one use to
collect data on suicidality and injestibles? According to an article I found in
the National Library of Meicine, it maybe too unclear and/or unethical to create
instruments via biostatics to track rates of suicidality via anything aproximating
an RTC: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5517300/
"Most suicide risk assessment instruments were supported by too few studies to
allow for evaluation of accuracy. Among those that could be evaluated, none
fulfilled requirements for sufficient diagnostic accuracy." SO LET'S BACK UP HERE!
If suicide risk assessment in general is a percarious field of study without
enough research to go off of, then how can ANY item or activity be linked to
an increase in suicide risk with enough academic rigor desired by the author?
The answer is that there are no known ways of tracking suicide risk acuratly enough
to call it a science. At this point, tracking suicide risk is a guessing game.

```
The main defect of studies relying on correlational research designs is that
they are unable to determine with confidence whether any relationships between
receiving these drugs and later health outcomes are causal. That is, one can
never know with confidence whether the drugs cause those outcomes, or whether
other factors that make people more likely to receive the drugs were the causes.
This inherent weakness in correlational research is precisely why regulators,
such as the U.S. Food and Drug Administration, typically require randomized
experiments before approving a drug.
(26 U.S. Food and Drug Administration, “CFR– Code of Federal Regulations Title 21,” https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch​.cfm?fr=314.126 (accessed May 26, 2022).)
```

the keyword here is 'typically'. The FDA is no where near perfect. There are a
lot of things I believe they need to crack down on. Specifically suplements.
If something is a supplement, then it DOES NOT need to be tested by the FDA, which
is super messed up. However, the people who are generally anti-trans are on the
Right. Many people on the Right is anti government interference. If this track
follows, then there must be a consistency in this area. Either the individual is
pro-government interference in private sells of comodities, or the individual is
not. The individual cannot pick and choose what is and what is not allowed to be
investigated. Now I have no idea what the author's beliefs are on government
interference, but this must be stated in an effort to address the hipocracy
demonstrated by many on the Right.

I totally agree that we need more research. More research is absolutely the answer
here. I'm convinced that there are drugs that are magnitudes better than what we
have for blocking hormones. There always will be. However, if, because of the
lack of studies, legislators push to prevent studies taking place, then we will
never find the answers to these problems. Just because something is unknown does
not inheritly mean that said thing is dangerous. There are many subliminal
assumptions being made by the author too often that is affecting the reception
of the audience towards the subject at hand.

```
In an experiment, the only thing that determines whether people receive the
medical intervention is chance, so any differences in outcomes between those who
did and did not get the treatment would have to be caused by the intervention
and not another factor.
```
ahhh thank you Mr. Author. So, you're saying that perhaps other factors such as
bullying and societal hatred could be causes of suicide among trans children
more often than the gender-affirming procedures are? If there's even a chance of
this being true, then how much credence can we give to any pro or anti-trans
study? Are all the observational studies referenced thus far a net neutral for
the argument at hand?

```
This weakness of correlational research designs can be illustrated by examining
one of the most prominent studies claiming to find that adolescents who receive
cross-sex hormones have a lower risk of suicide.
(27 Jack L. Turban et al., “Access to Gender-Affirming Hormones During Adolescence and Mental Health Outcomes Among Transgender Adults,” PLOS ONE, Vol. 17, No. 1 (January 12, 2022), p. e0261039, https://doi.org/10.1371/journal.pone.0261039 (accessed May 26, 2022).)
```
again, the implication of this statement is that the inverse is true. The author
is using too much bias-charged language in this article. What this author is saying
is that no study on trans-sciences can be studied. However, the subtext is saying
even more than that, that being trans is scientifically wrong. The author continues
to make too many subliminal assumptions of the current science.

```
That study, led by Jack Turban of Stanford Medical School and published in
PLOS ONE in 2022, examines the results of a 2015 survey of more than 27,000
American adults who identify as transgender. The survey was not meant to be
representative of all such adults because its participants were recruited as a
convenience sample, largely through transgender support groups. Subjects were
asked whether they had ever sought cross-sex hormones, and then whether they
had ever received them. Respondents who never sought cross-sex hormones were
excluded from the analysis. The main comparison examined in the study was between
those who had sought and received the hormones, and those who had sought but
never received them when they were between 14 and 17.

The obvious defect in this comparison is that there are reasons why some people
were able to get the hormones while others could not, even though all of them
report wanting to get them. The reasons that allowed some to access them but not
others are likely strongly related to later mental health.
```
okay stop. How do you know that they were not allowed to get the hormones because
of mental health??????? This is flat out heresay. Where is the evidence? Even
if this is true, the author does not cite evidence directly. I should not have
comb through the study to verify if this true or is not. This statment must be
cited directly because of how large of a claim this is. And the use of 'probably'
when referencing a study? You want to talk about bad science? using the word
'probably' in a coloquiol way like so is just bad writing.
```
One of the most important reasons why some adolescents were able to access the
hormone therapies while others could not is that parental consent is often,
though not always, required to get these drugs. As is well known from research
on gender-confused youth...
```
again, the use of 'gender-confused' is highly subjective. The author needs to
define such terms. Classically, 'gender-confused' has been linked to not following
gender stereotypes within children (like boys playing with dolls). This behavior
is almost always grown out of. This behavior is NOT being trans. It's something
else entirely. A complete conflation of terms. Due to this conflation, the author
is either uneducated on these details, or the author is dishonest.

```
...as well as more generally, closer and more positive relationships between
children and parents promote mental well-being and is protective against suicide.

The problem, then, with the Turban study, is that it is impossible to know
whether the reduced odds of contemplating suicide among adults who sought and
received hormone therapy as children were a result of the relationship with
their parents who gave consent for this intervention or a result of the
intervention itself.
```
Yeah, I agree with that. It's impossible to really know. However, I disagree with
the subtext from the author and the tone he is taking. The author is subtexually
arguing that because the study cannot be supported by an RCT, that being trans
is either dangerous or wrong and that it's corrupting the youth.
```
If a close and positive relationship between parents and children struggling
with gender identity is the key to successful outcomes for those adolescents,
then the hormones themselves might make no difference, or even be harmful.
But that effect would be masked by the kind of parent–child relationship that
exists when parents are more likely to consent.
```
I pretty much agree with this, but again, the bad-faith subtext wrong.

```
Turban’s own data show enormous differences in relationships between children
and parents among those who obtained the hormones and those who did not,
despite desiring them. Of those who were unable to get the hormones, 35 percent
had not “come out” to their parents, compared to 3 percent among those who
obtained hormones at ages 14 and 15, and 4 percent among those who obtained
hormones at ages 16 and 17. Among those who got the hormones as teenagers,
nearly 80 percent reported feeling supported by their parents, compared to 33
percent of those who were unable to get the drugs.

Turban attempts to control statistically for these reported differences, but
that adjustment cannot fully fix the bias, especially when the differences between
the groups being compared are so stark and when the measures of parent–child
relationship are imprecise. This would be like trying to adjust for the effects
of family income during childhood knowing only whether someone reports having
felt poor. Memories are imperfect, and simply dividing people into poor and
not-poor categories fails to capture the difference between the children of
billionaires and those raised in public housing projects. Adolescents who can
get their parents’ consent for hormone therapy have dramatically different
relationships with their parents than those who cannot, and that difference
in relationship can affect mental health later in life, even if the hormones
themselves have no benefit, or are harmful.
```
Yeah I pretty much agree, though the money analogy was dumb.

```
Another important factor that determines whether young people get cross-sex
hormones is their psychological condition when they are seeking that intervention.
According to guidelines issued by WPATH, a key condition for prescribing
cross-sex hormones is that “any coexisting psychological, medical, or social
problems that could interfere with treatment (e.g., that may compromise
treatment adherence) have been addressed, such that the adolescent’s situation
and functioning are stable enough to start treatment.”
(28 Eli Coleman et al., “Standards of Care for the Health of Transsexual, Transgender, and Gender-Nonconforming People, Version 7,” International Journal of Transgenderism, Vol. 13, No. 4 (2012), p. 19, https://www.tandfonline.com/doi/abs/10.1080/15532739.2011.700873 (accessed May 26, 2022).)

The difference between those who desired hormone therapy and received it and
those who sought it but were unable to receive it could be the state of their
mental health at the time they tried to get the drugs.
```
Again, this is heresay. The author is making the argument that trans youth are
mentally unstable which is extreamly biased to say, especially because this statemnet
is 100% conjecture. I would hope that the reader is able to understand the
saturated bias in this article, but perhaps the reader is still reading this due
to bias confirmation themselves.

```
The Turban study lacks information on, and therefore cannot make any statistical
adjustments for, the mental health at the time the subjects sought hormone therapy.
The respondents who were unable to get hormone therapy despite saying they wanted
it may have worse mental health outcomes because they began with more severe
psychological issues that prevented them from obtaining the hormones.
The pre-existing mental health challenges could be the cause of later outcomes,
not whether they received the hormones.
```
again, even more heresay.

```

The inability to sort out this kind of uncertainty about what is causing
differences in mental health outcomes is inherent in the correlational research
design employed by Turban and his colleagues. These same concerns apply to an
earlier study by Turban and his colleagues published in Pediatrics in 2020.
This study examines the relationship between puberty blockers and later mental
health outcomes and relies on the same correlational research design to analyze
data from the same survey as the cross-sex hormone study.
(29 Jack L. Turban et al., “Pubertal Suppression for Transgender Youth and Risk of Suicidal Ideation,” Pediatrics, Vol. 145, No. 2 (February 2020), p. e20191725, https://doi.org/10.1542/peds.2019-1725 (accessed May 26, 2022).)

The use of a correlational research design also makes it impossible to draw
causal conclusions from a study by Amy Green and colleagues that analyzes the
mental health effects of adolescents receiving cross-sex hormones based on data
from a different survey.
(30 Amy E. Green et al., “Association of Gender-Affirming Hormone Therapy with Depression, Thoughts of Suicide, and Attempted Suicide Among Transgender and Nonbinary Youth,” Journal of Adolescent Health, Vol. 70, No. 4 (April 2022), pp. 643–649, https://doi.org/10.1016/j.jadohealth.2021.10​.036 (accessed May 26, 2022).)

```
I feel like the author is repeating himself at this point.

```
The two studies led by Turban, and the one led by Green, are the only three
studies that examine the relationship between cross-sex medical interventions
by teenagers and suicide risks that make any use of a comparison group. As the
2020 Turban study describes itself, “This is the first study in which
associations between access to pubertal suppression and suicidality are examined.”
(31 Turban et al., “Pubertal Suppression for Transgender Youth and Risk of Suicidal Ideation.”)

The 2022 Turban study observes that there have been six studies that track the
mental health outcomes of teens who received hormone treatments, but emphasizes
that “these studies did not include a comparison group of adolescents who did
not access GAH [gender affirming hormones].”
(32 Turban et al., “Access to Gender-Affirming Hormones During Adolescence and Mental Health Outcomes Among Transgender Adults.”)

Studies that track adolescents who receive these medical interventions are even
weaker than correlational studies in their ability to draw causal conclusions
about the effects of those interventions, because they have no information on
how those individuals would have fared had they not received the interventions.

The prior research on this subject is not only weak because it contains no
credibly causal studies and only a handful of correlational studies, but also
because those correlational studies are poorly executed. For example, the 2022
Turban study combines the use of testosterone for natal females and estrogen
for natal males and only reports the combined effects of hormones. When Michael
Biggs analyzes the same data and disaggregates the hormone by type, he finds
that: “Males who took estrogen are more likely to plan suicide, to attempt
suicide, and to require hospitalization for a suicide attempt.”
(33 Michael Biggs, “Comment on Turban et al. 2022: Estrogen Is Associated with Greater Suicidality Among Transgender Males, and Puberty Suppression Is Not Associated with Better Mental Health Outcomes for Either Sex,” figshare, journal contribution, 2022, https://doi.org/10.6084/m9.figshare​.19018868.v1 (accessed May 27, 2022).)
```
this last statement is still conjecture. see the previous arguments I've made
above...

```
This negative effect is masked in Turban’s study by the failure to report the
separate effects by type of hormone.

Similarly, the 2022 Turban study finds that 16- and 17-year-olds who received
hormones were more than twice as likely to report a “past-year suicide attempt
requiring inpatient hospitalization,” but that finding fails to achieve
statistical significance by setting the standard for significance higher than is
conventional.
(34 Turban et al., “Access to Gender-Affirming Hormones During Adolescence and Mental Health Outcomes Among Transgender Adults.”)
```
Okay, so here's another dishonest take from our dear author here: If the author's
point is that this study is unreliable, then leave it at that. If the author is
then going to use the same study he fought to discredit by using it to prove a
point that he wants to be proven, then that's just crazy. I know that he is saying
that the data collection is wrong as a whole (which I don't disagree with),
but to then turn around and point at a line in the same study to prove a point
that the author wants proven- is just flat out silly and receives another mark
of dishonesty.

```
Only by adopting a standard for statistical significance that is different from
the one more commonly used in empirical research does the study avoid
concluding that this significant harm from hormone therapy exists.
```
and again we find more toxic subtext...
```
The two Turban studies do not consistently use the same set of control
variables when generating their adjusted-odds ratio, even changing what is
controlled when analyzing different outcomes within the same study. The two
Turban studies also change the main outcome of interest from lifetime suicidal
ideation in the study on puberty blockers to suicidal ideation in the last 12
months in the study on hormones. Researchers should determine which confounding
variables to control and which outcome variable to examine in their statistical
models based on sound theory and prior empirical research, and then consistently
apply those decisions, especially within the same study. Changing which factors
are controlled in the statistical analysis of each outcome variable, as well
as which outcome on which to focus, opens the door to p-hacking, the process
of changing empirical models in an ad hoc fashion to yield desired, though
likely spurious, results.

The bottom line is that the most influential recent research on the relationship
between adolescent cross-sex interventions and later mental health outcomes, 
including suicide risk, does not provide convincing evidence. Only a small
number of studies make comparisons to a control group—and those studies employ
correlational research designs that do not allow causal conclusions, nor have
those correlational studies been conducted properly.
```
thank you for reaching a bottom line. At this point, I think my point has been
made in reference to the author's commentary on this study.

```
A Better Research Approach
Of all the adolescents who seek medical interventions for gender issues, there
are reasons why some receive interventions while others do not. The defect of
correlational research designs is that they cannot separate the effects of
those reasons from the effects of the interventions themselves. A better
research design would be built around the reasons why some do and others do not
get the intervention, which have nothing to do with possible later outcomes.
The gold standard of research designs is the RCT because then only chance
determines whether some people get the treatment, not a factor that could be
related to later outcomes.
```
WAIT WHAT!??? My man is litterally arguing for an RCT to happen in order to test
suicide rist????? The author has clearly never once taken a second to think about
bioethics. Even I, a person who hasn't taken a biology class since 6 years ago,
knows that it is extreamly unethical to perform a test like this.

```
Short of using lotteries to determine who gets the intervention, there are
quasi-experiments or natural policy experiments, (35 A natural policy experiment
occurs when there is variation in policies across states or localities for
reasons that are unrelated to outcomes being compared. This “exogenous”
variation in state policies approximates a randomized experiment. While states
or localities do not adopt different policies by random assignment, the
variation is effectively random for the purposes of comparing the effects of
those policies on a particular outcome.) whereby the reason people, whether
adults or minors, can or cannot get the intervention is determined primarily by
policies that were adopted for reasons that have nothing to do with the later
outcomes of treated individuals. This circumstance approximates a randomized
experiment. By chance, some find themselves living under rules that allow them
to access treatment, while others find themselves under different rules that
do not allow them to do so.

There exists a natural policy experiment of this type with respect to the
ability of minors to access gender-related medical interventions without their
parents’ consent. As described above, some states have policies that provide a
path by which minors can access routine medical care without the consent of a
parent, while other states do not. These policies were developed for reasons
that have nothing to do with gender identity. Whether adolescents live in a
state that imposes fewer or no restrictions on accessing puberty blockers and
cross-sex hormones is effectively random and should have nothing to do with
later outcomes other than through the mechanism of receiving those interventions
or not.
```
The author essentially states here that if a law was passed many years ago that
has nothing to do with the issue at hand, then there will be no effect of that
law on an individual today. This is completely incoherit. If this is the belief
the author holds, then I can only assume that the author does not believe that
history affect the modern day. Of course if there is a law which prevents access
to medical care by indivduals is going to affect the individual who either can
or cannot recieve gender-affirming procedures. And if we take a look at that
history of states rejecting medical care to minors, we must also learn of the
reasons why. We must know why a basic human right is being prevented from being
extended to children. Is it because corporations sit in the pocket of those who
govern in these states? Is there a correlation between states who are
trans-friendly and those states who do extend medical care to minors? Is there a
correlation of the inverse? I don't know the answer to these questions, but these
are questions none the less, and where there are doubtful questions, there are
confounding variabls that must be accounted for. Waving ones hand and dismissing
the history of these laws is an extreamly silly thing to do, and I would hope that
the audience can see this clearly for what the author is doing here. Yet another
mark of dishonesty.

```
The analysis presented in this Backgrounder exploits this natural policy
experiment to compare suicide rates over time among those ages 12 to 23 in
states that have a provision allowing minors to access health care without
parental consent relative to states that have no such provision. Annual suicide
rates by age and state between 1999 and 2020 were obtained from the National
Center for Injury Prevention and Control at the Centers for Disease Control and
Prevention.
(36 Centers for Disease Control and Prevention, “WISQARS—Web-Based Injury Statistics Query and Reporting System,” December 2, 2021, https://www​.cdc.gov/injury/wisqars/index.html (accessed May 26, 2022). Note: “The data source for WISQARS Fatal Injury Data is the National Vital Statistics System (NVSS) operated by the National Center for Health Statistics. WISQARS provides death counts and death rates for the United States and by state, county, age, race, Hispanic ethnicity, sex, leading cause of death, injury intent, and injury mechanism categories. WISQARS can be used to query death data for the years 1999–2020, of which the underlying cause of death is specified using ICD-10 codes.” See Centers for Disease Control and Prevention, “WISQARS, Leading Causes of Death Visualization Tool,” https://wisqars.cdc.gov/DataRestriction_inj.html (accessed May 31, 2022).)

Information on whether states had policies allowing minors to access routine
health care without parental consent was obtained from SchoolHouse Connection,
an organization focused on caring for homeless youth.
(37 “State Laws on Minor Consent for Routine Medical Care,” SchoolHouse Connection.)
```
so when the author goes through the previous Turban study, he reiterates over and
over again that correlative observation studies are not reliable. The author then turns around and
says 'the better research approach' is to use a correlative observation study
inspecting suicide and parental care? Like what the heck? Is this guy high?
There is zero consistency here! HAHHAHAHA

```
The analysis presented here uses a statistical model to predict the suicide
rate among those ages 12 to 23 in each state between 1999 and 2020. The analysis
focuses on this age range because it encompasses a consistent age group of those
who could have entered puberty between 2010 and 2020 when puberty blockers and
cross-sex hormones became available as a gender-related treatment in the United
States. To control for the possibility that there are enduring cultural, religious,
or other state-specific features that account for why some states have higher
suicide rates among young people than other states, the model controls for
average suicide rates in this age group in each state at baseline (during the
first three years observed).

To control for the possibility that there are state-specific factors that
account for why some states may generally experience changes in annual suicide
rates, the model also controls for the suicide rate in each state in each year
among those ages 28 to 39. The Heritage model controls for the suicide rate
among that age group because it is a consistent age group in which no one would
have been a minor in 2010 when puberty blockers and cross-sex hormones became
available in the U.S. Because even the 28-year-olds in 2020 would have been 18
in 2010, none of them would be affected by variation in state policies
regulating the ability of minors to receive health care without parental consent
when these medical interventions began to be used.
```
What? GnRH has been used in the US since 1983: https://www.annualreviews.org/doi/10.1146/annurev.me.34.020183.002423

```
The model also includes an indicator variable for each year between 1999 and
2020 to control for any year-specific national changes in suicide rates. And,
because there may be correlations between the suicide rates within each state
across the years examined, the model clusters the standard error estimates by
state.

The independent variable of interest is a dichotomous measure of whether the
state has a policy that allows minors to access health care without parental
consent. If making it easier for minors to access puberty blockers and cross-sex
hormones is protective against suicide, one should expect the frequency of youth
suicide to be lower in states that have a provision allowing minors to get
these drugs without parental consent after 2010. There should be no difference
in trends in the suicide rate among young people based on whether states have a
provision allowing minors to access health care without parental consent before
2010. If Turban and his colleagues are correct, the trends between these two
groups of states should diverge after 2010 as cross-sex interventions became
more widely available.
```
Okay, this study is just flat out stupid. By that logic, the states that have
historically the closest families despite trans populations, should be the states
that have the lowest rates of suicide-- but guess what? That's not how this works.
Utah is #9 out of all the states in highest suicide rates. Conversly, Utah is #46
in trans population. If having a strong family and community is the answer to
suicide, then Utah should not be as high as it is. Most of the population is LDS
and as you drive through the state, temples and meeting houses are a dime a dozen.
https://splinternews.com/heres-how-many-transgender-people-live-in-your-state-1793860300
https://www.cdc.gov/suicide/suicide-rates-by-state.html

```
The trends are modeled statistically in a few ways. The most precise approach
is to examine whether the suicide rate among young people is elevated as those
interventions become more widely available in the states where it is easier for
minors to access them. The model uses the prevalence of gender-related medical
terms in Google Trends as a proxy for how widely available those interventions
are over time.
```
Okay, STOP! Google Trends is NOT RELIABLE! It's a black box. We don't know any
numbers behind Google Trends! This article has itself stated this. Any 'study'
that uses Google Trends is DISHONEST in the highest degreee.

```
Another approach would be to model the increased suicide rate in states where
minors can access health care without parental consent over time. This could be
done by including in the model an “interaction” variable that estimates the
effect of whether states have a provision for minors accessing health care
without parental consent each year separately. This variable would estimate the
difference in youth suicide rates between states based on whether they have such
a policy for each year between 1999 and 2020.

Yet another way to model the trend over time would be to estimate the combined
effect of whether states have a policy along with a time variable that counts
the number of years since 1999. This approach would identify any extant linear
trend across time that differs between the two groups of states. It would also
be possible to determine whether the two groups of states differ in their level
or trend in youth suicide rates before and after 2010, when puberty blockers
and cross-sex hormones become available.

The results remain substantively the same in their general magnitude, direction,
and statistical significance regardless of the approach.
```
okay so this is just flat out gobeldy-gook. He can't flip flop from hating on
observational studies and then say that the answer to the problem at hand is
an observational study. The author's position on what makes a study valid is
incoherit
```
The Results
In the past several years, the suicide rate among those ages 12 to 23 has become
significantly higher in states that have a provision that allows minors to receive
routine health care without parental consent than in states without such a provision.
Before 2010, these two groups of states did not differ in their youth suicide rates.
Starting in 2010, when puberty blockers and cross-sex hormones became widely
available, elevated suicide rates in states where minors can more easily access
those medical interventions became observable.
```
the number of school shootings since 2010 has also dramatically gone up. My point
is that correlation does not equal causation as the old saying goes. Something
this author has completly forgotten in the last half of this article.

```
Rather than being protective against suicide, this pattern indicates that easier
access by minors to cross-sex medical interventions without parental consent is
associated with higher risk of suicide. The Heritage model plotted the difference
in a three-year rolling average of suicide rates between states with minor access
provisions and states with no such provision. Chart 2 plots the trend in this
difference for those ages 12 to 23 who could have been affected by the policy
when cross-sex medical interventions became available. For comparison, Chart 2
also shows the trend in this difference for a group ages 28 to 39, who could not
have been affected by these policies, since the people in this group would have
been at least 18 when puberty blockers and cross-sex hormones became available.
```
Again, puberty blockers have been available since 1983!!!!!!!!!! This guy
did not do his research!

```
Without making any adjustments, suicide rates among those ages 12 to 23 (blue
line) begin to spike in states that have provisions that allow minors to access
health care without parental consent relative to states that have no such provision
around 2016, after cross-sex medical interventions became more common. By 2020,
there are about 3.5 more suicides per 100,000 people ages 12 to 23 in states with
easier access than in states without an access provision. There is no similar
spike in suicide rates among those ages 28 to 39 (grey line) at that time.

It is also clear that the states with a provision always had somewhat higher
suicide rates than the states with no provision. To isolate the effect of this
provision on youth suicide rates, it is better to control statistically for the
youth suicide rate in each state at baseline as well as the suicide rate in each
state in each year among the older and unaffected age group.

Making these adjustments and plotting three-year rolling averages yields the trend
pictured in Chart 3. It is clear that the presence of a state-level provision
for minors to access health care without parental consent makes no difference in
suicide rates among those ages 12 to 23 until about 2010, when the suicide rate
begins to drift up in states with easier access. In 2015, the estimated increase
in suicide rates in states with easier access accelerates. By 2020, there are
about 1.6 more suicides per 100,000 people ages 12 to 23 in states that have a
policy allowing minors to access health care without parental consent than in
states without such a policy. The average state suicide rate in this age group
between 1999 and 2020 was 11.1, making an additional 1.6 suicides per 100,000
an increase of 14 percent in the suicide rate.

This increase in suicide rates in states where it is easier for minors to
access puberty blockers and cross-sex hormones increased at almost the same time,
and to the same degree, as those interventions became available. Using Google
Trends results for the terms associated with those medical interventions as a
proxy for their availability shows that increased suicide rates in states with
easier access almost perfectly track the prevalence of those terms. (Compare
Charts 1 and 3.)
```
this guy is so silly. How many people have researched puberty blockers because
their favorite anti-trans activitst did an expose on them? Not everyone who
googles 'puberty blockers' is trans. This guy is either stupid or a liar.

```
This elevated rate of youth suicide is statistically significant at conventional
levels, and robust to different approaches to modeling the trend over time.
(See Appendix Tables 2–5 for regression results.)
```
again, by the author's own account, obersvational studies are not permissible.

```
It is useful to conduct a “placebo test” to examine whether the elevated rate
of suicides among young people in states where it was easier for minors to access
cross-sex interventions also existed among slightly older people who could not
have been affected by minor access provisions. Using the same exact regression
model while replacing the suicide rate among those ages 12 to 23 with the rate
for those ages 28 to 39 in the same states as the dependent variable shows no
relationship between the ease of accessing cross-sex medical care and suicide
rates among those too old to have been affected by these state policies.
(See Appendix Table 6.) This placebo test strongly indicates that making it
easier for minors to access puberty blockers and cross-sex hormones when those
interventions became available is causally related to increased suicide rates,
because no similar increase was seen by those slightly older who would have been
unaffected.

Discussion
The results presented in this Backgrounder provide strong evidence for the claim
that suicides among young people have increased significantly since 2010 in states
that have a policy allowing minors to access routine health care without parental
consent. That increase in suicide rates accelerated around 2015. Prior to 2010,
whether a state had such a policy or not had no significant effect on the trend
in suicide rates among those ages 12 to 23. The timing of the increase in suicide
rates only among young people, only after puberty blockers and cross-sex hormones
are introduced and used widely, and only in states where minors could access
those medical interventions without parental consent raises serious concerns
about their effects on suicide risks.
```
"The results presented in this Backgrounder provide strong evidence for the claim
that suicides among young people have increased significantly since 2010 in states
that have a policy allowing minors to access routine health care without parental
consent." Okay so is that just a trend for youth who have access to health care
without parental consent, or is this trend for trans youth? This guy just flip
flopped his entire thesis!!!! What in the world!
```

The research presented here does not directly examine whether the individuals
who receive gender-related medical interventions are at a higher risk of suicide,
but it does directly examine the state policies that facilitate minors accessing
those interventions without parental consent and finds that those policies raise
suicide risks among young people.
```
wow, there were so many hoops just jumped through. What about all the suicides
resulting from murder suicides at school shootings? Maybe there's moreso a mental
health crisis and less of a trans crisis. But the author is too afraid to say that
because then he will loose conservative supporters. the grift is real.

```
To believe that easier access to puberty blockers and cross-sex hormones are
not the cause of elevated suicide risk in those states, one would have to be
able to imagine other medical interventions that only became widely available
after 2010 and would only affect young people. The lack of theoretically
plausible alternatives strengthens the case for concluding that cross-sex medical
interventions are the cause of the observed increase in suicide among young people.
```
Well, when you play with the data this much, you can get just about any conclusion
you want. for example, since 2008, (which is close to 2010), marvel movies have
released more and more frequently. I could just as easily draw up a graph showing
that marvel movie releases are the cause of the increase in trans-youth suicide
and my observation would be JUST AS TRUE as what has been presented in this article.
And again, the author spent the first half of the article tearing down as to why
observational studies are not trustworthy, just to go back and say the answer
to the problem at hand are more observational studies. Like give me a break.
To the unassuming reader, the author's praise of RCTs as a form of 'gold standard'
of studies, and then a perscription of how one can build a study to successfully
draw a conclusion from the data, leads the unassuming reader to believe that the
author has given a 'gold-standard' approach to solving this problem. What a liar.

```
State Policy Recommendations
At a minimum, the results presented in this Backgrounder demonstrate that efforts
to lower legal barriers for minors to receive cross-sex medical interventions
do not reduce suicide rates...
```
true
```
...and likely lead to higher rates among young people in states that adopt those
changes.
```
false, as far as we know. this is pure conjecture.
```
States that currently facilitate minors’ access to routine health care without
the consent of a parent or legal guardian should consider revising such policies.
States should also adopt parental bills of rights that affirm that parents have
primary responsibility for their children’s education and health, and that require
schools to receive permission from parents before administering health services to
students, including medication and gender-related counseling to students under age 18.
```
unfortuneatly, the author has utterly failed to prove that such would work. All
he has proved is that he loves Google Trends enough to marry and consumate with.

```
This research adds to the well-established wisdom that children are better off
if they are not allowed to make major life decisions without their parents’
involvement and permission.
```
THIS IS LITTERALLY A LOGICAL FALLACY! He's using a truism here!!!! This guy doesn't
know anything about anything when it comes to writing articles! He's just pandering
to his trans-hating audience here! hahahaha!!!!!!
```
In general, parents are better positioned than anyone else, including the
children themselves, to understand the needs of their children when making
important decisions.
```
thank you for pointing out yourself that you are using a generalization fallacy!
AND GUESS WHAT this is generalizing SO HARD RIGHT NOW, that all the youth kicked
out of their parents homes for being LGBT- who are now homeless- are NOT covered
by this AT ALL! This author does not, and never has lived in the real world. Sure
this *might* be true if we lived in a 1950's nuclear family american that also
**never** existed, but we obviously DO NOT! Too many parents straight up DO NOT
care about their kids, and to just magically expect so, is SILLY!

```
State policies that undermine this relationship between parents and children are
dangerous and should be repealed. Similarly, those who work with children in
professional capacities, including health, education, and counseling, should be
careful about substituting their own judgment for that of the parents. The
research presented here supports the view that children fare significantly better
when their parents have the authority to know about, and help to make, major
decisions for their own children.
```
*helicopter parrent alert* and none of these claims have been substantiated in
this article.


Lastly, given the danger of cross-sex treatments demonstrated in this Backgrounder,
states should tighten the criteria for receiving these interventions,
including raising the minimum eligibility age.
```
I also cannot believe I didn't catch this before, but the term 'cross-sex' is
super wrong, even in the context of this article. Sex is biological, while gender
is social. Any treatment done to a person's body does not change their sex, it
changes their social expression. A trans woman is still male. And NO ONE who actually
knows what they are talking about will argue otherwise.


All in all, this article #1 did not prove it's own thesis statement, #2 was deeply
inconsistent in perscriptions towards data collection and analysis, #3 completly
lazy (and one can only assume bigoted) in their mish-mash of academic terms,
colloquial terms, and made up terms, and #4 used politically charged language at
every corner (in the sneakiest ways possible) in order to make being trans appear
to be nothing more than a raw mental illness.

# 16 June 2022

# 17 June 2022

# 20 June 2022

# 21 June 2022

# 22 June 2022
I also cannot believe I didn't catch this before, but the term 'cross-sex' is
super wrong, even in the context of this article. Sex is biological, while gender

# 22 June 2022

# 23 June 2022

# 24 June 2022

# 27 June 2022

# 28 June 2022
buy a built in monitor/hub (look for a KVM display)

c/crontab
 1   # Edit this file to introduce tasks to be run by cron.
   1 # # Each task to run has to be defined through a single line
   2 # indicating with different fields when the task will be run
   3 # and what command to run for the task
   4 #
   5 # To define the time you can provide concrete values for
   6 # minute (m), hour (h), day of month (dom), month (mon),
   7 # and day of week (dow) or use '*' in these fields (for 'any').
   8 #
   9 # Notice that tasks will be started based on the cron's system # daemon's notion of time and timezones.
  10 #
  11 # Output of the crontab jobs (including errors) is sent through
  12 # email to the user the crontab file belongs to (unless redirected).
  13 #
  14 # For example, you can run a backup of all your user accounts
  15 # at 5 a.m every week with:
  16 # 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
  17 #
  18 # For more information see the manual pages of crontab(5) and cron(8)
  19 #
  20 # m h  dom mon dow   command
  21 6 * * * * ~/til/git-daily.sh

when I get home, I need to make sure that I get done what I need to get done

# 28 June 2022

# 29 June 2022

# 30 June 2022

# 01 July 2022

# 02 July 2022

FormFire (exploro's benefits site) security codes:
52105135
38550010
77150843
84052890

# 03 July 2022

# 04 July 2022

# 05 July 2022

# 06 July 2022
sqlx - when making a new database interaction, make sure that the URI is correct. for example, this is an example of what a good URI looks like:
`"postgres://postgres:password@localhost/postgres"`
whats after the slash is very important. That is the database name, not the table. Very important.
So this is using PostgreSQL, the username is 'postgres', the password is 'password' the server is pointing to 'localhost', and the database being used is 'postgres' from which, the
table 'todos' lives

# 07 July 2022

# 08 July 2022

# 09 July 2022
Rust notes:
1. A generic is a way of defining new types to make your code more clear. For example, if I wanted to draw on a map, I would use longitude and latitude. If I want
to make sure I'm using them both, I could parameterize data like so:

```rust
struct Point<Longetude, Latitude> {
    x: Longetude,
    y: Latitude,
}

fn main() {
    let both_integer = Point { x: 5, y: 10 };
    let both_float = Point { x: 1.0, y: 4.0 };
    let integer_and_float = Point { x: 5, y: 4.0 };
}
```
now of course this is not the greatest example, because :

# 19 July 2022

# 20 July 2022

# 21 July 2022

# 22 July 2022

# 23 July 2022

# 24 July 2022

# 25 July 2022

Drupal:
if I want to change something in Drupal, then I will need to login, go to structure, then go to taxonomy. Hit the the thing that starts with 't' (i think? whatever word it is mean an item in Drupal terms). That should then open up all the airlines. I click on edit for one. Then I add an image or make whatever changes I need to. In order to see the change, I will need to then open that menu and that saves the changes and save them. I then ask Andrew to make a new bundle and move it over to the server. I then can ssh into the ec2 we have up using `ssh drupal` (or maybe `ssh Bastion`, then from within that I run the ssh drupal command. That's what Zach did). At that point I should be able to find the directory (somewhere under '3rd party') and look at the changes I made to the code. If the code has been updated correctly, I should be able to see the changes I've made.

# 26 July 2022

# 27 July 2022
Todo: move exploro logo down and put space between 'powered by' and exploro logo (just a little!)

# 28 July 2022

# 29 July 2022

# 30 July 2022

# 31 July 2022

# 01 August 2022

Drupal todos:
1. get the same level of access Zach has
2. make custom logos sustainable
* turn every logo into a vector SVG. We should combine both the airline logo and ours into one SVG logo. If we don't, then we will have to do a log of custom
programming. Another thing we could do is lay the fonts on top of each other with exploro's being more subdued and in the backgrond, while keeping the airline's
in front and have it pop more.
3. make custom fonts sustainable. I think the way we are handling it is fine for right now with two files

EveryMundo:
1. use an Enum in node to pre-validate the request. do this like so:
```javascript
const EVERY_MUNDO_ENUM = Object.freeze({
    red: "yo!"
  })
```

2. this project should be completly sustainable. I want this plugin and the way we add it in to allow us to have an easier time adding in new plgins
* Use Axios-http in the most orthodox way possible.
* Do I ONLY base location off of ip-address? Or do I have them input it?
* On second thought, we are going to need a totally different mockup that allows for user input on all of the fields, and probably create enums for all of them in order
to prevent faulty user input...

# 01 August 2022

my task: recursively go through drupal's prvate airline config directory and replace all custom files in there with the files found on master while doing the bundle

dprupal/ CMS-Prod Directory:
web mods/ custom/ airline_bundler. Thats where the custom airline bundeler is from

The steps for running the bundel are located in line 347 AirlineBundelerForm.php. Find the execution path for prepare bundle

register oppperations

each file is namespaced

add or extend opperation

right now the generate app bundle is 

copyArchiveFiles needs work potentially

copy the gde-frontend files, merge the custom files, run the dist basically with npm run build. 
* conteny -> Airline Bundler

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 02 August 2022

# 03 August 2022

# 03 August 2022

# 03 August 2022

# 03 August 2022
when we merge to master, make a custom hook that talks to jenkins or something. It will go through all custom files for an airline and then write it to the local filesystem

# 03 August 2022

# 03 August 2022

# 03 August 2022

# 03 August 2022

# 03 August 2022

# 03 August 2022

# 04 August 2022

# 04 August 2022

# 04 August 2022

# 04 August 2022

# 04 August 2022

# 04 August 2022

# 04 August 2022

# 04 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 05 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 08 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 09 August 2022

# 10 August 2022

# 10 August 2022

# 10 August 2022

# 10 August 2022

# 10 August 2022

# 10 August 2022

# 10 August 2022

# 10 August 2022

# 10 August 2022

# 11 August 2022

# 11 August 2022

# 11 August 2022

# 11 August 2022

# 11 August 2022

# 11 August 2022

# 11 August 2022
I need to basically do the mobile view, prioritizing the video so that we are showing the whole thing instead of cutting off both sides and just showing the middle. I
also need to take a screenshot of the about component and send that over to Kaden

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 12 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 13 August 2022

# 15 August 2022

# 15 August 2022

# 15 August 2022

# 15 August 2022

# 15 August 2022

# 15 August 2022

# 15 August 2022

# 15 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 16 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022

# 17 August 2022
mobile: teal background
desktop: logo-large push down from top a bit
mobile only push search bar down below local date and time AND the dropdown AND add a close button for the dropdown (red x)
prevent the dropdown from hiding the logo
prevent scroll bars from showing on dropdown

# 18 August 2022

# 18 August 2022

# 18 August 2022

# 18 August 2022

# 18 August 2022

# 18 August 2022

# 18 August 2022

# 18 August 2022

# 19 August 2022

# 19 August 2022

# 19 August 2022

# 19 August 2022

# 19 August 2022

# 19 August 2022

# 19 August 2022

# 22 August 2022

# 22 August 2022

# 22 August 2022

# 22 August 2022

# 22 August 2022
we can run npm run dev and then pass a cli argument, we need to pull in custom javascript files
how do 
o
npm run dev airline=spirit
is there a file(s) for the airline passed?
investigate this a lot. will be using webpack

this project: styling, custom code, drupal stuff, make sp

# 23 August 2022

# 24 August 2022
under a gig for the size. the dedup puts us about under the line
ddh will find coppies of files regardless of the file name
every file has  been hashed. We need to find the dups and delete them. every hash is located in the database. We also need to rewrite all the locations our files we are using in order to point it at only one instead of the copies

custom js files task:
1. we will be using webpack to watch for the files we need. we will ONLY be adding in both the directories and the files if there are custom files we need to pull. All airline specific files will follow the same directory pattern as in the vanilla section from src down
2. make a README in this directory explaining all this jazz

# 25 August 2022
We are going to need to be okay with adding in more files if the import statements are busted...

# 26 August 2022

this one is without any added componets from anywhere: control
pluginArr [
   LoadablePlugin {
     handleEmit: [Function (anonymous)],
     writeAssetsFile: [Function (anonymous)],
     opts: {
       filename: 'loadable-stats.json',
       writeToDisk: undefined,
       outputAsset: true,
       path: undefined,
       chunkLoadingGlobal: '__LOADABLE_LOADED_CHUNKS__'
     },
     compiler: null
   },
   MiniCssExtractPlugin {
     options: { filename: '[name].css', chunkFilename: '[name].css' }
   },
   CopyPlugin {
     patterns: [ [Object], [Object], [Object] ],
     options: {}
   }
 ]



adding directly the modification: WORKING
pluginArr [
   LoadablePlugin {
     handleEmit: [Function (anonymous)],
     writeAssetsFile: [Function (anonymous)],
     opts: {
       filename: 'loadable-stats.json',
       writeToDisk: undefined,
       outputAsset: true,
       path: undefined,
       chunkLoadingGlobal: '__LOADABLE_LOADED_CHUNKS__'
     },
     compiler: null
   },
   MiniCssExtractPlugin {
     options: { filename: '[name].css', chunkFilename: '[name].css' }
   },
   CopyPlugin {
     patterns: [ [Object], [Object], [Object] ],
     options: {}
   },
   NormalModuleReplacementPlugin {
     resourceRegExp: /src\/app\/components\/react-components\/footer\.js/,
     newResource: '/home/harry/exploro/gde-frontend/custom_code/spirit/app/components/react-components/footer.js'
   }
 ]

[1]   NormalModuleReplacementPlugin {
[1]     resourceRegExp: /src\/app\/components\/react-components\/footer\.js/,
[1]     newResource: '/home/harry/exploro/gde-frontend/custom_code/spirit/app/components/react-components/footer.js'
[1]   },
[1]   NormalModuleReplacementPlugin {
[1]     resourceRegExp: /src\/app\/components\/test\.js/,
[1]     newResource: '/home/harry/exploro/gde-frontend/custom_code/spirit/app/components/test.js'
[1]   }


modular concept: this one is broken
pluginArr [
   LoadablePlugin {
     handleEmit: [Function (anonymous)],
     writeAssetsFile: [Function (anonymous)],
     opts: {
       filename: 'loadable-stats.json',
       writeToDisk: undefined,
       outputAsset: true,
       path: undefined,
       chunkLoadingGlobal: '__LOADABLE_LOADED_CHUNKS__'
     },
     compiler: Compiler {
       _pluginCompat: [SyncBailHook],
       hooks: [Object],
       name: 'node',
       parentCompilation: undefined,
       outputPath: '/home/harry/exploro/gde-frontend/public/dist/node',
       outputFileSystem: [NodeOutputFileSystem],
       inputFileSystem: [CachedInputFileSystem],
       recordsInputPath: undefined,
       recordsOutputPath: undefined,
       records: {},
       removedFiles: Set(0) {},
       fileTimestamps: Map(0) {},
       contextTimestamps: Map(0) {},
       resolverFactory: [ResolverFactory],
       infrastructureLogger: [Function: logger],
       resolvers: [Object],
       options: [Object],
       context: '/home/harry/exploro/gde-frontend',
       requestShortener: [RequestShortener],
       running: true,
       watchMode: true,
       _assetEmittingSourceCache: [WeakMap],
       _assetEmittingWrittenFiles: Map(0) {},
       watchFileSystem: [NodeWatchFileSystem],
       dependencies: undefined
     }
   },
   MiniCssExtractPlugin {
     options: { filename: '[name].css', chunkFilename: '[name].css' }
   },
   CopyPlugin {
     patterns: [ [Object], [Object], [Object] ],
     options: {}
   },
   NormalModuleReplacementPlugin {
     resourceRegExp: /src\/app\/components\/react-components\/footer\.js/,
     newResource: '/home/harry/exploro/gde-frontend/custom_code/spirit/app/components/react-components/footer.js'
   },
   NormalModuleReplacementPlugin {
     resourceRegExp: /src\/app\/components\/test\.js/,
     newResource: '/home/harry/exploro/gde-frontend/custom_code/spirit/app/components/test.js'
   }

# 27 August 2022

# 28 August 2022

# 29 August 2022

# 30 August 2022
make sure that Lucida Sans and Interstate are being used

# 31 August 2022

# 01 September 2022

# 02 September 2022

# 03 September 2022

# 05 September 2022

# 05 September 2022

# 06 September 2022
In order to add a checkbox, I actually added it in via the Drupal gui. I did add in the backend code in cms-prod/web/modules/custom/airline_bundler/src/Batch/AirlineBundlerBatch.php

# 06 September 2022

# 06 September 2022

# 07 September 2022
how to add a homepage to an airline in drupal:
1. click on "Content"
2. choose page
3 hit edit
4. scroll down, find the drop down, and change it from "Draft" to "Publish"
5. hit save
6. when you go to Airline bundler, you should be able to see the option to choose the chosen homepage in the drop down

    // Hide Exploro Logo
    if (isset($term->get('field_hide_exploro_logo')->value)) {
      $hideExploroLogo = $term->get('field_hide_exploro_logo')->value;
      $content .= "\nwindow.HIDE_EXPLORO_LOGO = ${hideExploroLogo}";
    } else {
      $content .= "\nwindow.HIDE_EXPLORO_LOGO = false";
    }

# 08 September 2022
build a component to select languages and then have it do something

# 09 September 2022

# 10 September 2022

# 11 September 2022

# 12 September 2022
const baseJson = {
  "name": "Nairobi 2",
  "url": "/nairobi-2",
  "nid": "494",
  "status": true,
  "in-flight": 0,
  "main-nav": "http://drupal.gdexplorer.com/sites/default/files/public/json/menu/main.json",
  "meta-canonical-url": "",
  "meta-title": " | Global Onboard Partners",
  "meta-description": "",
  "meta-og-image": "http://drupal.gdexplorer.com/sites/default/files/default-banner.png",
  "affinities": [
    {
      "id": "AffinitiesComponent",
      "name": "Affinities",
      "tid": "2",
      "label": "Destinations"
    }
  ],
  "airline": {
    "id": "AirlineComponent",
    "name": "Airline",
    "tid": "26",
    "label": "Global Destination Explorer",
    "image": [
      {
        "alt": "GDE logo",
        "width": "100",
        "height": "64",
        "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global%20Destination%20Explorer/images/airlines/OldGDELogo_1.png",
        "srcSetMobile": "",
        "srcSetWebpMobile": "",
        "srcSetJp2Mobile": "",
        "srcSetJxrMobile": "",
        "srcSetSvgMobile": "",
        "srcSetWebp": "",
        "srcSetJp2": "",
        "srcSetJxr": "",
        "srcSetSvg": ""
      }
    ],
    "image_secondary": [
      {
        "alt": "GDE logo",
        "width": "100",
        "height": "64",
        "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global%20Destination%20Explorer/images/airlines/OldGDELogo_2.png",
        "srcSetMobile": "",
        "srcSetWebpMobile": "",
        "srcSetJp2Mobile": "",
        "srcSetJxrMobile": "",
        "srcSetSvgMobile": "",
        "srcSetWebp": "",
        "srcSetJp2": "",
        "srcSetJxr": "",
        "srcSetSvg": ""
      }
    ]
  },
  "page_type": "destination",
  "components": [
    {
      "id": "AnchorLinksComponent",
      "name": "AnchorLinks",
      "title": "Nairobi",
      "url": "/nairobi-2",
      "list": [
        {
          "id": "AnchorLink-1",
          "name": "AnchorLink",
          "url": "/about-nairobi-0",
          "text": "About ",
          "className": "",
          "iconClass": ""
        },
        {
          "id": "AnchorLink-2",
          "name": "AnchorLink",
          "url": "/hotels-nairobi-0",
          "text": "Hotels",
          "className": "",
          "iconClass": ""
        },
        {
          "id": "AnchorLink-3",
          "name": "AnchorLink",
          "url": "/restaurants-nairobi-0",
          "text": "Restaurants",
          "className": "",
          "iconClass": ""
        },
        {
          "id": "AnchorLink-4",
          "name": "AnchorLink",
          "url": "/attractions-nairobi-0",
          "text": "Attractions",
          "className": "",
          "iconClass": ""
        }
      ],
      "active": ""
    },
    {
      "id": "HeroComponent",
      "name": "Hero",
      "continent": "Asia",
      "search_widget_type": "mini",
      "show_local_date": true,
      "show_local_time": true,
      "title": "Nairobi",
      "video": {
        "id": "VideoComponent",
        "name": "Video",
        "media_video_file": {
          "url": "http://drupal.gdexplorer.com/sites/default/files/2021-12/Nairobi%20Hero.mp4"
        }
      },
      "imgSrc": {
        "alt": "nairobi",
        "width": "1440",
        "height": "630",
        "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/banner/image/1440_630_Home.png",
        "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/banner/mobile/375_374_Home.png",
        "srcSetWebpMobile": "",
        "srcSetJp2Mobile": "",
        "srcSetJxrMobile": "",
        "srcSetSvgMobile": "",
        "srcSetWebp": "",
        "srcSetJp2": "",
        "srcSetJxr": "",
        "srcSetSvg": ""
      },
      "timezone": "Africa/Nairobi"
    },
    {
      "id": "ContentComponent",
      "name": "Content",
      "body": "<p>Nairobi is the capital and largest city of Kenya. The name comes from the Maasai phrase Enkare Nairobi, which translates to \"cool water\". This is in reference to the Nairobi River. The city proper had a population of 4.4 million in 2019, while the metropolitan area had a population of 9.3. Nairobi receives many tourists anxious to experience all it has to offer, referring to it as “The Green City in the Sun”. Nairobi is an established location for culture and business. The Nairobi National Park, which has a huge game reserve is also located in Nairobi.</p>\r\n",
      "call_to_action": {
        "uri": "/about-nairobi-0",
        "title": "Explore Nairobi",
        "options": []
      }
    },
    {
      "id": "GalleryComponent",
      "name": "Gallery",
      "background": "secondary-1",
      "imgSrc": [
        {
          "id": "GalleryImagesComponent",
          "name": "GalleryImages",
          "imgSrc": {
            "alt": "Nairobi",
            "width": "947",
            "height": "646",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/image/947_646_Gallery_0.png",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/mobile/947_646_Gallery_0.png",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          }
        },
        {
          "id": "GalleryImagesComponent",
          "name": "GalleryImages",
          "imgSrc": {
            "alt": "Nairobi",
            "width": "947",
            "height": "646",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/image/947_646_Gallery2_1.png",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/mobile/947_646_Gallery2_1.png",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          }
        },
        {
          "id": "GalleryImagesComponent",
          "name": "GalleryImages",
          "imgSrc": {
            "alt": "Nairobi",
            "width": "947",
            "height": "646",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/image/947_646_Gallery3_0.png",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/mobile/947_646_Gallery3_0.png",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          }
        },
        {
          "id": "GalleryImagesComponent",
          "name": "GalleryImages",
          "imgSrc": {
            "alt": "Nairobi",
            "width": "947",
            "height": "646",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/image/947_646_Gallery4_1.png",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/mobile/947_646_Gallery4_1.png",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          }
        },
        {
          "id": "GalleryImagesComponent",
          "name": "GalleryImages",
          "imgSrc": {
            "alt": "Nairobi",
            "width": "947",
            "height": "646",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/image/947_646_Gallery5_1.png",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/gallery/mobile/947_646_Gallery5_1.png",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          }
        }
      ]
    },
    {
      "id": "CardsComponent",
      "name": "Cards",
      "background": "secondary-1",
      "best_of": true,
      "filters": {
        "tabs": [
          {
            "id": "hotels-17929",
            "url": "",
            "text": "Hotels",
            "className": "",
            "iconClass": "icon-hotels"
          },
          {
            "id": "restaurants-17929",
            "url": "",
            "text": "Restaurants",
            "className": "",
            "iconClass": "icon-restaurants"
          },
          {
            "id": "attractions-17929",
            "url": "",
            "text": "Attractions",
            "className": "",
            "iconClass": "icon-attractions"
          }
        ]
      },
      "cards": [
        {
          "id": "card-17929-1",
          "name": "Slide",
          "theme": "default",
          "badges": [
            {
              "id": "hotels-17929",
              "text": "",
              "icon": "icon-hotels",
              "theme": ""
            }
          ],
          "continent": "Africa",
          "title": "Trademark Hotel",
          "imgSrc": {
            "alt": "Trademark",
            "width": "346",
            "height": "268",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Trademark-thumbnail2_2_0.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Trademark-thumbnail2_2_0.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/trademark-hotel-2",
          "buttonText": "",
          "tags": [
            "hotels-17929"
          ]
        },
        {
          "id": "card-17929-2",
          "name": "Slide",
          "theme": "default",
          "badges": [
            {
              "id": "restaurants-17929",
              "text": "",
              "icon": "icon-restaurants",
              "theme": ""
            }
          ],
          "continent": "Africa",
          "title": "Temptations Ice Cream & Coffee",
          "imgSrc": {
            "alt": "Temptations Ice Cream & Coffee",
            "width": "346",
            "height": "268",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/346_268_Temptations_1_0.png",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/346_268_Temptations_1_0.png",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/temptations-ice-cream-coffee",
          "buttonText": "",
          "tags": [
            "restaurants-17929"
          ]
        },
        {
          "id": "card-17929-3",
          "name": "Slide",
          "theme": "default",
          "badges": [
            {
              "id": "attractions-17929",
              "text": "",
              "icon": "icon-attractions",
              "theme": ""
            }
          ],
          "continent": "Africa",
          "title": "Go Places Africa DMC",
          "imgSrc": {
            "alt": "Go Places Africa DMC",
            "width": "346",
            "height": "268",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/346_268_GoPlaces.png",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/346_268_GoPlaces.png",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/go-places-africa-dmc-0",
          "buttonText": "",
          "tags": [
            "attractions-17929"
          ]
        }
      ],
      "title": "The Best Of Nairobi",
      "carousel-theme": "carousel"
    },
    {
      "id": "CardsComponent",
      "name": "Cards",
      "background": "secondary-1",
      "cards": [
        {
          "id": "card-17940-1",
          "name": "Slide",
          "theme": "default",
          "badges": [
            {
              "id": "hotels-17940",
              "text": "",
              "icon": "icon-hotels",
              "theme": ""
            }
          ],
          "continent": "Africa",
          "title": "Trademark Hotel",
          "imgSrc": {
            "alt": "Trademark",
            "width": "346",
            "height": "268",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Trademark-thumbnail2_2_1.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Trademark-thumbnail2_2_1.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/trademark-hotel-2",
          "buttonText": "",
          "tags": [
            "hotels-17940"
          ]
        },
        {
          "id": "card-17940-2",
          "name": "Slide",
          "theme": "default",
          "continent": "Africa",
          "title": "Temptations Ice Cream & Coffee",
          "imgSrc": {
            "alt": "Temptations Ice Cream & Coffee",
            "width": "346",
            "height": "268",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/temptations-ice-cream-coffee.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/temptations-ice-cream-coffee.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/temptations-ice-cream-coffee",
          "buttonText": ""
        },
        {
          "id": "card-17940-3",
          "name": "Slide",
          "theme": "default",
          "badges": [
            {
              "id": "attractions-17940",
              "text": "",
              "icon": "icon-attractions",
              "theme": ""
            }
          ],
          "continent": "Africa",
          "title": "Go Places Africa DMC",
          "imgSrc": {
            "alt": "Go Places Africa Dmc",
            "width": "346",
            "height": "268",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/go-places-africa-dmc.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/go-places-africa-dmc.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/go-places-africa-dmc-0",
          "buttonText": "",
          "tags": [
            "attractions-17940"
          ]
        }
      ],
      "title": "Check These Out",
      "carousel-theme": "carousel"
    },
    {
      "id": "CardsComponent",
      "name": "Cards",
      "background": "primary",
      "cards": [
        {
          "id": "card-17951-1",
          "name": "Slide",
          "theme": "background",
          "continent": "Europe",
          "location": {
            "langcode": null,
            "country_code": "MY",
            "administrative_area": null,
            "locality": "Ipoh",
            "dependent_locality": null,
            "postal_code": null,
            "sorting_code": null,
            "address_line1": null,
            "address_line2": null,
            "organization": null,
            "given_name": null,
            "additional_name": null,
            "family_name": null,
            "country_name": "Malaysia"
          },
          "subTitle": "Netherlands",
          "title": "Amsterdam",
          "imgSrc": {
            "alt": "Amsterdam",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Amsterdam-Footer-Thumbnail_9.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Amsterdam-Footer-Thumbnail_9.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/amsterdam",
          "buttonText": ""
        },
        {
          "id": "card-17951-2",
          "name": "Slide",
          "theme": "background",
          "continent": "Asia",
          "subTitle": "Thailand",
          "title": "Bangkok",
          "imgSrc": {
            "alt": "Bangkok",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Bangkok-Thumbnail_9.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Bangkok-Thumbnail_9.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/bangkok-2",
          "buttonText": ""
        },
        {
          "id": "card-17951-3",
          "name": "Slide",
          "theme": "background",
          "continent": "Australia",
          "subTitle": "Australia",
          "title": "Darwin",
          "imgSrc": {
            "alt": "Darwin",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Darwin-Footer-Thumbnail_44.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Darwin-Footer-Thumbnail_43.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/darwin",
          "buttonText": ""
        },
        {
          "id": "card-17951-4",
          "name": "Slide",
          "theme": "background",
          "continent": "Asia",
          "subTitle": "India",
          "title": "Delhi",
          "imgSrc": {
            "alt": "Delhi",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Delhi-Footer-Thumbnail_6.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Delhi-Footer-Thumbnail_6.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/delhi-0",
          "buttonText": ""
        },
        {
          "id": "card-17951-5",
          "name": "Slide",
          "theme": "background",
          "continent": "Asia",
          "location": {
            "langcode": null,
            "country_code": "MY",
            "administrative_area": null,
            "locality": "Langkawi",
            "dependent_locality": null,
            "postal_code": null,
            "sorting_code": null,
            "address_line1": null,
            "address_line2": null,
            "organization": null,
            "given_name": null,
            "additional_name": null,
            "family_name": null,
            "country_name": "Malaysia"
          },
          "subTitle": "United Arab Emirates",
          "title": "Dubai",
          "imgSrc": {
            "alt": "Dubai",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Dubai-Footer-Thumbnail_7.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Dubai-Footer-Thumbnail_7.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/dubai-0",
          "buttonText": ""
        },
        {
          "id": "card-17951-6",
          "name": "Slide",
          "theme": "background",
          "continent": "Europe",
          "subTitle": "Germany",
          "title": "Hamburg",
          "imgSrc": {
            "alt": "Hamburg",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Hamburg_Footer_Thumbnail_60.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Hamburg_Footer_Thumbnail_60.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/hamburg",
          "buttonText": ""
        },
        {
          "id": "card-17951-7",
          "name": "Slide",
          "theme": "background",
          "continent": "Asia",
          "subTitle": "Vietnam",
          "title": "Ho Chi Minh City",
          "imgSrc": {
            "alt": "Ho Chi Minh",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Ho_Chi_Minh-Footer-Thumbnail_5.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Ho_Chi_Minh-Footer-Thumbnail_5.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/ho-chi-minh-city",
          "buttonText": ""
        },
        {
          "id": "card-17951-8",
          "name": "Slide",
          "theme": "background",
          "continent": "Australia",
          "subTitle": "Australia",
          "title": "Hobart",
          "imgSrc": {
            "alt": "Hobart",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Hobart-Footer-Thumbnail_43.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Hobart-Footer-Thumbnail_42.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/hobart",
          "buttonText": ""
        },
        {
          "id": "card-17951-9",
          "name": "Slide",
          "theme": "background",
          "continent": "Asia",
          "location": {
            "langcode": null,
            "country_code": "MY",
            "administrative_area": null,
            "locality": "Bengton",
            "dependent_locality": null,
            "postal_code": null,
            "sorting_code": null,
            "address_line1": null,
            "address_line2": null,
            "organization": null,
            "given_name": null,
            "additional_name": null,
            "family_name": null,
            "country_name": "Malaysia"
          },
          "subTitle": "Malaysia",
          "title": "Kuala Lumpur",
          "imgSrc": {
            "alt": "Kuala Lumpur",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Kuala%20Lumpur-Thumbnail_4.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Kuala%20Lumpur-Thumbnail_4.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/kuala-lumpur-2",
          "buttonText": ""
        },
        {
          "id": "card-17951-10",
          "name": "Slide",
          "theme": "background",
          "continent": "Europe",
          "location": {
            "langcode": null,
            "country_code": "MY",
            "administrative_area": null,
            "locality": "Pahang",
            "dependent_locality": null,
            "postal_code": null,
            "sorting_code": null,
            "address_line1": null,
            "address_line2": null,
            "organization": null,
            "given_name": null,
            "additional_name": null,
            "family_name": null,
            "country_name": "Malaysia"
          },
          "subTitle": "United Kingdom",
          "title": "London",
          "imgSrc": {
            "alt": "London",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/London-Footer-Thumbnail_8.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/London-Footer-Thumbnail_8.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/london-0",
          "buttonText": ""
        },
        {
          "id": "card-17951-11",
          "name": "Slide",
          "theme": "background",
          "continent": "Australia",
          "subTitle": "Australia",
          "title": "Melbourne",
          "imgSrc": {
            "alt": "Melbourne",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Melbourne-Footer-Thumbnail_41.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Melbourne-Footer-Thumbnail_41.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/melbourne",
          "buttonText": ""
        },
        {
          "id": "card-17951-12",
          "name": "Slide",
          "theme": "background",
          "continent": "North America",
          "subTitle": "Mexico",
          "title": "Mexico City",
          "imgSrc": {
            "alt": "Mexico",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Mexico%20City-Footer-Thumbnail_9.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Mexico%20City-Footer-Thumbnail_8.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/mexico-city",
          "buttonText": ""
        },
        {
          "id": "card-17951-13",
          "name": "Slide",
          "theme": "background",
          "continent": "North America",
          "subTitle": "United States",
          "title": "New York",
          "imgSrc": {
            "alt": "New York",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/New%20York-Footer-Thumbnail_8.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/New%20York-Footer-Thumbnail_8.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/new-york",
          "buttonText": ""
        },
        {
          "id": "card-17951-14",
          "name": "Slide",
          "theme": "background",
          "continent": "Europe",
          "subTitle": "Norway",
          "title": "Oslo",
          "imgSrc": {
            "alt": "Oslo",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Oslo-Footer-Thumbnail_9.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Oslo-Footer-Thumbnail_9.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/oslo",
          "buttonText": ""
        },
        {
          "id": "card-17951-15",
          "name": "Slide",
          "theme": "background",
          "continent": "Europe",
          "subTitle": "France",
          "title": "Paris",
          "imgSrc": {
            "alt": "Paris",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Paris-Footer-Thumbnail2_27.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Paris-Footer-Thumbnail2_27.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/paris",
          "buttonText": ""
        },
        {
          "id": "card-17951-16",
          "name": "Slide",
          "theme": "background",
          "continent": "North America",
          "subTitle": "United States",
          "title": "Salt Lake City",
          "imgSrc": {
            "alt": "Salt Lake",
            "width": "740",
            "height": "900",
            "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/image/Salt%20Lake%20City-Footer-Thumbnail_9.jpg",
            "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/slide/mobile/Salt%20Lake%20City-Footer-Thumbnail_9.jpg",
            "srcSetWebpMobile": "",
            "srcSetJp2Mobile": "",
            "srcSetJxrMobile": "",
            "srcSetSvgMobile": "",
            "srcSetWebp": "",
            "srcSetJp2": "",
            "srcSetJxr": "",
            "srcSetSvg": ""
          },
          "href": "/salt-lake-city",
          "buttonText": ""
        }
      ],
      "title": "Cities you might also be interested in",
      "carousel-theme": "carousel"
    },
    {
      "id": "AdvertisingComponent",
      "name": "Advertising",
      "internal_link": {
        "uri": "/tour-operators-society-kenya",
        "title": "",
        "options": []
      },
      "imgSrc": {
        "alt": "tsok",
        "width": "1140",
        "height": "220",
        "srcSet": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/advertising/image/ad%20banner-desktop%20%282%29_5.png",
        "srcSetMobile": "http://drupal.gdexplorer.com/sites/default/files/Global-Destination-Explorer/images/advertising/mobile/ad%20banner-mobile_5.png",
        "srcSetWebpMobile": "",
        "srcSetJp2Mobile": "",
        "srcSetJxrMobile": "",
        "srcSetSvgMobile": "",
        "srcSetWebp": "",
        "srcSetJp2": "",
        "srcSetJxr": "",
        "srcSetSvg": ""
      }
    },
    {
      "id": "FrontendFormComponent",
      "name": "FrontendForm",
      "form_name": "formSubscribe",
      "title": "Get discounts on restaurants, hotels, attractions and get inspiration for your next holiday"
    }
  ],
  "udo": null,
  "meta": {
    "languages": {
      "en-us": {
        "components_5_title": "Get discounts on restaurants, hotels, attractions and get inspiration for your next holiday"
      },
      "nw": {
        "components_8_title": "norwegian string",
      }
    }
  }
}

# 12 September 2022

# 13 September 2022
If I were to deploy a new JamboJet bundle:
build bundel in drupal gui
move the zipped bundle to the correct directory on the ec2:
ssh ec2-user@drupal
cd /var/www/drupal/private/bundles
mv Jambojet-YY-MM-DD-randomnumber.zip /var/www/html/jambojet/3rdparty
unzip Jambojet-YY-MM-DD-randomnumber.zip
mv gde gde8 # gde[next number] (for example, if the last one is 5, then you would instead name it gd6)
cd gde
(this may not be a step for long, but currently we need to check the config file) cat config.js
make sure every line has valid config key pair values in there. fix them if they don't
Check the site. newest bundle should be live

# 14 September 2022
data/json/menu/footer

# 14 September 2022

# 14 September 2022

# 14 September 2022

# 14 September 2022

# 14 September 2022

# 14 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 15 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022
250 life insurance
28 paycheck protection
500 roth ira

mutual investment: $1250

total: ~$2020

ameri

roths 1k
defensive planning 280
non-qualified 720

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 16 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 17 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 18 September 2022

# 19 September 2022

# 19 September 2022

# 19 September 2022

# 19 September 2022

# 19 September 2022

# 19 September 2022

# 19 September 2022

# 19 September 2022

# 20 September 2022

# 20 September 2022

# 20 September 2022

# 20 September 2022
test

# 20 September 2022
test
test
test
test dev50 haha
test git
prod test

# 21 September 2022
inventory notes - matthias rieger
we are going to stick with zoho until after Oct 6th (launch day)
we are prob going to use salesforce after that...

there are left overs containing GOBP stuff we need to update
we need a tool that will show a breakdown of how many promotions we are offering

when do we want them to start selling?:
October 6th

write airline_config/airline_name/dist

generation process:
0. read through AirlineBundleBatch.php and document the flow of how we build bundles
1. the main idea is that we essentially have our assets (photos, text, videos, etc) and we have our dist (our bundled )

# 21 September 2022
cc- custom code directory

# 21 September 2022

# 21 September 2022

# 21 September 2022

# 21 September 2022

# 22 September 2022

# 22 September 2022

# 22 September 2022

# 22 September 2022

# 22 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022
cleanest way: use an api on drupal

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 23 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 24 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022
server folders: aix, airasia, exploro, exploro-new, kenya-airways, spirit, wideroe, explorogroup, jambojet, sales, vistara

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 25 September 2022

# 26 September 2022
submitform in the form folnder in that file put the new code inside the service folder in a new file...
look at prepare bundle... 
put a static guy that has all the parameters batchbuilder = BatchBuilder::(params)

exploro.com/bestrestaurant/{insert 1 of 240 cities + 1 for the main page}

all we are doing is dropping in pre-built code 

have a custom dropdown on the side that contains all 240 locations ( maybe a search bar too )

react with mongodb 

submit:
1. 

we need to make a drop down for all 240 locations
wee may need to look into lang translations? maybe talk about that with kaden
october 15th
the tech/cdn that we will be working on is Gigg

# 27 September 2022

# 28 September 2022
1. add a location block in nginx that will 

# 29 September 2022

# 30 September 2022

# 01 October 2022

# 03 October 2022
steps for making a new dist and then moving it into the ec2 in the right place
```
cd ~/exploro/gde-frontend/public
npm run build
scp -r dist ec2-user@10.0.21.116:/var/www/drupal/private/Archive
```

celebrate web app pages:
1. home page/ welcome page
2. products page (show all products with fast filtering)
3. login page
4. checkout page

custom party builder (flow kinda like wix.com):
1. what size of party: based on the size, there will be pages that ask specfics about other item:
2. venue page
3. food page
4. music/entertainment page
5. a final page (either add the selected options to checkout or )

# 04 October 2022

# 05 October 2022

move dist into ec2 drupal:
`scp -r dist ec2-user@10.0.21.116:/var/www/drupal/private/Archive`

# 06 October 2022

# 07 October 2022

# 10 October 2022

# 11 October 2022

# 12 October 2022

# 13 October 2022

EXP-749
mock will setup a user identifier af 12345 and then seed the data
puts something on the session that will allow the user to make api queries
in staging, the login hits the auth-controler-auth-endpoint
we want to bypass hitting aws when sigingin
the bug that just popped up, (internal server error [the bug that pops up in the node-manager-mock logs: Error Handler: handleAuthentication - Cannot read properties of undefined (reading 'cognitoUser') - October 13, 2022 at 9:55 PM UTC]), needs to be solved:
look here: lib/integrations/awscognito/awscognitoprovider.js line 179 getUser?
and here: controllers/authController.js line 11
and here: routes.js line 48
the function getUser is suss look more in
AuthProvider implements the 
checks if we are logged in, if not will reoute to login
handleauthentiocation function needs to be fixed maybe

objective B:
we should also mock zoho

how we mock stuff:
awsCognitoProvider line 125

index.js serverMode is created. just checks if we are on mock, prod, or staging(dev)

authController.js line 59?, line 170 signinwithcustomtoken

# 14 October 2022

# 15 October 2022

# 16 October 2022

# 17 October 2022

# 17 October 2022
EXP-749
the problem is happening at AwsCognitoProvider.js line 180. In order to fix it, I should make a dummy cognito response

`docker run --name rust-mongo -p 8089:27017 -d mongo:latest`

# 18 October 2022

# 19 October 2022

# 20 October 2022


Deserializing means to convert your on-wire data(often times a JSON-encoded string) into a datatype(often times a struct).
Serialization is to transform some structured data, often of an arbitrary structure, into a form that can be transmitted as a sequence, from one application to another.

# 21 October 2022

# 22 October 2022

# 23 October 2022

# 24 October 2022

# 24 October 2022
put authprovider in the services folder instead

# 25 October 2022
we will put everything inot a private registry on aws and then pull from there in the template folder
eventually we will be pushing our images to Thales' private registry

When we are ready, we will have another meeting where we will talk about next steps with the more-live tech from thales

thales notes:
1. I need to make sure I have a kubernetes config file on my local at ~/.kube/config. I can get these values from the virtual machine at ./vagrant/.osdk/kube-config
2. important commands:
* ./osdk info
* ./osdk ssh
* get the password and username for the ceph dashboard: ./osdk credentials ceph-dashboard
* merge the vm and my local's kubernetes set up?: ./osdk merge
* list all kubernetes pods: kubectl get pod
* i had a problem where my vm was not getting the .kube directory and neither was my local machine. the thing that fixed this for me was running two commands:
  - vagrant destroy
  - vagrant up
  I basically just needed to try the vagrant provissioning process again
3. the ip address is located within /etc/hosts HHOWEVER, it's broken. I need to fix that file so that my hosts work. I need to do that in order to use the addresses provided by the
.osdk info command. this url is broken for me until I can fix my etc/hosts file: http://192.168.100.2/pax
4 important urls:
* http://osdk-exploro.io:8080/
* http://192.168.100.2:30001/#/rgw/bucket
* https://kubebyexample.com/learning-paths/kubernetes-fundamentals/what-kubernetes-3-minutes
* https://helm.sh/docs/

node notes:
1. template cration stuff, at the end (when the continue button is clicked) the answers provided goes through the process and picks and chooses exactly what data should be added in teh users json in the db

2. at a certain time, the json is checked. meta prorety canupload video is checked. there will be a video and abackup image. the builder needs to then take that array wa talaked abeot exactly what kind of aray needs to be pulled. based on weather or not the video is enabled, the video willbe shown
3 for all videos, we NEED to set a backup video. ONLY for the hero image. make it required that if a video is selected, an image also needs to be selected.
4. keep canUploadVideo! this is set by other stuff
5. the server needs to take a record of the package mappnig. takes it from frontend and saves it to drupal via json and then can be processed by exploro web app. jsonconverter.js?
6. update the check for when it allows video to be uploadede. only allow 

package_month_year_mapping

# 25 October 2022
change it back and forth from paid and pending to test purchasing new stuff
apicapaignts new
microsites and campaigns are the tables
delete from them every time I want another campaign

in order to purchase a campaign, I need to do this:
1. set up campaign portal frontend and backend
2. set up node mananger with docker compose up -d and npm run dev
3. go to localhost:3000
4. make a new user (must be a unique user each time)
5. purchase a new campaign
6. pay for it here: http://localhost:7575/database/globaldestinationexplorer-default-rtdb/data and change the status to from "pending" to "paid"
7. when I want to pay for another campaign, all I need to do is switch the status from "paid" to "pending" back to "paid"
8. I also need to delete the new record from the node-manager database from the microsites and campaigns tables in order to get everything looking to tho code like we have a fully newrecord
9. in order to see any changes, I need to pull the newest code in ad_portal_part_a_functions (or campain_backend), if that doesnt change, then I need to run npx tsc 

# 26 October 2022

# 26 October 2022

# 26 October 2022

# 26 October 2022

# 26 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 27 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 28 October 2022

# 29 October 2022

# 29 October 2022

# 29 October 2022

# 29 October 2022

# 29 October 2022

# 29 October 2022

# 30 October 2022

# 30 October 2022

# 30 October 2022

# 30 October 2022

# 30 October 2022

# 30 October 2022

# 31 October 2022

# 31 October 2022

# 31 October 2022

# 31 October 2022

# 31 October 2022

# 31 October 2022
self serve something and reviews

# 31 October 2022

# 31 October 2022

# 01 November 2022

I moved the dist from my local machine to the ec2. here's how I did it:
checked out the main branch of gde-frontend/exploro-web-app and pull down
setup my .env like so: 
BUILD_NUMBER = "1"
PORT = 8082


# use for local reading from prod

# BASE_DATA = "https://drupal.gdexplorer.com/sites/default/files/public"
# BASE_CMS = "https://drupal.gdexplorer.com"
# BASE_URL = ""
# ASSET_PATH=""

# use for local reading from staging

# BASE_DATA = "https://drupal.gdexplorer.com:444/sites/default/files/public"
# BASE_CMS = "https://drupal.gdexplorer.com:444"
# BASE_URL = ""
# ASSET_PATH=""

# use for local reading from local cms

# BASE_DATA = "http://localhost:7005/sites/default/files/public"
# BASE_CMS = "http://localhost:7005"
# BASE_URL = ""
# ASSET_PATH=""
# USE_LOCAL_CMS=1


# use for prod builds

BASE_DATA = "https://drupal.gdexplorer.com/sites/default/files/public"
BASE_CMS = "https://drupal.gdexplorer.com"
BASE_URL = "/3rdparty/gde"
ASSET_PATH="/3rdparty/gde"
3. cd gde-frontend/public
4. ssh ec2-user@10.0.21.116 and cd /var/www/drupal/private/Archive and rm -rf dist
5. back on local: scp -r dist ec2-user@10.0.21.116:/var/www/drupal/private/Archive

# 02 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 03 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 04 November 2022

# 05 November 2022

# 05 November 2022

# 05 November 2022

# 05 November 2022

# 05 November 2022

# 05 November 2022

# 05 November 2022

# 05 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 06 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 07 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022

# 08 November 2022
