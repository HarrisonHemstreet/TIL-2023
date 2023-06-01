# 26 December 2022
check the slurpFile.js basically, the error is popping up bc the pathing is wrong since it's in a docker container. make a pr that will fix the issue and submit it via aws github

# 27 December 2022

# 28 December 2022

# 29 December 2022

# 30 December 2022

# 03 January 2023

# 04 January 2023

# 05 January 2023
1. majority of rust is statically dispatched
2. you write a trait when you feel like you need to
why did you put derive default at the top of the playground file

# 06 January 2023

# 07 January 2023

# 09 January 2023

# 10 January 2023

# 11 January 2023
AWS: we are using dev-exploro-app and prod-exploro-app for the new stuff
we are using the s3 bucket: exploro-backend-ui-stage us-west-2 and global. most of our stuff is in us-west-1&2

# 11 January 2023

# 12 January 2023

# 13 January 2023

# 14 January 2023

# 15 January 2023

# 16 January 2023

# 17 January 2023

# 19 January 2023

# 20 January 2023

# 21 January 2023

# 22 January 2023

# 23 January 2023

# 24 January 2023

# 25 January 2023

# 26 January 2023

# 27 January 2023

Capitilize all headings
destination of the day has grammatical errors- we can put anything in there. just needs to be grammatically correct
explore vistara destination by city

# 30 January 2023

# 31 January 2023

# 01 February 2023

# 02 February 2023

# 03 February 2023

# 04 February 2023

# 06 February 2023

# 07 February 2023

# 08 February 2023

# 09 February 2023

# 10 February 2023

# 13 February 2023

# 14 February 2023

# 15 February 2023

# 24 February 2023

# 25 February 2023

# 26 February 2023

# 27 February 2023

# 28 February 2023

# 01 March 2023

# 02 March 2023

# 03 March 2023

# 05 March 2023

# 07 March 2023

# 08 March 2023

# 09 March 2023

# 10 March 2023

# 11 March 2023

# 12 March 2023

# 13 March 2023

# 14 March 2023

# 15 March 2023

# 16 March 2023

# 17 March 2023

# 18 March 2023

# 19 March 2023

# 20 March 2023

# 21 March 2023

# 22 March 2023

# 23 March 2023

# 24 March 2023

# 25 March 2023

# 27 March 2023

# 28 March 2023

# 29 March 2023

the ds_immage and ds_imagefile will always be removed.
1. delete, just testing
2. addedit, check the column list, make suser that id_mmedia and id_image are optional params (only include if necessary)
3. make sure to validate that id_media actually exists 
modify the base array of data...
^ id_media acutally im_image
look at line 63 of Norman's new changes on system/activity, that's how we are essentially determining if we will be adding data or adding it.

# 30 March 2023

# 31 March 2023

# 03 April 2023

# 04 April 2023
1. upload files after changing name to uuid
2. fix validateData function on all PRs to have id media check, also remove the idmedia field in the columns object in the processAction

# 05 April 2023
check default props?
check to see if something is hard coded somewhere

places where links are broken:
* "The Brooklyn Bridge"

# 05 April 2023

# 06 April 2023

# 10 April 2023

# 11 April 2023
I used this SQL to get all unique destinationtypes (in english and not a UUID).
```sql
select distinct
  desttype.ds_name ds_destinationtype_elementtype
from
  (
    destination destitem
      left outer join
        media m on destitem.id_mediacard = m.id_media
  )
inner join
  destinationtype desttype
on
  destitem.id_destinationtype = desttype.id_destinationtype
and
  destitem.en_state >=0;
```

I got the SQL from just following the endpoint and seeing how it was all generated. The way you get more data into your response is by making sure #1,
we are selecting for it in our SQL query, AND #2, making sure the response enum/type contains the data column we want.

# 12 April 2023

we need to replace node-manager...
we need to merge the frontend from microsite and campaign asap
take the tables, functionality etc, and move them over to a postgres database.
bc it's nosql in firebase, we need to work to move things over
take node-manager and campaign-portal-backend, and the db that gets spun up and do a mapping
basically translate the nosql tables over to postgres tables
then implement that

admin portal
microsite creator

we will collapse the microsite stuff.

admin portal will be interacting with a lot of stuff that the cust portal also interacts with.

if possible, make  adistinction between stuff that is either only admin, only customer, or both

start by going through by spinning up the local emulators and then go through and document stuff.

Get the local emulator up and running and follow the path the data takes when purchasing a campaign.

maybe look into if firebase has a "describe all " function/functionality that will just return the table definitions for each

# 13 April 2023

change the init.sql

# 14 April 2023

# 15 April 2023

# 17 April 2023

# 18 April 2023

# 19 April 2023

# 21 April 2023

# 24 April 2023

# 25 April 2023

# 26 April 2023

# 27 April 2023

# 28 April 2023

# 29 April 2023

# 01 May 2023

# 02 May 2023

# 03 May 2023

# 04 May 2023

# 05 May 2023

# 08 May 2023

# 09 May 2023

# 10 May 2023

# 11 May 2023

# 12 May 2023

# 13 May 2023

# 15 May 2023

# 16 May 2023

# 17 May 2023

# 18 May 2023

# 19 May 2023

# 20 May 2023

# 22 May 2023

salesforce needs to integrate
make a list of things we need to validate in ad portal. get all funct in gohighlevel
what ways can we extend this tool? can we create content for social media w/ this tool? can we manage several social media tools at the same time?

# 23 May 2023

We can deprecate the microsite portal / campaign portal / ad portal. The Backend UI is going to do it all. we just need to build a payment gateway that will give access
to the backend UI when they pay

# 24 May 2023

# 25 May 2023

# 30 May 2023
new thing:
$3600/year -> gohighlevel
$12/year + $180/year (scales higher depending on use)-> twilio
$180/month -> mailgun
$320 - $468/year -> webflow
$12/year or more -> domain name
$600/year -> zappier
$150 (one time) -> themeforest (dbui)
$240/year -> Airtable

just gohighlevel + webflow:
$3600 + 320 = $3920 / year

everything above (low end):
$5294

everything above (high end):
$5442

misc:
$2880 (20 employees / year) -> g-suite: (google email)
$??? -> google maps api?
static map: 400k req = $680
dynamic map: 100k req = $700

todo:
1. call up gohighlevel and ask which membership we would need
2. have joe create a time estimate / money estimate for setting up gohighlevel/other backend stuff by outside workers
3. ask someone to show how we ship our code to spirit
4. create the "perfect" schema for the cms/database. think about how we can create a server that DOES NOT require the whole gparent, parent etc we have now

time estimates from joe:
frontend only (w/ webflow CMS):
  1. by yourself, no help, frontend only, webflow: 5 work days or 40 hours
  2. theme forest template: 5 work days or 40 hours
  3. other help: 5 work days or 40 hours

backend:
  1. best case: 2 weeks + 1 week of bug fixing
  2. worst case: 5 weeks + 2 weeks of bug fixing

best case:
2 weeks frontend
2 weeks backend
2 weeks testing
--launch--
2 weeks for stakeholder's revisions

worse case:
4 weeks frontend (we get to the end of the 2 weeks, realize that we need to ditch webflow's CMS and go with Airtable)
6 weeks backend (if gohighlevel ends up being tough)
2 weeks testing
--launch--
2 weeks for stakeholder's revisions

learning time estimates:
me and Lucas:
  1 week while Joe builds frontend on webflow, we learn how to do what we need to for the backend

translate from NoCode to Code time estimate:
frontend: 2 weeks
backend ui: themeforest: 2 weeks
test: 2 weeks

# 31 May 2023
=======
1. I should make an app in Rust that is a CLI tool. You input your todos into a file and then that file gets read back and automatically printed in your open terminals every hour (or set time)

video: good
individual mdbook sites: good
I need to make a website that allows for an admin account to make super basic updates

# 31 May 2023

# 31 May 2023

# 31 May 2023
that one game I played in APES where if everyone voted to win, everyone won, if even one person
voted to screw everyone over, the reward doubled for the one who screwed everyone over but if two or more people voted to screw everyone over, then everyone lost


# 31 May 2023

# 31 May 2023

# 31 May 2023

# 31 May 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023

# 01 June 2023
