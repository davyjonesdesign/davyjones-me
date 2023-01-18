# DavyJones.me Portfolio Project

### Live Site
https://davyjones.me

### Design System
https://davyjones.me/design-system

### Build Process
1. Create new branch name build-x.x.x (x = version)
2. Open Vue UI and Serve to make sure App is still running properly
3. Go to Build and 'Run Task'
4. Delete 'src' and 'public' folders
5. Delete 'babel.config.js', 'package-lock.json', and package.json files
6. Move all files in 'dist' folder outside to top folder
7. Delete 'dist' folder when it has been emptied
8. Add the following code below the title in index.html
```
<!-- place under title  -->
    <script>
        (function (l) {
            if (l.search[1] === "/") {
            var decoded = l.search
                .slice(1)
                .split("&")
                .map(function (s) {
                return s.replace(/~and~/g, "&");
                })
                .join("?");
            window.history.replaceState(
                null,
                null,
                l.pathname.slice(0, -1) + decoded + l.hash
            );
            }
        })(window.location);
    </script>
```