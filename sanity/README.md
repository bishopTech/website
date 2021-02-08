# Sanity Website

# TODO

- [ ] Brand Sanity
- [ ] configure preview

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
