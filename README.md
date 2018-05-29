# ghost-vue
Frontend for [Ghost](https://ghost.org/) built with [Vue.js](https://vuejs.org/) and [Bulma](https://bulma.io/).

## Configuration
All configuration can be overridden in /src/config/local.js instead of the individual config files.

You should set the host to your ghost's installation as well as the clientSecret for the ghost_frontend client. Refer to the ghost api documentation on how to retrieve that.

### Example
```javascript
export default {
  ghost: {
    host: 'https://ghostblog.com',
    sdkPath: '/public/ghost-sdk.min.js',
    clientSecret: 'abcdef123456'
  }
}
```

## Running/Building
vue-ghost is built with vue-cli and uses all the default yarn/npm run scripts:

dev: yarn serve

prod: yarn build

## Production
You can run vue-ghost on the same server as your ghost installation and use nginx to proxy the api to use the same domain.

Example config with ghost running on port 2368:

/src/config/local.js:
```javascript
export default {
  ghost: {
    host: '',
    sdkPath: '/ghost-sdk',
    clientSecret: 'abcdef123456'
  }
}
```

Nginx server config:
```nginx
server {

    server_name blogserver.com;

    location / {
        root /var/www/ghost-vue/dist;
        try_files $uri $uri/ /index.html;
    }

    location /content {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:2368/content;
    }
    location /admin {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:2368/ghost;
    }
    location /ghost {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:2368/ghost;
    }
    location /ghost-sdk {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:2368/public/ghost-sdk.min.js;
    }
    
    listen 80;
}
```

This example nginx config will load the ghost-vue build when accessing the root domain. Accessing /admin or /ghost on the domain will load the ghost admin app.
