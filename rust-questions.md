1. why do impl blocks require you to define the types at both the "impl" and the struct name? example:
```rust
impl<T> Option<T> {
    pub fn unwrap(self) -> T {
        match self {
            Some(val) => val,
            None => panic!("called `Option::unwrap()` on a `None` value"),
        }
    }
}
```
why can't these blocks just define the <T> type after "impl" or after "Option"? Why not just one place instead of two..? seems like a bad idea

2. from the rust book: https://doc.rust-lang.org/nightly/book/ch19-04-advanced-types.html#the-never-type-that-never-returns
```txt
The formal way of describing this behavior is that expressions of type ! can be coerced into any other type. We’re allowed to end this match arm with continue because continue doesn’t return a value; instead, it moves control back to the top of the loop, so in the Err case, we never assign a value to guess.
```
this doesn't seem correct to me though! I would think there is a check going on somewhere that says "give me all the types defined in the match statement we are reading right now... if we have a 'never' type (!), then ignore the panic we would have set off if there were different types on match arms". I honestly think the code prob reads something like that. I DO NOT think that the never type gets coerced

3. are DSTs (dynamically sized types) JIT (just in time) compiled? Do DSTs use JIT compilation? If not, then what determines if something is doing JIT or not?
4. is the reason why macros have a "!" at the end is bc they result in a "never" type? If they do, it would make sense why I can use a println! statement in a match arm... I wonder if they made it a macro specifically to do this..?
