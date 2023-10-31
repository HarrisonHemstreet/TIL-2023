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

# 01 June 2023

# 02 June 2023

# 03 June 2023

# 04 June 2023

# 15 June 2023
I should make a debugging tool that essentially just returns a clean looking grid of all the vars defined

# 28 June 2023

# 1 July 2023
check DigitalOcean, cancel anything active

# 11 July 2023

# 18 July 2023
how to test rustfmt:
cargo run --bin rustfmt -- ~/test_rustfmt/src/main.rs

Caleb Cartwright on how to work on rustfmt:
i think there's two aspects to this question, so i'm going to try to respond to them separately and more generally/holistically for the benefit of any potential future readers (i've already chatted with Harrison in DM).

the first is more of the general contributing flow:

contributors are strongly encouraged to follow canonical contribution models on github (the fork/extend/pr flow), see https://docs.github.com/en/get-started/quickstart/contributing-to-projects and https://docs.github.com/en/get-started/quickstart/github-flow
and as always it's an encouraged best practice to create your own topic branch off the default branch within your fork because that makes it easier to sync upstream changes & work on different things in parallel
be sure to use a correct toolchain version, and grab the required components for that toolchain. you'll always need a nightly toolchain for working on rustfmt, but it can't just be any arbitrary nightly. there's typically a range of nightlies that will work, but recommendation is to just use what's specified in the toolchain file as that's guaranteed to work https://github.com/rust-lang/rustfmt/blob/master/rust-toolchain
be sure to add tests to accompany any relevant code changes (https://github.com/rust-lang/rustfmt/blob/master/Contributing.md#create-test-cases). the contents of the test case files can typically be grabbed directly from the issue you're working against (and of course ask questions if you aren't sure how/what to test)
be sure to run the tests locally (standard cargo test) before submitting a PR to try to catch things locally vs. eating CI cycles
we encourage and appreciate PRs that have well structured commits, but not something we rigorously enforce. we may ask you to squash up commits or sometimes will squash them on merge to make it easier. one semi-exception to this is to avoid adding merge-commits to your fork-branch when updating it with the latest from rust-lang/rustfmt (grab the latest from the upstream and rebase)
as with most repos across the Project, we use GitHub Actions for CI. it's neither the most thorough nor the speediest, but results should be fairly easily consumable. if you have questions or are just unsure why it's failing (there are rare occasions where there's failures unrelated to the PR diff, e.g. needing a different toolchain version)

the second would be a bit more focused on what i usually refer to as the inner dev loop, which is inherently a bit more subjective

debugging: highly depends on your environment and preferred way of working
println! debug mode is always an option
debug! with RUSTFMT_LOG=debug env var set is another
full blown debugging with breakpoints and stepping through is of course another approach, though given the plethora of info on debugging Rust apps in various editors/IDEs i'll defer to the seach engines for specific instructions
you don't need to install rustfmt from source as part of working on the codebase, and i'd strongly advise against installing rustfmt from source. you can "test" or evaluate your changes via the standard cargo ... commands, and that includes your basic cargo test as well as things like cargo run --bin rustfmt -- path/to/file.rs --check <<other rustfmt flags>>, or use rustfmt's interactive mode cargo run --bin rustfmt then type or copy/paste your snippet into the terminal and flush stdin
there's a bit of a chicken vs. the egg problem with ensuring the current rustfmt codebase is properly formatted according to how rustfmt is currently coded. as such we don't really "run" an older version of rustfmt against itself, but instead rely on what's referred to as the "self test" that handles the complexities of that format-bootstrap process. so if you see that test fail, it just means that the formatting of the code you wrote is off and needs to be corrected, and yes, corrected by hand typically
the Rust Playground (https://play.rust-lang.org/?version=stable&mode=debug&edition=2021) is also a fantastic resource I often use when hacking on rustfmt, or even just triaging issues and bug reports, because it's a quick, easy, and accessible way to check how a snippet is currently formatted across multiple toolchain versions

finally, and preemptively, yes i'm aware such material is helpful to have in contributing.md style docs. we're long overdue for some doc overhauls and though i've some half-baked drafts scattered about, but i'm responding here for now since the question was posed in chat and will get this type of info incorporated as part of the broader doc update efforts

# 19 July 2023
Working on this issue:
https://github.com/rust-lang/rustfmt/issues/5738
Basically, I'm at a cross roads. Do I choose to change the function itself that is returning an Option<String>? Or Should I change every location that this function is being called in?

Rust idea: add a debuging function that will tell you which line was last executed in a function. The purpose of this is to make debugging faster and more clear. It can be hard to immediately know where the function is failing or struggling or whatever

5738 task: I think that IndentStyle::Block is the only option? at least I'm not thinking it's that significant/prob always on

# 21 July 2023
questions:
1. how do you implement the Debug trait as quickly as possible on a type/thing that you did not make, just something you want to look at within the codebase? OR how do I debug types that do not implement debug?
2. I'm thinking at this point that we might be able to get away w/ just skipping a bit of function calls and such by checking for the length of the generics, and if the length is too long, we don't worry about changing anything and just skip the line effectively

notes:
1. live server for jamstack development:
```html
<script type="text/javascript" src="https://livejs.com/live.js"></script>
```
just add the block above to your html page, and you should see it auto reload while developing on it. It's also pure javascript, so that's nice. CSS, HTML, and JavaScript should auto reload on each change

# 26 July 2023

# 29 July 2023

# 30 July 2023
TIL:
1. zero cost abstractions in Rust refers to how Rust is able to understand how if one creates an abstraction over another abstraction (for example, when all you're doing is hiding the interface with private/ public), the wrapper abstraction will not require more resources. The opperation of having a wrapper abstraction will not be more resource intensive than only having one abstraction with no wrapper.

this is what chatgpt says about Rust's zero cost abstractions:
In Rust, "zero-cost abstractions" refers to the language's design philosophy that allows developers to use high-level abstractions without incurring any runtime overhead. It means that using abstract constructs, such as functions, generics, traits, and other language features, should not lead to any additional performance penalties compared to writing lower-level code directly.

The term "abstraction" refers to the practice of hiding implementation details and providing a higher-level interface to interact with a system or data structure. Abstractions make code more readable, maintainable, and reusable. However, in some programming languages, using abstractions can lead to runtime overhead because the compiler may generate additional instructions or data structures to support the abstraction.

Rust, on the other hand, strives to maintain the performance benefits of low-level languages like C and C++ while offering high-level abstractions. This is achieved through a combination of language features, compiler optimizations, and strict control over memory safety.

Some key aspects of Rust's zero-cost abstractions include:

No runtime overhead for generics: Rust supports generic programming through the use of templates, called "generics." The compiler generates specialized code for each concrete type used with generics, avoiding any runtime type-checking or indirection.

Trait-based polymorphism: Traits in Rust provide a way to define shared behavior across different types. Rust's trait system relies on static dispatch (monomorphization) rather than dynamic dispatch (runtime vtables), which means that trait methods are resolved at compile-time, avoiding runtime overhead.

Ownership and borrowing model: Rust's ownership and borrowing system ensures memory safety without requiring garbage collection. This system allows the compiler to perform extensive static analysis and eliminate unnecessary runtime checks.

Minimal runtime support: Rust doesn't have a heavy runtime or virtual machine like some other languages. It can run in resource-constrained environments and can be used for systems programming.

By providing zero-cost abstractions, Rust encourages developers to write expressive and safe code without sacrificing performance. This is a significant advantage of the language, as it allows programmers to create efficient, maintainable, and secure software even in performance-critical domains.

# 31 July 2023
TIL:
Rust: Too many linked lists notes:
* I guess everything is a type in Rust..? https://rust-unofficial.github.io/too-many-lists/first-new.html
-> context: "Self is an alias for "that type I wrote at the top next to impl". Great for not repeating yourself!"

about self, &mut self, &self
---------------------------------
| self      | Value             |
| &mut self | mutable reference |
| &self     | shared reference  |
---------------------------------

self: true ownership. good for doing anything to the value. A func that takes in self represents the func consuming the self value. taking ownership

&mut self: mostly used for when we want to change the value of &mut self. You can do anything to a &mut self as long as you return something to take it's place. Only one type can have a mutable reference and have exclusive access at a time. for errors associated with mutable refrences to self, check this error out. great explanation: rustc --explain E0507

# 1 August 2023
TIL:
too many linked lists - Rust notes:
chapter 2.5:
* the reason why Option can be used in every file without having to import it, is bc it's auto imported to every file along with other stuff... I need to figure out what else is auto-imported...
* interesting "never" return type: https://doc.rust-lang.org/nightly/book/ch19-04-advanced-types.html#the-never-type-that-never-returns
* "match" arms must all return the same type
* from: https://doc.rust-lang.org/nightly/book/ch19-04-advanced-types.html#dynamically-sized-types-and-the-sized-trait
```txt
So what do we do? In this case, you already know the answer: we make the types of s1 and s2 a &str rather than a str. Recall from the “String Slices” section of Chapter 4 that the slice data structure just stores the starting position and the length of the slice. So although a &T is a single value that stores the memory address of where the T is located, a &str is two values: the address of the str and its length. As such, we can know the size of a &str value at compile time: it’s twice the length of a usize. That is, we always know the size of a &str, no matter how long the string it refers to is. In general, this is the way in which dynamically sized types are used in Rust: they have an extra bit of metadata that stores the size of the dynamic information. The golden rule of dynamically sized types is that we must always put values of dynamically sized types behind a pointer of some kind.
```
this is why it doesn't work when you just write this:
```rust
    let s1: str = "Hello there!";
    let s2: str = "How's it going?";
```
bc "str" is a static type and "&str" is a dynamic type

* this whole section is just great: https://doc.rust-lang.org/nightly/book/ch19-04-advanced-types.html#dynamically-sized-types-and-the-sized-trait

# 2 August 2023
TIL:
too many linked lists - Rust notes:
chapter 2.7:

# 3 August 2023
TIL:
too many linked lists - Rust notes:
chapter 3.4:
* every iterator one makes should strive to implement three traits:
1. IntoIter - T
2. IterMut &mut T
3. Iter - &T

* you only need to put lifetime annotations on function and type signatures

# ? August 2023
rustfmt task:
1. I think that we are landing in line 284 in lists.rs
```rust
let inner_item = item.item.as_ref()?;
```
2. I need to figure out where this is happening up the chain
* I think what's happening is that the "items" var in lists.rs "write_list" func has been misread. I think this is the case, bc every item.item === None
* the last character in the not working example is at column 101. the limit in the code base is 100 columns. This might be a big hint...
* I added an .unwrap_or("") (essintially) to the failing "?" in "write_list". This is almost working, except for the fact that we are now missing the last "\<S>\". instead, we are just getting everything alright except for the last angle bracket S is empty.
* I think what's happening is that the last S generic is being missed bc the last column is after 100 columns.
* I'm also seeing that it looks like the S generics are being processed in reverse. I'm seeing a "None" value get processed first and then an S<>. This makes me think that it's being processed in reverse.

# 14 August 2023
1.

# 16 August 2023
rust task:
1. I'm noticing that the issue is popping up even with this example:
```rust
enum Node
where
    P::S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S<S>>>>>>>>>>>>>>>>>>>>>>>>: Clone,
{
    Cons,
}
```
the weird thing that's happening is that the last \<S\> is getting turned into \<\> despite this row not going past 100 columns...

Notes on rustfmt #5738:
* code is failing on lists.rs line 284 (at least this line is most responsible since we are unwraping a ? which is bubbling up to the top at the original .unwrap())
* I think it would be useful to maybe have more visability here: lists.rs line 781
* that being said, at this point, I think that the issue is prob coming from before I even get to this point. Prob closer to the point at which we read the code. I'm thinking that the code is reading the file incorrectly at some point.

# 25 August

# 27 August

# 2 September 2023
* Two popular Rust time libraries: "chrono", "time"
* build a function that allows structs to be built dynamically. Would take in the struct name or the struct itself, and a list of values, and then combine the two to output a struct dynamically

# 4 September 2023
* look into actix_web::web::Json::serialize function. I might be able to get rid of my manual Serde shit in routes/mod.rs
* I need to do a lot more testing. It's basically almost there. The thing I need to investingate is why I can't add the SystemTime to job_listing and blog on creation??? I think it's bc I'm trying to create temporary vals or something... need to investigate further...

# 6 September 2023
* add a "get the current utc time and date" function to sqlx::time somewhere in there

# 18 September 2023

# 19 September 2023

# 20 September 2023
template for CRM:
Facit:
Things I'll need to add that also exist in other templates but not this one:
1. mail
2. leads/ lead management
4. sales pipeline


# 20 September 2023

# 21 September 2023

# 22 September 2023

JWT:
1. authentication: logging into an app w/ username and password
2. after login, make a session id (JWT) with crypto. store this in the database, replacing the last one. this token should be good for lets say 4 hours.
3. send the JWT back to the front end and store in session. Every applicable API req, send the token so that we can check if the user was authenticated is authorized to run the specific route.

what I can do before adding cryptography:
in the SQL table, I can just add a column for the jwt (boolean) and then use that value as the middleware.
I just need to make sure that the jwt session logic is actually running as middleware on every applicable route and that the program is doing two things:
Inputs: 1. user's session token, 2. required security level for route
output: nothing, just moving forward with whatever route is being called

# 23 September 2023

# 24 September 2023
notes for tomorrow on where to go next with auth stuff in exploro/jake:
* I need to clean up JWT logic on both routes. I'm thinking that I could prob even extract the logic into it's own function.
* think about a way to standardize the Claims struct so that it's not so loosy goosy
* improve account creation so that every applicable table has a record inserted
* think about SQL table relationships
* maybe investigate how I can make my routes protected without having to have a different "scope" (not have it start with "s")
* copy all the auth stuff into celeyou's jake project
* think about making my auth stuff into it's own crate

# 25 September 2023
notes for later on where to go next with auth stuff in exploro/jake:
* add api req rate limiting
* add env var and logic for bypassing authentication and authorization
* take on the todos from yesterday

# 26 September 2023

# 27 September 2023
meeting notes:
* we need to come up with our services
* home page needs additions and we need to figure out what we are offering
* add hero videos to the top of every page
* iframe exploro.com inside explorogroup and have essentially an interactive demo

# 28 September 2023

# 29 September 2023

# 30 September 2023

# 01 October 2023

# 02 October 2023

# 03 October 2023

# 04 October 2023
tags tables to make:
* hotel category
* hotel tags (misc) (currently "Facitilies" can be viewed on add new hotel)
* room category
* room inclusions
* room amenities
* room guest services

on room (Hotel Details, "Facitily" tab)
* (room) basic facility
* payment modes accepted
* security
* food & drink
* activities

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 05 October 2023

# 06 October 2023

# 06 October 2023

# 06 October 2023

# 06 October 2023

# 06 October 2023

# 06 October 2023

# 06 October 2023

# 06 October 2023

# 07 October 2023

# 07 October 2023

# 07 October 2023

# 07 October 2023

# 07 October 2023

# 07 October 2023

# 07 October 2023

# 07 October 2023

# 07 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 08 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 09 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 10 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 11 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 12 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 13 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 14 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 15 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 23 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 24 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 25 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 26 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 27 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 28 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 29 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 30 October 2023

# 31 October 2023

# 31 October 2023
