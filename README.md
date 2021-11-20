# vue3-electron

This is a template to develop `Electron` apps using `Vue3` + `TailwindCSS` + `DaisyUI`

### Project setup

```
yarn install
```

### Serve the app

```
yarn electron:serve
```

### Build the app for your current platform

```
yarn electron:build
```

### Publish the app on Github

```
yarn electron:publish

# you need to create an environment variable in your zsh or bash file containing your Github personal token with "repo" scope.

export GH_TOKEN=YOUR-GH-TOKEN
```

### Lints and fixes files

```
yarn lint
```

### Semantic Versioning

The template includes the standard-version library so you can take advantage of `conventional commits` and have automatic changelogs created every time you release a new version.

```
yarn release
git push --follow-tags <remote> <branch>
```

### Docs

- [Vue cli](https://cli.vuejs.org/config/)
- [Vue3](https://v3.vuejs.org/guide/introduction.html)
- [TailwindCSS](https://tailwindcss.com/docs)
- [DaisyUI](https://daisyui.com)
- [Electron builder](https://www.electron.build/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
