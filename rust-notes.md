# 17 June 2022
#### Self vs self:
*https://stackoverflow.com/questions/32304595/whats-the-difference-between-self-and-self*
* self is a way of referencing methods or other items within a module.
* Self (capital 'S') is a reference to traits. so for example, this is how one
would use both:

```rust
mod test {
    pub fn foo_bar() {}
    pub fn test_self() {
        self.foo_bar();
    }
}
```

```rust
mod test {
    pub fn foo_bar() -> Self {}
}
```
