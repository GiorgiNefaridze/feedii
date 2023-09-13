💻 **FEEDII** is a **cross-platform full-stack** mobile application, which gives users opportunities to share and see each-other's daily activities.

<div style="display: flex;align-items:center; justify-content: center">
    <img src="../assets/logo.png" style="width: 500px;height:200px; text-align: center" />
</div>

> In order to use application,you ought to set all the requirment up.

### 🛠️ Set-up project

> **Warning**
> I use cloudinary and Postgre SQL server services, which have time limits
> so, unexpected errors may be caused by a shortage of this free resources.

#### 📱 Start front-end

If you don't have [Expo](https://expo.dev/), [NodeJS](https://nodejs.org/en) and [Git](https://git-scm.com) already, install from here.Then `clone` the repository and run it in your local machine using

```shell
git clone https://github.com/GiorgiNefaridze/feedii/tree/main
```

Now install all the dependencies 📦

```shell
npm install
```

Then start the expo app with `npm start` ,scan QR code from your mobile and enjoy.🎊

#### 🏭 Start back-end

Change directory and start the back-end `cd server && npm start`. Then follow `.env.example` file,add your own variables and set up postgre sql connection

### 🎯 Project Goals

- [x] Create user
- [x] Login user
- [x] Recover user's password (with secret)
- [x] Upload post
- [x] Like a post
- [x] Write a comment
- [x] Save/Bookmark a post
- [x] Change user's information
- [x] See all the saved posts
- [ ] Delete account
- [ ] Change color theme
- [ ] Switch a language
- [ ] Fix performance issues

### 🖼️ Snapshots

<img src="../assets/thumbnail.png" style="width: 600px" />
