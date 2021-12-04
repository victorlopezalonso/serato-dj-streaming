# Serato Dj Streaming

[![Serato Dj Streaming](https://img.youtube.com/vi/nw7c7B5-54Q/0.jpg)](https://www.youtube.com/watch?v=nw7c7B5-54Q "Serato Dj Streaming")

If you are a streamer using `Serato DJ` you can use this app to show information about your set in every streaming software like `OBS` or `StreamLabs`.

[Download page](https://github.com/victorlopezalonso/serato-dj-streaming/releases)

The app creates txt files inside one directory of your choice so you can load them into your favorite streaming app as independent text sources.

- `title.txt`: Display the title of the stream.
- `description.txt`: Display a description
- `tags.txt`: Display a list of tags
- `serato-now-playing.txt`: Display the current track playing on Serato DJ (requires Serato live playlists).

## Boring part for developers

This project was made from [vue3-electron](https://github.com/victorlopezalonso/vue3-electron).

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
