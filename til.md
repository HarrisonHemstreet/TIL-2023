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
3. also make sure that the "port" word is removed from rsis-docker/webserver-dev-20.
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

# 30 November 2021
