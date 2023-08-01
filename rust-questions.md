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
