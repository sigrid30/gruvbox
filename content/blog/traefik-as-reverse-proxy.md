---
title: Using Traefik as a reverse proxy
date: "2022-06-25T12:05:20+04:00"
cover:
  src: https://doc.traefik.io/traefik/assets/img/traefik-architecture.png
tags:
  - reverse-proxy
  - traefik
draft: false
---

A reverse proxy is a server that acts as an intermediary between a client and
one or more servers. It can help with load balancing, SSL termination, caching,
and many other tasks. One of the most popular tools for setting up a reverse
proxy is Traefik. It has a rich set of features, is fast to configure, and is
highly flexible for custom functionality and integration. This post will follow
the steps to set up a reverse proxy using Traefik.

## Install Traefik

You can run traefik in a Docker container by running the following command:

```bash
docker run -d -p 8080:8080 -p 80:80 -p 443:443 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $PWD/traefik.yml:/traefik.yml \
  traefik:v2.6
```

You will need to create `traefik.yml` configuration file first, mentioned in the
next step.

Alternatively, you can run a Traefik
[binary](https://github.com/traefik/traefik/releases).

## Configure Traefik

Now that Traefik is installed, we need to configure it. Create a file named
`traefik.yml` in your current directory. The base configuration is following:

```yaml
log:
  level: DEBUG

api:
  dashboard: true
  insecure: true

entryPoints:
  web:
    address: ":80"

providers:
  file:
    filename: "traefik.yml"
```

Traefik has a convenient dashboard UI that we can enable by setting
`api.dashboard` to `true`. By default, it will use `https`, which we can disable
for now by making enabling `api.insecure` parameter. Next, we specify an entry
point for Traefik named `web` listening on port 80. Finally, we must define the
file provider, which is itself. Otherwise, Traefik will not start running. The
port for a dashboard is `8080`. You can overwrite it, by specifying an entry
point with the name `traefik` like below:

```yaml
entryPoints:
  web:
    address: ":80"
  traefik:
    address: ":2111"
```

## HTTP/HTTPS Redirection

You can redirect http using traefik's load balancer feature. Let's add a load
balancer to our web endpoint:

```yaml
entryPoints:
  web:
    address: ":80"

http:
  routers:
    router-1:
      rule: "PathPrefix(`/`)"
      entryPoints:
        - "web"
      service: "service-1"

  services:
    service-1:
      loadBalancer:
        passHostHeader: true
        servers:
          - url: "https://localhost:5000"
```

Here we create a router named `router-1` that matches any request at the
endpoint `web`, and a service named `service-1` that forwards traffic to a
`https://localhost:5000`. The `passHostHeader` option is set to true to preserve
the original host header from the client request.

You can redirect https the same configuration by specifying TLS certificate.
Let's add a new entry point `webTls` and add tls parameter.

```yaml
entryPoints:
  webTls:
    address: ":1111"

tls:
  certificates:
    - certFile: certs/public.crt
      keyFile: certs/private.key

http:
  routers:
    router-2:
      rule: "PathPrefix(`/`)"
      entryPoints:
        - "webTls"
      service: "service-2"

  services:
    service-2:
      loadBalancer:
        passHostHeader: true
        servers:
          - url: "http://localhost:8000"
        tls:
          certResolver: default
```

`tls.certificates` asks Traefik to import certificates as a default one. Then,
we specify in `tls.certResolver` the default certificate. Traefik can generate a
self-signed certificate itself if we omit configuration inside
`loadBalancer.tls` parameter:

```yaml
services:
  service-2:
    loadBalancer:
      passHostHeader: true
      servers:
        - url: "http://localhost:8000"
      tls: {}
```
