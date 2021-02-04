# Sanity Website

# TODO

## Tinker Branch

- [ ] add code snippet to sanity post
- [ ] configure preview
- [ ] Remove author
- [ ] unsplash plugin?
- [ ] google analytics?
- [ ] seo tools plugin
- [x] configure deploy changes
- [x] alter package json

## Dev Branch

- [ ] Brand Sanity
- [ ] set up series
- [ ] set up links page data

# How to update the GraphQL with changes

```bash
sanity graphql deploy
```

---

# For Tips add this to the bottom of the sanity.json

```json

...

 plugins: {
"@sanity/studio-hints",
}
...

parts:
{
  "implements": "part:@sanity/default-layout/studio-hints-config",
  "path": "./src/studioHintsConfig.js"
}

```
