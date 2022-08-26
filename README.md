# Re2 Stack

![re2stack](https://res.cloudinary.com/practicaldev/image/fetch/s--thaxOivO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/43ld8eax02a0nbwo1rpg.png)

The name comes from both technologies starting with the word Re, Remix and Redis, so these two (2) technologies make up the stack.

When talking about Redis today it is thought that it simply provides a caching mechanism and could hardly be used in other parts that would make up an architecture, however Redis has evolved so much that it can cover many more scenarios, even being the main database without need for no other.

## The Article:

[https://dev.to/andreslopezrm/introducing-re2-stack-50l](https://dev.to/andreslopezrm/introducing-re2-stack-50l)

## Remix

- [Remix Docs](https://remix.run/docs)


## Redis

- Create an account in [Redis Cloud](https://redis.com/try-free/) and get the Redis URL
- Create an .env file with

```
REDIS_URL=
```


## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
